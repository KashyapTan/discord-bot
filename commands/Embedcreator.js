const Discord = require('discord.js')

module.exports = {
    name: "embed",
    aliases: ['em', 'bed'],
    permissions: [''],
    async execute(client, message, cmd, args, Discord){
        if(!message.member.hasPermission('BAN_MEMBERS')) return 
        let title = args[0]
        let color = args[1]
        let description = args.slice(2).join(" ")

        const errorEmbed = new Discord.MessageEmbed() 
        .setColor('#3478ff')
        .setTitle('**❌ ERROR FORMATTING: [INVALID ARGS]**')
        .addFields(
            {name: 'How to properly use the Embed command:', value: '`.embed [Enter Title] [Enter Color (Hex code or color in caps, ex: BLUE)] [Enter Description]`'},
        )

        if(!title || !color || !description){
            return message.channel.send(errorEmbed)
        }

        const embed = new Discord.MessageEmbed()
        .setTitle(`**${title}**`)
        .setColor(color)
        .setDescription(description)
        message.delete() 
        message.channel.send(embed)
    }
}