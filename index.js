import { Client, EmbedBuilder } from "discord.js";
import { config } from "dotenv";
import { keepAlive } from "./server.js";

config();

const client = new Client({
  intents: ["GuildMembers", "GuildInvites", "Guilds"],
});

const Token = process.env.TOKEN;

keepAlive();
client.login(Token);

client.on("guildMemberAdd", (c) => {
  const embed = new EmbedBuilder()
    .setColor(0x0099ff)
    .setTitle(`Hello ${c.displayName}`)
    .setImage(
      `https://tenor.com/view/hello-there-baby-yoda-mandolorian-hello-gif-20136589`
    )
    .setTimestamp();
  const channel = c.guild.channels.cache.get("1116428536723546184");
  channel.send({ embeds: [embed] });
});

client.on("guildMemberRemove", (c) => {
  const embed = new EmbedBuilder()
    .setColor(0x0099ff)
    .setTitle(`Bye ${c.displayName}`)
    .setImage(
      "https://tenor.com/view/pepe-space-run-pepe-gone-pepe-bye-bye-gif-20984604"
    )
    .setTimestamp();
  const channel = c.guild.channels.cache.get("1116428536723546184");
  channel.send({ embeds: [embed] });
});
