const { EmbedBuilder } = require('discord.js');

const reply = ( interaction, client, profile, user ) => {

    return embed = new EmbedBuilder()
    .setTitle(interaction.user.tag)
    .setThumbnail(user.displayAvatarURL())
    .setColor(0x9c1000)
    .setTimestamp(Date.now())
    .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag
    })
    .addFields([
        {
            name: 'Codename',
            value: `${profile.codename}`,
            inline: false
        },
        {
            name: 'Name',
            value: `${profile.name}`,
            inline: false
        },
        {
            name: 'Melee',
            value: `${profile.melee}`,
            inline: true
        },
        {
            name: 'Gun',
            value: `${profile.gun}`,
            inline: true
        },
        {
            name: 'Shield',
            value: `${profile.shield}`,
            inline: true
        }
    ]);
}

module.exports = reply;