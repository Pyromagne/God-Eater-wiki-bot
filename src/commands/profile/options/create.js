const Profile = require('../../../schemas/profile');
const reply = require('../../../embeds/profile-reply');

const create = async (interaction, client) => {
    const user = interaction.user;

    let profile = await Profile.findOne({ _userId: user.id });

    if (!profile) {
        profile = new Profile({
            _tag: user.tag,
            _userId: user.id,
            name: interaction.options.get('name').value,
            codename: interaction.options.get('codename').value,
            bio: interaction.options.get('bio') === null ? null : interaction.options.get('bio').value,
            melee: interaction.options.get('melee').value,
            gun: interaction.options.get('gun').value,
            shield: interaction.options.get('shield').value,
            imageURL: interaction.options.get('avatar') === null ? null : interaction.options.get('avatar').value,
        });

        await profile.save();
    } else {
        //TODO: REMOVE EDIT AND MAKE ANOTHER COMMAND FOR EDITING PROFILE
        //DONE

        profile.name = interaction.options.get('name').value;
        profile.codename = interaction.options.get('codename').value;
        profile.melee = interaction.options.get('melee').value;
        profile.gun = interaction.options.get('gun').value;
        profile.shield = interaction.options.get('shield').value;

        if (interaction.options.get('bio') !== null) {
            profile.bio = interaction.options.get('bio').value;
        }

        if (interaction.options.get('avatar') !== null) {
            profile.imageURL = interaction.options.get('avatar').value;
        }

        await profile.save();
    }

    const embed = reply(interaction, client, profile, user);
    await interaction.reply({ embeds: [embed] });
}

module.exports = create;