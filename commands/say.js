/*const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: "send",
    aliases: ['say'],
    permissions: [''],
    async execute(client, message, cmd, args, Discord) {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.delete()
        const a = args.slice(0).join(" ")

        const argError1 = new Discord.MessageEmbed()
        .setColor('#3478ff')
        .setTitle('❌ ERROR: Invalid Agruments.')

        if (!a) {
            return message.channel.send(argError1)
        } else {
            message.channel.send(a) && message.delete()
        }
    }

}*/
