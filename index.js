console.log(`Starting Bot...`);

const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '早安') {
    msg.reply('早安！你有沒有吃早餐');
  }
});

client.on('message', msg => {
  if (msg.content === '午安') {
    msg.reply('午安！你有沒有吃午餐');
  }
});

client.on('message', msg => {
  if (msg.content === '晚安') {
    msg.reply('晚安！明天見');
  }
});

client.login(token);
