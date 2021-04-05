const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'status',
    permissions: ['BAN_MEMBERS'],
    description: 'bot status command',
    execute(client, message, cmd, args, Discord) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return 

        //const content = message.content.replace('.status ', '')
        if (args[0] === "listening") {
            types = 2
        } else if (args[0] === "streaming") {
            types = 1
        } else if (args[0] === "watching") {
            types = 3
        } else if (args[0] === "playing") {
            types = 4
        }else {
            return message.channel.send("❌ ERROR: Invalid option")
        }

        args.shift()
        const content = args.join(' ')
        client.user.setPresence({
            activity: {
                name: content,
                type: types
            }
        })
        message.channel.send(`${message.author.username} Status set!`)
    }
}