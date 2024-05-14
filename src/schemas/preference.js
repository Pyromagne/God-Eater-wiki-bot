const { Schema, model } = require('mongoose');
const preferenceSchema = new Schema({
    _userId: String,
    showAragamiDescription: Boolean
})

module.exports =  new model('preference', preferenceSchema, 'preferences');