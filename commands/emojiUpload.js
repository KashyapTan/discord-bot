const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "upload",
    aliases: ['load'],
    permissions: [''],
    description: 'uploads a given emoji to the server given the emote link',
    async execute(client, message, cmd, args, Discord) {
        if (!message.member.hasPermission('MANAGE_EMOJIS')) return 
        let link = args[0]
        let name = args[1]

        const argError = new Discord.MessageEmbed()
            .setColor('#3478ff')
            .setTitle('**❌ ERROR FORMATTING: [INVALID ARGS]**')
            .addFields(
                { name: 'How to properly use the Upload_emoji command:', value: '`.upload [Enter emoji link] [Enter emoji name (cannot have spaces, use "_" instead)]`' },
            )

        if (!link || !name) {
            return message.channel.send(argError)
        }


        const sent = new Discord.MessageEmbed()
            .setColor('#3478ff')
            .setTitle('✅ Your emoji was uploaded!')

        message.guild.emojis.create(link, name)
        message.channel.send(sent)
        message.delete()
    }
}