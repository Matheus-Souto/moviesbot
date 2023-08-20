<h1 align="center" id="title">MoviesBot</h1>

<p id="description">Um bot que te ajuda a encontrar em qual provedor de Streaming um filme ou série se encontra para que você possa assistir.</p>

  
  
<h2>🧐 Funções:</h2>

Aqui estão algumas funções do projeto:

*   /start - Inicializa o bot no telegram
*   /help - Mostra ao usuário instruções de como utilizar o bot
*   /buscar + nome do filme - Busca o filme/série encontrando seu provedor streaming
<br>
<h2>🛠️ Instruções de Instalação:</h2>

<p>1. Clone esse repositório;</p>

<p>2. Crie um bot para Telegram utilizando o BotFather;</p>

<p>3. Instale as dependências necessárias:</p>

```
npm i
```
<br>
<p>4. Renomei o arquivo .env.example para .env substituindo o valor das variáveis abaixo:</p>

```
RAPIDAPI_KEY= BOT_TOKEN=
```
<br>
<p>5. Para rodar o bot utilize o codigo abaixo:</p>

```
node index.js
```
<br>
<p>6. Em seu bot no telegram digite /start para inicializar o bot e /help para ver as instruções de uso.</p>

  
  
<h2>💻 Feito com:</h2>

Tecnologias utilizadas nesse projeto:

*   Javascript
*   <a src="https://nodejs.org/">NodeJS</a>
*   <a src="https://www.npmjs.com/package/axios">Axios</a>
*   <a src="https://www.npmjs.com/package/dotenv-safe">dotenv-safe</a>
*   <a src="https://www.npmjs.com/package/telegraf">telegraf</a>
*   <a src="https://rapidapi.com/utelly/api/utelly">Utelly API</a>
<br>
<h2>🛡️ Licença:</h2>

This project is licensed under the <a src="https://choosealicense.com/licenses/mit/">MIT</a>