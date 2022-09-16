const http = require('http');
const port = 3000;
const fs = require('fs');
const si = require('systeminformation');
const { runInNewContext } = require('vm');
import axios from 'axios';


/*
si.cpu()
    .then(data => console.log(data))
    .catch(error => console.log(error))
*/
        
const server = http.createServer((request, response) => 
{
    //console.log(request);
    //console.log(response);


    //change a header to let know a html doc is needed
    response.writeHead(200,{'Content-Type' : 'text/html'});

    fs.readFile("index.html", (error,data) => {
        if (error) {
            response.writeHead(404);
            response.write("File Not FOund");
        } else {
            response.write(data);
        }


    //ends the response    
    response.end();
    })
});

server.listen(3000,(error) => {
    if(error) {
        console.log("L");
    }else {
        console.log("Server is listeing")
    }
})
