const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Profile = require('../../schemas/profile');
const reply = require('../../embeds/profile-reply');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('profile')
        .setDescription(`Return profile of a user`)
        .addSubcommand((subcommand) =>
            subcommand
                .setName('view')
                .setDescription(`View member's God Eater profile`)
                .addUserOption((option) =>
                    option
                        .setName('user')
                        .setDescription('mention a member')
                        .setRequired(true)
                    // TODO: make this optional and make default value is self
                ),
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('create')
                .setDescription(`Create your own god Eater's profile`)
                .addStringOption((option) =>
                    option
                        .setName('name')
                        .setDescription('what is your god Eater name')
                        .setRequired(true)
                )
                .addStringOption((option) =>
                    option
                        .setName('codename')
                        .setDescription('what is your god Eater code name')
                        .setRequired(true)
                )
                .addStringOption((option) =>
                    option
                        .setName('melee')
                        .setDescription('choose what melee type is your favorite')
                        .setChoices(
                            { name: 'Short Blade', value: 'Short Blade' },
                            { name: 'Long Blade', value: 'Long Blade' },
                            { name: 'Buster Blade', value: 'Buster Blade' },
                            { name: 'Boost Hammer', value: 'Boost Hammer' },
                            { name: 'Charge Spear', value: 'Charge Spear' },
                            { name: 'Variant Scythe', value: 'Variant Scythe' }
                        )
                        .setRequired(true)
                )
                .addStringOption((option) =>
                    option
                        .setName('gun')
                        .setDescription('choose what gun type is your favorite')
                        .setChoices(
                            { name: 'Sniper', value: 'Sniper' },
                            { name: 'Assault', value: 'Assault' },
                            { name: 'Blast', value: 'Blast' },
                            { name: 'Shotgun', value: 'Shotgun' }
                        )
                        .setRequired(true)
                )
                .addStringOption((option) =>
                    option
                        .setName('shield')
                        .setDescription('choose what shield type is your favorite')
                        .setChoices(
                            { name: 'Buckler', value: 'Buckler' },
                            { name: 'Shield', value: 'Shield' },
                            { name: 'Tower', value: 'Tower' }
                        )
                        .setRequired(true)
                )
                .addStringOption((option) =>
                    option
                        .setName('avatar')
                        .setDescription('Image url of your avatar')
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName('bio')
                        .setDescription('About your self')
                        .setRequired(false)
                ),
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('edit')
                .setDescription(`Edit your god Eater's profile`)
                .addStringOption((option) =>
                    option
                        .setName('name')
                        .setDescription('edit your god eater name')
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName('codename')
                        .setDescription('edit your god eater codename')
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName('melee')
                        .setDescription('edit the type of your melee weapon')
                        .setChoices(
                            { name: 'Short Blade', value: 'Short Blade' },
                            { name: 'Long Blade', value: 'Long Blade' },
                            { name: 'Buster Blade', value: 'Buster Blade' },
                            { name: 'Boost Hammer', value: 'Boost Hammer' },
                            { name: 'Charge Spear', value: 'Charge Spear' },
                            { name: 'Variant Scythe', value: 'Variant Scythe' }
                        )
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName('gun')
                        .setDescription('edit the type of your gun')
                        .setChoices(
                            { name: 'Sniper', value: 'Sniper' },
                            { name: 'Assault', value: 'Assault' },
                            { name: 'Blast', value: 'Blast' },
                            { name: 'Shotgun', value: 'Shotgun' }
                        )
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName('shield')
                        .setDescription('edit the type of your shield')
                        .setChoices(
                            { name: 'Buckler', value: 'Buckler' },
                            { name: 'Shield', value: 'Shield' },
                            { name: 'Tower', value: 'Tower' }
                        )
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName('avatar')
                        .setDescription('change your image in your profile')
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName('bio')
                        .setDescription('Change info about your self')
                        .setRequired(false)
                ),
        ),

    async execute(interaction, client) {
        if (interaction.options.getSubcommand() === 'view') {
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

        if (interaction.options.getSubcommand() === 'create') {
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

        if (interaction.options.getSubcommand() === 'edit') {
            const user = interaction.user;

            let profile = await Profile.findOne({ _userId: user.id });

            if (!profile) {

                await interaction.reply({
                    content: 'You do not have a God Eater profile yet',
                    ephemeral: true
                });

            } else {
                //TODO: REMOVE EDIT AND MAKE ANOTHER COMMAND FOR EDITING PROFILE

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
            }

            const embed = reply(interaction, client, profile, user);
            await interaction.reply({
                content: `Changes saved successfully!`,
                ephemeral: true,
                embeds: [embed]
            });
        }
    }
}