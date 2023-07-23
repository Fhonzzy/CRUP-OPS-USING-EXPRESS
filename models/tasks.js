const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        trim: true,
        maxlength: [40, 'name cannot be more than 40 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

const dbModel = mongoose.model('Task', taskSchema)

module.exports = dbModel