const mongoose = require('mongoose')

const clipSchema = new mongoose.Schema({
    startTime: {
        type: String,
        required: false
    },
    endTime: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    datePublished: {
        type: Date,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    guests: {
        type: Array,
        required: false
    },
    hosts: {
        type: Array,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
})

clipSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Clip', clipSchema)