const translate = require('@iamtraction/google-translate')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'translate',
    aliases: [''],
    permissions: [''],
    description: '',
    async execute(client, message, cmd, args, Discord){
        if(!message.member.hasPermission('BAN_MEMBERS')) return 
        const query = args.join(" ")

        const errormsg = new MessageEmbed() 
        .setColor('#3478ff')
        .setTitle('❌ Please enter a text to translate')

        if(!query) return message.channel.send(errormsg)

        const translated = await translate(query, {to: 'en'})

        const output = new MessageEmbed() 
        .setColor('#3478ff')
        .setDescription(`
        **Inputed Text**: \n
        ${query}\n
        **Translated Text:**\n
        ${translated.text}
        `)
        

        message.channel.send(output)
        message.delete()
    }
}