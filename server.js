const http = require('http');
const fs = require('fs');
const path = require('path');
const pug = require('pug');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const pugFilePath = path.join(__dirname, 'views', 'index.pug');
        const compiledFunction = pug.compileFile(pugFilePath);
        const html = compiledFunction({ title: 'Minha Página', message: 'Bem-vindo ao meu site!' });

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada');
    }
});

server.listen(3000, () => {
    console.log('Servidor de Pé em "http://localhost:3000');
});