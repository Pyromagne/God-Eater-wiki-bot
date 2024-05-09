const chalk = require('chalk');

module.exports = {
    name: 'error',
    execute(client) {
        console.log(chalk.green(`An error occured with the database connection:\n${error}`))
    }
}