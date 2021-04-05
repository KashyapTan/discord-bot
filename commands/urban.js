/*const axios = require('axios')
const { MessageEmbed, Message } = require('discord.js')
module.exports = {
    name: 'urban',
    aliases: [''],
    permissions: [''],
    description: 'gets the best definition of a word from Urban Dictionary',
    async execute(client, message, cmd, args, Discord) {

        let query = args.join(" ")

        const errormsg = new MessageEmbed()
            .setColor('#3478ff')
            .setTitle('Please specify a word to search')

        if (!query) message.channel.send(errormsg)

        query = encodeURIComponent(query)

        const { data: { list } } = await axios.get(`https://api.urbandictionary.com/v0/define?term=${query}`)
        const [ answer ] = list

        const upvote = client.emojis.cache.get("821193547432329216")
        const downvote = client.emojis.cache.get("821193657733480508")


        message.channel.send(
            new MessageEmbed()
            .setTitle(answer.word)
            .setURL(answer.permalink)
            .setColor('#3478ff')
            .addField('DEFINITION', trim(answer.definition))
            .addField('EXAMPLE', trim(answer.example))
            .addField('RATINGS', `${upvote} | ${answer.thumbs_up} \n \n ${downvote} | ${answer.thumbs_down}`)
        )
    }

}

function trim(input) {
    return input.length > 1024 ? `${sttr.slice(1020)} ...` : input;
}*/