// Require the necessary discord.js classes
const { REST, Routes } = require('discord.js');
const { token, clientID, guildID } = require('../config.json');

const rest = new REST().setToken(token)

rest.put(Routes.applicationGuildCommands(clientID, guildID), {body: []})
    .then(() => console.log("All guild commands in guild ID " + guildID + " have been deleted."))
    .catch(console.error)
