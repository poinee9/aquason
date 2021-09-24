const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Aqua bot ")
.setTitle(" ➤ Aqua Bot Kullanıcı Komutları ")
 .setTimestamp()
.setDescription(" **!avatar** = Avatarınıza bakarsınız.  \n  **!yetkilerim** = Yetkilerini görürsün. \n  **!profil** = Profilini görürsün.  \n **!sunucuresmi** = Sunucu resmini gösterir.  \n  **!ping** = Botun Pingine Bakarsın. \n **!id** = Birisinin id'sine Bakarsın. \n  **!davet** = Beni Sunucuna Ekle.  \n  **!botbilgi** = Bot istatistiklerini görürsünüz.  ")
.setImage("https://cdn.discordapp.com/attachments/790999702765961258/791798016583008297/wp2490739.png")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}