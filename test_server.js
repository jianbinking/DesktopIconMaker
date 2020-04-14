var http = require("http");
var fs = require("fs");
var url = require("url");


var imgPath = "";

http
  .createServer(function(request, response) {
    if (request.url != "/favicon.ico") {
      var urlObj = url.parse(request.url, true, false);
      console.log(urlObj.pathname);
      if (request.url.indexOf(".png") != -1) {
        console.log("./icons" + urlObj.pathname + ".png");
        fs.readFile(imgPath, function(err, data) {
          if (err) {
            response.writeHead(404);
            response.end(JSON.stringify(err));
            return;
          }
          //将文件的内容写入response响应对象
          response.end(data);
        });
      } else {
        imgPath = "./icons" + urlObj.path + ".png";
        response.write(
          `<!DOCTYPE html>
        <html>
          <head>
            <meta charSet="utf-8" />
            <title>&zwj;‍‍‍‍‍</title>
            <meta property="og:image" content="/00.png"/>
            <link rel="apple-touch-icon-precomposed" href="">
          </head>
          <body>
          </body>
        </html>`
        );
        response.end();
      }
    }
  })
  .listen(12365);

console.log("server start");
