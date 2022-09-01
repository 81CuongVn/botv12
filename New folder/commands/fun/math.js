const Discord = require('discord.js');
const math = require('mathjs');

module.exports = {
    name: 'math',
    category: 'fun',
    aliases: ['m'],
    async run(client, message, args) {
        try{
                const embed = new Discord.MessageEmbed()
                
                .addField('Tính toán', args.join(" "))
                .addField("**Kết quả**" , math.evaluate(args.join(" ")))

                message.channel.send(embed);
            
        }catch(err){
            message.channel.send("**Bạn cần thao tác như sau ( fmath || fm )**");
            const embed2 = new Discord.MessageEmbed()
                
                .addField('Dùng lệnh ', 'fim 1+2+3 ')
                .addField("**Kết quả sẽ là**" , '6')

                message.channel.send(embed2);
        }

    },
};