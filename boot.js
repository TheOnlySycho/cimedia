const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Boot is starting!');
  client.user.setActivity("Boot Up…", {
  type: "PLAYING"
});
client.user.setStatus(`dnd`)
});
client.login('NzQwNTI4NTA2MTY0NzQwMTc3.XyqU6g.1Xodjmlt-9sLCVJn5JnipQ7CCCw');
