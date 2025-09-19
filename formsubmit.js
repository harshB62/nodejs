const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

http.createServer((req, resp)=>{

    fs.readFile('./form.html', 'utf-8', (error,data)=>{
        if(error){
            resp.writeHead(500,{"Content-Type":'text/plain'});
            resp.end('Internal Server Error');
        }

        if(req.url == "/"){
            resp.setHeader("Content-Type",'text/html');
            resp.write(data);
            resp.end();    
        }else if(req.url == '/submit'){
            let databody = [];
            var fname = '';
            var lname = '';

            req.on('data',(chunk)=>{
                databody.push(chunk);
            });

            req.on('end',()=>{
                let rawdata = Buffer.concat(databody).toString();
                let readabledata = queryString.parse(rawdata);
                let datastring = "My Name is "+readabledata.fname+" "+readabledata.lname;
                // fs.writeFileSync("log/"+readabledata.fname+".txt",datastring);

                fs.writeFile("log/"+readabledata.fname+".txt",datastring, 'utf-8', (err)=>{
                    if(err){
                        resp.end('Internal Server Error');
                        return false;
                    }else{

                    }
                });

                console.log("File Created");
            })

            resp.write('<h1>Thank You</h1>');
            resp.end();    
        }
    })

    
    
}).listen(5000);



