const Discord = require("discord.js");

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'gm!help') {

       message.reply('**Fun** „gm!ping“, „gm!founder“');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

client.on('ready', () => {
console.log('I am ready!');
});


client.on('message', message => {
if (message.content === 'gm!founder') {
message.reply('IchSchaueGerneFilme#2309');
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
 if (message.content === 'gm!start'){
    message.channel.send(`${client.user.tag} wurde gestartet(Bei Fragen an Gamer Royale#9637 wenden!)`) 
       client.restart()
  }
  });
