/*const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'lfgvc',
    aliases: [''],
    permissions: [''],
    description: 'creates an lfg message',
    execute(client, message, cmd, args, Discord) {
        //variables to store rank images
       // let rankQuery = 'https://images-ext-2.discordapp.net/external/_gMLxMiuOCorMiJWQJ7jEbJQqviOfzXlDZTM32pllJI/https/trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/0.png'
       // const iron = 'https://images-ext-2.discordapp.net/external/adwxB3nUa3evvyb6o_MPZeUWum4xNvT-YWpbWojF7GY/https/trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/3.png'
       // const bronze = 'https://images-ext-1.discordapp.net/external/3fNrGxsXaKw_1ijrzHzpuxrdn0ftOvZ5v-ZBuF2M_HY/https/trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/6.png'
       // const silver = 'https://images-ext-1.discordapp.net/external/yobMSNXJWbTXsOanuOWn0sDCVjHIrsmaapLnXNW63fY/https/trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/9.png'
       // const gold = 'https://images-ext-1.discordapp.net/external/8Vv5MFuaMgAX3SJPg6ef6FlFcme7pwKq-qTaAUVXu9Y/https/trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/12.png'
       // const plat = 'https://images-ext-1.discordapp.net/external/NbI2Y5-fBDnD9snWXA-B8BqhSnygvbW6hEkqBfUQxcI/https/trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/15.png'
       // const diamond = 'https://images-ext-2.discordapp.net/external/T0aINsc4Pq4NUs6lh8Q-px3_jojbkop0p0WA_ISM65I/https/trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/18.png'
       // const immo = 'https://images-ext-1.discordapp.net/external/OYV8EClpIGGqz4N6J5w9zZ_dAEuDE1WfJNhocFZRTbY/https/trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/23.png'
       // const radiant = 'https://images-ext-2.discordapp.net/external/Z-Go_0gunAymrl6-fF8mBLaInwpSN26ThPSbt7HtQRk/https/trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/24.png'

       
       // checks if member is in a voice channel
        const voiceChannel = message.member.voice.channel

       // const errorMsg = new MessageEmbed()
          //  .setColor('#3478ff')
            //.setTitle('❌ You need to be in a voice channel to execute this command')

        //if (!voiceChannel) return message.channel.send(errorMsg)
        if (voiceChannel) {
            //checks if user gave any requirements
            let text = args.join(" ")
            const errorEmbed = new MessageEmbed()
                .setColor('#3478ff')
                .setTitle('❌ Please enter your requirements')
            if (!text) return message.channel.send(errorEmbed)

            //creates invite
            const embed = new MessageEmbed()
            voiceChannel.createInvite({ unique: true })
                .then(invite => {
                    embed
                        .setColor('#3478ff')
                        //.setThumbnail(rankQuery)
                        .setTitle(`${message.author.username} is looking for a teammate in voice channel: \`${voiceChannel.name}\``)
                        .setDescription(`
        **Requirements:** \n ${text} \n
        **VC Invite:** [Click here to join their Voice Channel](https://discord.gg/${invite.code}) \n
        **Click the mention to view their profile/dm them:** <@${message.author.id}> \n\n
        `)
                        .setFooter('・Type ".lfg (requirements)" to create a LFG message')
                    message.channel.send(embed)
                    message.delete()
                })
        }
        //if user is not in a vc, then send this embed
        else {
            let text2 = args.join(" ")

            const embed2 = new MessageEmbed()
                .setColor('#3478ff')
                //.setThumbnail(rankQuery)
                .setTitle(`${message.author.username} is looking for a teammate!`)
                .setDescription(`
        **Requirements:** \n ${text2} \n
        **Click the mention to view their profile/dm them:** <@${message.author.id}> \n\n
        `)
                .setFooter('・Type ".lfg (requirements)" to create a LFG message')
            message.channel.send(embed2)
            message.delete()
        }
    }
}*/