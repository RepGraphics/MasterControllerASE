const fs = require('fs');
const path = require('path');
const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { BotIcon, BotName, BotNameLink, EmbedColour } = require('../Database/Information.json');

module.exports = {
    name:"raid",
    data: new SlashCommandBuilder()
    .setName("raid")
    .setDescription("Calculate Structure Damage Requirements")
    .addStringOption(option => option.setName('tekstructure').setDescription('Enter Tek Structure Name')
    .addChoices(
        {"name": "Cryofridge", "value": "Cryofridge"},
        {"name": "Forcefield", "value": "Forcefield"},
        {"name": "Cloning Chamber", "value": "Cloning Chamber"},
        {"name": "Transmitter", "value": "Transmitter"},
        {"name": "Replicator", "value": "Replicator"},
        {"name": "Teleporter", "value": "Teleporter"},
        {"name": "Tek Generator", "value": "Tek Generator"},
        {"name": "Vacuum Compartment", "value": "Vacuum Compartment"},
        {"name": "Vacuum Moonpool Compartment", "value": "Vacuum Moonpool"},
        {"name": "Tek Foundation", "value": "Tek Foundation"},
        {"name": "Tek Wall", "value": "Tek Wall"},
        {"name": "Tek Doorframe", "value": "Tek Doorframe"},
        {"name": "Tek Door", "value": "Tek Door"},
        {"name": "Tek Ceiling", "value": "Tek Ceiling"},
        {"name": "Tek Dinosaur Gateway", "value": "Tek Dinosaur Gateway"},
        {"name": "Tek Dinosaur Gate", "value": "Tek Dinosaur Gate"},
        {"name": "Tek Pillar", "value": "Tek Pillar"},
        {"name": "Tek Turret", "value": "Tek Turret"},
    )) //18 Choices, 7 Open
    .addStringOption(option => option.setName('metalstructure').setDescription('Enter Metal Structure Name')
    .addChoices(
        {"name": "Heavy Auto Turret", "value": "Heavy Auto Turret"},
        {"name": "Auto Turret", "value": "Auto Turret"},
        {"name": "Industrial Forge", "value": "Industrial Forge"},
        {"name": "Refrigerator", "value": "Refrigerator"},
        {"name": "Vault", "value": "Vault"},
        {"name": "Metal Ocean Platform", "value": "Metal Ocean Platform"},
        {"name": "Metal Cliff Platform", "value": "Metal Cliff Platform"},
        {"name": "Metal Tree Platform", "value": "Metal Tree Platform"},
        {"name": "Metal Foundation", "value": "Metal Foundation"},
        {"name": "Metal Wall", "value": "Metal Wall"},
        {"name": "Metal Doorframe", "value": "Metal Doorframe"},
        {"name": "Metal Door", "value": "Metal Door"},
        {"name": "Metal Ceiling", "value": "Metal Ceiling"},
        {"name": "Metal Dinosaur Gateway", "value": "Metal Dinosaur Gateway"},
        {"name": "Metal Dinosaur Gate", "value": "Metal Dinosaur Gate"},
        {"name": "Metal Fence Foundation", "value": "Metal Fence Foundation"},
        {"name": "Metal Pillar", "value": "Metal Pillar"},
        {"name": "Metal Behemoth Gateway", "value": "Metal Behemoth Gateway"},
        {"name": "Metal Behemoth Gate", "value": "Metal Behemoth Gate"},
        {"name": "Metal Giant Hatchframe", "value": "Metal Giant Hatchframe"},
    )) //20 Choices, 5 Open
    .addNumberOption(option => option.setName('quantity').setDescription('Enter Structure Quantity')),

run: async (client, interaction) => {

    structure = [];
    if(interaction.options.getString('metalstructure')) {structure = interaction.options.getString('metalstructure')}
    if(interaction.options.getString('tekstructure')) {structure = interaction.options.getString('tekstructure')}
    quantity = interaction.options.getNumber('quantity');
    if(!interaction.options.getNumber('quantity')) {quantity = 1};

if(structure === interaction.options.getString('tekstructure')) {
    let structure = interaction.options.getString('tekstructure');
    let rawdata = fs.readFileSync(path.resolve(__dirname, './../Database/Raid Structures.json'));
    let response = JSON.parse(rawdata);
    let data = response;
    for(i=0;i<data.length;i++){    
    if(data[i].Structure === structure){ 

    var C4 = data[i].C4 * quantity;
    var C4Cave = (data[i].C4 * quantity)/6;
    var C4Total = `${C4} (6x: ${Math.round(C4Cave)})`;

    var RPG = data[i].RPG * quantity;
    var RPGCave = (data[i].RPG * quantity)/6;
    var RPGTotal = `${RPG} (6x: ${Math.round(RPGCave)})`;

    var Grenade = data[i].Grenade * quantity;
    var GrenadeCave = (data[i].Grenade * quantity)/6;
    var GrenadeTotal = `${Grenade} (6x: ${Math.round(GrenadeCave)})`;

    var TekRifle = data[i].TekRifle * quantity;
    var TekRifleCave = (data[i].TekRifle * quantity)/6;
    var TekRifleTotal = `${TekRifle} (6x: ${Math.round(TekRifleCave)})`;
    if(TekRifle === 'NaN') {return TekRifle = "N/A"} else {
    var HP = data[i].Health
    var StructureEmbed = `${data[i].Structure} (${HP} HP)`
    var icon = `https://cdn.discordapp.com/attachments/813528039106543617/963143074433875968/Raid.png`

    const embed = new MessageEmbed()
    .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
    .setColor(EmbedColour)
    .setTimestamp()
    .setThumbnail(icon)
    .addField(`ARK | Raiding Calculator`, "Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)")
    .addField("\tStructure:", "```\n" + StructureEmbed + "```")
    .addField(`\t${quantity} ${data[i].Structure} Takes\nC4:`, "```\n" + C4Total + "```")      
    .addField("\tRPG:", "```\n" + RPGTotal + "```")    
    .addField("\tGrenade:", "```\n" + GrenadeTotal + "```")           
    .addField("\tTek Rifle:", "```\n" + TekRifleTotal + "```")             
    return interaction.followUp({ embeds: [embed] }) 
    }
} 
}
}
if(structure === interaction.options.getString('metalstructure')) {
    let structure = interaction.options.getString('metalstructure');
    let rawdata = fs.readFileSync(path.resolve(__dirname, './../Database/Raid Structures.json'));
    let response = JSON.parse(rawdata);
    let data = response;
    for(i=0;i<data.length;i++){
    if(data[i].Structure === structure){       

    var C4 = data[i].C4 * quantity;
    var C4Cave = (data[i].C4 * quantity)/6;
    var C4Total = `${C4} (6x: ${Math.round(C4Cave)})`;

    var RPG = data[i].RPG * quantity;
    var RPGCave = (data[i].RPG * quantity)/6;
    var RPGTotal = `${RPG} (6x: ${Math.round(RPGCave)})`;

    var Grenade = data[i].Grenade * quantity;
    var GrenadeCave = (data[i].Grenade * quantity)/6;
    var GrenadeTotal = `${Grenade} (6x: ${Math.round(GrenadeCave)})`;

    var TekRifle = data[i].TekRifle * quantity;
    var TekRifleCave = (data[i].TekRifle * quantity)/6;
    var TekRifleTotal = `${TekRifle} (6x: ${Math.round(TekRifleCave)})`;
    if(TekRifle === 'NaN') {return TekRifle = "N/A"} else {
    var HP = data[i].Health
    var StructureEmbed = `${data[i].Structure} (${HP} HP)`
    var icon = `https://cdn.discordapp.com/attachments/813528039106543617/963143074433875968/Raid.png`

    const embed = new MessageEmbed()
    .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
    .setColor(EmbedColour)
    .setTimestamp()
    .setThumbnail(icon)
    .addField(`ARK | Raiding Calculator`, "Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)")
    .addField("\tStructure:", "```\n" + StructureEmbed + "```")
    .addField(`\t${quantity} ${data[i].Structure} Takes\nC4:`, "```\n" + C4Total + "```")      
    .addField("\tRPG:", "```\n" + RPGTotal + "```")    
    .addField("\tGrenade:", "```\n" + GrenadeTotal + "```")           
    .addField("\tTek Rifle:", "```\n" + TekRifleTotal + "```")             
    return interaction.followUp({ embeds: [embed] }) 
}
}
}
}
}
}