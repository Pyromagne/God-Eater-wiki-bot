const aragami = require('../../data/aragami');
const reply = require('../../embeds/aragami-reply');

const { SlashCommandBuilder } = require('discord.js');
const chalk = require('chalk');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('aragami')
        .setDescription(`Return requested aragami's information`)

        .addStringOption((option) =>
            option
                .setName('aragami')
                .setDescription('Choose what aragami you want to know')
                .setAutocomplete(true)
                .setRequired(true)
        ),
    async autocomplete(interaction) {
        const focusedValue = interaction.options.getFocused().toLowerCase();
        const choices = aragami.map(aragami => aragami.name);
        const filtered = choices.filter(choice => choice.toLowerCase().includes(focusedValue));

        const options = filtered.slice(0, 25);

        await interaction.respond(
            options.map(choice => ({ name: choice, value: choice }))
        );
    },

    async execute(interaction, client) {
        const requestedAragami = interaction.options.getString('aragami');
        const foundAragami = aragami.find(aragami => aragami.value === requestedAragami);

        if (foundAragami) {
            const embed = reply(client, foundAragami);
            await interaction.reply({ embeds: [embed] });
        } else {
            console.error(chalk.red('[ERROR]: Aragami not found'));
            await interaction.reply({ content: "Aragami not found.", ephemeral: true });
        }
    }
}