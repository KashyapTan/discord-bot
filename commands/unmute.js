/*const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'unmute',
    permissions: ["KICK_MEMBERS", "BAN_MEMBERS"],
    description: "This unmutes a member",
    execute(client, message, cmd, args, Discord) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.delete()

        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            let memberTarget = message.guild.members.cache.get(target.id);

            const errorMessage = new MessageEmbed()
                .setColor('#3478ff')
                .setTitle(`${memberTarget.user.tag} has been unmuted`)

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(errorMessage);
        } else {
            message.channel.send('Cant find that member!');
        }
    }
}*/