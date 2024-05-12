const view = require('./options/view');
const create = require('./options/create');
const edit = require('./options/edit');

const { SlashCommandBuilder } = require('discord.js');

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
            view(interaction, client);
        }

        if (interaction.options.getSubcommand() === 'create') {
            create(interaction, client);
        }

        if (interaction.options.getSubcommand() === 'edit') {
            edit(interaction, client);
        }
    }
}