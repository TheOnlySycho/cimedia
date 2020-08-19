//discord.js
const Discord = require('discord.js');
const client = new Discord.Client();
//ytdl-core
const ytdl = require('ytdl-core');
//prefix
const prefix = "c!"
//Change to Rebootings

//bot init
client.once('ready', () => {
client.user.setActivity({
        name: 'Music from YouTube',
        type: 'LISTENING',
})


});
 
//bot commands
client.on('message', async message => {
    if (message.content === `c!music`) {
	    var link = args[0]
	    const validateUrl = 'youtube-validate'
	   
    const connection = await message.member.voice.channel.join();
    if (!args.length) {
		return message.channel.send(`You didn't provide a YouTube link, ${message.author}!`);
    }
    
    
    }
	});
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();
	if (command === "play") {
	    var link = args[0]
 
// Or, if you're using ES6 syntax:
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply(`Please join a voice channel first!`);
		}
        if (!args.length) {
		return message.channel.send(`You didn't provide a YouTube link, ${message.author}!`);
    }
    var getYouTubeID = require('get-youtube-id');
 
var id = getYouTubeID(args[0]);
var getYoutubeTitle = require('get-youtube-title')
if (link.includes("://")) {
  console.log("A valid link was provided.")
} else {
const exampleEmbed1 = new Discord.MessageEmbed()
.setColor(`#DC143C`)
	.setFooter('Please enter a valid link.');
message.channel.send(exampleEmbed1)
  console.error("An invalid link was provided.")
}

getYoutubeTitle(id, function (err, title) {
console.log(`\nNow Playing: ${title}\nLink: ${args[0]}\nServer: ${message.guild.name}\nUser: ${message.author.tag}`)
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Now Playing:",
    description: `[${title}](${args[0]}) in ${voiceChannel.name}`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "c!play"
    }
  }
});
message.channel.send(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`)
})
		voiceChannel.join().then(connection => {
			const stream = ytdl(`${args[0]}`, { filter: 'audioonly' });
			const dispatcher = connection.play(stream);

			dispatcher.on('finish', () => voiceChannel.leave());
		});
//Stop Command
	} else if (command === "stop") {
        const voiceChannel = message.member.voice.channel;
       voiceChannel.leave()
	const exampleEmbed = new Discord.MessageEmbed()
	.setFooter('Stopped the Playback');
message.channel.send(exampleEmbed)
console.log(`\n${message.author.tag} Stopped the Playback.`)
//Help Command
    } else if (command === "help") {  
      message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Help",
        url: "",
        description: "Cimedia's Help Section",
        fields: [{
            name: "c!play",
            value: "Usage: c!play *youtube link goes here*\nPlays music from YouTube."
          },
          {
            name: "c!stop",
            value: "Usage: c!stop\nStops the music playback."
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "c!help"
        }
      }
    });
    } 
})
client.login("NzQwNTI4NTA2MTY0NzQwMTc3.XyqU6g.1Xodjmlt-9sLCVJn5JnipQ7CCCw")
