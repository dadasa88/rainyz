const Discord = require('discord.js');
const intents = new Discord.Intents(32767);
const { prefix, token } = require('./config.json');
const fs = require('fs');
const client = new Discord.Client({ intents });

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(token);
