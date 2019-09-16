const Discord = require('discord.js');

const client = new Discord.Client();

 

// THIS  MUST  BE  THIS  WAY

„Fun“


client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'gm!founder') {

       message.reply('Gamer Royale#9637');

       }

});

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'gm!help') {

       message.reply('Dieser Bot wird zurzeit noch programmiert');

       }

});


client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'gm!ping') {

       message.reply(`${message.client.ping}`);

       }

});
