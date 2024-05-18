const Profile = require('../../../schemas/profile');
const reply = require('../../../embeds/profile-reply');

const edit = async (interaction, client) => {
    const user = interaction.user;

    let profile = await Profile.findOne({ _userId: user.id });

    if (!profile) {

        await interaction.reply({
            content: 'You do not have a God Eater profile yet',
            ephemeral: true
        });

    } else {
        if (interaction.options.get('name') !== null) {
            profile.name = interaction.options.get('name').value;
        }
        if (interaction.options.get('codename') !== null) {
            profile.codename = interaction.options.get('codename').value;
        }
        if (interaction.options.get('melee') !== null) {
            profile.melee = interaction.options.get('melee').value;
        }
        if (interaction.options.get('gun') !== null) {
            profile.gun = interaction.options.get('gun').value;
        }
        if (interaction.options.get('shield') !== null) {
            profile.shield = interaction.options.get('shield').value;
        }
        if (interaction.options.get('bio') !== null) {
            profile.bio = interaction.options.get('bio').value;
        }
        if (interaction.options.get('avatar') !== null) {
            profile.imageURL = interaction.options.get('avatar').value;
        }

        await profile.save();
        const embed = reply(interaction, client, profile, user);
        await interaction.reply({
            content: `Changes saved successfully!`,
            ephemeral: true,
            embeds: [embed]
        });
    }
}

module.exports = edit;