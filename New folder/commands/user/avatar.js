const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    category: 'user',
    aliases: ['avt'],
    run: (client, message, args) => {


        const usuario = message.mentions.members.first()||message.member

        const IMG = usuario.user.displayAvatarURL({size: 2048, dynamic: true})

        message.channel.send(IMG)

    }
}