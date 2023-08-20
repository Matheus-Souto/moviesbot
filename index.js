import { Telegraf } from 'telegraf'
import axios from 'axios';
import dotenv from 'dotenv-safe'

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply(`Bem-vindo ao Movie Bot!
- Digite /buscar + o nome de um filme para obter informações.
- Caso não ache utilizando o nome em português, pesquise o nome em inglês escrito o mais correto possível.
- Em caso de dúvidas digite /help
`));

bot.help((ctx) => {
    const helpMessage = `
    Bem-vindo ao Movie Bot! Aqui estão algumas instruções:

    - Digite o nome de um filme ou série para obter informações sobre onde ele está disponível para streaming.

    - Caso não ache utilizando o nome em português, pesquise o nome em inglês escrito o mais correto possível.

    - Use /help para ver as instruções novamente.
    `
    ctx.reply(helpMessage);
});

bot.command('buscar', async (ctx) => {
    const movieName = ctx.message.text.split(' ').slice(1).join(' ');
    if (!movieName) {
        ctx.reply('Por favor, forneça um nome de filme ou série após o comando /buscar.');
        return;
    }
     const rapidApiKey = process.env.RAPIDAPI_KEY;

    const apiUrl = `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup`;

    const options = {
        method: 'GET',
        url: apiUrl,
        params: {
            term: movieName,
            country: 'br'
        },
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
        }
    }

    try {
        const response = await axios.request(options);
        const data = response.data;

        if (data.results && data.results.length > 0) {
            const firstResult = data.results[0];
            const title = firstResult.name;
            const streamingLocations = firstResult.locations.map(location => location.display_name).join(', ');

            const message = `Filme encontrado:\nTitulo: ${title}\nLocais de Streaming: ${streamingLocations}`;
            ctx.reply(message);
            console.log(movieName)
        } else {
            ctx.reply('Nenhum filme encontrado com esse nome');
        }
    } catch (error) {
        console.error('Erro ao buscar filme:', error);
        ctx.reply('Ocorreu um erro ao buscar o filme. Tente novamente!');
    }

});

bot.launch();

//bot.hears('hi', (ctx) => ctx.reply('Hey there'));

//bot.help((ctx) => ctx.reply('Send me a sticker'));