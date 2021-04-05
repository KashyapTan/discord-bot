/*const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
var { getData, getPreview } = require('spotify-url-info')
const { description, execute } = require('./how2sugg');

const queue = new Map();

module.exports = {
    name: 'p',
    aliases: ['skip', 'stop', 'pause', 'resume',],
    permissions: [''],
    description: 'Advanced music command',
    async execute(client, message, cmd, args, Discord) {

        const voice_channel = message.member.voice.channel
        if (!voice_channel) return message.channel.send('You need to be in a channel to execute this command!')
        const permissions = voice_channel.permissionsFor(message.client.user)
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins')
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins')

        const server_queue = queue.get(message.guild.id);

        if (cmd === 'p') {
            if (!args.length) return message.channel.send('You need to send the second argument!');
            let song = {};

            if (ytdl.validateURL(args[0])) {
				const songInfo = await ytdl.getInfo(args[0]);
				song = { title: songInfo.videoDetails.title, url: songInfo.videoDetails.video_url };
			} else if (args[0].includes('spotify')) {
				const spotifyTrackInfo = await getPreview(args[0]);

				const videoFinder = async (query) => {
					const videoResult = await ytSearch(query);
					return videoResult.videos.length > 1 ? videoResult.videos[0] : null;
				};

				const video = await videoFinder(`${spotifyTrackInfo.title} ${spotifyTrackInfo.artist}`);

				if (video) {
					song = { title: video.title, url: video.url };
				} else {
					message.reply('Error finding song.');
				}
			} else {
				const videoFinder = async (query) => {
					const videoResult = await ytSearch(query);
					return videoResult.videos.length > 1 ? videoResult.videos[0] : null;
				};
				const video = await videoFinder(args.join(''));

				if (video) {
					song = { title: video.title, url: video.url };
				} else {
					message.reply('Error finding song.');
				}
			}

            if (!server_queue) {
                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: [],
                }

                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);

                try {
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);
                } catch (err) {
                    queue.delete(message.guild.id);
                    message.channel.send('There was an error connecting!');
                    throw err;
                }
            } else {
                server_queue.songs.push(song);
                return message.channel.send(`✅ **${song.title}** added to queue!`);
            }
        }

        else if (cmd === 'skip') skip_song(message, server_queue);
        else if (cmd === 'stop') stop_song(message, server_queue);
        else if (cmd === 'pause') pause_song(message, server_queue);
        else if (cmd === 'resume') resume_song(message, server_queue);
    }
}

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);
    if (!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
        .on('finish', () => {
            song_queue.songs.shift();
            video_player(guild, song_queue.songs[0]);
        });
    await song_queue.text_channel.send(`🎶 Now playing **${song.title}**`)
}

const skip_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send('❌ You need to be in a channel to execute this command!');
    if (!server_queue) {
        return message.channel.send(`❌ There are no songs in queue`);
    }
    server_queue.connection.dispatcher.end();
}

const stop_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send('❌ You need to be in a channel to execute this command!');
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();
}

const pause_song = (message, server_queue) => {
    if(!server_queue.connection)
        return message.channel.send('❌ There is currently no music playing!')
    if (!message.member.voice.channel) 
        return message.channel.send('❌ You need to be in a channel to execute this command!');
    if(server_queue.connection.dispatcher.paused)
        return message.channel.send('❌ The song is already paused')
    server_queue.connection.dispatcher.pause()
    message.channel.send('✅ **The song has been paused!**')
}

const resume_song = (message, server_queue) => {
    if(!server_queue.connection)
        return message.channel.send('❌ There is currently no music playing!')
    if (!message.member.voice.channel) 
        return message.channel.send('❌ You need to be in a channel to execute this command!');
    if(server_queue.connection.dispatcher.resumed)
        return message.channel.send('❌ The song is already playing!')
    server_queue.connection.dispatcher.resume()
    message.channel.send('✅ **The song has been resumed!**')
}

const resumeAliasPlay_song = (message, server_queue) => {
    if(!server_queue.connection)
        return message.channel.send('❌ There is currently no music playing!')
    if (!message.member.voice.channel) 
        return message.channel.send('❌ You need to be in a channel to execute this command!');
    if(server_queue.connection.dispatcher.resumed)
        return message.channel.send('❌ The song is already playing!')
    server_queue.connection.dispatcher.resume()
    message.channel.send('✅ **The song has been resumed!**')
}*/