/*const { MessageEmbed } = require("discord.js")
const math = require("mathjs")



module.exports = {
    name: 'math',
    aliases: ['cal', 'calculate'],
    permissions: [''],
    description: 'does math',
    async execute(client, message, cmd, args, Discord) {
        const errmsg = new MessageEmbed()
            .setColor('#3478ff')
            .setTitle(`Please enter a valid question`)
        message.delete()
        try {
            message.channel.send(
                new MessageEmbed()
                    .setColor('#3478ff')
                    .addField('Question:', args.join(" "))
                    .addField('Solution:', math.evaluate(args.join(" ")))
            )
        } catch (err) {
            message.channel.send(errmsg)

        }
    }
}*/