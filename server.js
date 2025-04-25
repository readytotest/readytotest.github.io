//This script is ran from the GH Actions workflow for testing against
//pull requests and commits using Playwright
//We need this to start a local server in the GitHub Runner

const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let filePath = req.url === "/" ? "/index.htm" : req.url;
  filePath = path.join(__dirname, filePath);

  // Check if the requested file is an MP4 file
  // Need this part to play mp4 files inside the browser
  // otherwise when you click links to them they go to
  // downloads folder instead.
  if (path.extname(filePath) === ".mp4") {
    // Set Content-Type header to video/mp4 for MP4 files
    res.setHeader("Content-Type", "video/mp4");
  }

  // Check if the requested file is an SVG file
  // Need this or the SVG animated stars on the header of the pages are broken images (locally)
  // They will show up without this though in Github Pages
  if (path.extname(filePath) === ".svg") {
    res.setHeader("Content-Type", "image/svg+xml"); // Set Content-Type for SVG files
  }

  // Check if the requested file is in the 'html' folder
  const htmlFolderPath = path.join(__dirname, "html");
  const htmlFilePath = path.join(htmlFolderPath, filePath);
  const fileExistsInHtmlFolder = fs.existsSync(htmlFilePath);

  // Serve the file from the appropriate location
  if (fileExistsInHtmlFolder) {
    fs.readFile(htmlFilePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Not Found");
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  } else {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Not Found");
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
