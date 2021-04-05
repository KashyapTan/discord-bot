/*module.exports = {
    name: 'reactionroles',
    permissions: [''],
    description: "reaction role command",
    async execute(client, message, cmd, args, Discord){
        const channel = '805267267465904178'
        const tenmanRole = message.guild.roles.cache.find(role => role.name === "10 Man")
        const lineupRole = message.guild.roles.cache.find(role => role.name === "Line Ups")
        const youtubeRole = message.guild.roles.cache.find(role => role.name === "YT Notifications")
        const twitchRole = message.guild.roles.cache.find(role => role.name === "TTV Notifications")


        const tenmanEmoji = "🔟"
        const lineupEmoji = "💠"
        const youtubeEmoji ="🔴"
        const twitchEmoji = "🟣"

        let embed = new Discord.MessageEmbed()
            .setColor('#16C2F3')
            .setTitle('React to get the specific roles!')
            .setDescription('React to the message according to get what roles you want!\n\n'
                + `${youtubeEmoji} :arrow_left:  React to this emote if you want youtube video notifications!\n`
                + `${twitchEmoji} :arrow_left:  React to this emote if you want stream updates and notifications!\n`
                + `${tenmanEmoji} :arrow_left:  React to this emote if you are interested in doing 10 mans!\n`
                + `${lineupEmoji} :arrow_left:  React to this emote if you are interested in sharing and learning line ups!`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(youtubeEmoji);
        messageEmbed.react(twitchEmoji);
        messageEmbed.react(tenmanEmoji);
        messageEmbed.react(lineupEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === youtubeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(youtubeRole);
                }
                if (reaction.emoji.name === twitchEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(twitchRole);
                }
                if (reaction.emoji.name === tenmanEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(tenmanRole);
                }
                if (reaction.emoji.name === lineupEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(lineupRole);
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === youtubeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(youtubeRole);
                }
                if (reaction.emoji.name === twitchEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(twitchRole);
                }
                if (reaction.emoji.name === tenmanEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(tenmanRole);
                }
                if (reaction.emoji.name === lineupEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(lineupRole);
                }
            } else {
                return;
            }
        });
    }

}  */