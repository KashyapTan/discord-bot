/*const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'kick',
    permissions: ["KICK_MEMBERS"],
    description: 'kick command',
    execute(client, message, cmd, args, Discord) {
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.delete()

        

        const member = message.mentions.users.first()
        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.kick()

            const kickedMessage = new MessageEmbed()
                .setColor('#3478ff')
                .setTitle(`**${member.username}** Has been kicked!`)

            message.channel.send(kickedMessage)
        }
        else {
            message.channel.send('❌ Please mention the user you want to kick')
        }
    }

}*/