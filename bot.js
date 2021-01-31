require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
var search = require('youtube-search');
const ytdl = require("ytdl-core");
const queue = new Map();

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
            .setAuthor('By Basim', 'https://i.imgur.com/zwg237E.png', 'https://basimabdullahtariq.azurewebsites.net/')
            .addFields({ name: 'Coinflip Result: ', value: result })
            .setTimestamp()
            .setFooter('Coinflip By Basim');

        msg.channel.send(embed);
    }
    if (msg.content.startsWith('bot 8ball')) {
        const args = msg.content.slice(9).trim().split(' ');
        const command = args.shift().toLowerCase();
        if (command === '') {
            if (!args.length) {
                const embed = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setAuthor('By Basim', 'https://i.imgur.com/zwg237E.png', 'https://basimabdullahtariq.azurewebsites.net/')
                    .addFields({ name: 'Error: ', value: 'You must include a statement.' })
                    .setTimestamp()
                    .setFooter('Magic 8Ball By Basim');
                msg.channel.send(embed);
            }
        } else {
            var chance = Math.floor((Math.random() * 20) + 1);
            var result = ballArray[chance];

            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setAuthor('By Basim', 'https://i.imgur.com/zwg237E.png', 'https://basimabdullahtariq.azurewebsites.net/')
                .addFields({ name: 'Magic 8ball Says: ', value: result })
                .setTimestamp()
                .setFooter('Magic 8Ball By Basim');
            msg.channel.send(embed);
        }
    }
    if (msg.content.startsWith('test')) {
        const connection = await msg.member.voice.channel.join();
        const args = msg.content.slice(4).trim().split(' ');
        const command = args.shift().toLowerCase();
        const serverQueue = queue.get(msg.guild.id);
        var dispatcher;
        var link;
        if (command == '') {
            if (!args.length) {
                const embed = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setAuthor('By Basim', 'https://i.imgur.com/zwg237E.png', 'https://basimabdullahtariq.azurewebsites.net/')
                    .addFields({ name: 'Error: ', value: 'Song name' })
                    .setTimestamp()
                    .setFooter('Music player by Basim');
                msg.channel.send(embed);
            }
        } else {
            console.log('something');
            execute(msg, serverQueue);
            /*var opts = {
                maxResults: 3,
                key: process.env.YTKEY
            };
            search(command, opts, function(err, results) {
                if (err) return console.log(err);
                link = results[0].link;
            });
            search(command, opts, function(err, results) {
                console.log(link);
                dispatcher = connection.play(link);
                dispatcher.on('start', () => {
                    console.log('audio.mp3 is now playing!');
                });

                dispatcher.on('finish', () => {
                    console.log('audio.mp3 has finished playing!');
                    dispatcher.destroy();
                });
                // Always remember to handle errors appropriately!
                dispatcher.on('error', console.error);
            });*/
        }

    }

});
async function execute(message, serverQueue) {
    const args = message.content.split(" ");
    var link;
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
        return message.channel.send(
            "You need to be in a voice channel to play music!"
        );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send(
            "I need the permissions to join and speak in your voice channel!"
        );
    }
    var opts = {
        maxResults: 3,
        key: process.env.YTKEY
    };
    search(args[1], opts, async function(err, results) {
        if (err) return console.log(err);
        link = results[0].link;
        //console.log(link);

        console.log(link);
        args[1] = 'https://www.youtube.com/watch?v=WNeLUngb-Xg';
        const songInfo = await ytdl.getInfo(link);
        const song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
        };

        if (!serverQueue) {
            const queueContruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };

            queue.set(message.guild.id, queueContruct);

            queueContruct.songs.push(song);

            try {
                console.log('play');
                var connection = await voiceChannel.join();
                queueContruct.connection = connection;
                play(message.guild, queueContruct.songs[0]);
            } catch (err) {
                console.log(err);
                queue.delete(message.guild.id);
                return message.channel.send(err);
            }
        } else {
            serverQueue.songs.push(song);
            return message.channel.send(`${song.title} has been added to the queue!`);
        }
    });
}

function skip(message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send(
            "You have to be in a voice channel to stop the music!"
        );
    if (!serverQueue)
        return message.channel.send("There is no song that I could skip!");
    serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send(
            "You have to be in a voice channel to stop the music!"
        );

    if (!serverQueue)
        return message.channel.send("There is no song that I could stop!");

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection
        .play(ytdl(song.url))
        .on("finish", () => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}