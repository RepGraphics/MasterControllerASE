const fs = require('fs');
const path = require('path');
const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { BotIcon, BotName, BotNameLink, EmbedColour } = require('../Database/Information.json');

module.exports = {
    name:"gentwocycles",
    data: new SlashCommandBuilder()
    .setName("gentwocycles")
    .setDescription("Lookup GenTwo Cycles Information.")
    .addStringOption(option => option.setName('dropcolour').setDescription('Enter Supply Drop Colour Name').setRequired(true)
    .addChoices(
        {"name": "Blue", "value": "Blue"},
        {"name": "Green", "value": "Green"},
        {"name": "Orange", "value": "Orange"},
        {"name": "Cyan", "value": "Cyan"},
        {"name": "White", "value": "White"},
        {"name": "Red", "value": "Red"},
        {"name": "Purple", "value": "Purple"},
        {"name": "Yellow", "value": "Yellow"},
    )),

run: async (client, interaction) => {

    var cycle = interaction.options.getString('dropcolour');

    const Error = new MessageEmbed()
    .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
    .setColor(EmbedColour)
    .setTimestamp()
    .addField(`Command Error`,  `Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)`)
    .addField("\tError:", "An error occured, please ensure you typed you query properly.") 
    
    let rawdata = fs.readFileSync(path.resolve(__dirname, './../Database/Space Cycles.json'));
    let response = JSON.parse(rawdata);
    let data = response;
    for(i=0;i<data.length;i++){
    if(data[i].SupplyDrop === cycle){ 

        var icon = data[i].Image;

        const embed = new MessageEmbed()
        .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
        .setColor(EmbedColour)
        .setTimestamp()
        .setImage(icon)
        .addField(`ARK | GenTwo Space Cycles`, "Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)")
        .addField("\tBiome Name:", "```\n" + data[i].Cycle + "```")
        .addField("\tSupply Drop Colour:", "```\n" + data[i].SupplyDrop + "```")      
        .addField("\tResources Available:", "```\n" + data[i].Resources + "```")                     
        return interaction.followUp({ embeds: [embed] }) 
    }
} return interaction.followUp({ embeds: [Error] }) 
}
}