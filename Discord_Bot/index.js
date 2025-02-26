import { Client, Events, GatewayIntentBits } from 'discord.js';

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
  ],
});

client.on("messageCreate", (message) => {
  if(message.author.bot) return;
  console.log(message.content); //only message content
  // console.log(message); //whole message
  message.reply({
    content: "Hello, I'm a bot!",
  })
});

client.on("interactionCreate", (interaction) => {
  // console.log(interaction); //whole interaction
  console.log(interaction.commandName); //only interaction command Name
  interaction.reply({
    content: "Pong!",
  });
});

client.login(
  "paste your token which is genrated by your bot"
);
