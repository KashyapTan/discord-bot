/*const {ReactionPages} = require('reconlx')
const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'cmdinfo',
    permissions: [''],
    description: 'Agent descriptions with embed pages',
    async execute(client, message, args, Discord){
        
        const first = new MessageEmbed() 
        .setColor('#304281')
        .setTitle('🛠️ AiriBot Command Info 🛠️')
        .addFields(
            {name: 'Page 2:', value: 'Moderation Commands Info.'},
            {name: 'Page 3:', value: 'Utility Commands Info.'},
            {name: 'Page 4:', value: 'Music Commands Info.'},
        )
        .setFooter('・Page 1')

        const second = new MessageEmbed() 
        .setColor('#3478ff')
        .setTitle('☑️ AiriBot Moderation Commands')
        .addFields(
            {name: '🛠️ Moderation 🛠️', value: '__________'},
            {name: 'Ban ', value: '`.ban`: Bans the user; Example: [.ban {user}]'},
            {name: 'Kick ', value: '`.kick`: Kicks the user; Example: [.kick {user}]'},
            {name: 'Mute ', value: '`.mute`: Mutes the user for a specfic amount of time; Example: [.mute {user} {time}]'},
            {name: 'Unmute ', value: '`.unmute`: Unmutes the user; Example: [.unmute {user}]'},
            {name: 'Clear ', value: '`.clear`: Bulk deletes up to 100 message; Example: [.clear {number of messages}]'},
        )
        .setFooter('・Page 2')

        const third = new MessageEmbed() 
        .setColor('#3478ff')
        .setTitle('☑️ AiriBot Utility Commands')
        .addFields(
            {name: '🛠️ Utility 🛠️', value: '__________'},
            {name: 'Create Channel', value: '`.createchannel`: Creates a new channel; Example: [.createchannel {channel name}]'},
            {name: 'Delete Channel', value: '`.deletechannel`: Deletes a specified channel; Example: [.Creates a new channel {channel}]'},
            {name: 'DM', value: '`.dm`:Dm\'s a specfic user; Example: [.dm {username} {text you want to dm}]'},
            {name: 'Embed', value: '`.embed`: Creates a simple embed; Example: [.embed {embed title} {color(in caps)} {text of embed}]'},
            {name: 'Say', value: '`.say`: Make the bot send the message typed; Example: [.say {text you want to send from the bot}]'},
            {name: 'Emoji Uploader', value: '`.upload`: Uploads the specified emoji to the server; Example: .upload [{Enter emoji link} {Enter emoji name(cannot have spaces, uses "_" instead)}]'},
            {name: 'Emoji Steeler', value: '`.steel`: Adds the specified emoji to tthe server; Example: [.steel {enter emoji (must have nitro for this)}]'},
        )
        .setFooter('・Page 3')

        const fourth = new MessageEmbed() 
        .setColor('#304281')
        .setTitle('☑️ AiriBot Music Commands')
        .addFields(
            {name: 'Play Music', value: '`.p`: Plays any song from youtube or any youtube link (auto queues); Example: [.p {link} or {song name}]'},
            {name: 'Skip Song', value: '`.skip`: Skips to the next song or playlist; Example: [.skip]'},
            {name: 'Stop Song', value: '`.stop`: Stops playing the song and disconnects the bot from the voice channel; Example: [.stop]'},
            {name: 'Pause Song', value: '`.pause`: Pauses the song; Example: [.pause]'},
            {name: 'Resume Song', value: '`.resume`: Resumes a paused song; Example: [.resume]'},
            {name: 'Disconnect Bot', value: '`.leave`: Stops playing the song and disconnects the bot from the voice channel (Alias of the stop cmd); Example: [.leave]'}
        )
        .setFooter('・Page 4')

        const pages = [first, second, third, fourth]
        ReactionPages(message, pages, true)
    }
}*/