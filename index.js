const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'yassercraftsmp.aternos.me', 
        port: 49062,
        username: 'Yasser_Hero', 
        version: '1.20.1' // غير النسخة حسب سيرفرك
    })

    bot.on('spawn', () => {
        console.log('البوت دخل السيرفر وهو الآن يقفز!')
        setInterval(() => {
            bot.setControlState('jump', true)
            setTimeout(() => bot.setControlState('jump', false), 500)
        }, 20000) // يقفز كل 20 ثانية
    })

    bot.on('end', () => {
        console.log('فصل البوت.. جاري إعادة الاتصال');
        setTimeout(createBot, 5000);
    });
}
createBot()
              
