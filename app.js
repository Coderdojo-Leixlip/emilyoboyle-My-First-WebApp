const http = require("http");
const hostname = "127.0.0.1";
const port = 8080;

const htmlHomepage = `
<html> 
  <body>
    <p>Hello Homepage</p>
<a href="/admin/">Click here to go to Admin</a>
  </body>
</html>
    `;

const htmlAdmin = `
<html>
<body>
<p> Hello Admin!</p>
<a href="/">Click here to go back to Home</a>
    </body>
</html>
`;

const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    
    if (req.url === `/`) {
        res.end(htmlHomepage);
    } else if (req.url === `/admin/`) {
        res.end(htmlAdmin);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});