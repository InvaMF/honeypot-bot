const { Client, GatewayIntentBits } = require('discord.js');

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;

console.log('TOKEN lu:', TOKEN ? `"${TOKEN.substring(0, 10)}..." (${TOKEN.length} caractères)` : 'UNDEFINED');
console.log('CHANNEL_ID lu:', CHANNEL_ID || 'UNDEFINED');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', async message => {
  if (message.author.bot) return;
  if (message.channelId === CHANNEL_ID) {
    await message.member.ban({ reason: 'Honeypot — ban automatique' });
  }
});

client.login(TOKEN);
