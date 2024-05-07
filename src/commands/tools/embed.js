const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Return an embed'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle('This is embed!')
        .setDescription(`This is embed's description!`)
        .setColor(0x9c1000)
        .setImage(client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp(Date.now())
        .setAuthor({
            iconURL: interaction.user.displayAvatarURL(),
            name: interaction.user.tag
        })
        .addFields([
            {
                name: 'field 1',
                value: 'field 1 value',
                inline: true
            },
            {
                name: 'field  2',
                value: 'field 2 value',
                inline: true
            },
            {
                name: 'field  3',
                value: 'field 3 value (not inline)',
                inline: false
            },
            {
                name: 'field  4',
                value: 'field 4 value (not inline)',
                inline: false
            }

        ])
        .setFooter({
            iconURL: client.user.displayAvatarURL(),
            text: client.user.tag
        });

        await interaction.reply({
            embeds: [embed]
        })
        
    }
}