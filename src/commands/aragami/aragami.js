const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const aragamiSmall = require('../../data/aragamiSmall');

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
            /* .setChoices(aragamiSmall.map(aragami => ({
                name: aragami.name,
                value: aragami.value
            }))) */
        ),
    async autocomplete(interaction) {
        const focusedValue = interaction.options.getFocused();
        const choices = aragamiSmall.map(aragami => aragami.name);
        const filtered = choices.filter(choice => choice.startsWith(focusedValue));
        await interaction.respond(
            filtered.map(choice => ({ name: choice, value: choice })),
        );
    },

    async execute(interaction, client) {
        console.log(interaction.options.get('aragami').value);
        let embed = null;

        aragamiSmall.map((aragami, index) => {
            if (interaction.options.get('aragami').value === aragami.value) {
                embed = replyEmbed(interaction, aragami);
            }
        })

        await interaction.reply({
            embeds: [embed]
        })

    }
}

const replyEmbed = (interaction, aragami) => {
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