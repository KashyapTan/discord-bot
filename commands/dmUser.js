/*const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'dm',
    permissions: ['MANAGE_MESSAGES'],
    description: 'dm\'s any user in the server ',
    execute(client, message, cmd, args, Discord){
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.delete()

        const errorMessage1 = new MessageEmbed()
        .setColor('#3478ff')
        .setTitle(`❌ ERROR FORMATING: Please enter the user you want to dm and then the text you want to dm. Ex: .dm [username] [text you want to dm]`)
        
        let mentionedUser = args[0]
        let text = args.slice(1).join(" ")

        if(!text) return message.channel.send(errorMessage1)
        const {UserID} = /(?<UserID>\d{18})/.exec (message.content).groups;
        const user = message.guild.members.cache.get(UserID);
        user.send(text)
        message.delete()
    }
}*/