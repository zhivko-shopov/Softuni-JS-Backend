const http = require("http");
const fs = require("fs/promises");
const port = 3000;

const server = http.createServer(async (req, res) => {
  const url = req.url;
  const homeView = await fs.readFile("./views/home/index.html", "utf8");
  const homeCss = await fs.readFile("./content/styles/site.css", "utf8");

  console.log(url);

  if (url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homeView);
  } else if (url == "/content/styles/site.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(homeCss);
  }
  res.end;
});

server.listen(port);
console.log(`Server is listenting on port ${port}...`);
