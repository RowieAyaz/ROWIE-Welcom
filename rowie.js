const Discord = require('discord.js');
const tokens = [
    "TOKEN ID 1",
    "TOKEN ID 2",
	"TOKEN ID 3",
	"TOKEN ID 4",
	"TOKEN ID 5",
	"TOKEN ID 6",
	
   

  
];
const chnls = [
    "SES KANAL ID 1",
    "SES KANAL ID 2",
	"SES KANAL ID 3",
    "SES KANAL ID 4",
	"SES KANAL ID 5",
    "SES KANAL ID 6",
   
    
    
];
const selamlı = [];
for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    const client = new Discord.Client();
    client.login(token);
    let concon;
    client.on('ready', async () => {
        console.log(client.user.username);
        await client.user.setActivity({
            name: "Rowie ❤️",
            type: "LISTENING"
        });
        concon = await client.channels.cache.get(chnls[index]).join()
    });
    let rowie;
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.user.bot) return;
        if (cur.channel && (cur.channel.id === chnls[index])) {
            if (cur.channelID === prev.channelID) return;
            if ((cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get("YETKİLİ ROL ID").rawPosition)) { //Yetkili Id'si
                rowie = await concon.play('./hosgeldin.mp3');
                selamlı.push(cur.member.user.id);
            } else if (cur.member.roles.highest.rawPosition > cur.guild.roles.cache.get("KAYITSIZ ROL ID").rawPosition) {//Hosgeldin ıd'si
                rowie = await concon.play('./yetkili.mp3');
                selamlı.push(cur.member.user.id);
            }
        }
    });
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.id === client.user.id) concon = await client.channels.cache.get(chnls[index]).join();
    })
}
//beni sçtiğiniz için teşekkürler//
//botu başlatırken bunu iyi okuyun "node ./rowie.js" yazmalısınız//