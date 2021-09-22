const ytch = require('yt-channel-info')
const discord = require("discord.js")


exports.run = async(client,message,args) => {
let id ="UCHinX8fYUWm_MAfX4qXLbwA"
let type = "user"
if(id) {
ytch.getChannelInfo(id, type).then((response) => {
const embed = new discord.MessageEmbed()
.setTitle(`Youtube !`)
.addField(`Kanal ismi`,`${response.author}`)
.addField(`Abone sayısı`,`${response.subscriberCount}`)
.addField(`Abone sayısı metin`,`${response.subscriberText}`)
.addField(`Kanal açıklaması`,`${response.description}`)
.addField(`Kanal urlsi`,`${response.authorUrl}`)
.setTimestamp()
.setFooter(`${message.author.username} tarafından istendi`,message.author.avatarURL({dynamic: true}))
message.channel.send(embed)
})
}
}                               
exports.conf = {
  aliases: []
}
exports.help = {
  name: "youtube-bilgi"
}