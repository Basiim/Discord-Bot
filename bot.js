require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
var search = require('youtube-search');
const ytdl = require("ytdl-core");
const queue = new Map();
const fetch = require('node-fetch');

client.login(process.env.BOTTOKEN);

var ballArray = ['As I see it, yes.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don’t count on it.',
    'It is certain.',
    'It is decidedly so.',
    'Most likely.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Outlook good.',
    'Reply hazy, try again.',
    'Signs point to yes.',
    'Very doubtful.',
    'Without a doubt.',
    'Yes.',
    'Yes – definitely.',
    'You may rely on it.'
];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity({
        //status: "online", //You can show online, idle....
        /*game: {
            name: "with life", //The message shown
            type: "Playing" //PLAYING: WATCHING: LISTENING: STREAMING:
        }*/
        name: 'with life',
        options: 'Playing'
    });
});
var idx = 0;
client.on('message', async msg => {
    if (msg.content === 'ahad') {
        msg.channel.send('ahad is bad boi');
    }
    if (msg.content === 'gud morning guyz') {
        msg.channel.send('come again CR');
    }
    if (msg.content === 'come again CR') {
        msg.channel.send('yes sir we can hear u');
    }
    if (msg.content === 'yes sir') {
        msg.channel.send('ahad sir ka uthao mat! PLSSS');
    }
    if (msg.content === 'bye') {
        msg.channel.send('ciya guyz');
    }
    if (msg.content === 'faisal') {
        msg.channel.send('yaar mujha bhej me copy nae krun ga');
    }
    if (msg.content === 'Talha sajjad?') {
        msg.channel.send('sir mic issue');
    }
    if (msg.content === 'kazmi yeh white hai?') {
        msg.channel.send('yaar yeh white kiun hai?');
    }
    if (msg.content === 'kazmi yahan aa') {
        msg.channel.send('yaar kahan ana hai');
    }
    if (msg.content === 'bot coinflip') {
        var chance = Math.floor((Math.random() * 2) + 1);
        var result;
        if (chance == 1)
            result = 'Heads';
        else
            result = 'Tails';
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setAuthor('Coinflip', 'https://i.imgur.com/zwg237E.png', 'https://basimabdullahtariq.azurewebsites.net/')
            .addFields({ name: 'Coinflip Result: ', value: result })
            .setTimestamp()
            .setFooter('Mera Bot By Basim');

        msg.channel.send(embed);
    }
    if (msg.content.startsWith('bot 8ball')) {
        const args = msg.content.slice(9).trim().split(' ');
        const command = args.shift().toLowerCase();
        if (command === '') {
            if (!args.length) {
                const embed = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setAuthor('Magic 8Ball', 'https://i.imgur.com/zwg237E.png', 'https://basimabdullahtariq.azurewebsites.net/')
                    .addFields({ name: 'Error: ', value: 'You must include a statement.' })
                    .setTimestamp()
                    .setFooter('Mera Bot By Basim');
                msg.channel.send(embed);
            }
        } else {
            var chance = Math.floor((Math.random() * 20) + 1);
            var result = ballArray[chance];

            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setAuthor('Magic 8Ball', 'https://i.imgur.com/zwg237E.png', 'https://basimabdullahtariq.azurewebsites.net/')
                .addFields({ name: 'Magic 8ball Says: ', value: result })
                .setTimestamp()
                .setFooter('Mera Bot By Basim');
            msg.channel.send(embed);
        }
    }
    if (msg.content.startsWith('bot gif')) {
        let url = `https://api.tenor.com/v1/search?q=laugh&key=${process.env.TENORKEY}&limit=8`
        const args = msg.content.slice(7).trim().split(' ');
        const command = args.shift().toLowerCase();
        if (command === '') {
            if (!args.length) {
                let response = await fetch(url);
                let json = await response.json();
                //msg.channel.send(json.results[0].url);
                const embed = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setAuthor('Gif', 'https://i.imgur.com/zwg237E.png', 'https://basimabdullahtariq.azurewebsites.net/')
                    .addFields({ name: 'Error: ', value: json.results[0].url })
                    .setTimestamp()
                    .setFooter('Mera Bot By Basim');
                msg.channel.send(embed);
            }
        } else {
            let response = await fetch(url);
            let json = await response.json();
            msg.channel.send(json.results[0].url);
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setAuthor('Gif', 'https://i.imgur.com/zwg237E.png', 'https://basimabdullahtariq.azurewebsites.net/')
                .addFields({ name: 'GIF: ', value: json.results[0].url })
                .setTimestamp()
                .setFooter('Mera Bot By Basim');
            msg.channel.send(embed);
        }
    }

});