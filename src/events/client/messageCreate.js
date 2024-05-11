const goodMorningMessages = ['gm', 'goodmorning', 'good morning'];
const goodNightMessages = ['gn', 'goodnight', 'good night'];

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if (message.content.toLowerCase() === 'hi') {
            await message.reply('Hey there! :wave:');
        }

        else if(goodMorningMessages.includes(message.content.toLowerCase())) {
            try {
                await message.channel.send(`https://media.discordapp.net/attachments/976311019381096559/976311124066725968/gm.png?ex=663ed896&is=663d8716&hm=5b90a3f653a11727c81b8b61602f02576ed727c0243e09f39cbcbb9d267b411c&=&format=webp&quality=lossless&width=687&height=386`);
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }

        else if(goodNightMessages.includes(message.content.toLowerCase())) {
            try {
                await message.channel.send(`https://media.discordapp.net/attachments/976311019381096559/976311141221412894/gn.png?ex=663ed89b&is=663d871b&hm=3eca05d3e04612fdd9777bcda8c6854f1ad4ece19f0c4a062ceb0618c101bb94&=&format=webp&quality=lossless&width=687&height=400`);
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }

    }
}