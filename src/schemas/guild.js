const { Schema, model } = require('mongoose');
const guildSchema = new Schema({
    guildId: String,
    guildName: String,
    guildIcon: { type: String, required: false }
})

module.exports =  new model('guild', guildSchema, 'guilds');