/*module.exports = {
    name: 'leave',
    permissions: [''],
    async execute(client, message, cmd, args, Discord){
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("You need to be in a voice channel to stop the music!");
        await voiceChannel.leave();
        await message.channel.send('✅ **Successfully disconnected!**')
    }
}*/