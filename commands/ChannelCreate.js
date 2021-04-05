const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'createchannel',
    permissions: ['ADMINISTRATOR'],
    description: 'creates a channel;',
    execute(client, message, cmd, args, Discord){
        if(!message.member.permissions.has('BAN_MEMBERS')){
            return 
        }

        const errorMessage = new MessageEmbed()
                .setColor('#3478ff')
                .setTitle(`**❌ ERROR FORMATTING:** Please enter the channel name.`)

        const channelName = args.join(' ')
        if(!channelName){
            return message.channel.send(errorMessage)
        }
        
        message.guild.channels.create(channelName)
            .then(ch => {
                message.channel.send(`New channel created: ${ch}`)
            })
    }
    
}