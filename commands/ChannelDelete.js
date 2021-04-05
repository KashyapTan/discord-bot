const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'deletechannel',
    permissions: ['ADMINISTRATOR'],
    description: 'deletes a channel;',
    execute(client, message, cmd, args, Discord){
        if(!message.member.permissions.has('BAN_MEMBERS')){
            return message.delete()
        }
        const errorMessage = new MessageEmbed()
                .setColor('#3478ff')
                .setTitle(`❌ Please mention a channel to delete`)

        if(!message.mentions.channels.first()) return message.channel.send(errorMessage)

        message.mentions.channels.first().delete()
        message.author.send('The channel was deleted')
            

    }
    
}