// import the mongoose object
import { query } from 'express';
import mongoose from 'mongoose';

// connect to the users_db on local port 27017
mongoose.connect(
    'mongodb://localhost:27017/exercise_db',
    { useNewUrlParser: true }
);

// store database connection object
const db = mongoose.connection;

// open event called upon success
db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

// create index for faster queries
mongoose.set('useCreateIndex', true);

/**
 * Define DB Schema
 */
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }
});

/**
 * Turn the above schema definition onto a model.
 */
const Exercise = mongoose.model("Exercise", exerciseSchema);

/**
 * Creates a user
 * @param {String} name 
 * @param {Number} reps 
 * @param {Number} weight
 * @param {String} unit
 * @param {String} date 
 * @returns promise that resolves to JSON object by calling save
 */
const createExercise = async (name, reps, weight, unit, date) => {
    // Call the constructor to create an instance of the User model
    const user = new User({ name: name, reps: reps, weight: weight, unit: unit, date: date });
    // Call save to persist this object as a document in MongoDB
    return user.save();
}

/**
 * Retrieves users based on the filter, projection and limit parameters
 * @param {Object} filter 
 * @param {String} projection 
 * @param {Number} limit 
 * @returns 
 */
const findExercise = async (filter, projection, limit) => {
    const query = User.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

/**
 * Replace properties of the user table with the id value provided
 * @param {String} _id 
 * @param {String} name 
 * @param {Number} reps 
 * @param {Number} weight
 * @param {String} unit
 * @param {String} date 
 * @returns promise that resolves into number of modified objects/documents
 */
const replaceExercise = async (_id, name, reps, weight, unit, date) => {
    const result = await User.replaceOne({ _id: _id },
        { name: name, reps: reps, weight: weight, unit: unit, date: date });
    return result.nModified;
}


/**
 * Delete the user with provided query
 * @param {String} query 
 * @returns promise that resolves as count of deleted docs
 */
const deleteByQuery = async (query) => {
    console.log(query);
    const result = await User.deleteMany(query);
    // 1 if deleted
    return result.deletedCount;
}

export { createExercise, findExercise, replaceExercise, deleteByQuery };