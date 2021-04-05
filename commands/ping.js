const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ping',
    permissions: [''],
    description: 'ping command',
    execute(client, message, args, Discord){
        if(!message.member.hasPermission('BAN_MEMBERS')) return 
        const embedPong = new MessageEmbed()
            .setTitle('BOT/API Latency')
            .setColor('#3478ff')
            .setDescription(`\`Bot Latency:\` \`${Date.now() - message.createdTimestamp}ms.\` 
            \`API Latency:\` \`${Math.round(client.ws.ping)}ms.\``); 


        message.channel.send(embedPong)
    }
}