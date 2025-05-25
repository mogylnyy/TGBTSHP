require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    'Добро пожаловать! Откройте WebApp по кнопке ниже.',
    Markup.keyboard([
      [Markup.button.webApp('Открыть WebApp', 'https://iimperiumshop.vercel.app')]
    ]).resize()
  );
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM')); 