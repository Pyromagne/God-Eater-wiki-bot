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
                .setDescription(`Create or edit your god Eater profile`)
                .addStringOption((option) =>
                    option
                        .setName('name')
                        .setDescription('what us your god Eater name')
                        .setRequired(true)
                )
                .addStringOption((option) =>
                    option
                        .setName('codename')
                        .setDescription('what us your god Eater code name')
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
                ),
        ),

    async execute(interaction, client) {
        if (interaction.options.getSubcommand() === 'view') {
            const user = interaction.options.getUser('user');

            let profile = await Profile.findOne({ _userId: user.id });

            if (!profile) {
                return await interaction.reply({
                    content: `No profile found`
                })
            }

            const embed = reply(interaction, client, profile, user);
            await interaction.reply({
                embeds: [embed]
            })
        }

        if (interaction.options.getSubcommand() === 'create') {
            const user = interaction.user;
        
            try {
                let profile = await Profile.findOne({ _userId: user.id });
        
                if (!profile) {
                    profile = new Profile({
                        _tag: user.tag,
                        _userId: user.id,
                        name: interaction.options.get('name').value,
                        codename: interaction.options.get('codename').value,
                        melee: interaction.options.get('melee').value,
                        gun: interaction.options.get('gun').value,
                        shield: interaction.options.get('shield').value,
                    });
        
                    await profile.save();
                } else {
                    profile.name = interaction.options.get('name').value;
                    profile.codename = interaction.options.get('codename').value;
                    profile.melee = interaction.options.get('melee').value;
                    profile.gun = interaction.options.get('gun').value;
                    profile.shield = interaction.options.get('shield').value;
                    await profile.save();
                }
        
                const embed = reply(interaction, client, profile, user);
                await interaction.reply({ embeds: [embed] });
            } catch (error) {
                console.error(error);
            }
        }

    }
}