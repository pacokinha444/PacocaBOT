/*============ FG98 ============

    🇩 🇾 🇱 🇺 🇽  𝗩4  template
 
============ FG98 ============*/

 //--  Conectar a WhatsApp 
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime
} = require("@adiwajshing/baileys");

//-- Módulos 
const yo = require("tod-api");
const dh = require("dhn-api");
const simple = require('./libreria/simple.js')
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require("fluent-ffmpeg");
const imgbb = require('imgbb-uploader');
const googlefg = require('google-it')
const CryptoJS = require("crypto-js");
const crypto = require('crypto');
const {removeBackgroundFromImageFile} = require('remove.bg');
const {convertSticker} = require("./libreria/swm.js")
const { webp2mp4Url, webp2gifFile, reverseVideoFile } = require('./libreria/ezgif')
const { recognize } = require('./libreria/ocr')
const { wikiSearch } = require('./libreria/wiki.js')
const {  getBuffer, h2k,  generateMessageID, getGroupAdmins,  getRandom, banner,  start,  info, success, close,} = require("./libreria/functions");
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const imageToBase64 = require('image-to-base64');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { color, bgcolor } = require('./libreria/color')
const { fetchJson, getBase64, kyun, createExif } = require('./libreria/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require("./libreria/ytdl");
const { webp2mp4File } = require("./libreria/webp2mp4");
const Exif = require('./libreria/exif');
const exif = new Exif();

//-- Reportes
const _informe = JSON.parse(fs.readFileSync('./result/reportes/informe.json'));
const _solicitud = JSON.parse(fs.readFileSync('./result/reportes/solicitud.json'));

//---Data Base
const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
const ban = JSON.parse(fs.readFileSync('./database/banned.json'));
const confi = JSON.parse(fs.readFileSync('./settings.json'))
const _welcom = JSON.parse(fs.readFileSync('./database/welcom.json'))
const _user = JSON.parse(fs.readFileSync('./database/verify.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/nivel.json'))
const awgp = JSON.parse(fs.readFileSync('./database/awgp.json'))
const totalhit = JSON.parse(fs.readFileSync('./libreria/totalcmd.json'))

//-- Resultados
const _verdad = JSON.parse(fs.readFileSync('./result/verdad.json'));
const _reto = JSON.parse(fs.readFileSync('./result/reto.json'));

//---Ajustes  Del prefijo
let multi = true
let nopref = false
let single = false
let prefa = '!' 
//--
banChats = false;
offline = false;

//-- Help
const { help } = require('./help/menu')
const { wait, stick, errorfg, group, banf, ownerB, modsB, userB, admin, Badmin, leveloff, lvlnul} = require('./help/respon');

//--------𝗔𝗣𝗜𝗞𝗘𝗬----------
const Vkey = confi.Zekskey
const lolkey = confi.LolHumanKey
const hunterkey = confi.fgkey  
const valkey = 'rivalgans'
const Xinz = 'XinzBot'
const Pkode = 'pais' 

  //---- 𝗦𝗧𝗔𝗙𝗙 -----
const owner = confi.ownerN
const Cowner = confi.CoOwnerN
const mods = confi.mods
const ownerName = confi.nombreCreador

//---------𝗥𝗘𝗗𝗘𝗦 𝗦𝗢𝗖𝗜𝗔𝗟𝗘𝗦---------
const instafg = 'https://www.instagram.com/pacokakk'

//-----fakethumb-----
fakefg = fs.readFileSync('./image/fake.jpg')


//--Contacto del dueño
const vcard1 = 'BEGIN:VCARD\n' 
 + 'VERSION:3.0\n' 
 + `FN:${ownerName}\n`
 + 'ORG:Dono do Bot;\n' 
 + `TEL;type=CELL;type=VOICE;waid=${owner}:+${owner}\n`
 + 'END:VCARD'
      
const vcard2 = 'BEGIN:VCARD\n' 
 + 'VERSION:3.0\n' 
 + `FN:Co Owner\n`
 + 'ORG:Sub dono do Bot;\n' 
 + `TEL;type=CELL;type=VOICE;waid=${Cowner}:+${Cowner}\n`
 + 'END:VCARD'
 
/********** 𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗡𝗜𝗩𝗘𝗟𝗔𝗖𝗜𝗢𝗡 **********/
const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./database/nivel.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./database/nivel.json', JSON.stringify(_level))
	}
}

const addLevelingId = (sender) => {
	const obj = { id: sender, xp: 1, level: 1 }
	_level.push(obj)
	fs.writeFileSync('./database/nivel.json', JSON.stringify(_level))
}

     //  𝙎𝙀𝙍𝙄𝘼𝙇 𝙂𝙀𝙉𝙀𝙍𝘼𝘿𝙊𝙍 
const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
        //========= 𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗢 =========\\

const getuserRandomId = () => {
  return _user[Math.floor(Math.random() * _user.length)].id
}

const adduserUser = (userid, sender, age, time, serials) => {
  const obj = {
id: userid,
name: sender,
age: age,
time: time,
serial: serials
  }
  _user.push(obj)
  fs.writeFileSync('./database/verify.json', JSON.stringify(_user))
}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
} 

const checkuserUser = (sender) => {
  let status = false
  Object.keys(_user).forEach((i) => {
if (_user[i].id === sender) {
  status = true
}
  })
  return status
}

//-- Fecha
function fecha(){
myMonths = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
			myDays = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}


//------------

module.exports = Fg = async (Fg,mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
global.blocked
global.prefix
m = simple.smsg(Fg, mek)
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType    
const time = moment.tz('America/La_Paz').format('DD/MM HH:mm:ss')
const hora = moment.tz('America/La_Paz').format('HH:mm')
const hora2 = moment.tz('America/La_Paz').format('HH:mm:ss')

const type = Object.keys(mek.message)[0]        
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    //---Multi Prefix
if(multi){
var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~,¿;+×!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '/'
} else {
if (nopref){
prefix = ' '
} else {
if(single){
prefix = prefa }}}

//---body
        const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''  
   const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    const autofg = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isCmd = body.startsWith(prefix)
const botNumber = Fg.user.jid;
    const botNumero = botNumber.replace('@s.whatsapp.net', '') //sólo número del bot   
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe 
      ? Fg.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? Fg.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
      
    const senderNumber = sender.split("@")[0]
    const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Fg.user.phone
    
      const isYo = mek.key.fromMe ? true : false
      const isOwner = senderNumber == owner || senderNumber == botNumero || senderNumber == Cowner
      const isMods = mods.includes(senderNumber)

    const isVerify = _user.includes(sender)
    const isAntilink = isGroup ? _antilink.includes(from) : false
    const isWelcom = isGroup ? _welcom.includes(from) : false
   const isBanchat = isGroup ? bancht.includes(from) : false
    
const totalchat = await Fg.chats.all()
const groupMetadata = isGroup ? await Fg.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : "";
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const conts = mek.key.fromMe ? Fg.user.jid : Fg.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? Fg.user.name : conts.notify || conts.vname || conts.name || '-'
   //----nuevo
const isBanned = ban.includes(sender)
const isLevelingOn = isGroup ? _leveling.includes(from) : false
const isAw = isGroup ? awgp.includes(from) : false

   chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    const arg = chats.slice(command.length + 2, chats.length)
    const argss = body.split(/ +/g)
    
//---
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedPesan = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedMessage = type === 'extendedTextMessage'
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
const isViewOnce = (type === 'viewOnceMessage')

//----𝗥𝗨𝗡𝗧𝗜𝗠𝗘
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundo") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

  //// --- Función de respuesta
			mess = {
				ferr: '❎ Erro! \n🔍 Tente de novo mais tarde',
				
				error: {
					link: '❎ Link invalido, corrija-o e tente novamente!'
				}
			}

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };

 //---- 𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔----
    const reply = (teks) => {
      Fg.sendMessage(from, teks, text, { quoted: mek });
    };
 //---respuesta con thumbnail
const replyfg = (teks) => {
Fg.sendMessage(from, teks, text, {quoted:mek,thumbnail : fakefg})
};
    const sendMess = (hehe, teks) => {
      Fg.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? Fg.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : Fg.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };
    
 //fake reply
      const replyimg = (pesan, tipe, rep1, rep2) => {
        Fg.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: {
"imageMessage": {
"mimetype": "image/jpeg",
"caption": `${rep1}`,
"fileLength": "201809",
"jpegThumbnail": `${rep2}` } } }})
      }
 
 

  //---------𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗥𝗔𝗡𝗚𝗢𝗦--------
			const levelRole = getLevelingLevel(sender, _level)
   	                var role = 'Novato'
   	                if (levelRole <= 4) {
   	                        role = 'Bronze III'
   	                } else if (levelRole <= 6) {
				role = 'Bronze II'
			} else if (levelRole <= 8) {
				role = 'Bronze I'
			} else if (levelRole <= 10) {
				role = 'Prata II'
			} else if (levelRole <= 12) {
				role = 'Prata I'
			} else if (levelRole <= 14) {
				role = 'Ouro II'
			} else if (levelRole <= 16) {
				role = 'Ouro I'
			} else if (levelRole <= 18) {
				role = 'Platina II'
			} else if (levelRole <= 20) {
				role = 'Platina I'
			} else if (levelRole <= 22) {
				role = 'Diamante II'
			} else if (levelRole <= 24) {
				role = 'Diamante I'
			} else if (levelRole <= 26) {
				role = 'Mestre II'
				} else if (levelRole <= 28) {
				role = 'Mestre I'
			} else if (levelRole <= 30) {
				role = '♕︎ Grande Lendário'
			}
			
			
  //---------𝗡𝗜𝗩𝗘𝗟𝗔𝗖𝗜𝗢𝗡-----------
			if (isGroup && isLevelingOn) {
				const currentLevel = getLevelingLevel(sender)
				const checkId = getLevelingId(sender)
				try {
					if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
					const amountXp = Math.floor(Math.random() * 2000) + 3
					const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
					const getLevel = getLevelingLevel(sender)
					addLevelingXp(sender, amountXp)
					if (requiredXp <= getLevelingXp(sender)) {
						addLevelingLevel(sender, 1)
						     //giveLimit(sender, 2, limit)
						await replyfg(`
≡  _*Subiste de Nivel*_
┌──────────────
▢ *Nome* : ${pushname}
▢ *Xp* : ${getLevelingXp(sender)}
▢ *Nivel* : ${getLevel} ➪ ${getLevelingLevel(sender)}
▢ *Rank* : *${role}*
└──────────────`)
					}
				} catch (err) {
					console.error(err)
				}
			}
			
			
			 //----------𝗘𝗠𝗢𝗝𝗜 𝗔 𝗦𝗧𝗜𝗖𝗞𝗘𝗥------------
    const sendStickerFromUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Baixando sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./libreria/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					Fg.sendMessage(to, media, sticker,{quoted:mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('💎 Enviando sticker...'))
					fs.unlinkSync(asw)
					fs.unlinkSync(filess)
					});
					});
				});
			}
    
//--------𝗬𝗧 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦--------
    const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('✅ Enviando');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Fg.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }
  
  //-------  Stickers
const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Baixando sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./libreria/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
Fg.sendMessage(from, media, sticker, {quoted: mek})
console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))  
});
});
});
}

    
    //-------𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣------
		if (isGroup && isAntilink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins && isOwner) return
if (!isBotGroupAdmins) return reply('🤨 Por sorte não sou  admin, então não te expulsarei.')
linkgp = await Fg.groupInviteCode (from)
    if (budy.includes(`https://chat.whatsapp.com/${linkgp}`)) return //reply('✳️ Menos mal que este enlace es de este grupo v:')
    if (budy.includes(`https://chat.whatsapp.com/Ly4I2LObSvW8VgOnJjofgA`)) return reply('✳️ Menos mal que este enlace es del grupo *📲💻ANDROID WORLD🎬🎮* v:')
    if (budy.includes(`${soportefg}`)) return
console.log(color('[KICK]', 'red'), color('Anti link WhatsApp!', 'yellow'))
reply(`❎ Não permitimos links de outros grupos!\nSinto muito *${pushname}* ,será expulso`)
setTimeout(() => {
Fg.groupRemove(from, [sender])
}, 2000);
}
}
	
	

 if (!isGroup && isCmd) console.log(color('[FG98]','aqua'), "Pv", color(command, "blue"), "de", (sender.split('@')[0]),  args.length)
if (isGroup && isCmd) console.log(color('[FG98]','aqua'), "Gp", color(command, "green"), "de", (sender.split('@')[0]), "en", (groupName), args.length)

//----------- 𝗩𝗘𝗥 𝗖𝗔𝗥𝗔𝗖𝗧𝗘𝗥𝗜́S𝗧𝗜𝗖𝗔𝗦---------
let public_ = 'Publico'
           if (banChats){
           public_ = 'Privado'
          }
let Welcome_ = 'Inativo'
			if (isWelcom) {
			Welcome_ = 'Ativo'
		   } 
let Leveling_ = 'Inativo'
			if (isLevelingOn) {
			Leveling_ = 'Ativo'
			}

//--- Total comandos 
const cmdadd = () => {
	totalhit[0].totalcmd += 1
	fs.writeFileSync('./libreria/totalcmd.json', JSON.stringify(totalhit))
}
  if (isCmd) cmdadd()
  const reqcmd = JSON.parse(fs.readFileSync('./libreria/totalcmd.json'))[0].totalcmd


//------------ 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗔𝗞𝗘𝗥 FG98---------
const sendSticker = (from, filename, mek) => {
        Fg.sendMessage(from, filename, MessageType.sticker, {quoted: mek})
}

//------------ 𝗕𝗔𝗡𝗖𝗛𝗔𝗧 ----------
if (isBanchat){
if (!isOwner && !isMods)return //reply(`Grupo Silenciado`) 
}

//---- 𝗕𝗢𝗧 𝗠𝗢𝗗𝗢 𝗣𝗥𝗜𝗩𝗔𝗗𝗢--
if (!isOwner && !isMods && banChats && isCmd === true) return //reply('✳️ Bot en modo privado, todas las funciones bloqueadas')
   
   //----𝗔𝗨𝗧𝗢 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 
        
        switch(autofg) {
        	
        case 'bot':
buf = fs.readFileSync(`./src/mp3/1.mp3`)
Fg.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
break
        	
 case 'prefix':
 case 'prefixo': 
pre = `⭐ O prefixo que se utiliza é : *${single ? `${prefa}` : multi ? 'Multiprefixo! (!, /, #, ., $, etc..)' : 'SinPrefijo'}*`
reply(pre)
break

}

//-- 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦
switch(command) {
case "menu":
      case "help":  
      if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
	uptime = process.uptime()
  capt = `Total de comandos usados : ${reqcmd} \n‣ Clasificacion : ★★★★☆\n‣ Usuários : ${_user.length}`
  thum = await fs.readFileSync('./image/fg.jpg').toString('base64')
      replyimg(help(prefix, pushname), text, capt, thum)
break;

//--info bot 
case 'info':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
const fgnum = `5521972668269@s.whatsapp.net`
const crisnum = "5521972668269@s.whatsapp.net"
runtime2 = process.uptime()
const timestamp2 = speed();
const latensi2 = speed() - timestamp2

infobot =`⊷ *BOT*
▢ Nome : *${Fg.user.name}*
▢ Versão do bot : *1.0.0*
▢ Prefixo : *${single ? `${prefa}` : multi ? 'Multiprefixo! (!, /, #, ., $, etc..)' : 'SinPrefijo'}*
▢ Total de comandos usados : *${reqcmd}*
▢ Usuarios registrados : ${_user.length}
▢ Navegador : *${Fg.browserDescription[1]}*
▢ Versão do Navegador: *${Fg.browserDescription[2]}*
▢ Velocidade : *${latensi2.toFixed(4)}*
▢ Tempo de Execução : *${kyun(runtime2)}*
▢ Versão do whatsapp : ${Fg.user.phone.wa_version}


▢ Instagram :
https://www.instagram.com/pacokakk
▢ DONO :
https://github.com/pacokinha444`
mentions(infobot, [fgnum, crisnum], true)
break

//----  Reglas bot
case 'rules':
case 'regras':
case 'regrasbot':
if (!isVerify) return reply(userB(prefix))
	reglasbot = `  ≡ *REGRAS*


*REGRAS PARA USUÁRIOS DO BOT* 

• Por favor, use um comando cada 10s

• Ligar para o bot = Bloqueio automatico

• Não chame o bot se ele nao estiver ativo. 

• O bot não estará ativo durante 24 horas, porque ele depende do dono e geralmente não poderá deixar ligado o tempo todo.


*Consequências se quebrar as regras:* 
O bot o bloqueará e deixará o grupo. Estas regras são para a conveniência de todos que o usam.`
reply(reglasbot)
break


 case 'changelog':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  cbios = `
  *REGISTRO DE NOVIDADES!*
         ────────────
  ≡ Novos! 
 ▢  *${prefix}nivel*  para ver seu nivel 
 ▢  *${prefix}leveling*  para ativar o sistema de niveis no grupo
`
  reply(cbios)
break
   
//--- verificación 
case 'verify':
case 'reg':
case 'verificar':
case 'register':
case 'daftar':
			if (isVerify) return reply('*✳️ Sua conta já está registrada*')
					_user.push(sender)
fs.writeFileSync('./database/verify.json', JSON.stringify(_user))
try {
ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i.ibb.co/09M1hhg/Whats-App-Image-2021-10-15-at-5-08-51-PM.jpg'
}
			capt = `
┌────「 *VERIFICADO* 」─
▢ *Nome:* ${pushname}
▢ *Hora:* _${hora2}_
▢ *Usuários Verificados:* _${_user.length}_
└────「 *${Fg.user.name}* 」

Verificação completa use *${prefix}Help* para ver o Menu`

rgimg = await getBuffer(ppimg)
Fg.sendMessage(from, rgimg, image, {quoted: mek, caption: capt})
break

/*case 'verify':
			if (isVerify) return reply('*✳️ Sua conta já está registrada*')
					_user.push(sender)
fs.writeFileSync('./database/verify.json', JSON.stringify(_user))
  capt = `
┌────「 *VERIFICADO* 」─
▢ *Nome:* ${pushname}
▢ *Hora:* _${hora2}_
▢ *Usuários Verificados:* _${_user.length}_
└────「 *${Fg.user.name}* 」

Verificação completa use *${prefix}Help* para ver o Menu`
reply(capt)
break*/

//-- Simsimi
case 'simi':
case 'bot':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
		 var _0x5273f5=_0xf370;(function(_0x1e3c36,_0x2391b8){var _0x5da6fa=_0xf370,_0x1a4f42=_0x1e3c36();while(!![]){try{var _0x23cbdb=parseInt(_0x5da6fa(0x7a))/0x1*(-parseInt(_0x5da6fa(0x76))/0x2)+parseInt(_0x5da6fa(0x75))/0x3*(-parseInt(_0x5da6fa(0x7f))/0x4)+parseInt(_0x5da6fa(0x7c))/0x5+-parseInt(_0x5da6fa(0x7d))/0x6+parseInt(_0x5da6fa(0x81))/0x7*(-parseInt(_0x5da6fa(0x73))/0x8)+-parseInt(_0x5da6fa(0x7e))/0x9*(-parseInt(_0x5da6fa(0x79))/0xa)+parseInt(_0x5da6fa(0x77))/0xb;if(_0x23cbdb===_0x2391b8)break;else _0x1a4f42['push'](_0x1a4f42['shift']());}catch(_0x2636c6){_0x1a4f42['push'](_0x1a4f42['shift']());}}}(_0x5840,0x35af4));if(args[_0x5273f5(0x74)]<0x1)return reply(_0x5273f5(0x83)+pushname+_0x5273f5(0x80)+(prefix+command)+_0x5273f5(0x78));function _0x5840(){var _0xd47081=['1213302FVfrhC','496917QweCaM','362992jbvwzj','*_\x20quieres\x20charlar\x20un\x20rato?\x0a\x0aResponde\x20con\x20*','1384439ZPZFKX','join','Hola\x20_*','8HpRKqB','length','6AOqIvn','1636bvVBXF','8431742cGYzLz','*\x20_tu\x20mensaje_','20ZLlBtg','497YxvNGG','&lc=es','1654900PbnCcs'];_0x5840=function(){return _0xd47081;};return _0x5840();}function _0xf370(_0x412529,_0x3a723e){var _0x58400a=_0x5840();return _0xf370=function(_0xf370c6,_0x112276){_0xf370c6=_0xf370c6-0x73;var _0x4627a9=_0x58400a[_0xf370c6];return _0x4627a9;},_0xf370(_0x412529,_0x3a723e);}texto=args[_0x5273f5(0x82)]('\x20'),anu=await fetchJson('https://api.simsimi.net/v2/?text='+texto+_0x5273f5(0x7b));
	     simfg = (`${anu.success}`)      
                     replyfg(simfg)
                     break
                   
//-- Dono do bot
case 'owner':
case 'creator':
case 'criador': 
case 'developer':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
Fg.sendMessage(from, {displayname: "jeff", vcard: vcard1}, MessageType.contact, { quoted: mek})
//Fg.sendMessage(from, {displayname: "jeff", vcard: vcard2}, MessageType.contact, { quoted: mek})
                    .then((res) => Fg.sendMessage(from, `✅ Esse é meu dono, só chame se for necessário`, text, {quoted: res}))
 break
 

case 'status':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
 
stat = `*「 ESTADO DO BOT 」*
*🛡️ Modo* : ${public_}`
reply(stat)
break
			

//--- informes - bugs 
case 'informar':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  yoi = q
  if (args.length < 1) return reply('✳️ Informe a função que está bugada!')
  if (yoi.length > 200) return reply('O texto é muito grande, seja mais breve.')
  _informe.push(yoi)
  fs.writeFileSync('./result/reportes/informe.json', JSON.stringify(_informe))
  reply(`✅ Valeu *${pushname}*, isso vai ajudar bastante!`)
	break

//-- lista de informes 
case 'verinformar':
case 'informs':
			if (!isOwner) return reply(ownerB())
				teks = ` ≡ *Informs*\nEssa é a lista de Informs na data: *${fecha()}* com a quantidade de informs *${_informe.length}*\n\n┌───⊷ *LISTA* ⊶\n`
				for (let lap of _informe) {
					teks += `▢ ${lap}\n`
				}
				teks  += `└──────────────`
				reply(teks.trim())
				break


				//-- Reportes
case 'report':
case 'reporte':
case 'reportes':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
report = `  ≡ *INFORMACÂO*
Solicite e informe as funções de erro no bot, lembre-se de informar algo curto e claro !

┌───⊷ *REPORTES* ⊶
▢ *${prefix}Solicitud (Texto)*
▢ *${prefix}Informs (Texto)*
└──────────────

*Total*
Solicitudes : ${_solicitud.length}
Informss : ${_informe.length}

✆ ou você pode entrar em contato com o dono para obter mais informações.`
reply(report)
break

//-- Clona un perfil para el bot
case 'clone':
case 'clonar':
        if (!isOwner) return reply(ownerB())
		if (!isGroup) return reply(group())
		if (args.length < 1) return reply('✳️ Mencione quem você quer clonar o perfil! 😁')
		if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Mencione quem você quer clonar o perfil! 😁')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await Fg.getProfilePicture(id)
						buffer = await getBuffer(pp)
						Fg.updateProfilePicture(botNumber, buffer)
						mentions(`✅ Foto de perfil atualizada corretamente usando a foto de perfil de : @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('❎ Ocorreu um erro')
					}
		break
case 'atualizar':
case 'update':
if (!isOwner) return reply(ownerB())
reply(`✳️ Espere um momento e o bot se atualizará`)
exec(`bash update.sh`, (err, stdout) => {
if (err) return reply(err)
if (stdout) reply(`✅ *O bot se atualizou perfeitamente!*\n Informe a atualização:\n\n${stdout}\n\n As mudanças serão refletidas na próxima vez que iniciar o bot.`)
})
break

case 'restart':
  case 'reiniciar':
             if (!isOwner) return reply(ownerB()) 
           //  reply(`✳️ Espere um momento o bot está reiniciando`)
             exec(`node main`)
             reply('✅ O bot reiniciou')
break

case 'nulis':
	case 'tulis':
		case 'escribe':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
				if (args.length < 1) return reply(`📝 O que escrevo? Exemplo : *${prefix + command}* Olá porcos`)
				reply('✅ Espere, estou escrevendo✍️')
				buff = `https://api.zeks.me/api/magernulis?apikey=WRhywqyYC0doYNeqTZymcB2SjrT&nama=FG98&kelas=6-08&text=${q}&tinta=6`
					voss = await fetch(buff)	
					ftype = require('file-type')	
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					Fg.sendMessage(from, await getBuffer(buff), image, {quoted: mek, caption: '✅ É melhor do que você escrevendo ✍🏻'})
					} else {
					  reply('Ocorreu um erro')
					}
					break

//-- Verdad 
case 'verdade':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  const verdad = _verdad[Math.floor(Math.random() * _verdad.length)]
  reply(`‣ *Verdade*\n\n${verdad}`)
break

//--reto
case 'desafio':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  const reto = _reto[Math.floor(Math.random() * _reto.length)]
  reply(`‣ *Desafio*\n\n${reto}`)
break



//-- link whatsapp
case 'wame':
case 'wa.me':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					reply(`*Link WhatsApp:* wa.me/${sender.split('@')[0]}\n*O*\napi.whatsapp.com/send?phone=${sender.split('@')[0]}`)
			break

//-- say
/*case 'say':
    if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
sendMess(from, q)
break*/

//-- Escanea el texto de una imagen----- Reconocimiento de texto
case 'ocr':
case 'rt':
     if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			const media = await Fg.downloadAndSaveMediaMessage(encmedia)
			
			reply(wait())
						await recognize(media, {lang: 'eng+es', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err(prefix))
								fs.unlinkSync(media)
							})
					} else {
						reply(`📇 RECONHECIMENTO DE TEXTO\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✳️ Envie uma imagen com *${prefix + command}* ou marque uma imagem que já tenha enviado\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n*Aliás o comando*\n${prefix}ocr\n${prefix}rt`)
					}
					
		break
		
		 //chat leer más 
  case 'leermas':
    if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
Fg.updatePresence(from, Presence.composing)
if (args.length < 1) return reply(`*TEXTO LEER MÁS\n\nEjem : ${prefix + command} oi | o que fazem?`)
tels = q
var teks1 = tels.split("|")[0];
var teks2 = tels.split("|")[1];
hasil = `${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
Fg.sendMessage(from, hasil, text, { quoted: mek})
break 

//--- texto a voz
case 'tts':
case 'voz': 
    if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
 
				if (args.length < 1) return Fg.sendMessage(from, `❎ Coloque o código de idioma e o texto\n\n*Exemplo* : ${prefix}tts es Olá Porcos`, text, {quoted: mek})
				const gtts = require('./libreria/gtts')(args[0])
				if (args.length < 2) return Fg.sendMessage(from, `❎ Coloque o texto\n\n*Exemplo* : ${prefix}tts es Olá Porcos`, text, {quoted: mek})
				dtt = body.slice(8)
				
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 600
				? reply('❎ O texto é muito grande, parece uma página da biblia ')
				: gtts.save(ranm, dtt, function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
				fs.unlinkSync(ranm)
				buff = fs.readFileSync(rano)
				if (err) return reply('❎ Ocorreu um erro')
				Fg.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
				fs.unlinkSync(rano)
				})
				})
break


//--borrar chats del bot
case 'clearchat':
case 'clearall':
{
if (!isOwner)return reply(ownerB()) 
let chiit = await Fg.chats.all()
for (let i of chiit){
Fg.modifyChat(i.jid, 'delete', {
includeStarred: false
  })
}
reply(`😔 apaguei todos os meus chats`)
  }
break

case 'setprefix':
if (!isOwner && !isMods)return reply(modsB())
if (args.length < 1) return reply(`*✳️Formato do comando!*\n\n*📌 Exemplo :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} # (Personalizado!)`)
if((args[0]) == 'multi'){
if(multi)return reply('_✳️ O Prefixo atual é um multi prefixo!_')
multi = true
nopref = false
single = false
reply(`✅ O prefixo foi alterado para *multiprefixo*`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_✳️ Já está sem um prefixo_')
multi = false
single = false
nopref = true
reply(`✅ Prefixo alterado para *noprefix*\n\n📌Você não precisa mais de um prefixo pra usar os comandos!`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
single = true
prefa = `${q}`
reply(`✅ Prefixo alterado para : *${q}*`)
}
break

// Lista de Grupos 
case 'listgroup': 
case 'grouplist': 
case 'listgp':
case 'listagp':
case 'listagrupos':
if (!isOwner && !isMods) return reply(modsB())
const txs = Fg.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`
❉─────────────────────❉
• *🔖Nome* : ${Fg.getName(v.jid)}*
• *🛡️ID de Grupo : ${v.jid}*
• *🏮Estado* : ${v.read_only ? 'noUnido' : 'Unido'}
❉─────────────────────❉`).join`\n\n`
reply('≡ *Lista de Grupos*\n\n' + txs)
break


case 'bc':
case 'tx':
if (!isOwner && !isMods)return reply(modsB()) 
if (args.length < 1) return reply('✳️ O que quer transmitir?')
bcc = await Fg.chats.all()
if (isMedia && !mek.message.imageMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Fg.downloadMediaMessage(encmedia)
for (let i of bcc){
Fg.sendMessage(i.jid, media, image, {caption: `*TRANSMISSÃO ┃ DONO*\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n${q}`})
}
reply(`*✅ Transmissão realizada*`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await Fg.downloadMediaMessage(encmedia)
for (let _ of bcc) {
Fg.sendMessage(_.jid, bc, video, {caption: `*TRANSMISÃO ┃ DONO*\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n${q}`})
}
reply('*✅ Transmision realizada* ')
}	else {
for (let _ of bcc) {
sendMess(_.jid, `*TRANSMISSÃO ┃ DONO*\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n${q}`)
	}
reply(`✅ Transmision realizada *Total chats ${totalchat.length}*`)
		}
break

case 'ban':
				if (!isOwner && !isMods) return reply(modsB())
				if (args.length < 1) return reply(`✳️ Quem você quer banir?`)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					ban.push(bnnd)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
					} else {
						mentions(`✅ @${mentioned[0].split('@')[0]} tomou ban otariokkkkkkk\n\nvocê não pode usar mais meus comandos`, mentioned, true)
					}
					
					break
				
		        case 'unban':
				if (!isOwner && !isMods) return reply(modsB())
				if (args.length < 1) return reply(`✳️ Mencione um usuário pra eu banir!`)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				bnnd = q
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				
				if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
					} else {
						mentions(`✅ @${mentioned[0].split('@')[0]} você foi desbanido.`, mentioned, true)
					}
					break 

//-- Lista de baneados por el bot
case 'banlist':
  if (!isVerify) return reply(userB(prefix))
      teks = ` ≡ *lixos banidoskkkkkkkkk*\nos numeros que tao ai foram burros de tomar ban por zuar o bot\n\n*Total* : ${ban.length}\n┌───⊷ *LISTA* ⊶\n`
	    for (let baned of ban) {
	    teks += `▢ @${baned.split('@')[0]}\n`
					}
	    teks += `└──────────────`
	    Fg.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
					
					
//---
      case 'listonline':
case 'online':
case 'enlinea':
 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  if (!isGroup) return reply(group())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
    
			    let online = [...Object.keys(Fg.chats.get(ido).presences), Fg.user.jid]
			    Fg.sendMessage(from, 'En linea:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n` + `\n*©POWERED BY Pacoca ┃ ᴮᴼᵀ*`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
    
			    })

				break

                  case 'hoy':
                   case 'hora' :
                   case 'fecha':
                   if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
                   const timx = moment.tz('America/Mexico_City').format('HH:mm:ss')
                   const argt = moment.tz('America/Argentina/Salta').format('HH:mm:ss')
                   tpf = `*${fecha()}*
Hora : *${argt}*
   ─────────────
México : *${timx}*
Argentina : *${argt}*
    ─────────────`     
  reply(tpf)
                   break          
                  
           
//---Acortar enlaces
				case 'tinyurl':
				 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ Coloque o link para encurtar`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break


case 'tagme':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
mentions(`@${sender.split("@")[0]} Oiê :3`, [sender], true)
break

    
      case 'kick':
 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins) return reply(admin())
if(!q)return reply(`✳️ Mencione alguém para ser expulso do grupo\n\n📌Exemplo : ${prefix + command} @tag`)
if (!isBotGroupAdmins) return reply(Badmin())
y = q.split('@')[1] + '@s.whatsapp.net'
Fg.groupRemove(from, [y])
reply(`✅ Ordens recebidas, expulsando...`)
break

case 'okick':
			 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins) return reply(admin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('✳️ Responda a uma mensagem!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
		    Fg.groupRemove(from, [kick])
						reply('✅ Ordens recebidas, expulsando...')
                    break

      /*case "add":
        if (!isOwner) return 
if (!isGroup) return reply(group())
if (!isGroupAdmins) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
        if (
          mek.message.extendedTextMessage === null ||
          mek.message.extendedTextMessage === undefined
        )
          return;
        if (
          mek.message.extendedTextMessage.contextInfo.participant === undefined
        ) {
          entah = mek.message.extendedTextMessage.contextInfo.mentionedJid;
          if (entah.length > 1) {
            var mems_ids = [];
            for (let ids of entah) {
              mems_ids.push(ids);
            }
            add(from, mems_ids);
          } else {
            add(from, [entah[0]]);
          }
        } else {
          entah = mek.message.extendedTextMessage.contextInfo.participant;
          add(from, [entah]);
        }
        break;*/
        
     //--- abrir y cerrar grupo
case 'grupo':
					case 'group':
					 if (!isVerify) return reply(userB(prefix))
                    if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
if (args.length < 1) return reply(`✳️ Para abrir o grupo : *${prefix + command}* open\npara fechar o grupo : *${prefix + command}* close`)
if (args[0] === 'open') {
 reply('✅ Grupo aberto agora *todos os participantes* podem escrever')
Fg.groupSettingChange(from, GroupSettingChange.messageSend, false)
	} else if (args[0] === 'close') {
reply('✅ Grupo fechado agora *somente os admin* podem escrever')
Fg.groupSettingChange(from, GroupSettingChange.messageSend, true)
	} else {
reply(` 🗂️ (${args[0]}) Não disponivel\n*${prefix + command}* open\npara fechar grupo : *${prefix + command}* close`)
}
break

//--- Cambiar descripción del grupo
case 'setdesc': 
case'setdescgp':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isOwner && !isGroupAdmins) return reply(admin())
if(!q)return reply(`❇️ Escreva a nova descrição do grupo`)
if (!isBotGroupAdmins) return reply(Badmin())
if (!isGroup) return reply(group())
Fg.groupUpdateDescription(from, `${q}`)
Fg.sendMessage(from, '✅ A descrição do grupo foi alterada', text, {quoted:mek})
break

//--- Cambiar nombre del grupo
case 'setname': 
case 'setnamegp':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isOwner && !isGroupAdmins) return reply(admin())
if(!q)return reply('❇️ Qual vai ser o novo nome do grupo?')
if (!isBotGroupAdmins) return reply(Badmin())
if (!isGroup) return reply(group())
Fg.groupUpdateSubject(from, `${q}`)
Fg.sendMessage(from, '✅ Nome do grupo alterado', text, {quoted:mek})
break

case 'resetlink': 
case 'revokelink': 
case 'anularlink':
if (isAw) return reply('⚠️ Está proibido anular o link do grupo❗')
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply (Badmin())
Fg.query({ json: ['action', 'inviteReset', from], expect200: true })
linkgp = await Fg.groupInviteCode(from)
fgxd = `✅ Link do grupo revogado

📌 Novo link : 
https://chat.whatsapp.com/${linkgp}`
Fg.sendMessage(from, fgxd, text, {quoted: mek})
break

//-- Bot sale del grupo
case 'leave':
case 'sair':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if(!isGroup)return reply(group())
if(!isGroupAdmins && !isOwner)return reply(admin())
sendMess(from,`😔 Adeus  grupo *${groupName}*`)
setTimeout(() => {
Fg.groupLeave(from)
}, 2000);
break
//--- Lista de administradores del grupo
case 'adminlist':
case 'listadmin':
case 'staff':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
					teks = `▢ *STAFF DO GRUPO* _${groupMetadata.subject}_\nTotal : ${groupAdmins.length}\n\n┌─────────⊷\n`
			
					for (let admin of groupAdmins) {
						teks += `▢ @${admin.split('@')[0]}\n`
					}
					teks += `└────✪ Pacoca ┃ ᴮᴼᵀ ✪────`
					mentions(teks, groupAdmins, true)
					break


       //--- preguntas

case 'pergunta':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ Exemplo: *${prefix + command}* sou feo?`)
apa = q
naon = ["Sim","Não","Em efeito"," Talvez","Eu não sei","Pode ser","2 dias","Jamais", "Um domingo", "Não faço idéia", "muito falso"]
random = naon[Math.floor(Math.random() * (naon.length))]
preg = `Pregunta : *${apa}*
Resposta : ${random}`
replyfg(preg)
break

//--- pareja al azar 
case 'ship':
    if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf()) 
    if (!isGroup) return reply(group())
    jds = []
					jdii = groupMembers
					koss = groupMembers
					akuu = jdii[Math.floor(Math.random() * jdii.length)]
				 diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `*O casal do dia* 
					
●❯────────────────❮●
@${akuu.jid.split('@')[0]}
❤️
@${diaa.jid.split('@')[0]}
●❯────────────────❮●`
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break	
					
					case 'random':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group())
					jds = []
					 jdii = groupMembers
					 diaa = jdii[Math.floor(Math.random() * jdii.length)]
					teks = `✅ O usuário escolhido aleatoriamente é @${diaa.jid.split('@')[0]}`
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break
case 'exif':
if (!isOwner)return reply(ownerB())
if (args.length < 1) return reply(`✳️ Uso del comamdo \n\n📌 ${prefix + command} nombre|autor`)
if (!arg.split('|')) return reply(`✳️ Uso del comamdo \n\n📌 ${prefix + command} nombre|autor`)
exif.create(arg.split('|')[0], arg.split('|')[1])
reply(`✅ Nome e autor guardado!`)
break
	        

   case  'trigger': 
       case 'triggered':
					case 'ger':
					case 'motivado':
					case 'motivada':
					 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('✳️ Envie ou marque uma mensagem')
					}
					break
		case  'sgay':
		case  'gay2':
		if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
gay = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
reply(wait())
owgig = await Fg.downloadMediaMessage(gay)
await fs.writeFileSync(`./stickgay.jpeg`, owgig)
var imgbb2 = require('imgbb-uploader')
anug = await imgbb2("20a14861e4f7591f3dc52649cb07ae02", './stickgay.jpeg')
txtg = `${anug.display_url}`
sgay = await getBuffer(`https://pecundang.herokuapp.com/api/gay?url=${txtg}`)
const bas642 = `data:image/jpeg;base64,${sgay.toString('base64')}`
var mantap2 = await convertSticker(bas642, `💎 @Pacocakk`, `🔮 Pacoca ┃ ᴮᴼᵀ`)
var imageBuffer2 = new Buffer.from(mantap2, 'base64');
Fg.sendMessage(from, imageBuffer2, sticker, {quoted: mek})
fs.unlinkSync('./stickgay.jpeg')
} else {
					reply('✳️ Envie ou marque uma mensagem')
					}
					break
					
					case 'srip':
					case 'sf':
					if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
   if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
rip = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
reply(wait())
owgir = await Fg.downloadMediaMessage(rip)
await fs.writeFileSync(`./stickrip.jpeg`, owgir)
var imgbb2r = require('imgbb-uploader')
anur = await imgbb2r("20a14861e4f7591f3dc52649cb07ae02", './stickrip.jpeg')
txtr = `${anur.display_url}`
srip = await getBuffer(`https://pecundang.herokuapp.com/api/rip?url=${txtr}`)
const bas642r = `data:image/jpeg;base64,${srip.toString('base64')}`
var mantap2r = await convertSticker(bas642r, `💎 @Pacokakk`, `🔮 Pacoca ┃ ᴮᴼᵀ`)
var imageBuffer2r = new Buffer.from(mantap2r, 'base64');
Fg.sendMessage(from, imageBuffer2r, sticker, {quoted: mek})
fs.unlinkSync('./stickrip.jpeg')
} else {
reply('✳️ Envie ou marque uma mensagem')
}
break
		
		case  'passed':
		case  'aprovado':
		if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Baixando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('✳️ Envie ou marque uma mensagem')
					}
					break
					
		case  'jail':
		case  'scelda':
		case  'celda':
		case  'carcel':
		case 'scarcel':
		if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
rej = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
reply(wait())
owgir = await Fg.downloadMediaMessage(rej)
await fs.writeFileSync(`./stickc.jpeg`, owgir)
var imgbb2c = require('imgbb-uploader')
anuc = await imgbb2c("20a14861e4f7591f3dc52649cb07ae02", './stickc.jpeg')
txtc = `${anuc.display_url}`
sc = await getBuffer(`https://pecundang.herokuapp.com/api/jail?url=${txtc}`)
const bas642c = `data:image/jpeg;base64,${sc.toString('base64')}`
var mantap2c = await convertSticker(bas642c, `💎 @Pacocakk`, `🔮 Pacoca ┃ ᴮᴼᵀ`)
var imageBuffer2c = new Buffer.from(mantap2c, 'base64');
Fg.sendMessage(from, imageBuffer2c, sticker, {quoted: mek})
fs.unlinkSync('./stickc.jpeg')
} else {
					reply('✳️ Envie ou marque uma mensagem')
					}
					break
		
		case  'wasted':
		case  'desperdiciado':
		case  'desperdiciada':
		if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('✳️ Envie ou marque uma mensagem')
					}
					break 
		case 'stickmeme':
case 'smeme':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isQuotedSticker) return reply(`✳️Responda uma figurinha com o comando\n📌Exemplo ${prefix + command} text|text2`)
smeme = q
var tex1 = smeme.split('|')[0]
var tex2 = smeme.split('|')[1]
if (!tex2) return reply(`✳️Responda uma figurinha com o comando\n📌Exemplo ${prefix + command} text|text2`)
if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(wait())
owgi = await Fg.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen2?teks1=${tex1}&teks2=${tex2}&img_url=${teks}`, mek)
fs.unlinkSync('./stickmeme.jpeg')
}
break
case 'stickmeme2':		
case 'smeme2':	
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())						
if(!q) return reply(`✳️Responda uma figurinha com o comando\n📌Exemplo ${prefix + command} jsjs`)
if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(wait())
owgi = await Fg.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen3?teks=${q}&img_url=${teks}`, mek)
fs.unlinkSync('./stickmeme.jpeg')
}
break
        



//-- mencionar a todos los miembros
case 'mentionall': 
case 'tagall':
 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
		  if (!isGroup) return reply(group())
			if (!isGroupAdmins && !isOwner) return reply(admin())
					members_id = []
		teks = `▢ Grupo : *${groupName}*\n▢ Membros : *${groupMembers.length}*\n▢ Mensagem : ${q}\n┌───⊷ *MENÇÕES* ⊶\n`
			for (let mem of groupMembers) {
				teks += `▢ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
		teks += `└─────✪ Pacoca ┃ ᴮᴼᵀ ✪───────`
			mentions(teks, members_id, true)
			break
			
			case 'hidetag': 
case 'here':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner)return reply(admin())

var group = await Fg.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: q,
contextInfo: { mentionedJid: mem },
quoted: mek
}
Fg.sendMessage(from, options, text)
break

//-- Notification al grupo
case 'notificar':
case 'notify':
if (!isGroup) return reply(group())
    if (!isGroupAdmins && !isOwner) return reply(admin())
   if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
    if (args.length < 1) return reply(`✳️ Qual é a mensagem?`)
teks = `Você recebeu uma mensagem de notificação do administrador @${sender.split("@")[0]}\n\n*Mensagem* : ${q}`
group = await Fg.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await Fg.sendMessage(from, options, text)
break
;

//-------(𝗗𝗘𝗦𝗖𝗔𝗥𝗚A𝗦 -  𝗦𝗧𝗔𝗟𝗞𝗦) 𝗜𝗡𝗦𝗧𝗔 - 𝗧𝗜𝗞𝗧𝗢𝗞------
      case 'tiktok':
      if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ Coloque o link de algum video`)
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.link)
 		
 		reply(wait())
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `✅ Aquí tienes`
		Fg.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
		
     		.catch(e => console.log(e))
     break
     
     case 'tiktokaudio':
 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
 if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.link)
 		if (args.length < 1) return reply(`✳️ Coloque o link de algum video`)
 		reply(wait())
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    	
    		const { audiotk} = result
            sendMediaURL(from,audiotk,'')
    		})
     		.catch(e => console.log(e))
     	break
    
 
      case 'ytmp3':
			  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ Use o comando mas com um link do YouTube\n\n📌 Exemplo: *${prefix + command}* https://www.youtube.com/watch?v=Da3RwiJRkpE`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(errorfg(prefix))
				try {
				reply(wait()) 
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
					
			    if (Number(filesize) >= 100000) return reply('✳️ El archivo pesa más de 100 MB! no puedo enviar')
				const captions = `
*✅ Download Completo*

‣ *📌Título* : ${title}
‣ *📟 Ext* : mp3
‣ *⚖️Tamanho* : ${filesizeF}
‣ *🔗 Link* : ${a.data}

_📤 A música está sendo enviada, caso não chegue baixe pelo link_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)}
				break
				
 		case 'ytmp4':
			  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ Use o comando mas com um link do YouTube\n\n📌 Exemplo: *${prefix + command}* https://www.youtube.com/watch?v=Da3RwiJRkpE`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(errorfg(prefix))
				try {
				reply(wait()) 
				ytv(args[0])
				.then((res) => {
					
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 100000) return reply('✳️ O arquivo pesa mais que 100MB, não consigo enviar')
				const captionsYtmp4 = `
*✅ Download Completo*

‣ *📌Título* : ${title}
‣ *📟 Ext* : mp4
‣ *⚖️Tamanho* : ${filesizeF}
‣ *🔗 Link* : ${a.data}

_📤 O vídeo está sendo enviado, caso não chegue baixe pelo link_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
		
 case 'play':
			if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
    if (args.length < 1) return reply(`✳️ *Coloque o titulo da musica para o bot cantar*\n\n📌Exemplo *${prefix + command}* XXXTentacion Revenge`)
  reply(wait())
            var srch = args.join('')
    		ytfg = await yts(srch);
    		aramat = ytfg.all 
   			var mulaikah = aramat[0].url							
                  try {
                  	
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return reply('✳️ O arquivo pesa mais que 100MB, não consigo enviar')
                        const captions = `
*🎶Musica encontrada*

‣ *📌Título* : ${title}
‣ *📟 Ext* : mp3
‣ *⚖️Tamanho* : ${filesizeF}
‣ *🎈Carregado* : ${ytfg.videos[0].ago}
‣ *⏱️Duracão* : ${ytfg.videos[0].timestamp}
‣ *🔗 Link* : ${a.data}

_📤 A música está sendo enviada, caso não chegue baixe pelo link_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                             })                
                        })
                        } catch (err) {
                        reply(mess.error.api) }
                   break
   
      case 'video':
				case 'playvideo':
				case 'playvid':
				case 'playmp4':
				if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ *Coloque o titulo de um video*\n\n📌Ejemplo *${prefix + command}* XXXTentacion Revenge`)
           reply(wait())
        var srch = args.join("");
        vidfg = await yts(srch);
        aramat = vidfg.all;
        var mulaikah = aramat[0].url;
        try {
          ytv(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if(Number(filesizeF.split(' MB')[0]) >= 99.00) return reply('❎ O arquivo é muito grande\nO video deve pesar - 100mb')
                capt = `≡ *🎥 PLAY VIDEO*

‣ *📌Título* : ${title}
‣ *📟 Ext* : mp4
‣ *⚖️ Tamanho* : ${filesizeF}

_📤 O vídeo está sendo enviado, caso não chegue baixe pelo link_`
                
                sendMediaURL(from, thumb, capt);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
         break;
				

      case 'igfoto':       
                 case 'igvideo':    
                    case 'ig':
                    case 'instagram':
         if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
    if (!isUrl(args[0]) && !args[0].includes("instagram.com")) return reply(mess.link);
       if (args.length < 1) return reply(`✳️ Coloque o link de uma foto ou vídeo do Instagram`)
        reply(wait());
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              Fg.sendMessage(from, link, video, {
                quoted: mek,
                caption: `✅ Aqui está`,
              });
            } else {
              let link = await getBuffer(i.url);
              Fg.sendMessage(from, link, image, {
                quoted: mek,
              });
                caption: `✅ Aqui está`,
            }
          }
        });
             break;
      //******************** 》 SEARCH 《 ********************\\
case 'ytsearch':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ Exemplo : ${prefix + command} XXXTentacion`)
                    reply(wait())
				var srch = args.join('');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await Fg.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '📌 *Título :* ' + video.title + '\n'
		            ytresult += '*🔗 Link* : ' + video.url + '\n'
		            ytresult += '*⏳ Duração* : ' + video.timestamp + '\n'
		            ytresult += '*📤 Publicado* : ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '─── Pacoca ┃ ᴮᴼᵀ ───'
		    		
		            Fg.sendMessage(from, tbuff, image, {thumbnail:fs.readFileSync(`./image/fake.jpg`), quoted: mek, caption: ytresult})
		            break
					
					case 'ytstalk':
					if (!isVerify) return reply(userB(prefix))
                     if (isBanned) return reply(banf())
                     if (args.length < 1) return reply(`✳️ Coloque o nome de um canal \n\n📌 Exemplo : *${prefix + command}* XXXTentacion`)  
                     reply(wait())
					ytk = q
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${ytk}`, {method: 'get'})
					cari = '•••••••••••••••••••••••••\n'
					for (let search of anu.result) {
					cari += `*Canal* : ${search.channel_name}\n*Sobre* : ${search.channel_about}\n*Criado* : ${search.channel_created}\n*Link* : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
					}
					reply(cari.trim())
					break
				

				//-- link del grupo
case 'linkgroup': 
case 'linkgp':
case 'link':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isBotGroupAdmins) return reply(Badmin())
linkgp = await Fg.groupInviteCode(from)
fgxd = `Link do Grupo *${groupName}*\n\nhttps://chat.whatsapp.com/${linkgp}`
Fg.sendMessage(from, fgxd, text, {quoted: mek})
break
				
case 'igstalk':
case 'stalking':
   if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
    if (args.length < 1) return reply(`✳️ Escreva um nome de Usuario\n\n📌Exemplo : *${prefix + command}* pacokakk_`)
                   reply(wait()) 
           ig.fetchUser(`${args.join(' ')}`).then(Y => {
   //         console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `┌──「 *STALKING* 」
▢ *🆔 ID :* ${Y.profile_id}
▢ *🔖 Username* : ${args.join('')}
▢ *🔖 Nome Completo* : ${Y.full_name}
▢ *📌 Bio :* ${Y.biography}
▢ *🫂 Seguindo* : ${Y.followers}
▢ *👥 Seguidores* : ${Y.following}
▢ *🔐 Privado* : ${Y.is_private}
▢ *✅ Verificado* : ${Y.is_verified}

▢ *🔗 Link* : https://instagram.com/${q}
└──────────────`
            sendMediaURL(from,ten,teks) 
            })     
                break
        
      case 'lyrics':
case 'letra':
case 'letras':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply('✳️ Coloque o nome de uma música')
  reply(wait())
  
  try {
    let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
 } catch {
    reply(mess.ferr)
  }
break

     case 'covid':
case 'covid19':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!q) return reply(`✳️ Nome de um país \n\n📌 Exemplo : ${prefix + command} Brazil (desse mesmo jeito pra poder achar)`)
cvd = await fetchJson(`http://zekais-api.herokuapp.com/corona?country=${q}`)
copid = `❒ *「 Covid ${q} 」* ❒ 

‣ *Total de casos :* _${cvd.result.total_case}_
‣ *Mortos :* _${cvd.result.total_deaths}_
‣ *Recuperados :* _${cvd.result.total_tests}_
‣ *Casos de hoje :* _${cvd.result.today_cases}_
‣ *Mortos de hoje :* _${cvd.result.today_deaths}_
‣ *Total tratados :* _${cvd.result.total_active}_`
reply(copid)
limitAdd(sender, limit)
break

      case "pinterest":
      case 'image':
   case 'imagen':
   case 'img':
        if (!isVerify) return reply(userB(prefix))
        if (isBanned) return reply(banf())
       if (!q) return reply(`❎ Qual imagem quer que eu busque?`);
        reply(wait())
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        await Fg.sendMessage(from, di, image, { quoted: mek, caption: `✅ Aqui está : *${q}*` });
           break;
       
       
        
       /*case 'image':
   case 'imagen':
   case 'img':
   if (!isVerify) return reply(userB(prefix))
        if (isBanned) return reply(banf())
       if (!q) return reply(`❎ Qual imagem quer que eu busque?`);
        reply(wait())
             gimg = q
            try {
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            Fg.sendMessage(from,{url:images},image,{quoted: mek, caption: `✅ Aqui está : *${q}*`})
            });
            } catch {
  	reply(mess.ferr)
  }
   break*/

        
        //--image
case 'rip':
					case 'f':
					if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf()) 
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(wait())
         owgi = await Fg.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/petimati?url=${anu.display_url}`)
Fg.sendMessage(from, ojan, image, {quoted: mek})
} else {
reply('✳️ *Envie uma imagem ou marque uma que já tenha enviado*')
}
break


  
                   //--fake reply
case 'fitnah':
case 'fake':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (args.length < 1) return reply(`✳️ *Uso do comando* :\n${prefix}fake @tag|msj|msjbot\n\n📌 *Exemplo* : \n${prefix + command} @taguser|Olá|Olá tudo bem`)
        var gh = q
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        Fg.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
   break;
     
 
      case 'public':
case 'publico':
      if (!isOwner)return reply(ownerB()) 
        if (banChats === false)  return;
        banChats = false;
        reply(`*🌍 Bot Modo* : Publico`);
        break
   
case 'privado':
case 'private':
case 'self':
if (!isOwner)return reply(ownerB()) 
        if (banChats === true) return;
        banChats = true;
        reply(  `*🛡️Bot Modo* : privado`);
        break;
       
       
        case 'topgay':
try{
 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
 if (!isGroup) return reply(group())
             
d = []
teks = '≡ 🏳️‍🌈 *TOP 10 GAYS*\n essa é uma lista dos top 10 gays do grupokkkkkkkkkkk\n┌──────────────\n' 
for(i = 0; i < 10; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `▢ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
teks += `└──────────────`
mentions(teks, d, true)

} catch (e) {
console.log(e)
reply('❎ Ocorreu um erro inesperado, tente novamente')

}
break
	
				// Nivel

case 'level':
case 'nivel':
case 'lvl':

if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group()) 
                if (!isLevelingOn) return reply(leveloff())
             
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                sem = sender.replace('@s.whatsapp.net','')
                resul = `┏━━━━━━♡ *NIVEL* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ *Nome* : ${pushname}
┃│➸ *XP* : ${userXp} / ${requiredXp}
┃│➸ *NIVEL* : ${userLevel}
┃│➸ *Rank* : ${role}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
               Fg.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`❎ Ocorreu um erro!\n${err}`)
                    })
            break
        
				case 'ranks':
            case 'rangos':
            if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group())
            const usernivel = getLevelingLevel(sender)
            
           fgranks = `▢ *${pushname}* Nivel : *${usernivel}* Rank : *${role}*

           ❑ *RANKS*
┌────────────────
   *Niveis* ─╬─ *Rankos*
├────────────────
▷  _1_ = *Novato*
▷  _4_ = *Bronze III*
▷  _6_ = *Bronze II*
▷  _8_ = *Bronze I*
▷  _10_ = *Prata II*
▷  _12_ = *Prata I*
▷  _14_ = *Ouro II*
▷  _16_ = *Ouro I*
▷  _18_ = *Platina II*
▷  _20_ = *Platina I*
▷  _22_ = *Diamante II*
▷  _24_ = *Diamante I*
▷  _26_ = *Mestre II*
▷  _28_ = *Mestre I*
▷  _30_ = *♕︎ Grande Lendario*
└─────────────────
*NOTA* : _Alcança um novo rank ao subir de nivel_`
           reply(fgranks)
           break
				
			
  
//Leveling 

    case 'leveling':
case 'nivelación':
    if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
                if (!isGroup) return reply(group()) 
               if (!isGroupAdmins && !isOwner) return reply(admin())
                if (args.length < 1) return reply(`✳️ *Sistema de niveis*\n\n*${prefix + command} on* para ativar\n*${prefix + command} off* para desativar`)
                if (args[0] === 'on') {
                    if (isLevelingOn) return reply('✳️ *Já está ativado*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                   reply('✅ Sistema de niveis habilitada no grupo')
                } else if (args[0] === 'off') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                     reply('✅ Sistema de niveis desabilitada')
                } else {
                    reply(`✳️ *Sistema de niveis*\n\n*${prefix + command} on* para ativar\n*${prefix + command} off* para desativar`)
                }
                
            break
                  
//--- Bienvenida on/off
case 'welcome':
case 'bv':
case 'bienvenidas':
case 'bienvenida':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
		if (!isGroup) return reply(group())
		if (!isGroupAdmins && !isOwner) return reply(admin())
		if (args.length < 1) return reply(`✳️ *Bem-Vindo*\n\n*${prefix + command} on* para ativar\n*${prefix + command} off* para desativar`)
		if ((args[0]) === 'on') {
		if (isWelcom) return reply('✳️ A mensagem de boas vindas já está ativa')
						_welcom.push(from)
						fs.writeFileSync('./database/welcom.json', JSON.stringify(_welcom))
						reply(`✅ A função de boas vindas foi ativada no grupo *${groupMetadata.subject}*`)
		} else if ((args[0]) === 'off') {
		if (!isWelcom) return reply('✳️ A mensagem de boas vindas já está desativada')
						_welcom.splice(from, 1)
						fs.writeFileSync('./database/welcom.json', JSON.stringify(_welcom))
						reply(`✅ A função de boas vindas foi desativada no grupo *${groupMetadata.subject}*`)
					} else {
						reply(`✳️ *Bem-Vindo*\n\n*${prefix + command} on* para ativar\n*${prefix + command} off* para desativar`)
					}
		break


//--- on/off antilink WhatsApp 
				case 'antilink':
				case 'antilinkwha':
				case 'antilinkwhatsapp':
				if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
				if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply(`✳️ *ANTILINK WHATSAPP*\n\n*${prefix + command} on* para ativar\n*${prefix + command} off* para desativar`)
					if ((args[0]) === 'on') {
						if (isAntilink) return reply('✳️ Antilink já está ativo')
						_antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
						reply(`✅ Se ativou o *Antilink WhatsApp* no grupo *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntilink) return reply('✳️ Antilink já está desativado')
						_antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
						reply(`✅ Se desativou o *Antilink WhatsApp* no grupo *${groupMetadata.subject}*`)
					} else {
						reply(`✳️ *ANTILINK WHATSAPP*\n\n*${prefix + command} on* para ativar\n*${prefix + command} off* para desativar`)
					}
					break
					
case 'banchat':
if (!isGroup) return reply(group())
if (!isOwner && !isMods) return reply(modsB())
//if (!isBotGroupAdmins) return reply(Badmin())
if (isBanchat) return reply(`✳️ Este grupo já está silenciado`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`✅ *Grupo Silenciado*\n\n⏯️ O bot foi silenciado neste grupo. Não responderá nenhum comando`)
break

case 'unbanchat':
if (!isOwner && !isMods) return reply(modsB())
if (!isBanchat) return reply(`✳️O grupo não estava silenciado`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`✅ *Grupo desmutado*\n\n ▶️ Agora já podem usar os comandos`)
break

case 'listbanchat': 
case 'listbc':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
 teks = `▢ *Grupos silenciados!*\n▢ _Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await Fg.groupMetadata(i)
teks += '🛡️ Id : ' + i + '\n'
teks += '📌 Nome : ' + met.subject + '\n\n'
}
reply(teks)
break


//-- Dar admin 
case 'promote':
case 'promover':
case 'rol':
				  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('✳️ Mencione o membro que será promovido a administrador')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '✅ Agora o declaro um admin do grupo:\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						Fg.groupMakeAdmin(from, mentioned)
						mentions(teks, mentioned, true)
						
					} else {
						mentions(`✅ Agora @${mentioned[0].split('@')[0]} é um admin do grupo *${groupMetadata.subject}*`, mentioned, true)
						Fg.groupMakeAdmin(from, mentioned)
					}
					break
					
//-- Bajar posiciones - quitar admin
case 'demote':
case 'degradar':
case 'delrol':
			    if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Mencione o administrador que será rebaixado a membro')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '✅ Admin rebaixado :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Fg.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`✅ Admin rebaixado : @${mentioned[0].split('@')[0]} você virou um membro, sentimos muito 😔`, mentioned, true)
						Fg.groupDemoteAdmin(from, mentioned)
					}
		break
					

//mi perfil 
case 'profile':
					case 'perfil':
					case 'itsme':
					   if (!isVerify) return reply(userB(prefix))
                       if (isBanned) return reply(banf())  
					Fg.updatePresence(from, Presence.composing)
    				try {
					ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i.ibb.co/09M1hhg/Whats-App-Image-2021-10-15-at-5-08-51-PM.jpg'
					}
					const lvl = getLevelingLevel(sender)
					
					 profile = `┌────「 *PERFIL* 」
▢ *🔖 Nome:* ${pushname}
▢ *🔗 Link:* wa.me/${sender.split("@")[0]}
▢ *🆙 Nivel* : ${lvl}
└──────────────`
					buffer = await getBuffer(ppimg)
					Fg.sendMessage(from, buffer, image, {quoted: mek, caption: profile})
					break
  
//-- Eliminar mensaje del bot
case 'delete':
case 'del':
case 'd':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					if (!isGroup)return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
try{
if(!isQuotedMsg)return reply('✳️ Marque uma mensagem para que eu a elimine!')
pp = {id:mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true}
Fg.deleteMessage(from,pp)
} catch(e) {
reply('✳️ Marque uma mensagem para que eu a elimine!')
reply(e)
console.log(e)
}
break

      
        
      //𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗔𝗞𝗘𝗥 
case 'stiker': 
case 's': 
case 'stikergif':
case 'sticker': 
case 'stickergif': 
case 'sgif':  
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf()) 
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const dlfile1 = await Fg.downloadMediaMessage(encmedia1)

const bas641 = `data:image/jpeg;base64,${dlfile1.toString('base64')}`

anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `🔮 Pacoca ┃ ᴮᴼᵀ `
dua = typeof anu[1] !== 'undefined' ? anu[1] : `💎 @Pacokakk`

var mantap1 = await convertSticker(bas641, `${dua}`, `${satu}`)
var st = new Buffer.from(mantap1, 'base64');
Fg.sendMessage(from, st, sticker, {quoted: mek})

} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media2 = await Fg.downloadAndSaveMediaMessage(encmedia2, `./sticker/${sender}`)

anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `Pacoca`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `@fg98._`

const Nombre2 = `${satu}`  //animados💎
const author101 = `${dua}`
exif.create(Nombre2, author101, `stickwm_${sender}`)
reply(wait())
await ffmpeg(`${media2}`)
.inputFormat(media2.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`❎ Error : ${err}`)
fs.unlinkSync(media2)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❎ Falhou no momento da conversão ${tipe} para a figurinha`)
})
.on('end', function () {
console.log('✅ Listo')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), mek)
fs.unlinkSync(media2)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
reply(`  *STICKER MAKER*\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✳️ Envia uma imagem com *${prefix + command}* Nome|Autor \n ou marque uma imagem que já foi enviada, *Videos 1-9 segundos*\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n*ALIAS O COMANDO*\n\n${prefix}s\n${prefix}sticker\n${prefix}stickergif\n${prefix}sgif`)
}
break

case 'take':
         case 'takestick':
         case 'robar':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  if (!isQuotedSticker) return reply(`✳️ Responde uma sticker\n\n*USO DEL COMAMDO*\n*${prefix + command}* Nome|Autor\n\n📌Exemplo *${prefix + command}* Memes|Haha`);
const encmediats = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
kls = args.join(" ").split("|");
pack = kls[0] !== "" ? kls[0] : `🔮 Pacoca ┃ ᴮᴼᵀ`;
author2 = typeof kls[1] !== "undefined" ? kls[1] : `💎 @Pacokakk`;

const dlfile = await Fg.downloadMediaMessage(encmediats)

const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');

Fg.sendMessage(from, imageBuffer, sticker, {quoted: mek})
break
        

      case 'toimage': 
case 'toimg':
case 'aimg':
case 'aimagen':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isQuotedSticker) return reply(`STICKER A IMAGEM\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n✳️ Responde a um sticker com o comando\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n*ALIAS O COMAMDO*\n\n${prefix}toimg\n${prefix}aimg`)
					reply(wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Fg.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' ❎ Erro ao converter sticker em imagem ')
						buffer = fs.readFileSync(ran)
						Fg.sendMessage(from, buffer, image, {thumbnail: fakefg, quoted: mek, caption: '✅ Aqui está'})
						fs.unlinkSync(ran)
					})
break

      
      

      case 'emoji':
                   case 'semoji':
                   case 'smoji':
                   case 'jumbo':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(` *_EMOJI A STICKER_*\n──────────────\n✳️ Coloque o emoji\n\n📌 Exemplo : *${prefix + command}* 😜\n\n\nAlias o comando\n${prefix}emoji\n${prefix}semoji\n${prefix}jumbo\n${prefix}smoji`)
reply(wait()) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
            reply('❎ Por favor coloque só um emoji.'); 
            })
break

      
case 'join':
case 'entrabot':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  if (isGroup) return reply(`✳️ Só disponivel no privado do bot`)
  if (args.length < 1) return reply(`✳️ Envie o link do seu Grupo\n\n📌 Exemplo *${prefix + command}* ${soportefg}`); 
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.link);
          hen = args[0];

          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return reply("Certifique-se de que o link está correto");
          var response = await Fg.acceptInvite(codeInvite);
          reply("✅ Entrei corretamente no grupo");
        } catch {
          reply("❎ Link invalido!");
        }
         break;

       case 'runtime':    
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf()) 
					runtim = process.uptime()
					runte = `「 *TEMPO DE EXECUÇÂO* 」\n\n*${kyun(runtim)}*`
					reply(runte)
					break
					
      case 'speed':
case 'ping': 
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
const timestamp = speed();
const latensi = speed() - timestamp
uptime = process.uptime()
reply(`🟢 *Velocidade* : ${latensi.toFixed(4)} _Segundos_`)
break

case 'tovn': 
case 'toav':
case 'toaudio':
if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
                   if (!isQuotedAudio && !isQuotedVideo) return reply(`✳️ Responde a um audio ou vídeo`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Fg.downloadAndSaveMediaMessage(encmedia)
hah = fs.readFileSync(media)
Fg.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true,quoted : mek})
fs.unlinkSync(media)
break

case 'tomp3': 
case 'amp3':
if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
Fg.updatePresence(from, Presence.composing)
if (!isQuotedVideo && !isQuotedAudio) return reply(`MP4 a MP3\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n🎥 Envia um video com o comando *${prefix + command}* ou marque um video que já foi enviado`)
reply(wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Fg.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(errofg(prefix))
buffer = fs.readFileSync(ran)
Fg.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
break
      case 'tovid':
case 'tomp4':
case 'amp4':
case 'mp4': 
case 'tovideo':
if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
	reply(wait())
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await Fg.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            	
            sendMediaURL(from,res.result,'✅ Aquí está')
            })
            }else {
            reply('✳️ Marque um sticker animado')
            }
            fs.unlinkSync(owgi)
 break
						 
case 'togif':
case 'agif':
if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
if (!isQuotedSticker) return reply('✳️ Marque um sticker')
reply(wait())
if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Fg.downloadAndSaveMediaMessage(encmedia)
memek = await webp2gifFile(media)

console.log(memek)
anu = await getBuffer(memek.result)
Fg.sendMessage(from, anu, video, {mimetype: 'video/gif', caption: '✅ Aquí está', quoted: mek})
break
      case 'tourl':
case 'aurl':
if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await Fg.downloadMediaMessage(boij)
            fgurl = await upload(owgi)
            reply(fgurl)
            
            } else {
            reply('✳️Responde a um video ou imagem')
            }
            break	
            
//-----------------------------ATTP -----------------------------

						/*case 'ttp':  
             if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ _Envie el texto_\n\n📌Ejemplo *${prefix + command}* DyLux`)
                    reply(wait())
                    F = q
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp3?apikey=${lolkey}&text=${F}`)
                    Fg.sendMessage(from, anu1, sticker, {quoted: mek})
                    break*/
                    

	case 'attp':
	              if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ _Envie o texto_\n\n📌Exemplo *${prefix + command}* Pacoca`)
					  reply(wait())
					var teks = encodeURIComponent(args.join(' '))
					const attp = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
					Fg.sendMessage(from, attp, sticker, {quoted: mek})
					  break
				
//----ENCODE Y DECODE--
case 'code':
case 'encode':
if (!isVerify) return reply(userB(prefix))
                                         if (isBanned) return reply(banf())
if (!q) return reply(`✳️ *Insira um texto para codificar*`) 
texto = args.join(' ')
var rawStr = `${texto}`
var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
var base64 = CryptoJS.enc.Base64.stringify(wordArray);
reply(`${base64}`)
break

case 'decode':
if (!isVerify) return reply(userB(prefix))
                                         if (isBanned) return reply(banf())
                                         if (!q) return reply(`✳️ *O que você quer que eu decodifique?*`) 
texto = args.join(' ')
var parseWordArray = CryptoJS.enc.Base64.parse(`${texto}`);
var parsedStr = parseWordArray.toString(CryptoJS.enc.Utf8);
reply(`${parsedStr}`)
break




      default:
 
                 if (budy.includes(`valeu bot`)) {
                  replyfg(`De nada 😊 estou aqui para te ajudar`)
                  }
				
}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[FG98]', 'red'), 'Chat PRIVADO', color(sender.split('@')[0]))
	}		
} catch (e) {
     e = String(e) 
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'red'))
        }
	 //console.log(e)
	}
}


        
