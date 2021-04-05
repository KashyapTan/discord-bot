const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'lfg',
    aliases: [''],
    permissions: [''],
    description: '',
    async execute(client, message, cmd, args, Discord) {
        message.delete()
        const questions = [
            "**Rank:**",
            "**Region:**",
            "**#People Needed:**",
            "**Agent Preferences:**",
            "**Additional Preferences:**"
        ]

        let collectCounter = 0
        let endCounter = 0

        const text1 = new MessageEmbed()
        .setColor('3478ff')
        .setDescription(`**Your lfg message has been created in** <#473881885416620042>`)

        const filter = (m) => m.author.id === message.author.id
        const appStart = await message.author.send(questions[collectCounter++])
        const channel = appStart.channel

        const collector = channel.createMessageCollector(filter)

        collector.on("collect", () => {

            if (collectCounter < questions.length) {
                channel.send(questions[collectCounter++])
            } else {
                channel.send(text1)
                collector.stop('Done')
            }
        })

        const appsChannel = client.channels.cache.get('473881885416620042');
        collector.on('end', (collected, reason) => {
            if (reason === 'Done') {
                let index = 1
                const mappedResponses = collected.map((msg) => {
                    return `${questions[endCounter++]}\n${msg.content}`
                }).join('\n')

                appsChannel.send(
                    new MessageEmbed()
                        .setColor('3478ff')
                        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`__**Profile/DM:**__ <@${message.author.id}> \n\n ${mappedResponses}`)
                        .setTimestamp()


                )
            }


        })
    }
}