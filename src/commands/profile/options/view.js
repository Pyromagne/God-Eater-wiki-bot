const Profile = require('../../../schemas/profile');
const reply = require('../../../embeds/profile-reply');

const view = async (interaction, client) => {
    const user = interaction.options.getUser('user');

    let profile = await Profile.findOne({ _userId: user.id });

    if (!profile) {
        return await interaction.reply({
            content: `No profile found`,
            ephemeral: true
        })
    }

    const embed = reply(interaction, client, profile, user);
    await interaction.reply({
        embeds: [embed]
    })
}

module.exports = view;