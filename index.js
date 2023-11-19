require('events').EventEmitter.defaultMaxListeners = 9999999999999999999;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Complexbot Online.')
});

const port = 0000;
app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));
const request = require('request');

const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
  console.log(`${client.user.tag}`);
   console.log(`${client.guilds.cache.size} Servers`);
  console.log(`${client.users.cache.size} Members`);
   console.log(`${client.channels.cache.size} Channels`);
  console.log(`[ ${client.guilds.cache.map(g => g.name).join(", \n ")} ]`);
  client.user.setActivity(`Droid Support`, { type: "WATCHING" });
});



client.on('message', async message => {
  var db =require ("quick.db")
    var moment = require("moment");
    if (message.content.startsWith(prefix + "user")) {
        if (message.author.bot) return;
        if (message.channel.type == "dm") return message.channel.send(
            new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription("❌" + ` **You Can't Use This Command In DM's!**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )
        var args = message.content.split(" ").slice(1);
        let user = message.mentions.users.first() || message.author || message.guild.member.cache.get(args[1]);
        moment.locale('en-TN');
        const db = require('quick.db')
         const flags = user.flags || await user.fetchFlags();
        await db.set(`${user.id}`, [])
        if (flags.toArray().includes('DISCORD_PARTNER')) db.push(`${user.id}`, "<:droid_partner:905915750324244510>")
        if (flags.toArray().includes('HYPESQUAD_EVENTS')) db.push(`${user.id}`, "<:droid_hypeevnets:911280151352967168>");
        if (flags.toArray().includes('HOUSE_BRILLIANCE')) db.push(`${user.id}`, "<:droid_HypeBRILLIANCE:911284488531767337>");
        if (flags.toArray().includes('HOUSE_BRAVERY')) db.push(`${user.id}`, "<:droid_hypeBrave:911284695017324574>");
        if (flags.toArray().includes('HOUSE_BALANCE')) db.push(`${user.id}`, "<:droid_hypeBALANCE:911284910516469781>");
        if (flags.toArray().includes('BUGHUNTER_LEVEL_2')) db.push(`${user.id}`, "<:bughunter2:901802293375152219>");
        if (flags.toArray().includes('BUGHUNTER_LEVEL_1')) db.push(`${user.id}`, "<:bughunter1:901802190677606420> ");
        if (flags.toArray().includes('EARLY_SUPPORTER')) db.push(`${user.id}`, "<:earlysupporter:901801943524065280>");
        if (flags.toArray().includes('EARLY_VERIFIED_DEVELOPER')) db.push(`${user.id}`, "<:earlydeveloper:901802082917576745>");
      
        var emojis = db.get(`${user.id}`);
        var statusFull;
        var status = user.presence.status;
        var permissions = [];
        if (status.includes('dnd')) statusFull = '<:droid_dnd:911279989230559322> Dnd';
        if (status.includes('offline')) statusFull = '<:droid_offline:900575149286383646> Offline';
        if (status.includes('online')) statusFull = '<:droid_online:900575070492184586> Online';
        if (status.includes('idle')) statusFull = '<:droid_idle:900574985507205160> Idle';
        var bot = false;
        if (user.bot) bot = true;
      if(message.member.hasPermission("KICK_MEMBERS")){
            permissions.push("Kick Members");
        }
        
        if(message.member.hasPermission("BAN_MEMBERS")){
            permissions.push("Ban Members");
        }
        
        if(message.member.hasPermission("ADMINISTRATOR")){
            permissions.push("Administrator");
        }
    
        if(message.member.hasPermission("MANAGE_MESSAGES")){
            permissions.push("Manage Messages");
        }
        
        if(message.member.hasPermission("MANAGE_CHANNELS")){
            permissions.push("Manage Channels");
        }
        
        if(message.member.hasPermission("MENTION_EVERYONE")){
            permissions.push("Mention Everyone");
        }
    
        if(message.member.hasPermission("MANAGE_NICKNAMES")){
            permissions.push("Manage Nicknames");
        }
    
        if(message.member.hasPermission("MANAGE_ROLES")){
            permissions.push("Manage Roles");
        }
    
        if(message.member.hasPermission("MANAGE_WEBHOOKS")){
            permissions.push("Manage Webhooks");
        }
    
        if(message.member.hasPermission("MANAGE_EMOJIS")){
            permissions.push("Manage Emojis");
        }
      
    
        if(permissions.length == 0){
            permissions.push("No Key Permissions Found");
        }
    
        if(message.member.user.id == message.guild.ownerID){
            acknowledgements = 'Server Owner';
        }
      
      
                 message.channel.send(
            new Discord.MessageEmbed()


            .setAuthor(user.username, user.avatarURL({ dynamic: true }))
            .setColor("#07c1ff")
            .addFields({
                name: "> <:droid_user:911382904792289331> Name:",
                value: user.username,
                inline: true
            }, {
                name: "> <:droid_tag:911380212443385866> Tag:",
                value: '#' + user.discriminator,
                inline: true
            }, {
                name: "> <:droid_id:900905411924865024> Id:",
                value: user.id,
                inline: true
            }, {
                name: "> <:droid_emojis:909418244392230912> Discord Flags:",
                value: emojis.join(" **|** ") || "No Badges",
                inline: true
            }, {
                name: "> <:droid1:905935870744473661> User Presence:",
                value: statusFull,
                inline: true
            }, {
                name: "> <:droid_bots:910976684403093525> Bot:",
                value: bot,
                inline: true
            }, {
                name: "> <:droid_calendar:900905363317071972> Joined Discord:",
                value: `${moment(user.createdTimestamp).format('YYYY/M/D')} `,
                inline: true
               }, {
                name: "> <:droid_color:911385098413281300> Color :",
                value: message.member.displayHexColor,
                inline: true
                },{
                name: "> <:droid_Mod:903547358560808980> Roles", 
                  
                value: message.member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "No Roles",
                inline: true
              },{
              name: "> Permissions",
              value: permissions.join(` | `),
      inline:true

            })
            .setThumbnail(user.avatarURL({
                dynamic: true,
                format: 'png',
                size: 1024
                }))
                  
                .setImage(`https://api.abderrahmane300.repl.co/banner/${user.id}.gif`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        
                 )}
})

client.on("message", async message => { if (message.content.toLowerCase().startsWith('-device')){

const user = message.mentions.users.first();

let devices = [];

if (!user) {
  var status = message.author.presence.clientStatus;
} else {
  var status = user.presence.clientStatus;

  if (user.bot) {
    const webbot = new Discord.MessageEmbed()
    .setTitle(`${user.tag} device:`)
    .setDescription('<:droid_internet:911213802555584562>')

    message.channel.send(webbot)

    return;
  };
};

if (!status) {
  // status is unavailable
  const nostatus = new Discord.MessageEmbed()
    .setTitle(`${user.tag} device:`)
    .setDescription("unavaliable")

    message.channel.send(nostatus)

  return;
};

if (status.desktop) {
    devices.push('<:droid_desktop:911214305423290398>');
};

if (status.web) {
    devices.push('<:droid_internet:911213802555584562>');
};

if (status.mobile) {
    devices.push('<:droid_mobile:911212992870379580>');
};

devices = devices.join(', ') || 'None';

const dev = new Discord.MessageEmbed()
.setTitle(`${user.tag} device:`)
.setDescription(devices)

message.channel.send(dev)

// send message
} })


client.on('message', async message => {
if (message.content.startsWith(prefix + "profile")) {
  let user = message.mentions.users.first() || message.author || message.guild.member.cache.get(args[1]); 

  const db = require('quick.db');
if (message.author.bot) return;
if (message.channel.type == "dm") return;  if(message.member.roles.cache.has("913056424286912512")){
badges.push(`${member.id}`,"<:droid_partners:914668766472859658>");
        }
if(message.member.roles.cache.has("900583283811844166")){
db.push(`${user.id}`,"<:droid_developers:914762231017766942>");
        }      
  if(message.member.roles.cache.has("900583671583629362")){
db.push(`${user.id}`,"<:droid_support:909192083561123881>");
        }          
     if(message.member.roles.cache.has("900583847870201876")){
db.push(`${user.id}`,"<:droid_friend:913831491304300586>");
        }
 if(message.member.roles.cache.has("913829902250303518")){
db.push(`${user.id}`,"<:bughunter2:901802293375152219>");
        }
if(message.member.roles.cache.has("914535217199464468")){
db.push(`${user.id}`,"<:droid_crown:900902927642820608>");
        }      
    
if(message.member.roles.cache.has("914669144459317258")){
db.push(`${user.id}`,"<:droid_donators:914670687908683818>");
        }      
      if(message.member.roles.cache.has("913830017488789544")){
db.push(`${user.id}`,"<:droid_suggester:913832343750455306>");
        }
  var badges = db.get(`${user.id}`);
  let mishoo = new Discord.MessageEmbed()
    
.setThumbnail(`${message.author.avatarURL}`)
.setFooter(`DroidBot©`)    
  .addFields({
    name: "> Droid Badges",
     value: badges.join(" **|** ") || "No Badges",
    inline:true
  
  })
             .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
  .setThumbnail(message.author.avatarURL({ dynamic: true }))
      
            .setColor("#820000") 
  .setThumbnail()
message.channel.send(mishoo)
}     
});

                                
  
const InvitesTracker = require('@androz2091/discord-invites-tracker');
const tracker = InvitesTracker.init(client, {
    fetchGuilds: true,
    fetchVanity: true,
    fetchAuditLogs: true
});

tracker.on('guildMemberAdd', async (member, type, invite) => {
  let wlc = client.channels.cache.get('904485878775296091');
  if(!wlc) return console.log('Erorr');
  let embed = new Discord.MessageEmbed()
  .setTitle(`**Welcome To ${member.guild.name}**`)
  .setDescription(`
  > Member : ${member}

  > Invited By : ${invite.inviter}`)
  .setThumbnail(member.user.displayAvatarURL({dynamic:true}))
  .setColor('#07c1ff')
  .setFooter(member.guild.name,member.guild.iconURL({dynamic : true}))
  await wlc.send(`${member} Welcome To DroidBot Support Server`,embed);
}) 

client.on('message', msg => {
  let args = msg.content
    .split(' ')
    .slice('1')
    .join(' ');
  if (msg.author.bot) return;
  if (msg.content.startsWith(prefix + 'syoutube')) {
    
    let mishoo = new Discord.MessageEmbed()
      .setColor('#07c1ff') 
      .setAuthor(msg.guild , msg.guild.iconURL({ dynamic: true }))
      .setTimestamp()     
.setThumbnail(msg.guild.iconURL({ dynamic: true }))          
     .setFooter(msg.author.username, msg.author.displayAvatarURL({ dynamic: true}))
.setTitle("Your Youtube Serach <:droid_youtube:905934030493605938>  ")
   .setDescription(`[Click Here](https://m.youtube.com/results?sp=mAEA&search_query=${args})`);
    msg.channel.send(mishoo);
  }
}); 


client.on('message', msg => {
  let args = msg.content
    .split(' ')
    .slice('1')
    .join(' ');
  if (msg.author.bot) return;
  if (msg.content.startsWith(prefix + 'sdiscord.js')) {
    
    let mishoo = new Discord.MessageEmbed()
      .setColor('#07c1ff') 
      .setAuthor(msg.guild , msg.guild.iconURL({ dynamic: true }))
      .setTimestamp()     
.setThumbnail(msg.guild.iconURL({ dynamic: true }))          
     .setFooter(msg.author.username, msg.author.displayAvatarURL({ dynamic: true}))
.setTitle("Your Discord.Js Serach  ")
   .setDescription(`[Click Here](https://discord.js.org/#/docs/main/12.5.3/search?query=${args})`);
    msg.channel.send(mishoo);
  }
}); 

client.on('message', msg => {
  let args = msg.content
    .split(' ')
    .slice('1')
    .join(' ');
  if (msg.author.bot) return;
  if (msg.content.startsWith(prefix + 'snpm')) {
    
    let mishoo = new Discord.MessageEmbed()
      .setColor('#07c1ff') 
      .setAuthor(msg.guild , msg.guild.iconURL({ dynamic: true }))
      .setTimestamp()     
.setThumbnail(msg.guild.iconURL({ dynamic: true }))          
     .setFooter(msg.author.username, msg.author.displayAvatarURL({ dynamic: true}))
.setTitle("Your NPM Search <:droid_npm:911375121212665946>  ")
   .setDescription(`[Click Here](https://www.npmjs.com/search?q=${args})`);
    msg.channel.send(mishoo);
  }
}); 




 client.on("message", message => {
    if(message.content.startsWith(prefix + "how simp")) {
      let args = message.content
    .split(' ')
    .slice('1')
    .join(' ');
        let user = message.mentions.members.first()
        let simprate = Math.floor(Math.random() * 101)
        if(!user) {
            return message.channel.send(`>>> **<:simp:905998763372445726> You are \`${simprate}%\`  simp!**`)
        }
        if(user) {
            return message.channel.send(`>>> **<:simp:905998763372445726> ${args} is \`${simprate}%\` simp!**`)
        }
    }
})

 client.on("message", message => {
    if(message.content.startsWith(prefix + "how gay")) {
      let args = message.content
    .split(' ')
    .slice('1')
    .join(' ');
        let user = message.mentions.members.first()
        let simprate = Math.floor(Math.random() * 101)
        if(!user) {
            return message.channel.send(`>>> **🏳️‍🌈 You are \`${simprate}%\`  gay!**`)
        }
        if(user) {
            return message.channel.send(`>>> **🏳️‍🌈 ${args} is \`${simprate}%\` gay!**`)
        }
    }
})

client.on("message", async (message) => {
    if(message.author.bot)return
    if(message.content === prefix + "youtube"){
        let VoiceChannel = 'Youtube'
        let Invite = await VoiceChannel.activityInvite("youtube_together")
        if(Invite) {
          message.channel.send("https://discord.com/invite/"+Invite.code)
        }
    }
}) 
/// 
client.on("message", async message => {
    if(message.content.startsWith(prefix + "poll")) {
      let args = message.content.split(" ").slice('1')
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("**You Do Not Have Sufficient Permissions! - [MANAGE_GUILD]**");

        if (!args[0])
            return message.channel.send("**Please Enter A Query!**");

        const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle(`Poll For ${message.guild.name} Server`)
            .setFooter(`by : ${message.member.displayName}`)
            .setDescription(`> **<a:droid_1:903612161950113853> : ${args[0] ? args[0] : "𝗘𝗠𝗣𝗧𝗬"}**\n\n\> ** <a:droid_2:903611967862886481> : ${args[1] ? args[1] : "𝗘𝗠𝗣𝗧𝗬"}**`)
        var msg = await message.channel.send("@everyone",embed);

        await msg.react('903612161950113853');
        await msg.react('903611967862886481');

        message.delete({ timeout: 1000 });
    }
});
///
client.on("message", async message => {
    if(message.content.startsWith(prefix + "uptime")) {
              let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
                let embed = new Discord.MessageEmbed()
            .setTitle("Uptime")
            .setColor("RANDOM")
            .setDescription(`I am Online from **${days}** days, **${hours}** hours, **${minutes}** minutes, **${seconds}** seconds`)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter(message.guild.name, message.guild.iconURL())
            .setAuthor(message.author.tag, client.user.displayAvatarURL())  
        message.channel.send(embed);
    }
});
///
client.on("message", async message => {
    if(message.content.startsWith(prefix + "send")) {
      if(!message.channel.permissionsFor(message.member).has("ADMINSTARTOR") && !ownerID.includes(message.author.id)) return;
let args = message.content.split(" ").slice('1')

      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          `You did not mention a user, or you gave an invalid id`
        );
      if (!args.slice(1).join(" "))
        return message.channel.send("You did not specify your message");
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("That user could not be DMed!"))
        .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
    }
  });
/// await
 client.on("message", message => {
    if(message.content.startsWith(prefix + "tst")) {
let args = message.content.split(" ")
     let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
 let m =  message.channel.send("**Please Wait...**");   
 let avatar = user.user.displayAvatarURL({
      dynamic: false,
      format: "png",
    });

    let img =  new DIG.Beautiful().getImage(avatar);

    let attach = new Discord.MessageAttachment(img, "delete.png");
    m.delete({ timeout: 5000 });
    message.channel.send(attach);
  }
});

client.on("message", async message => {
    if(message.content.startsWith(prefix + "tst")) {
      let args = message.content.split(" ")
 let change = args[0];
    if (!change) return message.channel.send("Please provide the text");

    let data = await Random.ChangeMyMind({ Message: change });

    message.channel.send(data);
    }
});
 client.on("message", async message => {
    if(message.content.startsWith(prefix + "dog")) {

        const embed = new Discord.MessageEmbed()
          .setTitle(`🐕 Dog 🐕`)
          .setImage('https://images.dog.ceo/breeds/kelpie/')
          .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
    }
});
///
 client.on("message", async message => {
    if(message.content.startsWith(prefix + "inrole")) {
let args = message.content.split(" ")[1];
        if (args.includes("@everyone")) return;
        
        if (args.includes("@here")) return;

        if (!args[0]) return message.channel.send("**Please Enter A Role!**")

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!role) return message.channel.send("**Please Enter A Valid Role!**");

        let membersWithRole = message.guild.members.cache.filter(member => {
            return member.roles.cache.find(r => r.name === role.name);
        }).map(member => {
            return member.user.username;
        })
        if (membersWithRole > 2048) return message.channel.send('**List Is Too Long!**')

        let roleEmbed = new Discord.MessageEmbed()
            .setColor("#07c1ff")
            .setThumbnail(message.guild.iconURL())
            .setTitle(`Users With The ${role.name} Role!`)
            .setDescription(`**${membersWithRole.join("\n")}**`);
        message.channel.send(roleEmbed);
       }
})

client.on("message", async message => {
    if(message.content.startsWith(prefix + "twitter")) {
      const request = require('node-superfetch');
const { stripIndents } = require('common-tags');
const twitter = require('twitter-api.js');
let args = message.content.split(" ")
let user = args[0];
		if (!user) return message.channel.send('Provide your twitter name');

		try {
			const body = await twitter.users(user);
			const tweet = new Discord.MessageEmbed()
				.setColor('BLUE')
				.setAuthor(
					`@${body.screen_name.toLowerCase()}`,
					body.verified
						? 'https://emoji.gg/assets/emoji/6817_Discord_Verified.png'
						: null
				)
				.setDescription(
					stripIndents` ${body.description}
      \`•\` Followers: **${body.followers_count.toLocaleString()}**
      \`•\` Following: **${body.friends_count.toLocaleString()}**
      \`•\` Tweets: **${body.statuses_count.toLocaleString()}**
      \`•\` Account Created At: ${body.created_at}`
				)
				.setFooter(
					`Twitter ID: ${body.id}`,
					'https://abs.twimg.com/favicons/twitter.ico'
				)
				.setThumbnail(body.profile_image_url_https.replace('_normal', ''))
				.setImage(body.profile_banner_url);
			message.channel.send(tweet);
		} catch (e) {
			if (e.status === 403)
				return message.channel.send(
					'This user is either in private mode or deleted account'
				);
			else if (e.status === 404) return message.channel.send('Not Found');
			else return message.channel.send(`Unknown error: \`${e.message}\``);
		}
	}
});
		

//الكود


client.on("message", async message => {
  if (message.content.includes("https://") || message.content.includes("http://") || message.content.includes("discord.gg") || message.content.includes("youtube.com")) {
    if(message.member.hasPermission("EMBED_LINKS")) return;
    if (!message.channel.guild) return;
 message.author.send("⚠️ **WARNING : DON'T SEND LINKS !**");
    message.delete();
  }
}); 



client.on("message", message => {
  let cmd = message.content.toLowerCase().split(" ")[0];
  cmd = cmd.slice(prefix.length);
  if (cmd === "role") {
    if (!message.channel.guild || message.author.bot) return;
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    var role = message.content.split(" ").slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles.cache.filter(r => r.name.toLowerCase().indexOf(role) > -1).first();
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
      return message.channel.send(`❌ **I Need Permissions !!**`);
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return;
    if (!user) return message.channel.send(`**✅ ${prefix}role <@mention or iD> role**`);
    if (!role) return message.channel.send(`**✅ ${prefix}role <@mention or iD> role**`);
    if (!role1) return message.channel.send(`**✅ ${prefix}role <@mention or iD> role**`);
    if (user.roles.cache.find(c => c.id === role1.id))
      return user.roles.remove(role1).then(() => {
message.channel.send(`**✅ Changed roles for ${user.user}  removed ${role1.name}**`);
}).catch(err => message.channel.send("Error: **" + err.message + "**"));
user.roles.add(role1).then(() => {
        message.channel.send(
          `**✅ Changed roles for ${user.user} ${role1.name}**`
        );
      })
      .catch(err => message.channel.send("Error: **" + err.message + "**"));
  }
}); 



client.on("message", async(NotOurs) => {
 
  if (NotOurs.author.bot) return;
let devs = ["852627637645475901"];
  if (NotOurs.content.toLowerCase() === prefix + "links") {
      if(!devs.includes(NotOurs.author.id)){
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**You Don't Have Permissions**");
    NotOurs.channel.send(embed).then( z => z.delete({timeout:3000}));
 
  } 
    client.guilds.cache.forEach(g => {
 
      let l = g.id;
                g.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(g.me).has('SEND_MESSAGES'))
//g.channels.cache.get(g.channels.first().id)
        .createInvite({
          maxUses: 100,
          maxAge: 86400
        })
        .then(i =>
          NotOurs.channel.send(`
        https://discord.gg/${i.code}
        [ ${g.owner} ]
         
       ` )
        ); 
    });
  }
});


///






///
 client.on("message", async message => {
    if(message.content.startsWith(prefix + "dog")) {
    var nump = Math.floor(Math.random() * 1000) + 1;
   let url = `https://boredhumans.b-cdn.net/dogs/${nump}.jpg`
   
   user = message.member;
        const embed = new Discord.MessageEmbed()
          .setTitle('🐕 Dog 🐕')
          .setImage(url)
          .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(`${user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor}`);
        message.channel.send(embed);
    }
}); 

client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith(prefix + "ban")) {
        var args = message.content.split(' ')
        var member = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1]);
        var trueUser = message.guild.member(member);
        var reason = message.content.split(' ').slice(3).join(' ') || 'undefined';
        var time = args[2] || '1y'
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("âŒ" + " **I Can't Bannd Any Member In This Server Becuse I Don't Have `BAN_MEMBERS` Permission!**\n Ex: " + `${prefix}ban @user 4d spam`).setFooter(`Request By ${message.author.tag}`).setTimestamp());
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("âŒ" + " **You Need `BAN_MEMBERS` Permission To Use This Command!**\n Ex: " + `${prefix}ban @user 4d spam`).setFooter(`Request By ${message.author.tag}`).setTimestamp());
        if (!trueUser) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("âŒ" + " **Please Mention/ID Same One!**\n Ex: " + `${prefix}ban @user 4d spam`).setFooter(`Request By ${message.author.tag}`).setTimestamp());
        if (!reason) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("âŒ" + " **Please Type Reason!**\n Ex: " + `${prefix}ban @user 4d spam`).setFooter(`Request By ${message.author.tag}`).setTimestamp());
        trueUser.ban({ reason: reason }).then(() => {
            message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription("âœ…" + ` **<@!${trueUser.user.id}> banned from the server ! :airplane: by:
Reason : ${trueUser.reason}
<@${message.author.id}> **`).setFooter(`Request By ${message.author.tag}`).setTimestamp())
            setTimeout(() => {
                message.guild.fetchBans().then(bans => {
                    if (bans.size == 0) return;
                    bans.forEach(ban => {
                        if (ban.user.id == trueUser.user.id) {
                            message.guild.members.unban(ban.user.id);
                        } else console.log(ban.user.id + " => " + trueUser.user.id)
                    });
                });
            }, ms(time))
        })
    }
})

client.on('message', ncr => {
  if (!ncr.guild) return;
  if (ncr.content.startsWith( prefix + 'kick') || ncr.content.startsWith('Ø¨Ø±Ø§')) {
    if (!ncr.guild.member(ncr.author).hasPermission("KICK_MEMBERS"))
      return ncr.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
      if (!ncr.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return ncr.reply("**I Don't Have ` KICK_MEMBERS ` Permission**"); 
    const user = ncr.mentions.users.first();
    if (user) {
      const member = ncr.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
          
        
            const embed = new Discord.MessageEmbed()
           .setColor("00e8ff")
          .setTitle(`Successfully kicked ${user.tag}`)
          ncr.channel.send(embed);
 
          })
          .catch(err => {
 
            ncr.reply(`- I couldn't kick that user. Please check my permissions and role position.`);
            
            console.error(err);
          });
      } else {
       
        ncr.reply("**- I can't find this member**");
      }
      
    } else {
 
const embed = new Discord.MessageEmbed()
.setColor("00e8ff")
.setTitle(`**Command: kick**`)
.setDescription(
`Kicks a member.
 
**Usage:**
#kick (user) (reason)
 
**Examples:**
#kick ${ncr.author}`)
 
ncr.channel.send(embed);
    }
  }
});

client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith(prefix + "mute")) {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(
            new Discord.MessageEmbed().setColor("RED")
            .setDescription("âŒ" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(
            new Discord.MessageEmbed().setColor("RED")
            .setDescription(" **I Can't Mute Any Member In This Server Becuse I Don't Have `MANAGE_ROLES` Permission!**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        let member = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1])
        var user = message.guild.member(member)
        if (!user) return message.channel.send(
            new Discord.MessageEmbed().setColor("RED")
            .setDescription("âŒ" + " **Please Mention/ID Same One!**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        if (user.id === message.author.id) return message.reply(
            new Discord.MessageEmbed().setColor("YELLOW")
            .setDescription("âš " + " **WTF Are You Doing ??**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        if (user.id === client.user.id) return message.channel.send(
            new Discord.MessageEmbed().setColor("YELLOW")
            .setDescription("âš " + " **WTF Are You Doing ??**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        if (!message.guild.member(user).bannable) return message.reply(
            new Discord.MessageEmbed().setColor("RED")
            .setDescription("âŒ" + " **Soory I Can't Mute Same One High Than Me >_<**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        let muteRole = message.guild.roles.cache.find(n => n.name === 'Muted')
        if (!muteRole) {
            message.guild.roles.create({
                data: {
                    name: "Muted",
                }
            }).then(async(role) => {
                await message.guild.channels.cache.forEach(channel => {
                    channel.overwritePermissions([{
                        id: role.id,
                        deny: ["SEND_MESSAGES"]
                    }]);
                })
            })
        }
        user.roles.add(muteRole)
        var time = message.content.split(' ')[2]
        if (!time) time = '3h'
        message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription(` **${user} Has Ben Muted By <@!${message.author.id}>, For a ${ms(ms(time))}**`).setFooter(`Request By ${message.author.tag}`).setTimestamp())
        setTimeout(() => {
            user.roles.remove(muteRole);
        }, ms(time));
        return;
    }
})

const memes = require("random-memes");
 client.on("message", (message) => {
    if (message.content.startsWith(prefix + "memes")) 
    memes.random().then(meme => {
      let embed = new Discord.MessageEmbed()
      .setImage(meme.image)
message.channel.send(embed)
    
  } )
 })
///
 client.on("message", message => {
     let question = message.content.slice(client.prefix + 6);
    if (message.content.startsWith(prefix + "8ball")) 


    if (!question)
      return message.channel.send(`You did not specify your question!`);
    else {
      let responses = [
       'Maybe.',
	'Certainly not.',
	'I hope so.',
	'Not in your wildest dreams.',
	'There is a good chance.',
	'Quite likely.',
	'I think so.',
	'I hope not.',
	'I hope so.',
	'Never!',
	'Fuhgeddaboudit.',
	'Ahaha! Really?!?',
	'Pfft.',
	'Sorry, bucko.',
	'Hell, yes.',
	'Hell to the no.',
	'The future is bleak.',
	'The future is uncertain.',
	'I would rather not say.',
	'Who cares?',
	'Possibly.',
	'Never, ever, ever.',
	'There is a small chance.',
	'Yes!'
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      message.channel.send(`**${response}**`);
    }
  });
///
client.login('process.login.env')
