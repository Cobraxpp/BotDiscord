const { Client } = require('discord.js');
const mySecret = process.env['TOKEN'];
require("http").createServer((req,res) => res.end("bot is alive")).listen(3000)

const bot = new Client({ intents: 3276799 });

bot.on("ready", () => {
  console.log("bot iniciado correctamente");
});

bot.on("guildMemberAdd", async member => {
  const welcomeMessage = await member.guild.systemChannel.messages.fetch({ limit: 1 });
  welcomeMessage.forEach(async msg => {
    await msg.delete();
  });
});
//-------------//
bot.on("guildMemberAdd", member => {
  const role = member.guild.roles.cache.find(role => role.name === "Zorra bronce");
  member.roles.add(role);
});

//bot.on("messageCreate", async message => {
 // if (message.content === "gola") {
   // message.channel.send("hola");
 // }
  //if (message.author.id === "905892180944638054" && message.author.id !== bot.user.id) {
   // await message.delete();
 // }
  //if (message.content === ("Bienvenido a nuestro servido" )) {
   // await message.delete();
  //}
//})
 // bot.on("message", async message => {
  
 //if(message.content.includes("https://media.discordapp.net/attachments/752847829944238183/1069957105525735504/bidoof.gif")) {
   // await message.delete()

// }
 // }
    //)
//;
//---------------------------------
bot.on('ready', () => {
    console.log('Ready');
    bot.application.commands.set([
        { name: 'ping', description: 'pong!', options: [], }
    ]);
});

bot.on('interactionCreate', (interaction) => {
    if (interaction.isCommand() && interaction.commandName === 'ping') {
        interaction.reply('pong!');
    }
});



bot.login(mySecret);


