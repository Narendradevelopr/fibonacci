const http = require("http");
const url=require("url");
const port=3200;

const server=http.createServer((req,res)=>{
const parsedUrl=url.parse(req.url,true)



let x=parsedUrl.query.name;

if(parsedUrl.pathname=="/home"){
    res.writeHead(200,{"content-type":"application/json"});
    res.write(`welcome to home ${x}`)   
    res.end();

}
else if(parsedUrl.pathname=="/aboutUs"){
    res.writeHead(200,{"content-type":"application/json"});
    res.write(`welcome to aboutus ${x}`)
    res.end();
    
}
else{
    res.writeHead(401,{"content-type":"application/json"});
    res.write("page not found")
    res.end();
}





})


server.listen(port,()=>{console.log("server is running")})