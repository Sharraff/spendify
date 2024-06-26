const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url;

    //Home page
    if(url === '/') {
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>home page</h1>')
        res.end('pussies') 
    }
    //About page
    else if (url === '/about') {
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>about page</h1>')
        res.end('pussies')
    }
    //404
    else {
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>404: page not found!!!</h1>')
        res.end('pussies')
    }
})

server.listen(5000)