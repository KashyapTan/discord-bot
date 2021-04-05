/*module.exports = {
    name: 'rules',
    permissions: [''],
    execute(client, message, cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#3478ff')
        .setTitle('Server Rules:')
        .addFields(
            {name: 'Rule 1', value: "Follow the Discord Terms of Service: https://dis.gd/guidelines"},
            {name: 'Rule 2', value: "Do not harass, disrespect, or be toxic to anyone."},
            {name: 'Rule 3', value: "Use the appropriate channels for content you post."},
            {name: 'Rule 4', value: "Do not advertise any server or other social media links in chat, unless it is in the " + '<#' + '802167672481644567' + '> channel or relates to the conversation.'},
            {name: 'Rule 5', value: "Refrain from talking about oversensitive topics in any chats. This includes overly NSFW messages, images, and other content."},
            {name: 'Rule 6', value: "Direct racism is not allowed towards a user, culture, religion, event, and so on."},
            {name: 'Rule 7', value: "Refrain from spamming."},

        )
        .setFooter("The infringement of any of these rules can lead to you getting muted or banned.")
        message.channel.send(newEmbed)
    }
}*/