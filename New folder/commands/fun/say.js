module.exports = {
    name: 'say',
    category: 'fun',
    aliases: ['s'],
    run: (client, message, args) => {

      if(!message.member.roles.cache.has('826484524032458802')) 
      return message.channel.send('Bạn không có quyền này 🤭');


        // if (message.member.permissions.has('ADMINISTRATOR')) {
            if (message.deletable) message.delete()
            message.channel.send(args.join(' '))
        // } else {
        //     const target = message.mentions.users.first() || message.author;
        //     message.channel.send(`**${target.username}** Bạn không có quyền sài lệnh này 🤭`);
        // }
    }

}