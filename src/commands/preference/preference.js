const description = require('./options/description');
const { SlashCommandBuilder } = require('discord.js');
const chalk = require('chalk');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('preference')
        .setDescription(`setup your preferences in bot`)
        .addSubcommand((subcommand) =>
            subcommand
                .setName('description')
                .setDescription(`whether or not show the aragami description`)
                .addStringOption((option) =>
                    option
                        .setName('show')
                        .setDescription('yes or no')
                        .setRequired(true)
                        .setChoices(
                            { name: 'Yes', value: 'yes' },
                            { name: 'No', value: 'no' }
                        )
                )
        ),

    async execute(interaction, client) {
        if (interaction.options.getSubcommand() === 'description') {
            description(interaction, client);
        }
    }
}