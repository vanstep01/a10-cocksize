import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import { getCockSizeMessage } from './cocksize/get-cocksize-message';
import { getRandomPerDateDickSize } from './get-random-per-date-dick-size';

dotenv.config();

const token = process.env.BOT_TOKEN;
if (token === undefined) {
    throw new Error('BOT_TOKEN must be provided!');
}

const bot = new Telegraf(token);

const MIN_SIZE = 0;
const MAX_SIZE = 51;

const CACHE_TIME = 60 * 60 * 12;

bot.on('inline_query', async (ctx) => {
    try {
        const userId = ctx.inlineQuery.from.id.toString();

        const result = {
            type: 'article',
            id: userId,
            title: 'Share my cock size to this chat',
            description: 'Let everyone know',
            message_text: getCockSizeMessage(userId),
            parse_mode: 'MarkdownV2',
        };

        return ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, [result], {
            is_personal: true,
            cache_time: CACHE_TIME,
        });
    } catch (e) {
        console.error(e);
    }
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
