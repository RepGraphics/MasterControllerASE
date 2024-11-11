const fs = require('fs');
const path = require('path');
const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { BotIcon, BotName, BotNameLink, EmbedColour } = require('../Database/Information.json');

module.exports = {
    name:"clone",
    data: new SlashCommandBuilder()
    .setName("clone")
    .setDescription("Calculate Creature Cloning Costs.")
    .addStringOption(option => option.setName('creature').setDescription('Enter Creature Name').setRequired(true))
    .addNumberOption(option => option.setName('level').setDescription('Enter Creature Level').setRequired(true))
    .addNumberOption(option => option.setName('rates').setDescription('Enter Server Rates')),

run: async (client, interaction) => {

    var creature = interaction.options.getString('creature');
    var level = interaction.options.getNumber('level');
    var optionalrate = interaction.options.getNumber('rates');
    if(!interaction.options.getNumber('rates')) {optionalrate = 2};

    const Error = new MessageEmbed()
    .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
    .setColor(EmbedColour)
    .setTimestamp()
    .addField(`Command Error`,  `Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)`)
    .addField("\tError:", "An error occured, please ensure you typed you query properly.") 

    let rawdata = fs.readFileSync(path.resolve(__dirname, './../Database/Cloning Creatures.json'));
    let response = JSON.parse(rawdata);
    let data = response;
    for(i=0;i<data.length;i++){
    if(data[i].Creature.toLowerCase() === creature.toLowerCase()){ 

    var timepershard = `7`;
    var PerLevelElement = data[i].LevelCost;
    var PerLevel = (PerLevelElement * level);
    var BaseCostElement = data[i].BaseCost;
    var CloneCost = (BaseCostElement * 1) + PerLevel;
    var CloneTime = (CloneCost * (timepershard / optionalrate));
    let days = Math.floor(CloneTime / (3600 * 24));
    let hours = Math.floor(CloneTime / 3600) % 24;
    let minutes = Math.floor((CloneTime % 3600) / 60);
    let seconds = Math.floor(CloneTime % 60);
    var timeoutput = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    var rateouput = `${optionalrate}x`;
    var cost = `${CloneCost} Shards`;
    var icon = `https://cdn.discordapp.com/attachments/813528039106543617/963143074656190545/Cloning.png`

    const embed = new MessageEmbed()
    .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
    .setColor(EmbedColour)
    .setTimestamp()
    .setThumbnail(icon)
    .addField(`ARK | Cloning Calculator`, "Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)")
    .addField("\tCreature:", "```\n" + data[i].Creature + "```")
    .addField("\tLevel:", "```\n" + level + "```")      
    .addField("\tCost:", "```\n" + cost + "```")    
    .addField("\tRate:", "```\n" + rateouput + "```")           
    .addField("\tClone Time:", "```\n" + timeoutput + "```")                   
    return interaction.followUp({ embeds: [embed] }) 
    }
} return interaction.followUp({ embeds: [Error] })
}
}