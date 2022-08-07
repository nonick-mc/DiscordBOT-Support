const discord = require('discord.js');
const client = new discord.Client({
    intents: Object.values(discord.Intents.FLAGS),
    allowedMentions: { parse:[] },
    partials: ['CHANNEL', 'GUILD_MEMBER', 'GUILD_SCHEDULED_EVENT', 'MESSAGE', 'REACTION', 'USER'],
});
require('dotenv').config();
const { guildId, guildCommand } = require('./config.json');
const interaction_commands = require('./modules/interaction');
const commands = new interaction_commands('./commands');

client.on('ready', async () => {
    console.log(`[${new Date().toLocaleTimeString('ja-JP')}][INFO]ready!`);
    console.table({
        'Bot User': client.user.tag,
        'Guild(s)': `${client.guilds.cache.size} Servers`,
        'Watching': `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Members`,
        'Discord.js': `v${discord.version}`,
        'Node.js': process.version,
        'Plattform': `${process.platform} | ${process.arch}`,
        'Memory': `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB | ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB`,
    });
    if (guildCommand) commands.register(client, guildId);
    else commands.register(client);
    client.user.setActivity({ name: '🔧Let\'s Debug!', type: 'PLAYING' });
});

client.on('interactionCreate', async interaction => {
    const cmd = commands.getCommand(interaction);
    try {
        cmd.exec(client, interaction);
    }
    catch (e) {
        console.log(e);
    }
});

client.login(process.env.BOT_TOKEN);