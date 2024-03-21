# Discord Application Command Nuker
The title says it all. if you want to delete the application commands on a discord bot that YOU control, use this package

# Requirements

- NodeJS 16.11.0 or higher (As stated by the discordjs documentation). You may use your preffered package manager, but in this tutorial, I'll be using yarn
- The Discord bot's clientID and login token, as well as the guild ID that you want to delete guild commands from (if that's what you want to do)

# How to run

First, install the packages
```js
yarn install
```

Then, rename config.json.example to config.json and add in the required parameters you need. 
Finally, you can run the application


### To Delete Global Commands

```bash
yarn run delete-global
```

### To Delete Guild Commands

```bash
yarn run delete-guild
```

<h5>This package was made by a C# developer with no experience with js whatsoever, so feel free to contribute to this repo if you find any issues with it or want to add more functionality!</h5>