/** 

Yg Mau Sv Nomerku?

wa.me/6285875158363

Minimal Kasih Cr kalo mau reupload😡
Create By Dika Ardnt.
Recode By Naze & ( Nama Lu )

Kalau Sampai Ketemu Lagi Creator Bot
Yg Reupload Tanpa Kasih Cr 
Sc Akan Saya Encode

Base : Hisoka
Recode : Naze & ( Nama Lu )

**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6289531843671']
global.ownernomer = "6289531843671"
global.premium = ['6289531843671']
global.packname = 'DRA-bot'
global.author = 'By '
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '✅Done',
    admin: 'Anda bukan admin!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Hanya untuk user premium',
    owner: 'Anda bukan owner',
    group: 'Hanya bisa di grup!',
    private: 'Hanya untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 20
}
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/EricGanzz'
global.myyt = 'https://youtube.com/channel/UCuo4SSYAIVE73sQvgsQd5gQ'
global.myytv = 'https://youtu.be/ey7qLuRBm5Y'
global.mygc = "https://chat.whatsapp.com/E4mPMyGkTmpCdlJiVDoLp8"
global.botname = 'DRA-bot'
global.akulaku = 'Bot By '
global.ytname = 'YT -'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
