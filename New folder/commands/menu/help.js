const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'help',
    category: 'menu',
    aliases: ['h'],
    run: (client, message, args) => {
        if (message.member.permissions.has('ADMINISTRATOR') || message.member.roles.cache.has('889601087043145758') ||
        message.member.roles.cache.has('799580786784993330') ) {
            let embed = new MessageEmbed()
                .setTitle('Menu')
                .setFooter('FiMH /•98F• with love', 'https://i.imgur.com/WDveXEJ.png')
                .setDescription('Lệnh cho admin (có vài có quyền quản lí mới sử dụng được)')
                .addField('fisay | fis', 'bot nói theo rồi tự động xóa tin nhắn người gọi bot', true)
                .addField('fichatAI | fiAI', 'room bot tự động trả lời tin nhắn (tạm thời khóa)', true)
                .addField('fithongbao | fitb', 'tương tự lệnh fsay nhưng sẽ bot sẽ đưa vào 1 messageEmbed (để thông báo quan trọng)', true)
                .addField('fithongbaobg | fitbbg', 'giống lệnh fthongbao nhưng thêm hình bìa của sv', true)
                .addField('ficheckMember | ficheck', 'check thông tin cơ bản của member', true)
                .addField('fiping | fip', 'Độ trễ của bot', true)
                .addField('fikickMember | fikick', 'kick ', true)
                .addField('fibanMember | fban', 'ban', true)
                .addField('prefix ', 'không đổi được', true)
                
                .addField('fibaucua | fibc', 'Game bầu cua, cần role bầu cua để sử dụng', true)
                
                .addField('fimath | fibc', 'Tính toán nhanh', true)
                
                .addField('firandom | fird', 'RanDom 1 con số bất kì từ 0 đến con số bạn muốn', true)

                .addField('fiavatar | fiavt', 'Gọi avatar', true)

                .addField('fixinloc | filoc', 'Độ % may mắn của bạn trên con đường cờ bạc', true)

                 .addField('fi info | fi if', `bot's information`, true)


            message.channel.send(embed);
        } else {
            let embed2 = new MessageEmbed()
                .setTitle('Menu')
                .setFooter('FiMH /•98F• with love', 'https://i.imgur.com/WDveXEJ.png')
                .setDescription('Các lệnh cơ bản cho member')
                // .addField('fsay | fs', 'bot nói theo rồi tự động xóa tin nhắn người gọi bot', true)
                // .addField('fchatAI | fAI', 'room bot tự động trả lời tin nhắn (tạm thời khóa)', true)
                // .addField('fthongbao | ftb', 'tương tự lệnh fsay nhưng sẽ bot sẽ đưa vào 1 messageEmbed (để thông báo quan trọng)', true)
                // .addField('fthongbaobg | ftbbg', 'giống lệnh fthongbao nhưng thêm hình bìa của sv', true)
                .addField('ficheckMember | ficheck', 'check thông tin cơ bản của member', true)
                .addField('fiping | fip', 'Độ trễ của bot', true)
                // .addField('fkickMember | fkick', 'kick ', true)
                // .addField('fbanMember | fban', 'ban', true)
                // .addField('prefix ', 'không đổi được', true)
                
                .addField('fibaucua | fibc', 'Game bầu cua, cần role bầu cua để sử dụng', true)
                
                .addField('fimath | fibc', 'Tính toán nhanh', true)
                
                .addField('firandom | fird', 'RanDom 1 con số bất kì từ 0 đến con số bạn muốn', true)
                
                .addField('fiavatar | fiavt', 'Gọi avatar', true)

                .addField('fixinloc | filoc', 'Độ % may mắn của bạn trên con đường cờ bạc', true)
                
                 .addField('fi info | fi if', `bot's information`, true)
            message.channel.send(embed2);
        }
    }

}