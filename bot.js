require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

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
});
client.on('message', async(message) => {
    if (message.content === 'bot logs') {
        const logs = message.guild.channels.cache.find(channel => channel.name === "logs");
        if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
            message.guild.createChannel('logs', 'text');
        }
        if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
            console.log('The logs channel does not exist and tried to create the channel but I am lacking permissions')
        }
        var entry = await message.guild.fetchAuditLogs({ type: 'MEMBER_DISCONNECT' }).then(audit => audit.entries.array())
        var i = 0;
        const d2 = new Date();
        date2 = d2.toDateString(); // current date

        message.channel.send('========DISCONNECT LOGS========');
        while (entry[i]) {
            if (entry[i].action == 'MEMBER_DISCONNECT') {
                var d1 = new Date(entry[i].createdTimestamp);
                date1 = d1.toDateString();
                if (date1 == date2) {
                    const embed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setAuthor('Disconnect Logs', 'https://i.imgur.com/zwg237E.png', 'https://basimabdullahtariq.azurewebsites.net/')
                        .addFields({ name: 'Logs', value: (`${entry[i].executor.username} disconneted a user`) })
                        .setTimestamp(entry[i].createdTimestamp)
                        .setFooter('Mera Bot By Basim');
                    message.channel.send(embed);
                }
            }
            i++;
        }
        entry = await message.guild.fetchAuditLogs({ type: 'MEMBER_MOVE' }).then(audit => audit.entries.array())
        i = 0;
        message.channel.send('========MOVE LOGS========');
        while (entry[i]) {
            if (entry[i].action == 'MEMBER_MOVE') {
                d1 = new Date(entry[i].createdTimestamp);
                date1 = d1.toDateString();
                if (date1 == date2) {
                    const embed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setAuthor('Move Logs', 'https://i.imgur.com/zwg237E.png', 'https://basimabdullahtariq.azurewebsites.net/')
                        .addFields({ name: 'Logs', value: (`${entry[i].executor.username} moved a user to ${entry[i].extra.channel.name}`) })
                        .setTimestamp(entry[i].createdTimestamp)
                        .setFooter('Mera Bot By Basim');
                    message.channel.send(embed);
                }
                i++;
            }
        }
        message.channel.send('========END LOGS========');
    }
})