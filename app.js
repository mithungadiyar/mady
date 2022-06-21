const http = require('http')

const server = http.createServer((req,res) => {
  if(req.url === '/'){
   res.end('welcome welcome')
  }
  if(req.url === '/about'){
   res.end('Here is our history')
  }
  res.end(`<h1>Oops!</h1>
  <p>we are not able locate the page u are looking for...</p>
  <a href="/"> back home</a>
  `)
})

server.listen(5000)
