const chalk = require('chalk');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(chalk.greenBright.bold.bgWhite(`[Bot Status]: Ready! ${client.user.tag} is online`));
    }
}