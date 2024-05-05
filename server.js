const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let filePath = req.url === '/' ? '/index.htm' : req.url; // Default to index.html if root path
  filePath = path.join(__dirname, filePath);

  // Check if the requested file is in the 'html' folder
  const htmlFolderPath = path.join(__dirname, 'html');
  const htmlFilePath = path.join(htmlFolderPath, filePath);
  const fileExistsInHtmlFolder = fs.existsSync(htmlFilePath);

  // Serve the file from the appropriate location
  if (fileExistsInHtmlFolder) {
    fs.readFile(htmlFilePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not Found');
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  } else {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not Found');
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
