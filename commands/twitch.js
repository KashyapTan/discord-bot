const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'twitch',
    permissions: [''],
    description: 'twitch command',
    execute(client, message, cmd, args, Discord){
        if(!message.member.hasPermission('BAN_MEMBERS')) return 
        message.channel.send('https://www.twitch.tv/hiko')
    }
}