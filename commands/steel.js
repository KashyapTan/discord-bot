const {MessageEmbed, Util} = require('discord.js')
module.exports = {
    name: 'steel',
    aliases: ['add'],
    permissions: ['MANAGE_EMOJIS'],
    description: 'steel any emoji',
    async execute(client, message, cmd, args, Discord){
        
        if(!message.member.hasPermission('MANAGE_EMOJIS')) return 

        const errormsg = new MessageEmbed()
        .setColor('#3478ff')
        .setTitle('Please specify an emoji')

        if(!args.length) return message.channel.send(errormsg)

        for (const rawEmoji of args){
            //loops the command
            const parsedEmoji = Util.parseEmoji(rawEmoji)

            const confirm = new MessageEmbed()
            .setColor('#3478ff')
            .setTitle(`Added: \`${parsedEmoji.name}\``)

            if(parsedEmoji.id){
                const extension = parsedEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`
                message.guild.emojis.create(url, parsedEmoji.name)
                .then((emoji) => message.channel.send(confirm))
                message.delete()
            }
        }

    }
}