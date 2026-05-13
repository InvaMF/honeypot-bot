const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const HONEYPOT_CHANNEL_ID = process.env.CHANNEL_ID;
const TOKEN = process.env.TOKEN;

client.on('messageCreate', async message => {
  if (message.author.bot) return;
  if (message.channelId === HONEYPOT_CHANNEL_ID) {
    await message.member.ban({ reason: 'Honeypot — ban automatique' });
  }
});

client.login(TOKEN);
