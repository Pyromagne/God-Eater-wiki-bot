module.exports = {
    data: {
        name: 'testModal'
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `Your favorite color is: ${interaction.fields.getTextInputValue("favColorInput")}`
        });
    }
}