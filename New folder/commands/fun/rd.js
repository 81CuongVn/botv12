const Discord = require('discord.js');

module.exports = {
    name: 'random',
    category: 'fun',
    aliases: ['rd'],
    async run(bot, message, args) {
        if (!args.length || !args[0]) {
            message.channel.send("Nhập một số bất kì theo biểu mẫu **fird [?]**")
        }
        if (message.member.user.id === '???') {//636068233874505728


            let max = args[0];

            // let randNo = Math.round(Math.random() * max);
            // let outPhanTram = max-(max*15) ;
            // let randNo1 = max-outPhanTram;
            // max2 = max/2; // chia đôi

            // let soPhanTram = 15; // a/(a+b)*100(%)DD
            let tinh = (max/100)*96;


            const embed = new Discord.MessageEmbed()
                .setTitle(`Con số may mắn của ${message.member.user.username} là : ` + Math.floor(tinh))
                .setColor("YELLOW");

            message.reply(embed);
        }
         else {

            let max = args[0];

            let randNo = Math.round(Math.random() * max);
            

            const embed = new Discord.MessageEmbed()
                .setTitle(`Con số may mắn của  ${message.member.user.username} là : ` + randNo)
                .setColor("YELLOW");



            message.reply(embed);


        }

    }
}