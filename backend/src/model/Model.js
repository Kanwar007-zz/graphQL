const moogoose = require('mongoose')

const movieDisplay = new moogoose.Schema({
    name:String,
    type:String,
    year:String
})

module.exports = new moogoose.model('Movie',movieDisplay);