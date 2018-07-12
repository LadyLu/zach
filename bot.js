const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  if (message.content.includes("a")) {
  message.channel.send("REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
  } else
  
  if (message.content.includes("e")) {
  message.channel.send("REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
  } else
  
  if (message.content.includes("o")) {
  message.channel.send("REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
  } else
  
  if (message.content.includes("i")) {
  message.channel.send("REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
 }

 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
