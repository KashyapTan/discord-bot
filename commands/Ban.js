/*const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ban',
    permissions: ["BAN_MEMBERS"],
    description: 'ban command',
    execute(client, message, cmd, args, Discord) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.delete()
        const member = message.mentions.users.first()
        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.ban()

            const bannedMessage = new MessageEmbed()
                .setColor('#3478ff')
                .setTitle(`**${member.username}** Has been banned!`)

            

            message.channel.send(bannedMessage)
        }
        else {
            const errormsg = new MessageEmbed()
                .setColor('#3478ff')
                .setTitle(`❌ Please mention the user you want to ban`)

            message.channel.send(errormsg)
        }
    }

}*/