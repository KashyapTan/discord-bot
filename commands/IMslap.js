/*const { Canvas } = require('canvacord')
const { MessageAttachment} = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'slap',
    aliases: [''],
    permissions: [''],
    async execute(client, message, cmd, args, Discord) {
        const user = message.mentions.users.first() || message.author

        const errormsg = new MessageEmbed()
            .setColor('#3478ff')
            .setTitle('Please mention a user')

        if (!user) return message.channel.send()
        const avatar = user.displayAvatarURL({ format: 'png' })

        const image = await Canvas.slap(message.author.displayAvatarURL({ format: "png" }), avatar)

        message.channel.send(new MessageAttachment(image, "image.gif"))
    }
}*/