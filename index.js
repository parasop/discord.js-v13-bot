const discord = require("discord.js");
const client = new discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    "GUILDS",
    "GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
});

client.config = require("./config.json")
client.commands = new discord.Collection();
client.aliases = new discord.Collection();


["commands"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("ready",()=> {


  console.log(`bot is ready!`)
})


client.on("messageCreate", async message => {

  //simply ignore bot and dm messages
  if (message.author.bot || !message.guild) return;

  //if message dont start with prefix return it
  if (!message.content.startsWith(client.config.prefix)) return;


  //if message member not found find from fetch
  if (!message.member) message.guild.fetchMembers(message);

  //SCLICE FOR REMOVE PREFIX FROM ARGS, trim for remove spaces and split for make content in array
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);



  //take command from args first content example !help mod  taking help from it
  const cmd = args.shift().toLowerCase();


  //if command lengh is 0 example !  so it will return
  if (cmd.length === 0) return;


  let command = client.commands.get(cmd)


  //finding command from aliases
  if (!command) command = client.commands.get(client.aliases, get(cmd))


  if (!command) return




  if (command) command.run(client, message, args)





})


client.login(client.config.token)



