module.exports = {
    data: {
        name: 'testMenu'
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `You select: ${interaction.values[0]}`
        })
    }
}