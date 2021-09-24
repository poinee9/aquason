const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    .setThumbnail(
      "https://media.discordapp.net/attachments/731150490481721447/890633628793585696/images.png?width=240&height=119"
    )
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!` +
        ""
    )
    .addField(
      `:boom:➤ Komutlar`,
      `
 
:white_small_square: | **!eğlence:** Eğlence Menüsüne Bakarsınız.
:white_small_square: | **!moderasyon:** Botun Moderasyon Komutlarına Bakarsınız
:white_small_square: | **!logomenü:** Botun Logo **Yapma** Komutlarına Bakarsınız.
:white_small_square: | **!kullanıcı:** Kullanıcı Menüsüne Bakarsınız.
:white_small_square: | **!gif:** Gif Menüsüne Bakarsınız.



`)



    .addField(
      ` :boom: Bilgilendirme`,
      `
:white_small_square: | **Aqua Bot Her Gün Güncelleniyor!**.
:white_small_square: | **Botu Ekleyerek Bize Destek Çıkmış Olursunuz.** `
    )
  
  .addField(
      `**:boom:➤ Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/FVqTu6TEqC) \n >  » [Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=742053361372627004&scope=bot&permissions=805314622) \n > » [Oy Verebilirsiniz](https://top.gg/bot/791609110658547782/vote) `
    )
    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: ".",
  usage: "yardım"
};
