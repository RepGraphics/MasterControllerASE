const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { BotIcon, BotName, BotNameLink, EmbedColour } = require('../Database/Information.json');

module.exports = {
    name:"electricgenerator",
    data: new SlashCommandBuilder()
    .setName("electricgenerator")
    .setDescription("Calculate how long your Gas Generator will stay powered.")
    .addNumberOption(option => option.setName('gasoline').setDescription('Enter Gasoline Amount').setRequired(true)),

run: async (client, interaction) => {

var gasoline = interaction.options.getNumber('gasoline');

var time = 3600000;
var usertime = gasoline * time;
let days = Math.floor(usertime / 86400000);
let hours = Math.floor(usertime / 3600000) % 24;
let minutes = Math.floor(usertime / 60000) % 60;
let seconds = Math.floor(usertime / 1000) % 60;
var timeoutput = `${days}d ${hours}h ${minutes}m ${seconds}s`;
var icon = `https://cdn.discordapp.com/attachments/813528039106543617/963147841407184966/EGenerator.png`

const embed = new MessageEmbed()
        .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
        .setColor(EmbedColour)
        .setTimestamp()
        .setThumbnail(icon)
        .addField(`ARK | Electric Generator`, "Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)")
        .addField("\tGasoline:", "```\n" + gasoline + "```")   
        .addField("\tTime Remaining:", "```\n" + timeoutput + "```")                     
    return interaction.followUp({ embeds: [embed] }) 
    }
}