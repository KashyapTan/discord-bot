//You need to download the axios package before you use this command (npm i axios)
/*const axios = require('axios')
const { MessageEmbed } = require('discord.js')


module.exports = {
    name: 'djs',
    aliases: ['docs', 'doc'],
    permissions: [''],
    description: 'give d.js documentattion in an embed',
    execute(client, message, cmd, args, Discord){
        const userQuery = args.join(' ')
        if(!userQuery) return message.channel.send('Please specify your query')
        
        const link = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(userQuery)}`

        axios.get(link)
            .then(({data}) => {
                if(data){
                    message.channel.send({embed: data})
                }
            })
    }
}*/