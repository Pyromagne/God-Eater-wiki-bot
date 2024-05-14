const aragami = require('../../data/aragami');
const { reply, desc } = require('../../embeds/aragami-reply');
const Preference = require('../../schemas/preference');

const { SlashCommandBuilder } = require('discord.js');
const chalk = require('chalk');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('aragami')
        .setDescription(`get detailed information about a specific Aragami`)
        .addStringOption((option) =>
            option
                .setName('aragami')
                .setDescription('select the Aragami you want to learn about')
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
        const user = interaction.user;
        const requestedAragami = interaction.options.getString('aragami');
        const foundAragami = aragami.find(aragami => aragami.value === requestedAragami);
        let showDescription;
        let userPrefence = await Preference.findOne({ _userId: user.id });

        if (userPrefence) {
            if (userPrefence.showAragamiDescription === true) {
                showDescription = true;
            }
        } else showDescription = false;

        if (foundAragami) {
            const embed = reply(client, foundAragami);
            let embedDesc;

            if (showDescription) {
                embedDesc = desc(client, foundAragami);
                await interaction.reply({ embeds: [embed, embedDesc] });
            }
            else await interaction.reply({ embeds: [embed] });
        } else {
            console.error(chalk.red('[ERROR]: Aragami not found'));
            await interaction.reply({ content: "Sorry, I couldn't find the Aragami you were looking for.", ephemeral: true });
        }
    }
}