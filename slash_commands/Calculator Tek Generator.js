const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { BotIcon, BotName, BotNameLink, EmbedColour } = require('../Database/Information.json');

module.exports = {
    name:"tekgenerator",
    data: new SlashCommandBuilder()
    .setName("tekgenerator")
    .setDescription("Calculate how long your Tek Generator will stay powered.")
    .addNumberOption(option => option.setName('element').setDescription('Enter Element Amount').setRequired(true))
    .addNumberOption(option => option.setName('shards').setDescription('Enter Shards Amount').setRequired(true))
    .addNumberOption(option => option.setName('radius').setDescription('Enter Radius (Between 1 and 10)').setRequired(true)),

run: async (client, interaction) => {

    var element = interaction.options.getNumber('element');
    var shards = interaction.options.getNumber('shards');
    var radius = interaction.options.getNumber('radius');

    const Provideembed = new MessageEmbed()
    .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
    .setDescription(`Usage: Radius can only be between 1 and 10`)
    .setColor(EmbedColour) 
    if(radius < 1.0 || radius > 10.0)
    return interaction.followUp({ embeds: [Provideembed] }) 
    
    var shardsconverted = (shards / 100);
    var base = (1+ ((radius - 1) * 0.33));
    var hourlyrate = (18 / base);
    var hour = 3600000;
    var ele = (element * hourlyrate);
    var shard = (shardsconverted * hourlyrate)
    var usertime = ((ele + shard) * hour);
    let days = Math.floor(usertime / 86400000);
    let hours = Math.floor(usertime / 3600000) % 24;
    let minutes = Math.floor(usertime / 60000) % 60;
    let seconds = Math.floor(usertime / 1000) % 60;
    var timeoutput = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    var icon = `https://cdn.discordapp.com/attachments/813528039106543617/963156325385248898/tekgen.png`

    const embed = new MessageEmbed()
            .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
            .setColor(EmbedColour)
            .setTimestamp()
            .setThumbnail(icon)
            .addField(`ARK | Tek Generator Calculator`, "Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)")
            .addField("\tElement:", "```\n" + element + "```")   
            .addField("\tShards:", "```\n" + shards + "```")   
            .addField("\tRadius:", "```\n" + radius + "```")        
            .addField("\tTime Remaining:", "```\n" + timeoutput + "```")                      
    return interaction.followUp({ embeds: [embed] }) 
    }
}