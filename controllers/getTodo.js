// Import the model
const Todo = require('../models/Todo');

// Define route handler for fetching all todos
exports.getTodo = async (req, res) => { 
    try {
        // Fetch all todo items from database
        const todos = await Todo.find({});

        // Respond with the fetched data
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Todo Data is fetched",
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false, 
            error: err.message,
            message: "Server Error",
        });
    }
}

// Define route handler for fetching a todo by id
exports.getTodoById = async (req, res) => { 
    try {
        // Extract todo item based on id
        const id = req.params.id;
        const todo = await Todo.findById(id);

        // Data for given id not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No Data Found for given id",
            });
        }

        // Data found for given id
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched`,
        });

    } catch (err) {
        console.error(err.stack);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server Error",
        });
    }
}
