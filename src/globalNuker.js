// Require the necessary discord.js classes
const { REST, Routes } = require('discord.js');
const { token, clientID } = require('../config.json');

const rest = new REST().setToken(token)

rest.put(Routes.applicationCommands(clientID), { body: []})
    .then(() => console.log("Global slash commands for clientID " + clientID + " have been deleted."))
    .catch(console.error)
