/**
* @author ROBIN
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "ROBIN",
	description: "Dont Change This Credit Otherwise Your Bot Lol",
	dependencies: {
		"fs-extra": ""
	}
};
module.exports.run = async function({ api, event }) {

	const request = require("request");
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Robin" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`𝐀𝐒𝐒𝐋𝐀𝐌 𝐎 𝐀𝐋𝐈𝐊𝐔𝐌 😘
━━━━━━━━━━✤━━━━━━━━
▏✵𝑩𝑶𝑻 𝑪𝑶𝑵𝑵𝑬𝑪𝑻𝑬𝑫 𝑵𝑶𝑾✵ ▏
━━━━━━━━━━✤━━━━━━━━
𝗔𝗣𝗣𝗥𝗢𝗩𝗔𝗟 🥺

         𝗔𝗣𝗣𝗥𝗢𝗩𝗔𝗟 𝗜𝗦 𝗗𝗢𝗡𝗘 ✔
━━━━━━━━━━✤━━━━━━━━
❛𝙏𝙊 𝙎𝙀𝙀 𝘼𝙉𝙔 𝘾𝙊𝙈𝙈𝘼𝙉𝘿❜
\nᴛʏᴘᴇ ʜᴇʟᴘ ᴛᴏ ꜱᴇᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ \n\n【 COMMAND LIST ❤️🍫

 🌸 2 .adduser
 🌸 3 .admin
 🌸 5 .autoreact
 🌸 6 .bio
 🌸 7 .goibot
 🌸 8 .bot-say 】
 \n 『ᴛʏᴘᴇ ʜᴇʟᴘ2 ᴛᴏ ꜱᴇᴇ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅꜱ ʟɪꜱᴛ』
━━━━━━━━━━✤━━━━━━━━
𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎 😜
        𝐎𝐖𝐍𝐄𝐑 🙊
    
         ♣ ▎ ROBIN ▎♣
━━━━━━━━━━✤━━━━━━━━
🤍⫷𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝘼𝘾𝘾𝙊𝙐𝙉𝙏⫸🥀 
www.facebook.com/61570766535522
━━━━━━━━━━✤━━━━━━━━
🧡⫷𝘾𝙊𝙉𝙏𝘼𝘾𝙏 𝙈𝙀 𝙊𝙉 𝙒𝙃𝘼
`, threadID);
	}
	else {
		try {
    const request = require("request");
			const fs = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			
			var mentions = [], nameArray = [], memLength = [], i = 0;
			
    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  
        
	//		var nunu = event.logMessageData.addedParticipants[userID].fullName
      
  
				nameArray.push(userName);
				mentions.push({ tag: userName, id: userID, fromIndex: 0 });
      
				memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "𝘼𝙎𝙎𝙇𝘼𝙈 𝙊 𝘼𝙇𝙄𝙆𝙐𝙈{uName}\n🍦 • 🍫 • 🎀  𝑀♡𝒮𝒯 𝒲𝐸𝐿𝒞🍪𝑀𝐸 𝒯🌞 𝒯𝐻𝐸 𝒢𝑅🍪𝒰𝒫  • 🎀 • 🍦\n{threadName}" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{uName}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);			
    
				
let callback = function () {
	 return api.sendMessage({body: msg, attachment: fs.createReadStream(__dirname + `/cache/come.jpg`), mentions
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/come.jpg`));
   
                };
                request(encodeURI(`https://api-saikidesu-beta.herokuapp.com/api/canvas/welcome?pp=${userID}&nama=${userName}&bg=https://i.ibb.co/pfvyGZd/Dark-Red-Anime-Wallpapers-Top-Free-Dark-Red-Anime.jpg&namagc=${threadName}&member=${participantIDs.length}&apikey=7Huo`)).pipe(fs.createWriteStream(__dirname + `/cache/come.jpg`)).on("close", callback);
            
      	    }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
	}
}
