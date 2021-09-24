const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('BLACK') 
.addField(`**Aqua Bot Gif Menüsü**`,
 `Aqua Bot             
 
:white_small_square: | !**man-gif**      Rastgele Erkek Gifi Atar!
:white_small_square: | !**woman-gif**    Rastgele Kadın Gifi Atar!
:white_small_square: | !**couple-gif**   Rastgele Sevgili Gifi Atar!
:white_small_square: | !**baby-gif**     Rastgele Bebek Gifi Atar!
:white_small_square: | !**animal-gif**   Rastgele Hayvan Gifi Atar!`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: 'gif',
  description: 'Darknes Code',
  usage: 'gif'
};