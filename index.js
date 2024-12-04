const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New req Received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case '/': res.end("Home Page");
            break
            case '/about': res.end("I am Neha Bharti");
            break
            default: res.end("404 Not found");
        }
        // res.end("Hello from server");
    });

    // console.log("New request received");
    // console.log(req.headers);
    // res.end("Hello from server");
});

myServer.listen(8080, () => console.log("server started successfully!"));

