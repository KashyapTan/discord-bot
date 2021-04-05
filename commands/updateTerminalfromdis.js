/*const { MessageEmbed } = require('discord.js')
const glob = require('glob')
const AsciiTable = require('ascii-table')
const fs = require('fs')

module.exports = {
    name: 'reload',
    aliases: ['refresh', 'f5', 'node .'],
    permissions: [''],
    description: '',
    async execute(client, message, cmd, args, Discord) {
        if (message.author.id !== "727186657513701416") return
        client.commands.sweep(() => true)
        glob(`${__dirname}/../commands/*.js`, async (err, filePaths) => {
            if (err) return console.log(err)
            filePaths.forEach((file) => {
                delete require.cache[require.resolve(file)]

                const pull = require(file)

                if (pull.name) {


                    const table = new AsciiTable('Refreshed Cmds')
                    table
                        .setHeading('Name', 'Status');
                    const commands = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
                    for (let file of commands) {
                        if (pull.name) {
                            client.commands.set(pull.name, pull);
                            table.addRow(file, '✅')
                        } else {
                            table.addRow(file, '❌')
                            continue;
                        }
                    }
                    console.log(table.toString())


                    //console.log(`| Reloaded commands | .${pull.name} Command ✅ |`)
                    client.commands.set(pull.name, pull)
                }
            })
            const success = new MessageEmbed()
                .setColor('#3478ff')
                .setTitle(`✅ Refreshed Terminal`)
            message.channel.send(success)
        })
    }
}*/