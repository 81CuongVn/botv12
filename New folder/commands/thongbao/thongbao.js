const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { idAdmin, imgLogo, imglogoBackround } = require("../../config.json");
// const guild = new Discord.Guild();
module.exports = {
    name: 'thongbao',
    category: 'thongbao',
    aliases: ['tb'],
    run: (client, message, args) => {

        const target = message.mentions.users.first() || message.author;

        if (!message.member.roles.cache.has(idAdmin))
            return message.channel.send('Bạn không có quyền để sử dụng lệnh thông báo này');
        // if (message.member.permissions.has('ADMINISTRATOR')) {
        if (message.deletable) {
            const sayAgain = args.join(' ');
            const nameSV = message.guild.name;
            let mesEmbed = new MessageEmbed()
                .setTitle(`${nameSV} - **Thông báo**`)
                .setColor('GOLD')
                .setDescription(`${sayAgain}`)
                .setThumbnail(imgLogo)
                .setTimestamp()
                .setFooter('Thân gửi', imgLogo);
            message.delete(); // xóa tin nhắn
            message.channel.send(mesEmbed);
        }
        // } else {
        //     message.channel.send(`**${target.username}** Bạn không có quyền sử dụng lệnh này 🤭`);
        // }
    }
}