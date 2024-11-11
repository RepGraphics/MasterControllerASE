const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { BotIcon, BotName, BotNameLink, EmbedColour } = require('../Database/Information.json');

const rawdata = [
    {
      value: "Absorbent Substrate",
      recipe: [
        { item:"Oil", quantity: 8 },
        { item:"Black Pearl", quantity: 8 },
        { item:"Sap", quantity: 8 },
      ],
    },
   {
     value: "Advanced Bullet",
     recipe: [
       { item:"Metal Ingot", quantity: 0.333333 },
       { item:"Gunpowder", quantity: 1 },
     ],
   },  
   {
     value: "Advanced Rifle Bullet",
     recipe: [
       { item:"Metal Ingot", quantity: 0.5 },
       { item:"Gunpowder", quantity: 4.5 },
     ],
   },  
   {
     value: "Advanced Sniper Bullet",
     recipe: [
       { item:"Metal Ingot", quantity: 1 },
       { item:"Gunpowder", quantity: 6 },
     ],
   },  
   {
     value: "Air Conditioner",
     recipe: [
       { item:"Metal Ingot", quantity: 80 },
       { item:"Electronics", quantity: 15 },
       { item:"Polymer", quantity: 5 },
       { item:"Crystal", quantity: 15 },
     ],
   },  
   {
     value: "Ammo Box",
     recipe: [
       { item:"Wood", quantity: 250 },
       { item:"Fiber", quantity: 500 },
       { item:"Metal", quantity: 100 },
     ],
   },  
   {
     value: "Auto Turret",
     recipe: [
       { item:"Metal Ingot", quantity: 140 },
       { item:"Electronics", quantity: 70 },
       { item:"Polymer", quantity: 20 },
       { item:"Cementing Paste", quantity: 50 },
     ],
   },  
   {
     value: "Bear Trap",
     recipe: [
       { item:"Metal Ingot", quantity: 3 },
       { item:"Hide", quantity: 6 },
       { item:"Fiber", quantity: 5 },
     ],
   },  
   {
     value: "Beer Barrel",
     recipe: [
       { item:"Wood", quantity: 500 },
       { item:"Metal Ingot", quantity: 80 },
       { item:"Cementing Paste", quantity: 100 },
     ],
   },  
   {
     value: "Behemoth Gate",
     recipe: [
       { item:"Metal Ingot", quantity: 1500 },
       { item:"Cementing Paste", quantity: 350 },
     ],
   },  
   {
     value: "Behemoth Gateway",
     recipe: [
       { item:"Metal Ingot", quantity: 2100 },
       { item:"Polymer", quantity: 140 },
       { item:"Cementing Paste", quantity: 490 },
     ],
   },  
   {
     value: "Behemoth Tek Gate",
     recipe: [
       { item:"Crystal", quantity: 1500 },
       { item:"Polymer", quantity: 350 },
       { item:"Element", quantity: 20 },
     ],
   },  
   {
     value: "Behemoth Tek Gateway",
     recipe: [
       { item:"Metal Ingot", quantity: 2200 },
       { item:"Crystal", quantity: 140 },
       { item:"Polymer", quantity: 500 },
       { item:"Element", quantity: 40 },
     ],
   },  
   {
     value: "Bola",
     recipe: [
       { item:"Thatch", quantity: 10 },
       { item:"Stone", quantity: 3 },
       { item:"Fiber", quantity: 15 },
       { item:"Hide", quantity: 3 },
     ],
   },  
   {
     value: "C4 Charge",
     recipe: [
       { item:"Gunpowder", quantity: 60 },
       { item:"Crystal", quantity: 10 },
       { item:"Cementing Paste", quantity: 5 },
       { item:"Fiber", quantity: 50 },
       { item:"Hide", quantity: 5 },
       { item:"Polymer", quantity: 5 },
       { item:"Electronics", quantity: 5 },
     ],
   },  
   {
     value: "C4 Remote Detonator",
     recipe: [
       { item:"Metal Ingot", quantity: 10 },
       { item:"Electronics", quantity: 50 },
       { item:"Polymer", quantity: 20 },
       { item:"Cementing Paste", quantity: 15 },
       { item:"Crystal", quantity: 10 },
     ],
   },  
   {
     value: "Cannon",
     recipe: [
       { item:"Metal Ingot", quantity: 950 },
       { item:"Fiber", quantity: 200 },
       { item:"Hide", quantity: 150 },
       { item:"Thatch", quantity: 120 },
       { item:"Cementing Paste", quantity: 300 },
     ],
   },  
   {
     value: "Cannon Ball",
     recipe: [
       { item:"Metal Ingot", quantity: 80 },
       { item:"Gunpowder", quantity: 30 },
       { item:"Cementing Paste", quantity: 20 },
       { item:"Obsidian", quantity: 4 },
     ],
   },  
   {
     value: "Charcoal",
     recipe: [
       { item:"Wood", quantity: 1 },
     ],
   }, 
   {
     value: "Charge Battery",
     recipe: [
       { item:"Metal Ingot", quantity: 10 },
       { item:"Gas Ball", quantity: 20 },
       { item:"Polymer", quantity: 15 },
       { item:"Crystal", quantity: 4 },
     ],
   },  
   {
     value: "Chemistry Bench",
     recipe: [
       { item:"Metal Ingot", quantity: 250 },
       { item:"Cementing Paste", quantity: 250 },
       { item:"Sparkpowder", quantity: 100 },
       { item:"Crystal", quantity: 250 },
       { item:"Polymer", quantity: 250 },
       { item:"Electronics", quantity: 250 },
     ],
   },  
   {
     value: "Cloning Chamber",
     recipe: [
       { item:"Metal Ingot", quantity: 5500 },
       { item:"Polymer", quantity: 800 },
       { item:"Crystal", quantity: 550 },
       { item:"Black Pearl", quantity: 200 },
       { item:"Element", quantity: 100 },
     ],
   },  
   {
     value: "Cluster Grenade",
     recipe: [
       { item:"Gunpowder", quantity: 65 },
       { item:"Crystal", quantity: 25 },
       { item:"Cementing Paste", quantity: 20 },
       { item:"Metal Ingot", quantity: 35 },
       { item:"Polymer", quantity: 15 },
       { item:"Propellant", quantity: 25 },
     ],
   },  
   {
     value: "Cooking Pot",
     recipe: [
       { item:"Stone", quantity: 75 },
       { item:"Thatch", quantity: 15 },
       { item:"Wood", quantity: 10 },
       { item:"Flint", quantity: 5 },
     ],
   },  
   {
     value: "Crossbow",
     recipe: [
       { item:"Metal Ingot", quantity: 7 },
       { item:"Wood", quantity: 10 },
       { item:"Fiber", quantity: 35 },
     ],
   },  
   {
     value: "Cryofridge",
     recipe: [
       { item:"Metal Ingot", quantity: 225 },
       { item:"Polymer", quantity: 60 },
       { item:"Electronics", quantity: 15 },
       { item:"Crystal", quantity: 25 },
     ],
   },  
   {
     value: "Cryopod",
     recipe: [
       { item:"Metal Ingot", quantity: 2 },
       { item:"Crystal", quantity: 10 },
       { item:"Fiber", quantity: 15 },
       { item:"Hide", quantity: 5 },
       { item:"Oil", quantity: 4 },
       { item:"Polymer", quantity: 8 },
     ],
   },  
   {
     value: "Egg Incubator",
     recipe: [
       { item:"Metal Ingot", quantity: 500 },
       { item:"Polymer", quantity: 350 },
       { item:"Crystal", quantity: 200 },
       { item:"Cementing Paste", quantity: 100 },
       { item:"Electronics", quantity: 250 },
     ],
   },  
   {
     value: "Electrical Generator",
     recipe: [
       { item:"Metal Ingot", quantity: 25 },
       { item:"Electronics", quantity: 10 },
     ],
   },  
   {
     value: "Electrical Outlet",
     recipe: [
       { item:"Metal Ingot", quantity: 5 },
       { item:"Wood", quantity: 15 },
       { item:"Electronics", quantity: 3 },
     ],
   },  
   {
     value: "Electrical Cable Intersection",
     recipe: [
       { item:"Metal Ingot", quantity: 2 },
     ],
   },  
   {
     value: "Element",
     recipe: [
       { item:"Green Gem", quantity: 20 },
       { item:"Blue Gem", quantity: 15 },
       { item:"Red Gem", quantity: 10 },
       { item:"Gas Ball", quantity: 50 },
       { item:"Element Ore", quantity: 20 },
     ],
   },  
   {
     value: "Element Dust",
     recipe: [
       { item:"Element", quantity: 0.005 },
     ],
   },  
   {
     value: "Element Shard",
     recipe: [
       { item:"Element", quantity: 0.01 },
     ],
   },  
   {
     value: "Enduro Stew",
     recipe: [
       { item:"Cooked Meat", quantity: 9 },
       { item:"Rockarrot", quantity: 5 },
       { item:"Savoroot", quantity: 5 },
       { item:"Mejoberry", quantity: 10 },
       { item:"Stimulant", quantity: 2 },
     ],
   },  
   {
     value: "Energy Brew",
     recipe: [
       { item:"Azulberry", quantity: 20 },
       { item:"Stimulant", quantity: 2 },
     ],
   },  
   {
     value: "Fabricator",
     recipe: [
       { item:"Metal Ingot", quantity: 35 },
       { item:"Cementing Paste", quantity: 20 },
       { item:"Sparkpowder", quantity: 50 },
       { item:"Crystal", quantity: 15 },
       { item:"Oil", quantity: 10 },
     ],
   },  
   {
     value: "Feeding Trough",
     recipe: [
       { item:"Wood", quantity: 120 },
       { item:"Thatch", quantity: 60 },
       { item:"Fiber", quantity: 40 },
       { item:"Metal", quantity: 8 },
     ],
   },  
   {
     value: "Filled Fish Basket",
     recipe: [
       { item:"Fungal Wood", quantity: 60 },
       { item:"Fiber", quantity: 120 },
       { item:"Thatch", quantity: 40 },
     ],
   },  
   {
     value: "Fish Net",
     recipe: [
       { item:"Thatch", quantity: 10 },
       { item:"Stone", quantity: 3 },
       { item:"Fiber", quantity: 15 },
       { item:"Hide", quantity: 3 },
     ],
   },  
   {
     value: "Flame Arrow",
     recipe: [
       { item:"Stone Arrow", quantity: 1 },
       { item:"Propellant", quantity: 1 },
     ],
   },  
   {
     value: "Flamethrower",
     recipe: [
       { item:"Metal Ingot", quantity: 35 },
       { item:"Polymer", quantity: 75 },
       { item:"Cementing Paste", quantity: 50 },
       { item:"Sulfur", quantity: 10 },
       { item:"Electronics", quantity: 15 },
     ],
   },  
   {
     value: "Flamethrower Ammo",
     recipe: [
       { item:"Propellant", quantity: 10 },
       { item:"Gas", quantity: 10 },
     ],
   },  
   {
     value: "Flexible Electrical Cable",
     recipe: [
       { item:"Metal Ingot", quantity: 2 },
     ],
   },  
   {
     value: "Focal Chili",
     recipe: [
       { item:"Cooked Meat", quantity: 9 },
       { item:"Citronal", quantity: 5 },
       { item:"Amarberry", quantity: 20 },
       { item:"Azulberry", quantity: 20 },
       { item:"Tintoberry", quantity: 20 },
       { item:"Mejoberry", quantity: 10 },
     ],
   }, 
   {
     value: "Fria Curry",
     recipe: [
       { item:"Longrass", quantity: 5 },
       { item:"Rockarrot", quantity: 5 },
       { item:"Azulberry", quantity: 20 },
       { item:"Mejoberry", quantity: 10 },
       { item:"Narcotic", quantity: 2 },
     ],
   },   
   {
     value: "Gas Collector",
     recipe: [
       { item:"Metal Ingot", quantity: 75 },
       { item:"Cementing Paste", quantity: 60 },
       { item:"Crystal", quantity: 40 },
       { item:"Red Gem", quantity: 20 },
     ],
   },   
   {
     value: "Gas Mask",
     recipe: [
       { item:"Polymer", quantity: 20 },
       { item:"Crystal", quantity: 10 },
       { item:"Absorbent Substrate", quantity: 2 },
     ],
   },   
   {
     value: "Gasoline",
     recipe: [
       { item:"Hide", quantity: 5 },
       { item:"Oil", quantity: 6 },
     ],
   },   
   {
     value: "Giant Metal Hatchframe",
     recipe: [
       { item:"Metal Ingot", quantity: 240 },
       { item:"Cementing Paste", quantity: 64 },
     ],
   },   
   {
     value: "Giant Metal Trapdoor",
     recipe: [
       { item:"Metal Ingot", quantity: 360 },
       { item:"Cementing Paste", quantity: 120 },
     ],
   },   
   {
     value: "GPS",
     recipe: [
       { item:"Polymer", quantity: 5 },
       { item:"Electronics", quantity: 20 },
     ],
   },   
   {
     value: "Grappling Hook",
     recipe: [
       { item:"Stone Arrow", quantity: 3 },
       { item:"Cementing Paste", quantity: 1 },
       { item:"Metal Ingot", quantity: 9 },
       { item:"Thatch", quantity: 2 },
       { item:"Fiber", quantity: 35 },
     ],
   },   
   {
     value: "Grenade",
     recipe: [
       { item:"Fiber", quantity: 15 },
       { item:"Stone", quantity: 20 },
       { item:"Gunpowder", quantity: 30 },
       { item:"Hide", quantity: 5 },
       { item:"Metal Ingot", quantity: 2 },
       { item:"Oil", quantity: 4 },
     ],
   },   
   {
     value: "Gunpowder",
     recipe: [
       { item:"Sparkpowder", quantity: 0.666666666666 },
       { item:"Charcoal", quantity: 0.666666666666 },
     ],
   },   
   {
     value: "Hazard Suit Boots",
     recipe: [
       { item:"Hide", quantity: 20 },
       { item:"Fiber", quantity: 25 },
       { item:"Blue Gem", quantity: 5 },
       { item:"Polymer", quantity: 10 },
       { item:"Crystal", quantity: 10 },
       { item:"Gas Ball", quantity: 15 },
     ],
   },   
   {
     value: "Hazard Suit Gloves",
     recipe: [
       { item:"Hide", quantity: 15 },
       { item:"Fiber", quantity: 35 },
       { item:"Blue Gem", quantity: 8 },
       { item:"Polymer", quantity: 2 },
       { item:"Crystal", quantity: 16 },
       { item:"Gas Ball", quantity: 15 },
     ],
   },   
   {
     value: "Hazard Suit Hat",
     recipe: [
       { item:"Hide", quantity: 30 },
       { item:"Fiber", quantity: 45 },
       { item:"Blue Gem", quantity: 25 },
       { item:"Polymer", quantity: 20 },
       { item:"Crystal", quantity: 50 },
       { item:"Gas Ball", quantity: 20 },
     ],
   },   
   {
     value: "Hazard Suit Pants",
     recipe: [
       { item:"Hide", quantity: 45 },
       { item:"Fiber", quantity: 65 },
       { item:"Blue Gem", quantity: 20 },
       { item:"Polymer", quantity: 15 },
       { item:"Crystal", quantity: 40 },
       { item:"Gas Ball", quantity: 30 },
     ],
   },   
   {
     value: "Hazard Suit Shirt",
     recipe: [
       { item:"Hide", quantity: 45 },
       { item:"Fiber", quantity: 65 },
       { item:"Blue Gem", quantity: 25 },
       { item:"Polymer", quantity: 25 },
       { item:"Crystal", quantity: 50 },
       { item:"Gas Ball", quantity: 45 },
     ],
   },   
   {
     value: "Heavy Auto Turret",
     recipe: [
       { item:"Auto Turret", quantity: 1 },
       { item:"Cementing Paste", quantity: 150 },
       { item:"Electronics", quantity: 200 },
       { item:"Metal Ingot", quantity: 400 },
       { item:"Polymer", quantity: 50 },
     ],
   },   
   {
     value: "Homing Underwater Mine",
     recipe: [
       { item:"Polymer", quantity: 45 },
       { item:"Metal Ingot", quantity: 30 },
       { item:"Cementing Paste", quantity: 20 },
       { item:"Oil", quantity: 15 },
       { item:"Gunpowder", quantity: 100 },
       { item:"Crystal", quantity: 30 },
       { item:"Electronics", quantity: 150 },
     ],
   },   
   {
     value: "Industrial Cooker",
     recipe: [
       { item:"Polymer", quantity: 300 },
       { item:"Metal Ingot", quantity: 1800 },
       { item:"Cementing Paste", quantity: 450 },
       { item:"Oil", quantity: 300 },
     ],
   },   
   {
     value: "Industrial Forge",
     recipe: [
       { item:"Metal Ingot", quantity: 2500 },
       { item:"Crystal", quantity: 250 },
       { item:"Cementing Paste", quantity: 600 },
       { item:"Oil", quantity: 400 },
       { item:"Polymer", quantity: 400 },
     ],
   },   
   {
     value: "Industrial Grill",
     recipe: [
       { item:"Metal Ingot", quantity: 200 },
       { item:"Cementing Paste", quantity: 40 },
       { item:"Oil", quantity: 40 },
       { item:"Crystal", quantity: 30 },
     ],
   },   
   {
     value: "Industrial Grinder",
     recipe: [
       { item:"Metal Ingot", quantity: 3200 },
       { item:"Crystal", quantity: 2000 },
       { item:"Cementing Paste", quantity: 800 },
       { item:"Oil", quantity: 600 },
       { item:"Polymer", quantity: 600 },
     ],
   },   
   {
     value: "Jar of Pitch",
     recipe: [
       { item:"Clay", quantity: 60 },
       { item:"Oil", quantity: 180 },
       { item:"Hide", quantity: 20 },
       { item:"Fiber", quantity: 85 },
     ],
   },   
   {
     value: "Large Bear Trap",
     recipe: [
       { item:"Fiber", quantity: 10 },
       { item:"Metal Ingot", quantity: 6 },
       { item:"Hide", quantity: 15 },
     ],
   },   
   {
     value: "Large Metal Wall",
     recipe: [
       { item:"Cementing Paste", quantity: 28 },
       { item:"Metal Ingot", quantity: 100 },
     ],
   },   
   {
     value: "Large Crop Plot",
     recipe: [
       { item:"Wood", quantity: 80 },
       { item:"Thatch", quantity: 40 },
       { item:"Fiber", quantity: 60 },
       { item:"Stone", quantity: 100 },
     ],
   },   
   {
     value: "Large Storage Box",
     recipe: [
       { item:"Wood", quantity: 50 },
       { item:"Thatch", quantity: 35 },
       { item:"Fiber", quantity: 25 },
     ],
   },   
   {
     value: "Large Tek Wall",
     recipe: [
       { item:"Crystal", quantity: 60 },
       { item:"Element", quantity: 4 },
       { item:"Metal Ingot", quantity: 140 },
       { item:"Polymer", quantity: 80 },
     ],
   },   
   {
     value: "Lazarus Chowder",
     recipe: [
       { item:"Cooked Meat", quantity: 9 },
       { item:"Savoroot", quantity: 5 },
       { item:"Longrass", quantity: 5 },
       { item:"Mejoberry", quantity: 10 },
       { item:"Narcotic", quantity: 2 },
     ],
   },   
   {
     value: "Lesser Antidote",
     recipe: [
       { item:"Rare Flowers", quantity: 10 },
       { item:"Rare Mushrooms", quantity: 10 },
       { item:"Leech Blood", quantity: 3 },
       { item:"Narcotic", quantity: 1 },
     ],
   },   
   {
     value: "Loadout Mannequin",
     recipe: [
       { item:"Thatch", quantity: 500 },
       { item:"Wood", quantity: 200 },
       { item:"Fiber", quantity: 500 },
       { item:"Hide", quantity: 10 },
     ],
   },
   {
     value: "MDSM",
     recipe: [
       { item:"Black Pearl", quantity: 30 },
       { item:"Crystal", quantity: 280 },
       { item:"Element", quantity: 30 },
       { item:"Metal Ingot", quantity: 400 },
       { item:"Polymer", quantity: 180 },
     ],
   },   
   {
     value: "Medical Brew",
     recipe: [
       { item:"Tintoberry", quantity: 20 },
       { item:"Narcotic", quantity: 2 },
     ],
   },   
   {
     value: "Metal Billboard",
     recipe: [
       { item:"Metal Ingot", quantity: 35 },
       { item:"Cementing Paste", quantity: 10 },
     ],
   },   
   {
     value: "Metal Arrow",
     recipe: [
       { item:"Thatch", quantity: 3 },
       { item:"Fiber", quantity: 3 },
       { item:"Metal Ingot", quantity: 3 },
       { item:"Cementing Paste", quantity: 1 },
       { item:"Polymer", quantity: 1 },
     ],
   },   
   {
     value: "Metal Catwalk",
     recipe: [
       { item:"Metal Ingot", quantity: 15 },
     ],
   },   
   {
     value: "Metal Ceiling",
     recipe: [
       { item:"Metal Ingot", quantity: 35 },
       { item:"Cementing Paste", quantity: 10 },
     ],
   },   
   {
     value: "Metal Cliff Platform",
     recipe: [
       { item:"Metal Ingot", quantity: 1200 },
       { item:"Cementing Paste", quantity: 800 },
       { item:"Blue Gem", quantity: 200 },
     ],
   },   
   {
     value: "Metal Dinosaur Gate",
     recipe: [
       { item:"Metal Ingot", quantity: 35 },
       { item:"Cementing Paste", quantity: 10 },
     ],
   },   
   {
     value: "Metal Dinosaur Gateway",
     recipe: [
       { item:"Metal Ingot", quantity: 170 },
       { item:"Cementing Paste", quantity: 50 },
     ],
   },   
   {
     value: "Metal Door",
     recipe: [
       { item:"Metal Ingot", quantity: 10 },
       { item:"Cementing Paste", quantity: 4 },
     ],
   },   
   {
     value: "Metal Doorframe",
     recipe: [
       { item:"Metal Ingot", quantity: 20 },
       { item:"Cementing Paste", quantity: 6 },
     ],
   },   
   {
     value: "Metal Double Door",
     recipe: [
       { item:"Metal Ingot", quantity: 20 },
       { item:"Cementing Paste", quantity: 8 },
     ],
   },   
   {
     value: "Metal Double Doorframe",
     recipe: [
       { item:"Metal Ingot", quantity: 20 },
       { item:"Cementing Paste", quantity: 6 },
     ],
   },   
   {
     value: "Metal Fence Foundation",
     recipe: [
       { item:"Metal Ingot", quantity: 5 },
       { item:"Cementing Paste", quantity: 2 },
     ],
   },   
   {
     value: "Metal Fence Support",
     recipe: [
       { item:"Metal Ingot", quantity: 5 },
       { item:"Cementing Paste", quantity: 2 },
     ],
   },   
   {
     value: "Metal Foundation",
     recipe: [
       { item:"Metal Ingot", quantity: 50 },
       { item:"Cementing Paste", quantity: 15 },
     ],
   },   
   {
     value: "Metal Hatchet",
     recipe: [
       { item:"Metal Ingot", quantity: 8 },
       { item:"Wood", quantity: 1 },
       { item:"Hide", quantity: 10 },
     ],
   },   
   {
     value: "Metal Hatchframe",
     recipe: [
       { item:"Metal Ingot", quantity: 30 },
       { item:"Cementing Paste", quantity: 8 },
     ],
   },   
   {
     value: "Metal Ladder",
     recipe: [
       { item:"Metal Ingot", quantity: 7 },
     ],
   },   
   {
     value: "Metal Ocean Platform",
     recipe: [
       { item:"Wood", quantity: 300 },
       { item:"Metal Ingot", quantity: 1500 },
       { item:"Polymer", quantity: 25 },
       { item:"Cementing Paste", quantity: 375 },
     ],
   },   
   {
     value: "Metal Pillar",
     recipe: [
       { item:"Metal Ingot", quantity: 25 },
       { item:"Cementing Paste", quantity: 7 },
     ],
   },   
   {
     value: "Metal Railing",
     recipe: [
       { item:"Metal Ingot", quantity: 12 },
       { item:"Cementing Paste", quantity: 3 },
     ],
   },   
   {
     value: "Metal Ramp",
     recipe: [
       { item:"Metal Ingot", quantity: 35 },
       { item:"Cementing Paste", quantity: 10 },
     ],
   },   
   {
     value: "Metal Sign",
     recipe: [
       { item:"Metal Ingot", quantity: 5 },
       { item:"Cementing Paste", quantity: 3 },
     ],
   },   
   {
     value: "Metal Spike Wall",
     recipe: [
       { item:"Metal Ingot", quantity: 25 },
       { item:"Hide", quantity: 20 },
       { item:"Fiber", quantity: 30 },
     ],
   },   
   {
     value: "Metal Stairs",
     recipe: [
       { item:"Metal Ingot", quantity: 35 },
       { item:"Cementing Paste", quantity: 10 },
     ],
   },   
   {
     value: "Metal Trapdoor",
     recipe: [
       { item:"Metal Ingot", quantity: 10 },
       { item:"Cementing Paste", quantity: 4 },
     ],
   },   
   {
     value: "Metal Tree Platform",
     recipe: [
       { item:"Metal Ingot", quantity: 1800 },
       { item:"Cementing Paste", quantity: 1400 },
       { item:"Fiber", quantity: 600 },
     ],
   },   
   {
     value: "Metal Triangle Ceiling",
     recipe: [
       { item:"Metal Ingot", quantity: 18 },
       { item:"Cementing Paste", quantity: 5 },
     ],
   },   
   {
     value: "Metal Triangle Foundation",
     recipe: [
       { item:"Metal Ingot", quantity: 25 },
       { item:"Cementing Paste", quantity: 8 },
     ],
   },   
   {
     value: "Metal Wall",
     recipe: [
       { item:"Metal Ingot", quantity: 25 },
       { item:"Cementing Paste", quantity: 7 },
     ],
   },   
   {
     value: "Metal Wall Sign",
     recipe: [
       { item:"Metal Ingot", quantity: 5 },
       { item:"Cementing Paste", quantity: 3 },
     ],
   },   
   {
     value: "Metal Water Reservoir",
     recipe: [
       { item:"Metal Ingot", quantity: 75 },
       { item:"Cementing Paste", quantity: 25 },
     ],
   },   
   {
     value: "Metal Windowframe",
     recipe: [
       { item:"Metal Ingot", quantity: 20 },
       { item:"Cementing Paste", quantity: 6 },
     ],
   },   
   {
     value: "Minigun",
     recipe: [
       { item:"Polymer", quantity: 175 },
       { item:"Metal Ingot", quantity: 500 },
       { item:"Cementing Paste", quantity: 100 },
       { item:"Electronics", quantity: 10 },
     ],
   },   
   {
     value: "Minigun Turret",
     recipe: [
       { item:"Metal Ingot", quantity: 500 },
       { item:"Polymer", quantity: 150 },
       { item:"Cementing Paste", quantity: 125 },
       { item:"Hide", quantity: 100 },
     ],
   },   
   {
     value: "Mining Drill",
     recipe: [
       { item:"Polymer", quantity: 132 },
       { item:"Metal Ingot", quantity: 482 },
       { item:"Crystal", quantity: 180 },
       { item:"Cementing Paste", quantity: 120 },
       { item:"Black Pearl", quantity: 36 },
     ],
   },   
   {
     value: "Mortar And Pestle",
     recipe: [
       { item:"Stone", quantity: 65 },
       { item:"Hide", quantity: 15 },
     ],
   },
   {
     value: "Mosasaur Tek Saddle",
     recipe: [
       { item:"Polymer", quantity: 500 },
       { item:"Metal Ingot", quantity: 2500 },
       { item:"Crystal", quantity: 370 },
       { item:"Element", quantity: 55 },
       { item:"Black Pearl", quantity: 140 },
     ],
   },
 
   {
     value: "Motorboat",
     recipe: [
       { item:"Wood", quantity: 250 },
       { item:"Metal Ingot", quantity: 1200 },
       { item:"Hide", quantity: 200 },
       { item:"Fiber", quantity: 180 },
       { item:"Obsidian", quantity: 150 },
       { item:"Polymer", quantity: 400 },
       { item:"Black Pearl", quantity: 60 },
     ],
   },  
   {
     value: "Mutagen",
     recipe: [
       { item:"Mutagel", quantity: 133.333333 },
     ],
   },  
   {
     value: "Narcotic",
     recipe: [
       { item:"Narcoberry", quantity: 3.3333333 },
       { item:"Spoiled Meat", quantity: 0.666666 },
     ],
   },  
   {
     value: "Net Projectile",
     recipe: [
       { item:"Fiber", quantity: 180 },
       { item:"Metal Ingot", quantity: 12 },
       { item:"Polymer", quantity: 4 },
     ],
   },  
   {
     value: "Oil Pump",
     recipe: [
       { item:"Metal Ingot", quantity: 75 },
       { item:"Electronics", quantity: 25 },
       { item:"Crystal", quantity: 25 },
     ],
   },  
   {
     value: "Painting Canvas",
     recipe: [
       { item:"Fiber", quantity: 4 },
       { item:"Wood", quantity: 2 },
       { item:"Hide", quantity: 1 },
     ],
   },  
   {
     value: "Parachute",
     recipe: [
       { item:"Thatch", quantity: 40 },
       { item:"Fiber", quantity: 20 },
       { item:"Hide", quantity: 10 },
     ],
   },  
   {
     value: "Poison Grenade",
     recipe: [
       { item:"Narcotic", quantity: 10 },
       { item:"Charcoal", quantity: 14 },
       { item:"Metal Ingot", quantity: 5 },
       { item:"Sparkpowder", quantity: 18 },
       { item:"Gunpowder", quantity: 12 },
       { item:"Crystal", quantity: 5 },
       { item:"Fiber", quantity: 20 },
       { item:"Flint", quantity: 5 },
     ],
   },  
   {
     value: "Polymer",
     recipe: [
       { item:"Obsidian", quantity: 2 },
       { item:"Cementing Paste", quantity: 2 },
     ],
   },  
   {
     value: "Preserving Bin",
     recipe: [
       { item:"Stone", quantity: 30 },
       { item:"Wood", quantity: 30 },
       { item:"Thatch", quantity: 10 },
       { item:"Fiber", quantity: 20 },
     ],
   },  
   {
     value: "Pressure Plate",
     recipe: [
       { item:"Metal Ingot", quantity: 32 },
       { item:"Cementing Paste", quantity: 5 },
       { item:"Wood", quantity: 130 },
       { item:"Fiber", quantity: 68 },
       { item:"Thatch", quantity: 170 },
     ],
   },  
   {
     value: "Propellant",
     recipe: [
       { item:"Sulfur", quantity: 0.666666 },
       { item:"Cactus Sap", quantity: 0.666666 },
       { item:"Oil", quantity: 0.666666 },
     ],
   },  
   {
     value: "Refining Forge",
     recipe: [
       { item:"Stone", quantity: 125 },
       { item:"Flint", quantity: 5 },
       { item:"Hide", quantity: 65 },
       { item:"Wood", quantity: 20 },
       { item:"Fiber", quantity: 40 },
     ],
   },  
   {
     value: "Refrigerator",
     recipe: [
       { item:"Metal Ingot", quantity: 120 },
       { item:"Polymer", quantity: 15 },
       { item:"Crystal", quantity: 25 },
       { item:"Electronics", quantity: 10 },
     ],
   },  
   {
     value: "Rex Tek Saddle",
     recipe: [
       { item:"Polymer", quantity: 350 },
       { item:"Metal Ingot", quantity: 1800 },
       { item:"Crystal", quantity: 250 },
       { item:"Element", quantity: 40 },
       { item:"Black Pearl", quantity: 100 },
     ],
   },  
   {
     value: "Riot Shield",
     recipe: [
       { item:"Polymer", quantity: 120 },
       { item:"Crystal", quantity: 200 },
       { item:"Silica Pearls", quantity: 120 },
       { item:"Metal Ingot", quantity: 40 },
     ],
   },  
   {
     value: "Rock Drake Tek Saddle",
     recipe: [
       { item:"Polymer", quantity: 455 },
       { item:"Metal Ingot", quantity: 2350 },
       { item:"Crystal", quantity: 325 },
       { item:"Element", quantity: 75 },
       { item:"Black Pearl", quantity: 185 },
     ],
   },  
   {
     value: "Rocket Homing Missile",
     recipe: [
       { item:"Gunpowder", quantity: 50 },
       { item:"Crystal", quantity: 20 },
       { item:"Cementing Paste", quantity: 40 },
       { item:"Polymer", quantity: 15 },
       { item:"Metal Ingot", quantity: 20 },
       { item:"Electronics", quantity: 5 },
     ],
   },  
   {
     value: "Rocket Launcher",
     recipe: [
       { item:"Polymer", quantity: 80 },
       { item:"Metal Ingot", quantity: 50 },
       { item:"Cementing Paste", quantity: 60 },
     ],
   },  
   {
     value: "Rocket Propelled Grenade",
     recipe: [
       { item:"Gunpowder", quantity: 40 },
       { item:"Crystal", quantity: 10 },
       { item:"Cementing Paste", quantity: 20 },
       { item:"Polymer", quantity: 10 },
       { item:"Metal Ingot", quantity: 12 },
     ],
   },  
   {
     value: "Rocket Turret",
     recipe: [
       { item:"Polymer", quantity: 400 },
       { item:"Metal Ingot", quantity: 1100 },
       { item:"Cementing Paste", quantity: 300 },
       { item:"Electronics", quantity: 500 },
     ],
   },  
   {
     value: "SCUBA Flippers",
     recipe: [
       { item:"Hide", quantity: 12 },
       { item:"Fiber", quantity: 5 },
       { item:"Keratin", quantity: 12 },
       { item:"Cementing Paste", quantity: 6 },
       { item:"Silica Pearls", quantity: 4 },
     ],
   },  
   {
     value: "SCUBA Leggings",
     recipe: [
       { item:"Hide", quantity: 40 },
       { item:"Fiber", quantity: 4 },
       { item:"Metal Ingot", quantity: 2 },
       { item:"Polymer", quantity: 40 },
     ],
   },  
   {
     value: "SCUBA Mask",
     recipe: [
       { item:"Hide", quantity: 15 },
       { item:"Fiber", quantity: 6 },
       { item:"Crystal", quantity: 10 },
       { item:"Silica Pearls", quantity: 3 },
     ],
   },  
   {
     value: "SCUBA Tank",
     recipe: [
       { item:"Hide", quantity: 20 },
       { item:"Fiber", quantity: 8 },
       { item:"Metal Ingot", quantity: 14 },
       { item:"Polymer", quantity: 3 },
     ],
   },  
   {
     value: "Shadow Steak Saute",
     recipe: [
       { item:"Cooked Prime Meat", quantity: 3 },
       { item:"Mejoberry", quantity: 20 },
       { item:"Narcotic", quantity: 8 },
       { item:"Rare Mushrooms", quantity: 2 },
       { item:"Savoroot", quantity: 1 },
       { item:"Rockarrot", quantity: 1 },
     ],
   },  
   {
     value: "Shocking Tranquilizer Dart",
     recipe: [
       { item:"Bio Toxin", quantity: 3 },
       { item:"Metal Ingot", quantity: 2 },
       { item:"Tranquilizer Dart", quantity: 1 },
     ],
   },  
   {
     value: "Silencer Attachment",
     recipe: [
       { item:"Metal Ingot", quantity: 50 },
       { item:"Oil", quantity: 5 },
       { item:"Keratin", quantity: 20 },
       { item:"Hide", quantity: 10 },
     ],
   },  
   {
     value: "Simple Bed",
     recipe: [
       { item:"Wood", quantity: 15 },
       { item:"Thatch", quantity: 80 },
       { item:"Fiber", quantity: 30 },
       { item:"Hide", quantity: 40 },
     ],
   },  
   {
     value: "Simple Bullet",
     recipe: [
       { item:"Metal Ingot", quantity: 0.5 },
       { item:"Gunpowder", quantity: 3 },
     ],
   },  
   {
     value: "Simple Rifle Ammo",
     recipe: [
       { item:"Metal Ingot", quantity: 1 },
       { item:"Gunpowder", quantity: 6 },
     ],
   },  
   {
     value: "Simple Shotgun Ammo",
     recipe: [
       { item:"Simple Bullet", quantity: 3 },
       { item:"Metal Ingot", quantity: 1 },
       { item:"Gunpowder", quantity: 3 },
     ],
   },  
   {
     value: "Smithy",
     recipe: [
       { item:"Metal Ingot", quantity: 5 },
       { item:"Stone", quantity: 50 },
       { item:"Wood", quantity: 30 },
       { item:"Hide", quantity: 20 },
     ],
   },  
   {
     value: "Sparkpowder",
     recipe: [
       { item:"Flint", quantity: 0.666666666666 },
       { item:"Stone", quantity: 0.333333333333 },
     ],
   },  
   {
     value: "Spyglass",
     recipe: [
       { item:"Wood", quantity: 5 },
       { item:"Hide", quantity: 10 },
       { item:"Fiber", quantity: 10 },
       { item:"Crystal", quantity: 2 },
     ],
   },  
   {
     value: "Standing Torch",
     recipe: [
       { item:"Thatch", quantity: 8 },
       { item:"Flint", quantity: 1 },
       { item:"Stone", quantity: 1 },
       { item:"Wood", quantity: 3 },
     ],
   },  
   {
     value: "Stimulant",
     recipe: [
       { item:"Stimberry", quantity: 3.33333 },
       { item:"Sparkpowder", quantity: 1.33333 },
     ],
   },  
   {
     value: "Stone Arrow",
     recipe: [
       { item:"Thatch", quantity: 2 },
       { item:"Fiber", quantity: 2 },
       { item:"Flint", quantity: 1 },
     ],
   },  
   {
     value: "Stone Cliff Platform",
     recipe: [
       { item:"Stone", quantity: 1200 },
       { item:"Fungal Wood", quantity: 800 },
       { item:"Fiber", quantity: 600 },
       { item:"Cementing Paste", quantity: 250 },
     ],
   },  
   {
     value: "Storage Box",
     recipe: [
       { item:"Wood", quantity: 25 },
       { item:"Thatch", quantity: 20 },
       { item:"Fiber", quantity: 10 },
     ],
   },  
   {
     value: "Sweet Vegetable Cake",
     recipe: [
       { item:"Giant Bee Honey", quantity: 2 },
       { item:"Sap", quantity: 4 },
       { item:"Rockarrot", quantity: 2 },
       { item:"Longrass", quantity: 2 },
       { item:"Savoroot", quantity: 2 },
       { item:"Stimulant", quantity: 4 },
       { item:"Fiber", quantity: 25 },
     ],
   },  
   {
     value: "Tapejara Tek Saddle",
     recipe: [
       { item:"Polymer", quantity: 500 },
       { item:"Metal Ingot", quantity: 2500 },
       { item:"Crystal", quantity: 370 },
       { item:"Element", quantity: 55 },
       { item:"Black Pearl", quantity: 140 },
     ],
   },  
   {
     value: "Tek Boots",
     recipe: [
       { item:"Polymer", quantity: 120 },
       { item:"Metal Ingot", quantity: 450 },
       { item:"Crystal", quantity: 120 },
       { item:"Element", quantity: 20 },
       { item:"Black Pearl", quantity: 55 },
     ],
   },  
   {
     value: "Tek Bow",
     recipe: [
       { item:"Polymer", quantity: 225 },
       { item:"Metal Ingot", quantity: 200 },
       { item:"Cementing Paste", quantity: 75 },
       { item:"Element", quantity: 60 },
       { item:"Crystal", quantity: 100 },
     ],
   },  
   {
     value: "Tek Bridge",
     recipe: [
       { item:"Crystal", quantity: 150 },
       { item:"Element", quantity: 2 },
       { item:"Metal Ingot", quantity: 220 },
       { item:"Polymer", quantity: 100 },
     ],
   },  
   {
     value: "Tek Canteen",
     recipe: [
       { item:"Polymer", quantity: 10 },
       { item:"Element", quantity: 5 },
       { item:"Cementing Paste", quantity: 6 },
       { item:"Metal Ingot", quantity: 2 },
     ],
   },  
   {
     value: "Tek Catwalk",
     recipe: [
       { item:"Metal Ingot", quantity: 18 },
       { item:"Polymer", quantity: 10 },
       { item:"Crystal", quantity: 5 },
       { item:"Element", quantity: 0.25 },
     ],
   },  
   {
     value: "Tek Ceiling",
     recipe: [
       { item:"Metal Ingot", quantity: 50 },
       { item:"Polymer", quantity: 25 },
       { item:"Crystal", quantity: 20 },
       { item:"Element", quantity: 1 },
     ],
   },  
   {
     value: "Tek Chestpiece",
     recipe: [
       { item:"Polymer", quantity: 120 },
       { item:"Metal Ingot", quantity: 450 },
       { item:"Crystal", quantity: 120 },
       { item:"Element", quantity: 20 },
       { item:"Black Pearl", quantity: 55 },
     ],
   },  
   {
     value: "Tek Claws",
     recipe: [
       { item:"Polymer", quantity: 160 },
       { item:"Metal Ingot", quantity: 180 },
       { item:"Crystal", quantity: 184 },
       { item:"Element", quantity: 28 },
       { item:"Black Pearl", quantity: 52 },
     ],
   },  
   {
     value: "Tek Crop Plot",
     recipe: [
       { item:"Element", quantity: 3 },
       { item:"Metal Ingot", quantity: 125 },
       { item:"Polymer", quantity: 55 },
       { item:"Crystal", quantity: 75 },
       { item:"Sand", quantity: 50 },
       { item:"Black Pearl", quantity: 4 },
     ],
   },  
   {
     value: "Tek Dedicated Storage",
     recipe: [
       { item:"Black Pearl", quantity: 4 },
       { item:"Crystal", quantity: 75 },
       { item:"Element", quantity: 3 },
       { item:"Metal Ingot", quantity: 125 },
       { item:"Polymer", quantity: 55 },
     ],
   },  
   {
     value: "Tek Dinosaur Gate",
     recipe: [
       { item:"Element", quantity: 2 },
       { item:"Polymer", quantity: 30 },
       { item:"Crystal", quantity: 35 },
     ],
   },  
   {
     value: "Tek Dinosaur Gateway",
     recipe: [
       { item:"Metal Ingot", quantity: 170 },
       { item:"Polymer", quantity: 50 },
       { item:"Crystal", quantity: 30 },
       { item:"Element", quantity: 2 },
     ],
   },  
   {
     value: "Tek Door",
     recipe: [
       { item:"Polymer", quantity: 10 },
       { item:"Crystal", quantity: 15 },
       { item:"Element", quantity: 0.25 },
     ],
   },  
   {
     value: "Tek Doorframe",
     recipe: [
       { item:"Metal Ingot", quantity: 30 },
       { item:"Polymer", quantity: 15 },
       { item:"Crystal", quantity: 5 },
       { item:"Element", quantity: 1 },
     ],
   },  
   {
     value: "Tek Double Door",
     recipe: [
       { item:"Crystal", quantity: 30 },
       { item:"Element", quantity: 0.5 },
       { item:"Polymer", quantity: 20 },
     ],
   },  
   {
     value: "Tek Double Doorframe",
     recipe: [
       { item:"Crystal", quantity: 5 },
       { item:"Element", quantity: 1 },
       { item:"Metal Ingot", quantity: 30 },
       { item:"Polymer", quantity: 15 },
     ],
   },  
   {
     value: "Tek Fence Foundation",
     recipe: [
       { item:"Metal Ingot", quantity: 5 },
       { item:"Cementing Paste", quantity: 2 },
       { item:"Element Shard", quantity: 25 },
     ],
   },  
   {
     value: "Tek Fence Support",
     recipe: [
       { item:"Cementing Paste", quantity: 2 },
       { item:"Element Shard", quantity: 25 },
       { item:"Metal Ingot", quantity: 5 },
     ],
   },  
   {
     value: "Tek Forcefield",
     recipe: [
       { item:"Metal Ingot", quantity: 5000 },
       { item:"Crystal", quantity: 600 },
       { item:"Black Pearl", quantity: 150 },
       { item:"Polymer", quantity: 800 },
       { item:"Element", quantity: 75 },
     ],
   },  
   {
     value: "Tek Foundation",
     recipe: [
       { item:"Metal Ingot", quantity: 100 },
       { item:"Polymer", quantity: 45 },
       { item:"Crystal", quantity: 20 },
       { item:"Element", quantity: 1 },
     ],
   },  
   {
     value: "Tek Gauntlets",
     recipe: [
       { item:"Polymer", quantity: 120 },
       { item:"Metal Ingot", quantity: 450 },
       { item:"Crystal", quantity: 120 },
       { item:"Element", quantity: 20 },
       { item:"Black Pearl", quantity: 55 },
     ],
   },  
   {
     value: "Tek Generator",
     recipe: [
       { item:"Element", quantity: 30 },
       { item:"Metal Ingot", quantity: 2400 },
       { item:"Crystal", quantity: 250 },
       { item:"Black Pearl", quantity: 120 },
       { item:"Polymer", quantity: 500 },
     ],
   },  
   {
     value: "Tek Gravity Grenade",
     recipe: [
       { item:"Element Dust", quantity: 200 },
       { item:"Crystal", quantity: 50 },
       { item:"Metal Ingot", quantity: 30 },
       { item:"Polymer", quantity: 60 },
       { item:"Gunpowder", quantity: 60 },
     ],
   },  
   {
     value: "Tek Grenade",
     recipe: [
       { item:"Element", quantity: 1 },
       { item:"Crystal", quantity: 40 },
       { item:"Cementing Paste", quantity: 10 },
       { item:"Metal Ingot", quantity: 30 },
       { item:"Polymer", quantity: 30 },
       { item:"Gunpowder", quantity: 60 },
     ],
   },  
   {
     value: "Tek Grenade Launcher",
     recipe: [
       { item:"Polymer", quantity: 180 },
       { item:"Metal Ingot", quantity: 420 },
       { item:"Crystal", quantity: 180 },
       { item:"Element", quantity: 40 },
       { item:"Black Pearl", quantity: 80 },
       { item:"Electronics", quantity: 60 },
     ],
   },  
   {
     value: "Tek Hatchframe",
     recipe: [
       { item:"Metal Ingot", quantity: 50 },
       { item:"Polymer", quantity: 25 },
       { item:"Crystal", quantity: 10 },
       { item:"Element", quantity: 1 },
     ],
   },  
   {
     value: "Tek Helmet",
     recipe: [
       { item:"Polymer", quantity: 120 },
       { item:"Metal Ingot", quantity: 450 },
       { item:"Crystal", quantity: 120 },
       { item:"Element", quantity: 20 },
       { item:"Black Pearl", quantity: 55 },
     ],
   },  
   {
     value: "Tek Jump Pad",
     recipe: [
       { item:"Metal Ingot", quantity: 100 },
       { item:"Element", quantity: 5 },
       { item:"Polymer", quantity: 250 },
       { item:"Crystal", quantity: 50 },
     ],
   },  
   {
     value: "Tek Ladder",
     recipe: [
       { item:"Metal Ingot", quantity: 7 },
       { item:"Polymer", quantity: 5 },
       { item:"Crystal", quantity: 2 },
       { item:"Element", quantity: 0.25 },
     ],
   },  
   {
     value: "Tek Leggings",
     recipe: [
       { item:"Polymer", quantity: 120 },
       { item:"Metal Ingot", quantity: 450 },
       { item:"Crystal", quantity: 120 },
       { item:"Element", quantity: 20 },
       { item:"Black Pearl", quantity: 55 },
     ],
   },  
   {
     value: "Tek Light",
     recipe: [
       { item:"Element", quantity: 2 },
       { item:"Metal Ingot", quantity: 90 },
       { item:"Crystal", quantity: 20 },
       { item:"Black Pearl", quantity: 1 },
       { item:"Polymer", quantity: 40 },
     ],
   },  
   {
     value: "Tek Phase Pistol",
     recipe: [
       { item:"Polymer", quantity: 70 },
       { item:"Metal Ingot", quantity: 300 },
       { item:"Crystal", quantity: 70 },
       { item:"Element", quantity: 15 },
       { item:"Black Pearl", quantity: 35 },
       { item:"Red Gem", quantity: 15 },
       { item:"Blue Gem", quantity: 15 },
       { item:"Green Gem", quantity: 15 },
     ],
   },  
   {
     value: "Tek Pillar",
     recipe: [
       { item:"Metal Ingot", quantity: 30 },
       { item:"Polymer", quantity: 7 },
       { item:"Crystal", quantity: 5 },
       { item:"Element", quantity: 0.5 },
     ],
   },  
   {
     value: "Tek Railgun",
     recipe: [
       { item:"Polymer", quantity: 450 },
       { item:"Metal Ingot", quantity: 120 },
       { item:"Gas Ball", quantity: 525 },
       { item:"Element", quantity: 20 },
       { item:"Black Pearl", quantity: 55 },
       { item:"Red Gem", quantity: 120 },
     ],
   },  
   {
     value: "Tek Railing",
     recipe: [
       { item:"Metal Ingot", quantity: 12 },
       { item:"Cementing Paste", quantity: 3 },
       { item:"Element Shard", quantity: 25 },
     ],
   },  
   {
     value: "Tek Ramp",
     recipe: [
       { item:"Metal Ingot", quantity: 35 },
       { item:"Polymer", quantity: 10 },
       { item:"Crystal", quantity: 10 },
       { item:"Element", quantity: 0.5 },
     ],
   },  
   {
     value: "Tek Replicator",
     recipe: [
       { item:"Element", quantity: 100 },
       { item:"Metal Ingot", quantity: 5000 },
       { item:"Crystal", quantity: 600 },
       { item:"Black Pearl", quantity: 150 },
       { item:"Polymer", quantity: 800 },
     ],
   },  
   {
     value: "Tek Remote Camera",
     recipe: [
       { item:"Polymer", quantity: 10 },
       { item:"Metal Ingot", quantity: 80 },
       { item:"Electronics", quantity: 25 },
       { item:"Element", quantity: 1 },
       { item:"Crystal", quantity: 25 },
     ],
   },  
   {
     value: "Tek Rifle",
     recipe: [
       { item:"Polymer", quantity: 120 },
       { item:"Metal Ingot", quantity: 450 },
       { item:"Crystal", quantity: 120 },
       { item:"Element", quantity: 20 },
       { item:"Black Pearl", quantity: 55 },
     ],
   },  
   {
     value: "Tek Sensor",
     recipe: [
       { item:"Metal Ingot", quantity: 80 },
       { item:"Electronics", quantity: 15 },
       { item:"Polymer", quantity: 10 },
       { item:"Crystal", quantity: 22 },
       { item:"Element", quantity: 5 },
     ],
   },  
 
   {
     value: "Tek Shield",
     recipe: [
       { item:"Polymer", quantity: 240 },
       { item:"Metal Ingot", quantity: 900 },
       { item:"Crystal", quantity: 240 },
       { item:"Element", quantity: 70 },
       { item:"Black Pearl", quantity: 100 },
     ],
   },  
   {
     value: "Tek Shoulder Cannon",
     recipe: [
       { item:"Polymer", quantity: 240 },
       { item:"Metal Ingot", quantity: 900 },
       { item:"Crystal", quantity: 240 },
       { item:"Element", quantity: 100 },
       { item:"Black Pearl", quantity: 100 },
     ],
   },  
   {
     value: "Tek Sleeping Pod",
     recipe: [
       { item:"Polymer", quantity: 80 },
       { item:"Pelt", quantity: 200 },
       { item:"Metal Ingot", quantity: 320 },
       { item:"Hide", quantity: 120 },
       { item:"Fiber", quantity: 280 },
     ],
   },  
   {
     value: "Tek Staircase",
     recipe: [
       { item:"Metal Ingot", quantity: 125 },
       { item:"Cementing Paste", quantity: 35 },
       { item:"Element Shard", quantity: 50 },
     ],
   },  
   {
     value: "Tek Stairs",
     recipe: [
       { item:"Crystal", quantity: 10 },
       { item:"Element", quantity: 0.5 },
       { item:"Metal Ingot", quantity: 35 },
       { item:"Polymer", quantity: 10 },
     ],
   },
     
   {
     value: "Tek Surveillance Console",
     recipe: [
       { item:"Polymer", quantity: 250 },
       { item:"Metal Ingot", quantity: 250 },
       { item:"Electronics", quantity: 500 },
       { item:"Element", quantity: 10 },
       { item:"Black Pearl", quantity: 50 },
     ],
   },    
   {
     value: "Tek Sword",
     recipe: [
       { item:"Polymer", quantity: 180 },
       { item:"Metal Ingot", quantity: 675 },
       { item:"Crystal", quantity: 180 },
       { item:"Element", quantity: 40 },
       { item:"Black Pearl", quantity: 80 },
     ],
   },    
   {
     value: "Tek Teleporter",
     recipe: [
       { item:"Element", quantity: 85 },
       { item:"Metal Ingot", quantity: 2500 },
       { item:"Crystal", quantity: 600 },
       { item:"Black Pearl", quantity: 150 },
       { item:"Polymer", quantity: 1200 },
     ],
   },    
   {
     value: "Tek Transmitter",
     recipe: [
       { item:"Element", quantity: 40 },
       { item:"Metal Ingot", quantity: 2500 },
       { item:"Crystal", quantity: 250 },
       { item:"Black Pearl", quantity: 80 },
       { item:"Polymer", quantity: 320 },
     ],
   },    
   {
     value: "Tek Trapdoor",
     recipe: [
       { item:"Crystal", quantity: 10 },
       { item:"Polymer", quantity: 4 },
       { item:"Element", quantity: 0.25 },
     ],
   },    
   {
     value: "Tek Triangle Ceiling",
     recipe: [
       { item:"Crystal", quantity: 10 },
       { item:"Element Shard", quantity: 50 },
       { item:"Metal Ingot", quantity: 25 },
       { item:"Polymer", quantity: 12 },
     ],
   },    
   {
     value: "Tek Triangle Foundation",
     recipe: [
       { item:"Crystal", quantity: 10 },
       { item:"Element Shard", quantity: 50 },
       { item:"Metal Ingot", quantity: 50 },
       { item:"Polymer", quantity: 20 },
     ],
   },    
   {
     value: "Tek Trough",
     recipe: [
       { item:"Black Pearl", quantity: 45 },
       { item:"Crystal", quantity: 100 },
       { item:"Electronics", quantity: 50 },
       { item:"Element", quantity: 18 },
       { item:"Metal Ingot", quantity: 900 },
       { item:"Polymer", quantity: 175 },
     ],
   },    
   {
     value: "Tek Turret",
     recipe: [
       { item:"Electronics", quantity: 100 },
       { item:"Metal Ingot", quantity: 100 },
       { item:"Cementing Paste", quantity: 50 },
       { item:"Polymer", quantity: 50 },
       { item:"Element", quantity: 3 },
     ],
   },    
   {
     value: "Tek Wall",
     recipe: [
       { item:"Metal Ingot", quantity: 35 },
       { item:"Polymer", quantity: 20 },
       { item:"Crystal", quantity: 15 },
       { item:"Element", quantity: 1 },
     ],
   },    
   {
     value: "Toilet",
     recipe: [
       { item:"Stone", quantity: 30 },
       { item:"Wood", quantity: 70 },
       { item:"Metal", quantity: 180 },
       { item:"Cementing Paste", quantity: 200 },
       { item:"Crystal", quantity: 40 },
     ],
   },    
   {
     value: "Tranq Arrow",
     recipe: [
       { item:"Stone Arrow", quantity: 1 },
       { item:"Narcotic", quantity: 1 },
     ],
   },    
   {
     value: "Tranquilizer Dart",
     recipe: [
       { item:"Narcotic", quantity: 3 },
       { item:"Metal Ingot", quantity: 2 },
       { item:"Simple Rifle Ammo", quantity: 1 },
     ],
   },    
   {
     value: "Tree Sap Tap",
     recipe: [
       { item:"Metal Ingot", quantity: 100 },
       { item:"Cementing Paste", quantity: 40 },
     ],
   },    
   {
     value: "Unassembled Mek",
     recipe: [
       { item:"Black Pearl", quantity: 25 },
       { item:"Crystal", quantity: 225 },
       { item:"Element", quantity: 40 },
       { item:"Metal Ingot", quantity: 1000 },
       { item:"Polymer", quantity: 550 },
     ],
   },    
   {
     value: "Exo Mek",
     recipe: [
       { item:"Element", quantity: 40 },
       { item:"Metal Ingot", quantity: 850 },
       { item:"Polymer", quantity: 300 },
       { item:"Crystal", quantity: 350 },
       { item:"Black Pearl", quantity: 35 },
     ],
   },    
   {
     value: "TEK Hover Skiff",
     recipe: [
       { item:"Element", quantity: 168 },
       { item:"Metal Ingot", quantity: 4100 },
       { item:"Polymer", quantity: 372 },
       { item:"Crystal", quantity: 60 },
       { item:"Oil", quantity: 62 },
       { item:"Electronics", quantity: 268 },
     ],
   },    
   {
     value: "Vacuum Compartment",
     recipe: [
       { item:"Metal Ingot", quantity: 360 },
       { item:"Polymer", quantity: 136 },
       { item:"Crystal", quantity: 180 },
       { item:"Element", quantity: 2 },
       { item:"Black Pearl", quantity: 32 },
     ],
   },    
   {
     value: "Vacuum Compartment Moonpool",
     recipe: [
       { item:"Metal Ingot", quantity: 360 },
       { item:"Polymer", quantity: 136 },
       { item:"Crystal", quantity: 180 },
       { item:"Element", quantity: 2 },
       { item:"Black Pearl", quantity: 32 },
     ],
   },    
   {
     value: "Vault",
     recipe: [
       { item:"Metal Ingot", quantity: 500 },
       { item:"Cementing Paste", quantity: 100 },
       { item:"Oil", quantity: 70 },
       { item:"Polymer", quantity: 90 },
     ],
   },    
   {
     value: "Water Jar",
     recipe: [
       { item:"Cementing Paste", quantity: 7 },
       { item:"Hide", quantity: 5 },
       { item:"Crystal", quantity: 2 },
     ],
   },    
   {
     value: "Whip",
     recipe: [
       { item:"Hide", quantity: 10 },
       { item:"Wood", quantity: 5 },
       { item:"Fiber", quantity: 25 },
       { item:"Silk", quantity: 10 },
     ],
   },
   
   
   {
     value: "Beer Liquid",
     recipe: [
       { item:"Thatch", quantity: 40 },
       { item:"Azulberry", quantity: 50 },
     ],
   },
   {
     value: "Calien Soup",
     recipe: [
       { item:"Citronal", quantity: 5 },
       { item:"Tintoberry", quantity: 20 },
       { item:"Amarberry", quantity: 20 },
       { item:"Mejoberry", quantity: 10 },
       { item:"Stimulant", quantity: 2 },
     ],
   },
   {
     value: "Cactus Broth",
     recipe: [
       { item:"Cactus Sap", quantity: 30 },
       { item:"Mejoberry", quantity: 10 },
       { item:"Azulberry", quantity: 10 },
       { item:"Amarberry", quantity: 10 },
     ],
   },
   {
     value: "Amarberry",
     recipe: [
       { item:"Amarberry", quantity: 1 },
     ],
   },
   {
     value: "Ammonite Blood",
     recipe: [
       { item:"Ammonite Blood", quantity: 1 },
     ],
   },
   {
     value: "Azulberry",
     recipe: [
       { item:"Azulberry", quantity: 1 },
     ],
   },
   {
     value: "Black Pearl",
     recipe: [
       { item:"Black Pearl", quantity: 1 },
     ],
   },
   {
     value: "Blue Gem",
     recipe: [
       { item:"Blue Gem", quantity: 1 },
     ],
   },
   {
     value: "Cactus Sap",
     recipe: [
       { item:"Cactus Sap", quantity: 1 },
     ],
   },
   {
     value: "Cementing Paste (Hexagon)",
     recipe: [
       { item:"Cementing Paste", quantity: 1 },
     ],
   },
   {
     value: "Cementing Paste (Chemistry bench)",
     recipe: [
       { item:"Keratin", quantity: 2.6666 },
       { item:"Stone", quantity: 5.3333 },
     ],
   },
   {
     value: "Charcoal",
     recipe: [
       { item:"Charcoal", quantity: 1 },
     ],
   },
   {
     value: "Chitin",
     recipe: [
       { item:"Chitin", quantity: 1 },
     ],
   },
   {
     value: "Clay",
     recipe: [
       { item:"Clay", quantity: 1 },
     ],
   },
   {
     value: "Crystal",
     recipe: [
       { item:"Crystal", quantity: 1 },
     ],
   },
   {
     value: "Electronics",
     recipe: [
       { item:"Metal Ingot", quantity: 1 },
       { item:"Silica Pearls", quantity: 3 },
     ],
   },
   {
     value: "Electronics (Hexagon)",
     recipe: [
       { item:"Electronics", quantity: 1 },
     ],
   },
   {
     value: "Fiber",
     recipe: [
       { item:"Fiber", quantity: 1 },
     ],
   },
   {
     value: "Flint",
     recipe: [
       { item:"Flint", quantity: 1 },
     ],
   },
   {
     value: "Gasoline (Hexagon)",
     recipe: [
       { item:"Gas", quantity: 1 },
     ],
   },
   {
     value: "Green Gem",
     recipe: [
       { item:"Green Gem", quantity: 1 },
     ],
   },
   {
     value: "Gunpowder (Hexagon)",
     recipe: [
       { item:"Gunpowder", quantity: 1 },
     ],
   },
   {
     value: "Hide",
     recipe: [
       { item:"Hide", quantity: 1 },
     ],
   },
   {
     value: "Keratin",
     recipe: [
       { item:"Keratin", quantity: 1 },
     ],
   },
   {
     value: "Mejoberry",
     recipe: [
       { item:"Mejoberry", quantity: 1 },
     ],
   },
   {
     value: "Metal",
     recipe: [
       { item:"Metal", quantity: 1 },
     ],
   },
   {
     value: "Metal Ingot",
     recipe: [
       { item:"Metal Ingot", quantity: 1 },
     ],
   },
   {
     value: "Narcoberry",
     recipe: [
       { item:"Narcoberry", quantity: 1 },
     ],
   },
   {
     value: "Obsidian",
     recipe: [
       { item:"Obsidian", quantity: 1 },
     ],
   },
   {
     value: "Oil",
     recipe: [
       { item:"Oil", quantity: 1 },
     ],
   },
   {
     value: "Polymer (Hexagon)",
     recipe: [
       { item:"Polymer", quantity: 1 },
     ],
   },
   {
     value: "Pelt",
     recipe: [
       { item:"Pelt", quantity: 1 },
     ],
   },
   {
     value: "Propellant (Hexagon)",
     recipe: [
       { item:"Propellant", quantity: 1 },
     ],
   },
   {
     value: "Rare Flowers",
     recipe: [
       { item:"Rare Flowers", quantity: 1 },
     ],
   },
   {
     value: "Rare Mushrooms",
     recipe: [
       { item:"Rare Mushrooms", quantity: 1 },
     ],
   },
   {
     value: "Raw Meat",
     recipe: [
       { item:"Raw Meat", quantity: 1 },
     ],
   },
   {
     value: "Red Gem",
     recipe: [
       { item:"Red Gem", quantity: 1 },
     ],
   },
   {
     value: "Salt",
     recipe: [
       { item:"Salt", quantity: 1 },
     ],
   },
   {
     value: "Sand",
     recipe: [
       { item:"Sand", quantity: 1 },
     ],
   },
   {
     value: "Sap",
     recipe: [
       { item:"Sap", quantity: 1 },
     ],
   },
   {
     value: "Silica Pearls",
     recipe: [
       { item:"Silica Pearls", quantity: 1 },
     ],
   },
   {
     value: "Silk",
     recipe: [
       { item:"Silk", quantity: 1 },
     ],
   },
   {
     value: "Sparkpowder (Hexagon)",
     recipe: [
       { item:"Sparkpowder", quantity: 1 },
     ],
   },
   {
     value: "Stimberry",
     recipe: [
       { item:"Stimberry", quantity: 1 },
     ],
   },
   {
     value: "Stone",
     recipe: [
       { item:"Stone", quantity: 1 },
     ],
   },
   {
     value: "Sulfur",
     recipe: [
       { item:"Sulfur", quantity: 1 },
     ],
   },
   {
     value: "Thatch",
     recipe: [
       { item:"Thatch", quantity: 1 },
     ],
   },
   {
     value: "Tintoberry",
     recipe: [
       { item:"Tintoberry", quantity: 1 },
     ],
   },
   {
     value: "Wood",
     recipe: [
       { item:"Wood", quantity: 1 },
     ],
   },
   
     {
     value: "Battle Tartare",
     recipe: [
       { item:"Raw Prime Meat", quantity: 3 },
       { item:"Mejoberry", quantity: 20 },
       { item:"Stimulant", quantity: 8 },
       { item:"Rare Flowers", quantity: 2 },
       { item:"Citronal", quantity: 1 },
       { item:"Longrass", quantity: 1 },
     ],
   },
 
   {
     value: "Enforcer",
     recipe: [
       { item:"Element Dust", quantity: 500 },
       { item:"Metal Ingot", quantity: 60 },
       { item:"Polymer", quantity: 30 },
       { item:"Crystal", quantity: 50 },
       { item:"Oil", quantity: 20 },
     ],
   },
 
   {
     value: "Harpoon Launcher",
     recipe: [
       { item:"Wood", quantity: 40 },
       { item:"Fiber", quantity: 60 },
       { item:"Hide", quantity: 25 },
       { item:"Metal Ingot", quantity: 120 },
       { item:"Cementing Paste", quantity: 60 },
       { item:"Obsidian", quantity: 50 },
       { item:"Polymer", quantity: 30 },
     ],
   },
 
   {
     value: "Greenhouse Wall",
     recipe: [
       { item:"Metal Ingot", quantity: 7 },
       { item:"Crystal", quantity: 25 },
       { item:"Cementing Paste", quantity: 7 },
     ],
   },
   {
     value: "Greenhouse Sloped Wall Left",
     recipe: [
       { item:"Metal Ingot", quantity: 4 },
       { item:"Crystal", quantity: 15 },
       { item:"Cementing Paste", quantity: 4 },
     ],
   },
   {
     value: "Greenhouse Sloped Wall Right",
     recipe: [
       { item:"Metal Ingot", quantity: 4 },
       { item:"Crystal", quantity: 15 },
       { item:"Cementing Paste", quantity: 4 },
     ],
   },
   {
     value: "Greenhouse Doorframe",
     recipe: [
       { item:"Metal Ingot", quantity: 5 },
       { item:"Crystal", quantity: 20 },
       { item:"Cementing Paste", quantity: 5 },
     ],
   },
   {
     value: "Greenhouse Double Doorframe",
     recipe: [
       { item:"Metal Ingot", quantity: 5 },
       { item:"Crystal", quantity: 20 },
       { item:"Cementing Paste", quantity: 5 },
     ],
   },
   {
     value: "Greenhouse Door",
     recipe: [
       { item:"Metal Ingot", quantity: 3 },
       { item:"Crystal", quantity: 10 },
       { item:"Cementing Paste", quantity: 4 },
     ],
   },
   {
     value: "Greenhouse Double Door",
     recipe: [
       { item:"Metal Ingot", quantity: 6 },
       { item:"Crystal", quantity: 20 },
       { item:"Cementing Paste", quantity: 8 },
     ],
   },
   {
     value: "Greenhouse Window",
     recipe: [
       { item:"Metal Ingot", quantity: 1 },
       { item:"Crystal", quantity: 3 },
       { item:"Cementing Paste", quantity: 1 },
     ],
   },
   {
     value: "Greenhouse Ceiling",
     recipe: [
       { item:"Metal Ingot", quantity: 10 },
       { item:"Crystal", quantity: 35 },
       { item:"Cementing Paste", quantity: 10 },
     ],
   },
   {
     value: "Greenhouse Triangle Ceiling",
     recipe: [
       { item:"Metal Ingot", quantity: 5 },
       { item:"Crystal", quantity: 17 },
       { item:"Cementing Paste", quantity: 5 },
     ],
   },
   {
     value: "Greenhouse Sloped Roof",
     recipe: [
       { item:"Metal Ingot", quantity: 10 },
       { item:"Crystal", quantity: 35 },
       { item:"Cementing Paste", quantity: 10 },
     ],
   },
   {
     value: "Greenhouse Triangle Roof",
     recipe: [
       { item:"Metal Ingot", quantity: 7 },
       { item:"Crystal", quantity: 25 },
       { item:"Cementing Paste", quantity: 7 },
     ],
   },
   
 ];


module.exports = {
    name:"craft",
    data: new SlashCommandBuilder()
    .setName("craft")
    .setDescription("View Resource requirements for structures.")
    .addStringOption(option => option.setName('structure').setDescription('Select Structure Name').setRequired(true))
    .addNumberOption(option => option.setName('quantity').setDescription('Enter Quantity')),

run: async (client, interaction) => {

    let data = rawdata;
    var itemname = interaction.options.getString('structure');
    var quantity = interaction.options.getNumber('quantity');
    if(!interaction.options.getNumber('quantity')) {quantity = 1};
      
    for(i=0;i<data.length;i++){
    if(data[i].value.toLowerCase().includes(itemname.toLowerCase())){ 
    
        let name = data[i].value;
        let requirements = [];

        data[i].recipe.forEach(recipe => {
            requirements.push(`**${recipe.item}**:   ${recipe.quantity*quantity}x`)
        })

        let ingredients = requirements.join("\n")
        let imageurl = data[i].value.replace(/ /g, '_')
        let image = `https://www.arkresourcecalculator.com/assets/images/80px-${imageurl}.png`;
        let craft = `**Item:** ${name}\n**Amount:** ${quantity}`

let embed = new MessageEmbed()
.setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
.setColor(EmbedColour)
.setThumbnail(image)
.setTimestamp()
.addField(`ARK | Crafting Calculator`, "Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)")
.addField("\t\u200b", `${craft}`,true)
.addField("\tIngredients:", `${ingredients}`)

return interaction.followUp({ embeds: [embed] })      
}
}
}
}