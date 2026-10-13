const http = require("node:http");


const app = http.createServer((req, res) => {
    if(req.url == '/'){
        res.write("Hello from the server");
        res.end();
    }
    else if(req.url == '/endpoint'){
        res.write("This is the endpoint");
        res.end();
    }
    else if(req.url="/new-test"){
        res.write("This is new endpoint");
        res.end();
    }
    
})


app.listen(3000, (err) => {
    if(err){
        console.log('An error occured', err);
    }
    else {
        console.log("Server started successfully");
    }
})

