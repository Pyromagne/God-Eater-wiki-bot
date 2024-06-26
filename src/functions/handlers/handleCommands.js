const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const fs = require('fs');
const chalk = require('chalk');

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync('./src/commands');
        for (const folder of commandFolders) {
            const commandFiles = fs
                .readdirSync(`./src/commands/${folder}`)
                .filter(file => file.endsWith('.js'));

            const { commands, commandArray } = client;
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
                console.log(chalk.green(`[Bot]: ${command.data.name} command has been registered`));
            }
        }

        const clientId = process.env.clientId2;
        const guildId = process.env.guildId;
        const rest = new REST({ version: '10' }).setToken(process.env.token2);

        /* try {
            console.log('Started refreshing application (/) commands.');

            await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: client.commandArray });

            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        } */

        try {
            console.log(chalk.green(`[Bot]: Started refreshing application (/) commands.`));

            await rest.put(Routes.applicationCommands(clientId), { body: client.commandArray });

            console.log(chalk.green(`[Bot]: Successfully reloaded application (/) commands.`));
        } catch (error) {
            console.error(error);
        }
    }
}