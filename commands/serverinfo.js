const { MessageEmbed } = require("discord.js")
const moment = require('moment')
module.exports = {
    name: 'serverinfo',
    aliases: ['sinfo'],
    permissions: [''],
    description: 'shows server info',
    execute(client, message, cmd, args, Discord) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return 
        const arrowEmoji = client.emojis.cache.get("813036169470017566")

        const guild = message.guild

        const embed = new MessageEmbed()

            .setTitle(guild.name)
            .setThumbnail(guild.iconURL())
            .setColor('#3478ff')
            .addField('General Server Information:', [
                `${arrowEmoji} Server Name: ${guild.name}`,
                `${arrowEmoji} Server Owner: ${guild.owner}`,
                `${arrowEmoji} Server Region: ${guild.region}`, 
                
            ])
            .addField('Server Statics:', [
                `${arrowEmoji} Members: ${guild.memberCount}`,
                `${arrowEmoji} Roles: ${guild.roles.cache.size}`,
                `${arrowEmoji} Boosts: ${guild.premiumSubscriptionCount || "0"}`,
                `${arrowEmoji} Channels: ${guild.channels.cache.size
                } Total (Text: ${guild.channels.cache.filter(
                    (ch) => ch.type === "text"
                ).size}, Voice: ${guild.channels.cache.filter(
                    (ch) => ch.type === "voice"
                ).size})`,
                `${arrowEmoji} Emojis: ${guild.emojis.cache.size} Total (Static: ${guild.emojis.cache.filter((e) => !e.animated).size
                }, Animated: ${guild.emojis.cache.filter((e) => e.animated).size
                })`,
                
            ])
            .setFooter(`・Server Created at ${moment(guild.createdTimestamp).format('LT')}, ${moment(guild.createdTimestamp).format('LL')}, ${moment(guild.createdTimestamp).fromNow()}`)
        message.channel.send(embed)
    },
}