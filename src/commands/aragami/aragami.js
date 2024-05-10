const { SlashCommandBuilder } = require('discord.js');
const aragami = require('../../data/aragami');
const reply = require('../../embeds/aragami-reply');

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
        const focusedValue = interaction.options.getFocused();
        const choices = aragami.map(aragami => aragami.name);
        //TODO: Improve filter
        const filtered = choices.filter(choice => choice.startsWith(focusedValue));
        await interaction.respond(
            filtered.map(choice => ({ name: choice, value: choice })),
        );
    },

    async execute(interaction, client) {
        console.log(interaction.options.get('aragami').value);
        let embed = null;
        
        aragami.map((aragami, index) => {
            if (interaction.options.get('aragami').value === aragami.value) {
                embed = reply(interaction, aragami);
            }
        })

        await interaction.reply({
            embeds: [embed]
        })

    }
}