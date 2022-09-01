const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { CHANNELID_CHECK_MANAGE } = require("../../config.json");

module.exports = {
    name: 'kickMember',
    category: 'fun',
    aliases: ['kick'],
    async run(bot, message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`${message.member.user} mày là cái đếch gì mà bảo t kick nó ?`)

        const mentionMember = message.mentions.members.first();
        const ChannelcheckKick = bot.channels.cache.get(CHANNELID_CHECK_MANAGE); 
        // channel check ly do

        let reason = args.slice(1).join(" ");
      //.kick <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "Người kick không cho lý do";

        const kickembed = new Discord.MessageEmbed()
            .setTitle(`Bạn bị đuổi khỏi **${message.guild.name}**`)
            .setDescription(`Lý do : ${reason}`)
            .setColor('RED')
            .setTimestamp()
            .setFooter(bot.user.tag, bot.user.displayAvatarURL())

        const kickembedHistoty = new Discord.MessageEmbed()
            // .setTitle(`${message.member.user} bị đuổi khỏi **${message.guild.name}**`)
            .setDescription(`Người dùng lệnh : ${message.member.user}
            \n tag người bị kick : 
            \n- Dùng lệnh : **kick**
            \nLý do : ${reason}`)
            .setColor('RED')
            .setTimestamp()
            .setFooter(bot.user.tag, bot.user.displayAvatarURL())

        const embedSay = new Discord.MessageEmbed()
            .setTitle(`Lệnh ở dưới đây này, gọi phát làm luôn`)
            .setDescription(`Lệnh **fikick [@user] [ lý do ]** \n( nhớ cho lý do để tôi lưu lại và gửi cho bạn đấy biết lý do )`)
            .setColor("red")
            .setTimestamp()
            .setFooter(bot.user.tag, bot.user.displayAvatarURL());

        // if (!args[0]) return message.channel.send('Đọc rõ họ tên em **tiển** nó ra khỏi cái server này ngay và lun cho bro 🤭');
        if (!args[0]) return message.channel.send('Đọc rõ họ tên em **tiển** nó ra khỏi cái server này ngay và lun cho bro 🤭', embedSay);

        if (!mentionMember) return message.channel.send("Nó k có trong server bro à");

        if (!mentionMember.kickable) return message.channel.send("Tôi đang quyền thấp hơn");


        try {
            await mentionMember.send(kickembed);
            message.channel.send('Bay màu 🤭');
            ChannelcheckKick.send(kickembedHistoty);
        } catch (err) {

        }

        try {
            await mentionMember.kick(reason);
        } catch (err) {
            return message.channel.send("Lỗi")
        }
      console.log("ok")
    }
}