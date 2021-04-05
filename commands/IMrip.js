/*const { Canvas} = require('canvacord')
const { MessageAttachment } = require('discord.js')

module.exports = {
    name: 'rip',
    aliases: [''],
    permissions: [''],
    async execute(client, message, cmd, args, Discord){
        const user = message.mentions.users.first() || message.author

        const avatar = user.displayAvatarURL({ format: 'png'})

        const image = await Canvas.rip(avatar)

        message.channel.send(new MessageAttachment(image, "image.gif"))
    }
}*/