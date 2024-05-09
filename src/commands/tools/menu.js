const { SlashCommandBuilder, StringSelectMenuBuilder, ActionRowBuilder, StringSelectMenuOptionBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Return my select menu'),
    async execute(interaction, client) {
        const menu = new StringSelectMenuBuilder()
            .setCustomId('testMenu')
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(new StringSelectMenuOptionBuilder({
                label: 'Option 1',
                value: 'Test menu option 1'
            }), new StringSelectMenuOptionBuilder({
                label: 'Option 2',
                value: 'Test menu option 2'
            }));

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(menu)]
        });

    },
};