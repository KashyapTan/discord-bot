const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'social',
    aliases: ['socials'],
    permissions: [''],
    description: 'Displays twitch and youtube channel',
    execute(client, message, cmd, args, Discord) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return 
        const twitchEmoji = client.emojis.cache.get("805266290377490443");
        const youtubeEmoji = client.emojis.cache.get("815025028588109824");

        const ytMsg = new MessageEmbed()
            .setColor('#3478ff')
            .setTitle('Hiko\'s Socials')
            .addFields(
                { name: `${twitchEmoji} Twitch:`, value: "[Click HERE to go to Hiko\'s Twitch Channel.](https://www.twitch.tv/hiko)" },
                { name: `${youtubeEmoji} YouTube:`, value: "[Click HERE to go to Hiko\'s YouTube Channel.](https://www.youtube.com/user/OfficialHiko)" },
            )


        message.channel.send(ytMsg)
    }
}