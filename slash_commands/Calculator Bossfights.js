const fs = require('fs');
const path = require('path');
const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { BotIcon, BotName, BotNameLink, EmbedColour } = require('../Database/Information.json');

module.exports = {
    name:"bossfight",
    data: new SlashCommandBuilder()
    .setName("bossfight")
    .setDescription("Lookup Boss Information.")
    .addStringOption(option => option.setName('bossname').setDescription('Enter Boss/Arena Name').setRequired(true)
    .addChoices(
        {"name": "Beyla", "value": "Beyla"},
        {"name": "Broodmother", "value": "Broodmother"},
        {"name": "The Center", "value": "TheCenter"},
        {"name": "Crystal Isles", "value": "CrystalIsles"},
        {"name": "Desert Titan", "value": "DesertTitan"},
        {"name": "Dragon", "value": "Dragon"},
        {"name": "Fenrisúlfr", "value": "Fenrisúlfr"},
        {"name": "Fjordur", "value": "Fjordur"},
        {"name": "Forest Titan", "value": "ForestTitan"},
        {"name": "Hati and Sköll", "value": "Hati and Sköll"},
        {"name": "Ice Titan", "value": "IceTitan"},
        {"name": "King Titan", "value": "KingTitan"},
        {"name": "Lost Island", "value": "LostIsland"},
        {"name": "Manticore", "value": "Manticore"},
        {"name": "Master Controller", "value": "MasterController"},
        {"name": "Megapithecus", "value": "Megapithecus"},
        {"name": "Moeder", "value": "Moeder"},
        {"name": "Overseer", "value": "Overseer"},
        {"name": "Ragnarok", "value": "Ragnarok"},
        {"name": "Rockwell Prime", "value": "RockwellPrime"},
        {"name": "Rockwell", "value": "Rockwell"},
        {"name": "Steinbjörn", "value": "Steinbjörn"},
        {"name": "Valguero", "value": "Valguero"},
    ))
    .addStringOption(option => option.setName('tier').setDescription('Enter Boss/Arena Tier').setRequired(true)
    .addChoices(
        {"name": "Gamma", "value": "gamma"},
        {"name": "Beta", "value": "beta"},
        {"name": "Alpha", "value": "alpha"},
    )),

run: async (client, interaction) => {

    var boss = interaction.options.getString('bossname');
    var tier = interaction.options.getString('tier');
    
    const Error = new MessageEmbed()
    .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
    .setColor(EmbedColour)
    .setTimestamp()
    .addField(`Command Error`,  `Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)`)
    .addField("\tError:", "An error occured, please ensure you typed your query properly.") 

    let rawdata = fs.readFileSync(path.resolve(__dirname, './../Database/Bossfights.json'));
    let response = JSON.parse(rawdata);
    let data = response;
    for(i=0;i<data.length;i++){
    if(data[i].Name.toLowerCase() === boss.toLowerCase()){ 
    
    if(tier.toLowerCase() === 'gamma') {
        const embed = new MessageEmbed()
        .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
        .setColor(EmbedColour)
        .setTimestamp()
        .addField(`ARK | Bossfight Calculator`, "Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)")
        .addField("\tBossname:", "```\n" + data[i].Name + "```")
        .addField("\tRequirements:", "```\n" + data[i].Requirements.Gamma + "```")      
        .addField("\tUnlocks:", "```\n" + data[i].Unlocks.Gamma + "```")    
        .addField("\tRewards:", "```\n" + data[i].Rewards.Gamma + "```")           
        .addField("\tLevels:", "```\n" + data[i].Levels.Gamma + "```")                   
        return interaction.followUp({ embeds: [embed] }) 
    }

    if(tier.toLowerCase() === 'beta') {
        const embed = new MessageEmbed()
        .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
        .setColor(EmbedColour)
        .setTimestamp()
        .addField(`ARK | Bossfight Calculator`, "Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)")
        .addField("\tBossname:", "```\n" + data[i].Name + "```")
        .addField("\tRequirements:", "```\n" + data[i].Requirements.Beta + "```")      
        .addField("\tUnlocks:", "```\n" + data[i].Unlocks.Beta + "```")    
        .addField("\tRewards:", "```\n" + data[i].Rewards.Beta + "```")           
        .addField("\tLevels:", "```\n" + data[i].Levels.Beta + "```")                   
        return interaction.followUp({ embeds: [embed] }) 
    }

    if(tier.toLowerCase() === 'alpha') {
        const embed = new MessageEmbed()
        .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
        .setColor(EmbedColour)
        .setTimestamp()
        .addField(`ARK | Bossfight Calculator`, "Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)")
        .addField("\tBossname:", "```\n" + data[i].Name + "```")
        .addField("\tRequirements:", "```\n" + data[i].Requirements.Alpha + "```")      
        .addField("\tUnlocks:", "```\n" + data[i].Unlocks.Alpha + "```")    
        .addField("\tRewards:", "```\n" + data[i].Rewards.Alpha + "```")           
        .addField("\tLevels:", "```\n" + data[i].Levels.Alpha + "```")                   
        return interaction.followUp({ embeds: [embed] }) 
    }
    }
} return interaction.followUp({ embeds: [Error] })
}
}