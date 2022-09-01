const Discord = require('discord.js');
const { idBaucua } = require("../../config.json");
const {RichEmbed} = require("discord.js");

module.exports = {
  name: 'baucua',
  category: 'fun',
  aliases: ['bc'],
  async run(bot, message, args) {

    var emojis = [
      '<:bau:874974846428258314>',
      '<:cua:874974888715243550>',
      '<:nai:874974908340387891>',
      '<:ga:874974898643148810>',
      '<:tom:874974918532546560>',
      '<:ca:874978249749434418>'
    ];

    rowicon = '<a:row:874963448545570877>';
    xucsac = '<a:xucs:874975213039796274>';
    sung = '<a:sung:874974928766656522>';
    muiten = '<a:muiten:874982059049889833>';
    // <:doi:874977035758485554>
    const nut1 = '<:doi:874977035758485554>';
    const nut2 = '<:doi:874977035758485554>';
    const nut3 = '<:doi:874977035758485554>';

    // chỉ có role nào ở dưới id mới có thể thực thi câu lệnh
    if (!message.member.roles.cache.has(idBaucua))
      return message.channel.send('Bạn không có role yêu cầu để lắc bầu cua');

    if (message.member.user.id === '???') {


    } else { //----------------------------------------------
      titltLac = await message.channel.send(muiten + xucsac + ' Lắc lắc lắc ' + xucsac)
      // await message.channel.send()
      lac = await message.channel.send(nut1 + nut2 + nut3);
      // await message.channel.send(xucsac + xucsac + xucsac)

      const fRandom = () => {
        lac.edit(
          emojis[Math.floor(Math.random() * emojis.length)] +
          emojis[Math.floor(Math.random() * emojis.length)] +
          emojis[Math.floor(Math.random() * emojis.length)])
      }

      for (let i = 0; i < 4; i++) {
        fRandom()
      }

      titltLac.edit(sung + sung + ' Lắc xong ' + sung + sung);


    }
  }
}