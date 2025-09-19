var http = require('http');
var col = require('colors');

http.createServer((res, resp)=>{
    resp.write("<h1>this is long data 4600</h1>");
    resp.write("<p>hello harsh bhadru</p>");
    resp.end();
}).listen(4600);
console.log(col.green("http://localhost:4600/"));