/*const { MessageEmbed } = require('discord.js')

const ms = require('ms');
module.exports = {
    name: 'mute',
    permissions: ["KICK_MEMBERS", "BAN_MEMBERS"],
    description: "This mutes a member",
    execute(client, message, cmd, args, Discord) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.delete()
        const target = message.mentions.users.first();
        if (target) {

            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            let memberTarget = message.guild.members.cache.get(target.id);


            const errorMessage2 = new MessageEmbed()
                .setColor('#3478ff')
                .setTitle(`${memberTarget.user.tag} has been muted`)
            const errorMessage3 = new MessageEmbed()
                .setColor('#3478ff')
                .setTitle(`${memberTarget.user.tag} has been muted for ${args[1]}`)


            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(errorMessage2);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(errorMessage3);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            const errorMsg3 = new MessageEmbed()
                .setColor('#304281')
                .setTitle(`❌ Cant find that member!`)
            message.channel.send(errorMsg3);
        }
    }
}*/