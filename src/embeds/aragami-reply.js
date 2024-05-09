const { EmbedBuilder } = require('discord.js');

const reply = (interaction, aragami) => {
    const embed = new EmbedBuilder()
        .setTitle(`Aragami: ${aragami.name} (${aragami.type})`)
        .setColor(0x9c1000)
        .setTimestamp(Date.now())
        .setThumbnail('https://static.wikia.nocookie.net/godeater/images/9/96/Vajra-banner.jpg')
        .setDescription(`${aragami.description}`)
        .setFooter({
            iconURL: interaction.user.displayAvatarURL(),
            text: interaction.user.tag
        })
        .setImage(`${aragami.imageURL}`)
        .addFields([
            {
                name: 'Attribute',
                value: `${aragami.attribute.join('\n')}`,
                inline: true
            },
            {
                name: 'Weakness',
                value: `${aragami.weakness.join('\n')}`,
                inline: true
            },
            {
                name: 'Resistance',
                value: `${aragami.resistance.join('\n')}`,
                inline: true
            },
            {
                name: 'Weak Point',
                value: `${aragami.weakPoint.join('\n')}`,
                inline: true
            },
            {
                name: 'Breakable Bonds',
                value: `${aragami.breakBond.join('\n')}`,
                inline: true
            }
        ]);
    
    return embed;
}

module.exports = reply;