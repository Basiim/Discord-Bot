require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();


client.login(process.env.BOTTOKEN);

var dead = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
var idx = 0;
client.on('message', async msg => {
    if (msg.content === 'ahad') {
        msg.reply('ahad is bad boi');
    }
    if (msg.content === 'gud morning guyz') {
        msg.reply('come again CR');
    }
    if (msg.content === 'come again CR') {
        msg.reply('yes sir we can hear u');
    }
    if (msg.content === 'yes sir') {
        msg.reply('ahad sir ka uthao mat! PLSSS');
    }
    if (msg.content === 'bye') {
        msg.reply('ciya guyz');
    }
    if (msg.content === 'faisal') {
        msg.reply('yaar mujha bhej me copy nae krun ga');
    }
    if (msg.content === 'Talha sajjad?') {
        msg.reply('sir mic issue');
    }
    if (msg.content === 'kazmi yeh white hai?') {
        msg.reply('yaar yeh white kiun hai?');
    }
    if (msg.content === 'kazmi yahan aa') {
        msg.reply('yaar kahan ana hai');
    }
    if (msg.content == 'au start') {
        if (msg.member.voice.channel) {
            const connection = msg.member.voice.channel.join();
        }
        const channel = msg.guild.channels.cache.get('720526780267626527');
        channel.members.forEach(member => {
            console.log(member.user.id);
            member.voice.setMute(true);
        })
    }
    if (msg.content.startsWith('au dead')) { // mute dead player 
        //console.log("check");

        const channel = msg.guild.channels.cache.get('720526780267626527');
        if (msg.mentions.users.size) {
            const taggedUser = msg.mentions.users.first();
            //console.log(taggedUser.id);
            channel.members.forEach(member => {
                if (member.user.id == taggedUser.id) {
                    dead[idx] = taggedUser.id;
                    member.voice.setMute(true);
                    idx++;
                }
            })
        }
        for (var i = 0; i < 5; i++)
            console.log(dead[i]);
        //idx = 0;
        //idx = 0;
    }
    if (msg.content == 'au meeting') {
        const channel = msg.guild.channels.cache.get('720526780267626527');
        for (var i = 0; i < 5; i++)
            console.log(dead[i]);
        idx = 0;
        channel.members.forEach(member => {
            if (member.user.id == dead[idx]) {
                console.log(member.user.id);
                console.log(idx);
                member.voice.setMute(true);
            } else {
                member.voice.setMute(false);
            }
            idx++;
        })
    }
    if (msg.content == 'au end') {
        const channel = msg.guild.channels.cache.get('720526780267626527');
        idx = 0;
        channel.members.forEach(member => {
            dead[idx] = 0;
            member.voice.setMute(false);
            idx++;
        })
        idx = 0;
    }
    if (msg.content == 'au leave') { // Add disconnect here
        if (msg.member.voice.channel) {
            const connection = msg.member.voice.channel.leave();
        }
    }
});