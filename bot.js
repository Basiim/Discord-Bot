require('dotenv').config()
const { Server } = require('discord.io');
const Discord = require('discord.js');
const client = new Discord.Client();

/// Server
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use("/Assets/img", express.static(__dirname + "/assets/img"));

app.get("/", function(req, res) {
    console.log("Index Loaded");
    res.json("Bot started!");
});
app.listen(port, function() {
    console.log("Server is Live");
})

/// Bot
client.login(process.env.BOTTOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setActivity({
        name: 'with life (bot help)',
        options: 'Playing'
    });
});

const commandHandler = require("./commands");
client.on('message', commandHandler);

client.on('message', async(msg) => {
    if (msg.content.startsWith('bot rps')) {
        const args = msg.content.slice(7).trim().split(' ');
        const command = args.shift().toLowerCase();
        if (command === '') {
            if (!args.length) {
                const embed = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setAuthor('Rock/Paper/Scissors', 'https://i.imgur.com/L04qJk6.png', 'http://basimabdullahtariq.tk/')
                    .addFields({ name: 'Error: ', value: 'You must tag another person to play with.' })
                    .setTimestamp()
                    .setFooter('Mera Bot By Basim');
                msg.channel.send(embed);
            }
        } else {
            const taggedUser = msg.mentions.users.first();
            firstID = msg.author.id;
            secondID = taggedUser.id;
            taggedUser.send('Choose Rock/Paper/Scissors');
            msg.author.send('Choose Rock/Paper/Scissors');
        }
    }
    if (msg.content == 'rock' || msg.content == 'Rock') {
        if (msg.author.id == firstID) {
            msg.reply('You choose: rock');
            firstChoice = 'rock';
        }
        if (msg.author.id == secondID) {
            msg.reply('You choose: rock');
            secondChoice = 'rock';
        }
        msg.reply('making a decision...');
    }
    if (msg.content == 'paper' || msg.content == 'Paper') {
        if (msg.author.id == firstID) {
            msg.reply('You choose: paper');
            firstChoice = 'paper';
        }
        if (msg.author.id == secondID) {
            msg.reply('You choose: paper');
            secondChoice = 'paper';
        }
        msg.reply('making a decision...');
    }
    if (msg.content == 'scissors' || msg.content == 'Scissors') {
        if (msg.author.id == firstID) {
            msg.reply('You choose: scissors');
            firstChoice = 'scissors';
        }
        if (msg.author.id == secondID) {
            msg.reply('You choose: scissors');
            secondChoice = 'scissors';
        }
        msg.reply('making a decision...');
    }
    if (msg.content == 'making a decision...') {
        if (firstChoice === secondChoice) {
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setAuthor('Rock/Paper/Scissors', 'https://i.imgur.com/L04qJk6.png', 'http://basimabdullahtariq.tk/')
                .addFields({ name: 'Result: ', value: `Both <@${firstID}> and <@${secondID}> choose ${firstChoice} \n\n Its a Draw!` })
                .setTimestamp()
                .setFooter('Mera Bot By Basim');
            client.channels.cache.get('720525837161725982').send(embed);
            firstChoice = null;
            secondChoice = null;
        }
        if (firstChoice === 'scissors' && secondChoice == 'paper') {
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setAuthor('Rock/Paper/Scissors', 'https://i.imgur.com/L04qJk6.png', 'http://basimabdullahtariq.tk/')
                .addFields({ name: 'Result: ', value: `<@${firstID}> choose ${firstChoice} \n <@${secondID}> choose ${secondChoice} \n\n <@${firstID}> Won!` })
                .setTimestamp()
                .setFooter('Mera Bot By Basim');
            client.channels.cache.get('720525837161725982').send(embed);
            firstChoice = null;
            secondChoice = null;
        }
        if (firstChoice === 'scissors' && secondChoice == 'rock') {
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setAuthor('Rock/Paper/Scissors', 'https://i.imgur.com/L04qJk6.png', 'http://basimabdullahtariq.tk/')
                .addFields({ name: 'Result: ', value: `<@${firstID}> choose ${firstChoice} \n <@${secondID}> choose ${secondChoice} \n\n <@${secondID}> Won!` })
                .setTimestamp()
                .setFooter('Mera Bot By Basim');
            client.channels.cache.get('720525837161725982').send(embed);
            firstChoice = null;
            secondChoice = null;
        }
        if (firstChoice === 'paper' && secondChoice == 'rock') {
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setAuthor('Rock/Paper/Scissors', 'https://i.imgur.com/L04qJk6.png', 'http://basimabdullahtariq.tk/')
                .addFields({ name: 'Result: ', value: `<@${firstID}> choose ${firstChoice} \n <@${secondID}> choose ${secondChoice} \n\n <@${firstID}> Won!` })
                .setTimestamp()
                .setFooter('Mera Bot By Basim');
            client.channels.cache.get('720525837161725982').send(embed);
            firstChoice = null;
            secondChoice = null;
        }
        if (firstChoice === 'paper' && secondChoice == 'scissors') {
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setAuthor('Rock/Paper/Scissors', 'https://i.imgur.com/L04qJk6.png', 'http://basimabdullahtariq.tk/')
                .addFields({ name: 'Result: ', value: `<@${firstID}> choose ${firstChoice} \n <@${secondID}> choose ${secondChoice} \n\n <@${secondID}> Won!` })
                .setTimestamp()
                .setFooter('Mera Bot By Basim');
            client.channels.cache.get('720525837161725982').send(embed);
            firstChoice = null;
            secondChoice = null;
        }
        if (firstChoice === 'rock' && secondChoice == 'paper') {
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setAuthor('Rock/Paper/Scissors', 'https://i.imgur.com/L04qJk6.png', 'http://basimabdullahtariq.tk/')
                .addFields({ name: 'Result: ', value: `<@${firstID}> choose ${firstChoice} \n <@${secondID}> choose ${secondChoice} \n\n <@${secondID}> Won!` })
                .setTimestamp()
                .setFooter('Mera Bot By Basim');
            client.channels.cache.get('720525837161725982').send(embed);
            firstChoice = null;
            secondChoice = null;
        }
        if (firstChoice === 'rock' && secondChoice == 'scissors') {
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setAuthor('Rock/Paper/Scissors', 'https://i.imgur.com/L04qJk6.png', 'http://basimabdullahtariq.tk/')
                .addFields({ name: 'Result: ', value: `<@${firstID}> choose ${firstChoice} \n <@${secondID}> choose ${secondChoice} \n\n <@${firstID}> Won!` })
                .setTimestamp()
                .setFooter('Mera Bot By Basim');
            client.channels.cache.get('720525837161725982').send(embed);
            firstChoice = null;
            secondChoice = null;
        }
    }
});