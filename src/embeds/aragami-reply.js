const { EmbedBuilder } = require('discord.js');

const reply = (client, aragami) => {
    const embed = new EmbedBuilder()
        .setTitle(`Aragami: ${aragami.name} (${aragami.type})`)
        .setColor(0x9c1000)
        .setTimestamp(Date.now())
        .setFooter({
            iconURL: client.user.displayAvatarURL(),
            text: client.user.tag
        })
        .setImage(`${aragami.imageURL + '/revision/latest/scale-to-width-down/350'}`)
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

const desc = (client, aragami) => {
    const embed = new EmbedBuilder()
        .setTitle(`Aragami: ${aragami.name} (${aragami.type})`)
        .setColor(0x9c1000)
        .setTimestamp(Date.now())
        .setDescription(`${aragami.description}`)
        .setFooter({
            iconURL: client.user.displayAvatarURL(),
            text: client.user.tag
        })
    
    return embed;
}

module.exports = { reply, desc };