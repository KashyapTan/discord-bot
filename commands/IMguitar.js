/*const Canvas = require('canvas')

module.exports = {
    name: 'guitar',
    permissions: [''],
    description: 'displays all of the guitar notes',
    async execute(client, message, cmd, args, Discord){
        
        const canvas = Canvas.createCanvas(700,250)
        const ctx = canvas.getContext('2d')

        const background = await Canvas.loadImage('Images4Canvas/guitar.gif')
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'guitar-notes.png')

        message.channel.send(attachment)

    }
}*/