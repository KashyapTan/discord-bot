const Discord = require('discord.js');
require('dotenv').config()
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const mongoose = require('mongoose')

const fs = require('fs');



client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})
//**DATA BASE CONNECTION CODE**
/*mongoose
    .connect(process.env.mongoCode, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        userFindAndModify: false,
    })
    .then(() => {
        console.log('Connected to database!')
    })
    .catch((err) => {
        console.log(err)
    })*/

client.login(process.env.DISCORD_TOKEN)

//-------------------------------------
//voice channel creator

const {Collection} = require('discord.js')
const voiceCollection = new Collection()

client.on('voiceStateUpdate', async (oldState, newState) =>{
    const user = await client.users.fetch(newState.id)
    const member = newState.guild.member(user)

    if(!oldState.channel && newState.channel.id === '802171361828929646'){
        const channel = await newState.guild.channels.create(`${user.username}'s VC [L2D]`, {
            type: 'voice',
            parent: newState.channel.parent,
            
        })
        member.voice.setChannel(channel)
        voiceCollection.set(user.id, channel.id)
    }else if(!newState.channel){
        if(oldState.channelID === voiceCollection.get(newState.id)) return oldState.channel.delete()
    }
})
