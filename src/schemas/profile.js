const { Schema, model } = require('mongoose');
const profileSchema = new Schema({
    _tag: String,
    _userId: String,
    name: String,
    codename: String,
    melee: String,
    gun: String,
    shield: String,
})

module.exports =  new model('profile', profileSchema, 'profiles');