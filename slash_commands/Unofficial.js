const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const snekfetch = require('snekfetch');
const unirest = require('unirest');
const { BotIcon, BotName, BotNameLink, EmbedColour } = require('./../Database/Information.json');

module.exports = {
    name:"unofficial",
    data: new SlashCommandBuilder()
    .setName("unofficial")
    .setDescription("Retrieves Unofficial Server Info")
    .addStringOption(option => option.setName('platform').setDescription('Enter your Platform').setRequired(true)    
    .addChoices(
        {"name": "Steam", "value": "steam"},
        {"name": "Xbox", "value": "xbox"},
        {"name": "PlayStation", "value": "ps"},
    ))
    .addStringOption(option => option.setName('server').setDescription('Enter Server Name').setRequired(true)),

run: async (client, interaction) => {

    const query = interaction.options.getString('server');
    const platform = interaction.options.getString('platform');

    const exceedembed = new MessageEmbed()
    .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
    .setDescription(`Too many results, please use a more specific search`)
    .setColor(EmbedColour) 

    let error = "This Server couldn't be found, it may be offline or doesn't exist, Ensure it's 100% spelt correctly and that it's the **FULL** server name."
    const NSFembed = new MessageEmbed()
    .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
    .setColor(EmbedColour)
    .setTimestamp()
    .addField(`Command Response Time: [0.${Math.floor(Date.now() - (interaction.createdTimestamp / 1000)) % 60}s]`, "To Report A Down Unofficial Server contact the server owners.")
    .addField("\tError:", "```\n" +error+"```")


if(platform === "xbox") {

let search = query.toString();

snekfetch.get("http://arkdedicated.com/xbox/cache/unofficialserverlist.json").then(r => {
    let server = search;
    let body = r.body;
    let data = body.filter(cluster => cluster.Name.toLowerCase().includes(server.toLowerCase()));
    if(!data) { return interaction.followUp({ embeds: [NSFembed] })
    } else {

const embed = new MessageEmbed()
.setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
.setDescription(`ARK | Xbox Unofficial`)
.setColor(EmbedColour)
.setTimestamp()
.addField(`Command Response Time: [0.${Math.floor(Date.now() - (interaction.createdTimestamp / 1000)) % 60}s]`, "Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)")
         
data.forEach(un => {
let servername = un.Name;
let players = `${un.NumPlayers} / ${un.MaxPlayers}`;
let map = un.MapName;
let day = un.DayTime;
let ip = un.IP;
let port = un.Port;
embed.addField(`${servername}`,`Players: ${players}\nMap: ${map}\nDay:${day}\nIP: ${ip}\nPort: ${port}`,true);
})
return interaction.followUp({ embeds: [embed] }).catch(error => {
    if (error.code === 50035) return interaction.followUp({ embeds: [exceedembed] })
}); 
    } 
    })
}

if(platform === "steam") {
    unirest.get("https://api.battlemetrics.com/servers?filter[game]=ark&page[size]=25&filter[search]=\"" + query + "\"")
    .end(function (result) {
        var json = JSON.parse(JSON.stringify(result.body));
        if(result.status != 200) {
            return interaction.followUp({ content: 'An error occurred whilst trying to connect to Battlemetrics!' });
        } else {

            var i = 0;

const embed = new MessageEmbed()
.setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
.setDescription(`ARK | PC Unofficial`)
.setColor(EmbedColour)
.setTimestamp()
json.data.map(data => {
i = i + 0;
embed.addField(`${data.attributes.name}`,`Players: ${data.attributes.players}/${data.attributes.maxPlayers}\nMap: ${data.attributes.details.map}\nIP: ${data.attributes.ip}\nPort: ${data.attributes.port}\nStatus: ${data.attributes.status}`,true); 
})
i = i + 0;                         
return interaction.followUp({ embeds: [embed] }).catch(error => {
if (error.code === 50035) return interaction.followUp({ embeds: [exceedembed] })
}); 
}
})
}      
if(platform === "ps") {
    let search = query.toString();

    snekfetch.get("http://arkdedicated.com/ps4/cache/unofficialserverlist.json").then(r => {
        let server = search;
        let body = r.body;
        let data = body.filter(cluster => cluster.Name.toLowerCase().includes(server.toLowerCase()));
        if(!data) { return interaction.followUp({ embeds: [NSFembed] })
        } else {


const embed = new MessageEmbed()
.setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
.setDescription(`ARK | PlayStation Unofficial`)
.setColor(EmbedColour) 
.setTimestamp()
.addField(`Command Response Time: [0.${Math.floor(Date.now() - (interaction.createdTimestamp / 1000)) % 60}s]`, "Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)")
         
data.forEach(un => {
let servername = un.Name;
let players = `${un.NumPlayers} / ${un.MaxPlayers}`;
let map = un.MapName;
let day = un.DayTime;
let ip = un.IP;
let port = un.Port;
embed.addField(`${servername}`,`Players: ${players}\nMap: ${map}\nDay:${day}\nIP: ${ip}\nPort: ${port}`,true);                              
})
return interaction.followUp({ embeds: [embed] }).catch(error => {
    if (error.code === 50035) return interaction.followUp({ embeds: [exceedembed] })
}); 
    } 
    })
}
}
}