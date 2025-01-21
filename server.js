const http = require('http');

const server = http.createServer((req, res) => {
     res.write('Hello, Welcome to the home page!');
     res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});