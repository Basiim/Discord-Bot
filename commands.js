const Discord = require('discord.js');
const fetch = require('node-fetch');
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
var firstID, secondID, firstChoice, secondChoice, idx;
module.exports = async function(msg) {
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
        var chance = Math.floor((Math.random() * 100) + 0);
        var result;
        console.log(chance);
        if (chance % 2 == 0)
            result = 'Heads';
        else
            result = 'Tails';
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setAuthor('Coinflip', 'https://i.imgur.com/L04qJk6.png', 'http://basimabdullahtariq.tk/')
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
                    .setAuthor('Magic 8Ball', 'https://i.imgur.com/L04qJk6.png', 'http://basimabdullahtariq.tk/')
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
                .setAuthor('Magic 8Ball', 'https://i.imgur.com/L04qJk6.png', 'http://basimabdullahtariq.tk/')
                .addFields({ name: 'Magic 8ball Says: ', value: result })
                .setTimestamp()
                .setFooter('Mera Bot By Basim');
            msg.channel.send(embed);
        }
    }
    if (msg.content === 'bot server info') {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setAuthor('Server Info', 'https://i.imgur.com/L04qJk6.png', 'http://basimabdullahtariq.tk/')
            .setImage(msg.guild.iconURL)
            .setDescription(`${msg.guild}'s information`)
            .addField("Owner", `${msg.guild.owner}`)
            .addField("Member Count", `${msg.guild.memberCount} members`)
            .addField("Roles", `${msg.guild.roles.cache.size} roles`)
            .setFooter('Mera Bot By Basim');
        msg.channel.send(embed);
    }
    if (msg.content === 'bot my info') {
        var d1 = new Date(msg.author.createdTimestamp);
        date = d1.toDateString();
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setAuthor('User Info', 'https://i.imgur.com/L04qJk6.png', 'http://basimabdullahtariq.tk/')
            .setThumbnail(msg.author.avatarURL)
            .setDescription(`${msg.author}'s information`)
            .addField("Username", `${msg.author.tag}`)
            .addField("Account created:", `${date}`)
            .setFooter('Mera Bot By Basim');
        msg.channel.send(embed);
    }
    if (msg.content === 'bot logs') {
        var entry = await msg.guild.fetchAuditLogs({ type: 'MEMBER_DISCONNECT' }).then(audit => audit.entries.array())
        var i = 0;
        const d2 = new Date();
        date2 = d2.toDateString(); // current date

        msg.channel.send('`========DISCONNECT LOGS========`');
        while (entry[i]) {
            if (entry[i].action == 'MEMBER_DISCONNECT') {
                var d1 = new Date(entry[i].createdTimestamp);
                date1 = d1.toDateString();
                if (date1 == date2) {
                    const embed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setAuthor('Disconnect Logs', 'https://i.imgur.com/L04qJk6.png', 'http://basimabdullahtariq.tk/')
                        .addFields({ name: 'Logs', value: (`\`${entry[i].executor.username} disconneted a user\``) })
                        .setTimestamp(entry[i].createdTimestamp)
                        .setFooter('Mera Bot By Basim');
                    msg.channel.send(embed);
                }
            }
            i++;
        }
        console.log(i);
        entry = await msg.guild.fetchAuditLogs({ type: 'MEMBER_MOVE' }).then(audit => audit.entries.array())
        i = 0;
        msg.channel.send('`========MOVE LOGS========`');
        while (entry[i]) {
            if (entry[i].action == 'MEMBER_MOVE') {
                d1 = new Date(entry[i].createdTimestamp);
                date1 = d1.toDateString();
                if (date1 == date2) {
                    const embed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setAuthor('Move Logs', 'https://i.imgur.com/L04qJk6.png', 'http://basimabdullahtariq.tk/')
                        .addFields({ name: 'Logs', value: (`\`${entry[i].executor.username} moved a user to ${entry[i].extra.channel.name}\``) })
                        .setTimestamp(entry[i].createdTimestamp)
                        .setFooter('Mera Bot By Basim');
                    msg.channel.send(embed);
                }
                i++;
            }
        }
        msg.channel.send('`========END LOGS========`');
    }
    if (msg.content == 'check jail') {
        const channel = msg.guild.channels.cache.get('783632677793562684');
        channel.members.forEach(member => {
            console.log(member.roles.highest.name);
            if (member.roles.highest.name == "Jail") {
                //Rest of your code
                member.voice.setMute(true);
                member.voice.setDeaf(true);
                member.voice.setChannel('826831011227631638');
            }
        })
        setTimeout(function() {
            //client.channels.cache.get('806436951561076736').send("check jail");
            msg.channel.send("check jail");
        }, 10000);
    }
    if (msg.content.startsWith("bot gif")) {
        const args = msg.content.slice(7).trim().split(' ');
        const command = args.shift().toLowerCase();
        var url;
        if (command == '')
            url = `https://g.tenor.com/v1/search?q=excited&key=${process.env.TENORKEY}&limit=8`;
        else
            url = `https://g.tenor.com/v1/search?q=${command}&key=${process.env.TENORKEY}&limit=8`;
        let response = await fetch(url);
        let json = await response.json();
        let seed = Math.floor(Math.random() * json.results.length);
        msg.channel.send(json.results[seed].url);
    }
    if (msg.content == "bot help") {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setAuthor('Help', 'https://i.imgur.com/L04qJk6.png', 'http://basimabdullahtariq.tk/')
            .addFields({ name: 'Commands', value: (`bot help
                                                    bot logs
                                                    bot 8ball 
                                                    \`usage bot 8ball statement\`
                                                    bot coinflip
                                                    bot gif
                                                    \`usage bot gif keyword\`
                                                    bot rps (rock/paper scissors)
                                                    \`usage bot rps @person\`
                                                    bot server info
                                                    bot my info
                                                            `) })
            .setTimestamp(msg.createdTimestamp)
            .setFooter('Mera Bot By Basim');
        msg.channel.send(embed);
    }
}