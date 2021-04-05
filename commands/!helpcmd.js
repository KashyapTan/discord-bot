/*const {ReactionPages} = require('reconlx')
const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'help',
    permissions: [''],
    description: 'Help command with pages',
    async execute(client, message, args, Discord){
        
        const first = new MessageEmbed() 
        .setColor('#304281')
        .setTitle('🛠️ AiriBot Support 🛠️')
        .addFields(
            {name: 'Important:', value: 'Bot prefix: `.`'},
            {name: 'Commands Info:', value: 'For information on what every command does, please type `.cmdinfo`'},
        )
        .setFooter('Page 1・React to ⏩ to see a list of all the bots commands.')

        const second = new MessageEmbed() 
        .setColor('#304281')
        .setTitle('☑️ AiriBot Commands')
        .addFields(
            {name: '🛠️ Moderation 🛠️', value: '`.ban` | `.kick` | `.mute` | `.unmute` | `.clear`'},
            {name: '🛠️ Utility 🛠️', value: '`.createchannel` | `.deletechannel` | `.dm` | `.embed` | `.upload` | `.steel`'},
            {name: '💠 Misc 💠', value: '`.ping` | `.how2sugg` | `.rules` | `.status` | `.yt` | `.youtube` | `.twitch` | `.socials`'},
            {name: '🎵 Music 🎵', value: '`.p` | `.skip` | `.stop` | `.pause` | `.resume` | `.play` | `.leave`'},
        )
        .setFooter('Page 2・React to ⏪ to see the bots basic information.')

        const pages = [first, second]
        ReactionPages(message, pages, true)
    }
}*/