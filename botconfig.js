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

let xp = require("./xp.json")
let xpAdd = Math.floor(Math.random() * 7) +8
console.log(xpAdd);
if(!xp[message.author.id]){
xp[message.author.id]= {
xp: 0,
level: 1
};
}

xp[message.author.id].xp = xp[message.author.id] + xpAdd;

let nxtLvl = xp[message.author.id].level * 300;
if(nxtLvl <= xp[message.author.id].xp){
  xp[message.author.id].level = xp[message.author.id].level + 1
console.log(`level is ${xp[message.author.id].level} `);
