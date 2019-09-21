const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'gm!commands') {

       message.reply('Zurzeit sind es 4 „Commands“');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

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
if (message.content === 'gm!ping') {
message.reply(`${message.client.ping}`);
}
});

client.on('message', message => {
 if (message.content === 'gm!shutdown'){
    message.channel.send(`${client.user.tag} wurde heruntergefahren(custom text)`) 
       client.destroy()
  }
  });
