const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, msg) => {
  msg.channel.send("Yapımcım: Poinee#1907 - Botla İlgili Soruları Sorabilirsiniz.")
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["komut"],
  kategori: "YETKİLİ KOMUTLARI",
  permLevel: 0
};
exports.help = {
  name: "yapımcım",
  description: "Yapımcımı Gösterir.",
  usage: "yapımcım"
};
