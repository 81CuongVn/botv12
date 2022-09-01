const Discord = require('discord.js');
const math = require('mathjs');

module.exports = {
    name: 'xinloc',
    category: 'gameMessage',
    aliases: ['loc'],
    async run(client, message, args) {

            let randNo = Math.round(Math.random() * 100);
            
            const embed = new Discord.MessageEmbed()
                .setTitle(`Mình sẽ phù hộ cho ${message.member.user.username} thành công trên con đường cờ bạc
                \nĐộ may mắn của bạn là ${randNo}%`)
                .setColor("RED")
            message.channel.send(embed);
    },
};