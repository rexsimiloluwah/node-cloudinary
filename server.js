const http = require('http');
const app = require('./app');

// Instantiate the server
server = http.createServer(app);

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server is running at PORT :- ${PORT}`);
})



