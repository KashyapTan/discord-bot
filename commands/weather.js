/*const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: 'weather',
    aliases: ['wth'],
    permissions: [''],
    description: 'displays the weather',
    execute(client, message, cmd, args, Discord){
        weather.find({search: args.join(" "), degreeType: 'F'}, function (error, result){
            if(error) return message.channel.send(error);
            if(!args[0]) return message.channel.send('Please specify a location')
    
            if(result === undefined || result.length === 0) return message.channel.send('**Invalid** location');
    
            var current = result[0].current;
            var location = result[0].location;
    
            const weatherinfo = new Discord.MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather forecast for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor('#3478ff')
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Temperature', `${current.temperature}° F`, true)
            .addField('Wind', current.winddisplay, true)
            .addField('Feels like', `${current.feelslike}°`, true)
            .addField('Humidity', `${current.humidity}%`, true)
    
    
            message.channel.send(weatherinfo)
            })        
        }
    }*/
