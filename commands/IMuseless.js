/*const Canvas = require('canvas')

module.exports = {
    name: 'useless',
    permissions: [''],
    description: 'Image Manipulation of discord avatar over sakura aka trash',
    async execute(client, message, cmd, args, Discord) {

        const canvas = Canvas.createCanvas(800, 700)
        const ctx = canvas.getContext('2d')

        const background = await Canvas.loadImage('Images4Canvas/trash.png')
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

        const user = message.mentions.users.first() || message.author
        const dude = user.displayAvatarURL({ format: 'png'})

        const avatar = await Canvas.loadImage(dude);
        ctx.drawImage(avatar, 400, 75, 80, 80);



        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
    //font size and style
        ctx.font = '40px sans-serif';
//tex color
        ctx.fillStyle = '#000000';
//fetch user name of person who typed message
        ctx.fillText(user.tag, 400, 60);
    
        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();



        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'trash.png')

        

        message.channel.send(attachment)

    }
}*/