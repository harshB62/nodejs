const http = require('http');
const { json } = require('stream/consumers');

const usersdata = [
    {
        name : 'harsh',
        age : 20,
        email : 'hb@gmail.com'
    },
     {
        name : 'vikas',
        age : 20,
        email : 'vr@gmail.com'
    },
     {
        name : 'sandy',
        age : 20,
        email : 'sk@gmail.com'
    }
]

http.createServer((req, resp)=>{
    console.log(req.url);
    if(req.url == "/"){
        resp.setHeader("Content-Type", 'application/json');     // 'text/html' for HTML page
        resp.write(JSON.stringify(usersdata));
    }else if(req.url == '/login'){
        resp.setHeader("Content-Type", 'html');
        resp.write('<h1> Welcome to Login page</h1>');
    }else {
        resp.setHeader("Content-Type", 'html');
        resp.write('<h1> 404 Page Not Found</h1>');
    }
    resp.end();

}).listen(5000);