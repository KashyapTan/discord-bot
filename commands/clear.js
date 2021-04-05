const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'clear',
    permissions: ["ADMINISTRATOR"],
    description: 'clears x messages',
    async execute(client, message, cmd, args, Discord) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return 

        const errorMessage1 = new MessageEmbed()
            .setColor('#3478ff')
            .setTitle(`❌ Please enter the amount of messages to clear!`)

        const errorMessage2 = new MessageEmbed()
            .setColor('#3478ff')
            .setTitle(`❌ Please type a real number!`)

        const errorMessage3 = new MessageEmbed()
            .setColor('#3478ff')
            .setTitle(`❌ You can't remove more than 100 messages!`)

        const errorMessage4 = new MessageEmbed()
            .setColor('#3478ff')
            .setTitle(`❌ Please mention a number between 1 and 100!`)

        if (!args[0]) return message.reply(errorMessage1);

        if (isNaN(args[0])) return message.reply(errorMessage2);

        if (args[0] > 100) return message.reply(errorMessage3);

        if (args[0] < 1) return message.reply(errorMessage4);

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages)
        });
    }
}