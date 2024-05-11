const { EmbedBuilder } = require('discord.js');

const reply = ( interaction, client, profile, user ) => {

    if (profile.bio === null) profile.bio = '\u200B';

    return embed = new EmbedBuilder()
    .setTitle(interaction.user.tag)
    .setThumbnail(user.displayAvatarURL())
    .setColor(0x9c1000)
    .setTimestamp(Date.now())
    .setDescription(`${profile.bio}`)
    .setImage(profile.imageURL ? profile.imageURL : null) 
    .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag
    })
    .addFields([
        {
            name: 'Codename',
            value: `\`${profile.codename}\``,
            inline: true
        },
        {
            name: 'Name',
            value: `\`${profile.name}\``,
            inline: true
        },
        {
            name: '\u200B',
            value: '\u200B',
            inline: false 
        },
        {
            name: 'Melee',
            value: `\`${profile.melee}\``,
            inline: true
        },
        {
            name: 'Gun',
            value: `\`${profile.gun}\``,
            inline: true
        },
        {
            name: 'Shield',
            value: `\`${profile.shield}\``,
            inline: true
        }
    ]);
}

module.exports = reply;