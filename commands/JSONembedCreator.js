/*const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'sendembed',
    aliases: ['sendEmbed', 'Sendembed', 'sEmbed', 'sembed'],
    permissions: ['ADMINISTRATOR'],
    description: 'creates an embed from JSON data',
    minArgs: 2,
    expectedArgs: '<channel mention> <JSON>',
    execute(client, message, cmd, args, Discord){
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.delete()
        const targetChannel = message.mentions.channels.first()
        const errorMsg = new MessageEmbed()
        .setColor('#3478ff')
        .setTitle('**❌ ERROR FORMATTING: Please specify a channel**')

        if(!targetChannel) return message.channel.send(errorMsg)

        args.shift()//removes the channel mention from the JSON string

        try{
            const json = JSON.parse(args.join(" "))
            const { text = ''} = json
        targetChannel.send(text, {
            embed: json,
        })
        }catch(error){
            const errorMsg2 = new MessageEmbed()
            .setColor('#3478ff')
            .setTitle(`❌ ERROR FORMATTING: ${error.message}`)

            message.channel.send(`INVALID JSON FORMAT: ${error.message}`)
        }

        }
    }*/