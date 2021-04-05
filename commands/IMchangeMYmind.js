/*const { Canvas} = require('canvacord')
const { MessageAttachment } = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'changemymind',
    aliases: ['cmm'],
    permissions: [''],
    async execute(client, message, cmd, args, Discord){
        const text = args.join(" ")

        const errormsg = new MessageEmbed()
        .setColor('#3478ff')
        .setTitle('Please type your text')

        if(!text) return message.channel.send(errormsg)


        const image = await Canvas.changemymind(text)

        let final = new MessageAttachment(image, 'cmm.png')

        message.channel.send(final)
    }
}*/