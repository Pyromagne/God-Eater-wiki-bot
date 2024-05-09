const Guild = require('../../schemas/guild');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('database')
        .setDescription('Return information from database'),
    async execute(interaction, client) {
        let guildProfile = await Guild.findOne({ guildId: interaction.guild.id });
        if (!guildProfile) {
            guildProfile = await new Guild({
                guildId: interaction.guild.id,
                guildName: interaction.guild.name,
                guildIcon: interaction.guild.iconURL() ? interaction.guild.iconURL() : 'none'
            });

            await guildProfile.save().catch(console.error);
            await interaction.reply({
                content: `Server Name: ${guildProfile.guildName}`
            });
        }
        else {
            await interaction.reply({
                content: `Server Name: ${guildProfile.guildName}\nServer Id: ${guildProfile.guildId}\n${guildProfile.guildIcon}`
            });
        }
    }
}