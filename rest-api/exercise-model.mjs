// import the mongoose object
import { query } from 'express';
import mongoose from 'mongoose';

// connect to the users_db on local port 27017
mongoose.connect(
    'mongodb://localhost:27017/exercise_db',
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
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
    unit: { type: String, required: false },
    date: { type: String, required: false }
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
    const exercise = new Exercise({ name: name, reps: reps, weight: weight, unit: unit, date: date });
    // Call save to persist this object as a document in MongoDB
    return exercise.save();
}

/**
 * Retrieves exercises based on the filter, projection and limit parameters
 * @param {Object} filter 
 * @param {String} projection 
 * @param {Number} limit 
 * @returns 
 */
const findExercise = async (filter, projection, limit) => {
    const query = Exercise.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

/**
 * Find the exercise with the _id
 * @param {String} _id 
 * @returns 
 */
 const findExerciseById = async (_id) => {
    const query = Exercise.findById(_id);
    return query.exec();
}

/**
 * Replace properties of table with the id value provided
 * @param {String} _id 
 * @param {String} name 
 * @param {Number} reps 
 * @param {Number} weight
 * @param {String} unit
 * @param {String} date 
 * @returns promise that resolves into number of modified objects/documents
 */
const replaceExercise = async (_id, name, reps, weight, unit, date) => {
    const result = await Exercise.replaceOne({ _id: _id },
        { name: name, reps: reps, weight: weight, unit: unit, date: date });
    return result.nModified;
}

/**
 * Delete with provided id value
 * @param {String} _id 
 * @returns A promise that resolves to deleted docs count
 */
 const deleteById = async (_id) => {
    const result = await Exercise.deleteOne({ _id: _id });
    return result.deletedCount;
 }
 
export { createExercise, findExercise, findExerciseById, replaceExercise, deleteById };