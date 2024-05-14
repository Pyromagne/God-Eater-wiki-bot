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
                        .setRequired(false)
                ),
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('create')
                .setDescription(`create your own god Eater's profile`)
                .addStringOption((option) =>
                    option
                        .setName('name')
                        .setDescription(`enter your god eater name`)
                        .setRequired(true)
                )
                .addStringOption((option) =>
                    option
                        .setName('codename')
                        .setDescription(`enter your god eater codename`)
                        .setRequired(true)
                )
                .addStringOption((option) =>
                    option
                        .setName('melee')
                        .setDescription(`choose your melee weapon`)
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
                        .setDescription(`choose your gun type`)
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
                        .setDescription(`choose your shield type`)
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
                        .setDescription('provide the URL of an image to use as your avatar')
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName('bio')
                        .setDescription('write a short bio about yourself')
                        .setRequired(false)
                ),
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('edit')
                .setDescription(`edit your god eater's profile`)
                .addStringOption((option) =>
                    option
                        .setName('name')
                        .setDescription(`update your profile's name`)
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName('codename')
                        .setDescription(`update your profile's codename`)
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName('melee')
                        .setDescription(`update your melee weapon choice`)
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
                        .setDescription(`update your gun type choice`)
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
                        .setDescription(`update your profile's shield type`)
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
                        .setDescription(`update your avatar image URL`)
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName('bio')
                        .setDescription(`update your profile description`)
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