const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Return my ping'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        })

        const embed = new EmbedBuilder()
        .setTitle('Your current ping')
        .setDescription(`**API Latency:** \`${client.ws.ping}\`\n**Client Ping:** \`${message.createdTimestamp - interaction.createdTimestamp}\``)
        .setColor(0xdec109)
        .setTimestamp(Date.now())
        .setFooter({
            iconURL: interaction.user.displayAvatarURL(),
            text: interaction.user.tag
        })

        await interaction.editReply({
            embeds: [embed]
        })
    }
}