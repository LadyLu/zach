const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  if (message.content.includes("Leo")) {
  message.channel.send("He may be fast, but Oi'm much  stronger than that kitty.");
  } else
  
  if (message.content.includes("Venom")) {
  message.channel.send("Piece of Piss.");
  } else
  
  if (message.content.includes("Monique")) {
  message.channel.send("Can we not mention her....?");
  } else
  
  if (message.content.includes("Valentina")) {
  message.channel.send("She's a pretty sheila she is.");
  } else
     
  if (message.content.includes("Am I pretty Zach")) {
  message.channel.send("GO ASK THE MIRROR!");
  } else
      
  if (message.content.includes("Serpintine")) {
  message.channel.send("AH-OI GOTTA GO, MATE.");
  }
    
  if (message.content.includes("I love you Zach")) {
  message.channel.send("Bloody hell, I love ya too.");
  }

 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
