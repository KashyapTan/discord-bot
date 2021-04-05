/*const {fakeTweet} = require('fake-tweet')

module.exports = {
    name: 'tweet',
    aliases: [''],
    permissions: ['ADMINISTRATOR'],
    description: 'creates a fake tweet',
    execute(client, message, cmd, args, Discord){
        
        let nickName = args[0]
        let Name = args[1]
        let avatar = args[2]
        let userText = args.slice(3).join(" ")

        if(!nickName || !Name || !avatar || !userText) {
            return message.channel.send(' ERROR: Incorrect format. Correct format: [nickname] [Name] [avatar (link)] [text of tweet]')
        }
    
        fakeTweet={
            user: {
              nickname: nickName,
              name: Name,
              avatar: "avatar",
              verified: true,
              locked: false
            },
            display: "lightsout",
            text: userText,
            image: "",
            date: "3:32 PM · Feb 14, 1997",
            app: "Twitter Web App",
            retweets: 32000,
            quotedTweets: 100,
            likes: 12700
          }
        message.channel.send(fakeTweet)
    }
}*/