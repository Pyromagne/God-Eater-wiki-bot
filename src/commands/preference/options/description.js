const Preference = require('../../../schemas/preference');

const description = async (interaction, client) => {
    const user = interaction.user;
    const choice = interaction.options.get('show').value.toLowerCase();
    console.log(choice);
    let userPrefence = await Preference.findOne({ _userId: user.id });

    if (!userPrefence) {
        userPrefence = new Preference({
            _userId: user.id,
            showAragamiDescription: choice === 'yes' ? true : false,
        });

        await userPrefence.save();
    } else {
        userPrefence._userId = user.id;
        userPrefence.showAragamiDescription = choice === 'yes' ? true : false;
        await userPrefence.save();
    }

    await interaction.reply({
        content: `Your preference has been set successfully!`,
        ephemeral: true
    });
}

module.exports = description;