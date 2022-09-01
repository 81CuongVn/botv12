const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { CHANNELID_CHECK_MANAGE } = require("../../config.json");

module.exports = {
    name: 'banMember',
    category: 'fun',
    aliases: ['ban'],
    async run(bot, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`${message.member.user} Bạn không có quyền sử dụng lệnh này`)

        const mentionMember = message.mentions.members.first();
        const ChannelcheckKick = bot.channels.cache.get(CHANNELID_CHECK_MANAGE); // phong check ly do

        let reason = args.slice(1).join(" "); //.kick <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "Người ban không cho lý do";

        const banembed = new Discord.MessageEmbed()
            .setTitle(`${message.member.user} bị ban khỏi **${message.guild.name}**`)
            .setDescription(`Lý do : ${reason}`)
            .setColor('RED')
            .setTimestamp()
            .setFooter(bot.user.tag, bot.user.displayAvatarURL())


        const embedSay = new Discord.MessageEmbed()
            .setTitle(`Lệnh Ban`)
            .setDescription(`Lệnh **fiban [@user] [ lý do ]** \n( nhớ cho lý do để tôi lưu lại và gửi cho bạn đấy biết lý do )`)
            .setColor("red")
            .setTimestamp()
            .setFooter(bot.user.tag, bot.user.displayAvatarURL());

        if (!args[0]) return message.channel.send('Lệnh Ban', embedSay);

        if (!mentionMember) return message.channel.send("Người bạn tag không có trong sv");

        if (!mentionMember.bannable) return message.channel.send("Tôi đang quyền thấp hơn");


        try {
            await mentionMember.send(banembed);
            // ChannelcheckKick.send(banembedHistoty);
        } catch (err) {

        }

        // try {
        //     await mentionMember.ban(reason);
        // } catch (err) {
        //     return message.channel.send("")
        // }

        await mentionMember.ban({
            reason: reason
        }).then(() => ChannelcheckKick.send(`người ban : ` + message.member.user + "\n đã ban: " + mentionMember.user.tag + `\nlý do : ${reason}`));
    }
}