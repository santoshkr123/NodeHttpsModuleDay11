const http = require("http")
const url = require("url")
const server = http.createServer((req,res)=>{
    const location = url.parse(req.url,true)
    res.writeHead(200,{
        'Access-Control-Allow-Origin' :'http://127.0.0.1:5500'
    })
    const string = JSON.stringify({
        username : location.query.username,
        password :location.query.password
        
    })
    res.write(string)
    res.end()
}) 
server.listen(8080)