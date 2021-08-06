import * as users from './users_model.mjs';
import express from 'express';
const app = express();

const PORT = 3000;


/**
 * Middleware to log retrieve requests while the server is running
 */
let reqCount = 0;
let noParams = 0
let withParams = 0;
const logRequests = (req, res, next) => {
    reqCount++;
    if (Object.values(req.query).length === 1)
        withParams++;
    else
        noParams++;
    if (reqCount%10 === 0) {
        console.log(`Total retrieve requests: ${reqCount}`);
        console.log(`Retrieve requests with 0 query parameters: ${noParams}`);
        console.log(`Retrieve requests with 1 query parameter: ${withParams}`);
    }
    next();
}


/**
 * Create a new user with the title, year and language provided in the query parameters
 */
app.get("/create", (req, res) => {
    users.createUser(req.query.name, req.query.age, req.query.email, req.query.phoneNumber)
        .then(user => {
            res.send(user);
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
});

/**
 * Retrieve users. 
 * If the query parameters include an age, then only the users for that year are returned.
 * Otherwise, all users are returned.
 */
app.get("/retrieve", logRequests, (req, res) => {
    const filter = req.query === undefined
        ? {}
        : req.query;
    users.findUsers(filter, '', 0)
        .then(users => {
            console.log(users)
            res.send(users);
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });

});

/**
 * Update the user at the _id provided and set their name, age, email, and phoneNumber to
 * the values provided in the query parameters
 */
app.get("/update", (req, res) => {
    if (!req.query._id || Object.values(req.query).length === 1) {
        res.send({ error: 'Request failed' });
    } else {
        users.replaceUser(req.query._id, req.query.name, req.query.age, req.query.email, req.query.phoneNumber)
        .then(updateCount => {
            res.send({ updateCount: updateCount });
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
    }
});

/**
 * Delete the user by provided query parameters
 */
app.get("/delete", (req, res) => {
    users.deleteByQuery(req.query)
        .then(deletedCount => {
            res.send({ deletedCount: deletedCount });
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});