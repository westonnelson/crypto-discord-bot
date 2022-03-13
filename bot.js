// Require dependencies
const { Client, Intents } = require('discord.js');const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create a bot instance
const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Log our bot in
bot.login(process.env.DISCORD_BOT_TOKEN);

// Log to console when the bot is ready
bot.on('ready', () => {
    console.log(`${bot.user.username} is up and running!`);
  });

  // Reply to user messages
bot.on('message', async (message) => {
    // Do not reply if message was sent by bot
    if (message.author.bot) return;
  
    // Reply to !ping
    if (message.content.startsWith('!ping')) {
      return message.reply('I am working!');
    }
  });

  // Require dependencies
const { Client } = require('discord.js');
const dotenv = require('dotenv');
const axios = require('axios'); 	// New line that we added

//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var func = async() => {
  let data = await CoinGeckoClient.ping();
};
