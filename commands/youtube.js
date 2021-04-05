const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'youtube',
    permissions: [''],
    description: 'youtube command',
    execute(client, message, cmd, args, Discord){
        if(!message.member.hasPermission('BAN_MEMBERS')) return 
        message.channel.send('https://www.youtube.com/user/OfficialHiko')
    }
}