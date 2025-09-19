const http = require('http');
const col = require('colors');
const arg = process.argv;
const port = arg[2];

http.createServer((req, resp)=>{

    resp.setHeader("Content-Type",'text/html');
    resp.write("<h3>Dynamic port is running on : "+port+"</h3>");
    resp.end();

}).listen(port);


console.log(col.green("Website at : http://localhost:"+port));


// "start": "nodemon cmd-inp.js 5001"