/*module.exports = {
    name: 'how2sugg',
    permissions: [''],
    description: 'how to use suggest command embed',
    execute(client, message, cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#3478ff')
        .setTitle('How to use the !suggest command:')
        .addFields(
            {name: 'Step 1', value: "Type '!suggest'"},
            {name: 'Step 2', value: "Type in what you want to suggest"},
            {name: 'Step 3', value: "Click enter and send the message"}

        )
        .setFooter("This will send your suggestion to the #📮⏐suggestions channel where members can go and vote 'yes' or 'no' depending on if they like the suggestion or not.")

        message.channel.send(newEmbed)
    }
}*/