var fs = require("fs");
var gm = require("gm");

var imgPath = './img.jpg'
var savedFolder = './icons'

var rowCount = 6;
var columnCount = 4;

var iconw = 128;
var iconh = 128;
var edgetop = 156;
var edgeleft = 64;
var spaceH = 62;
var spaceV = 96;

for (i = 0; i < rowCount; i++) {
  for (j = 0; j < columnCount; j++) {
    xoff = edgeleft + j * (iconw + spaceH);
    yoff = edgetop + i * (iconh + spaceV);
    box = (xoff, yoff, xoff + iconw, yoff + iconh);
    
    var savePath = savedFolder + "/" + (i + 1) + (j + 1) + ".png";
    console.log("准备保存:", savePath)
    gm(imgPath).crop(iconw, iconh, xoff, yoff).write(savePath, (err, buffer) => {
      if (err) {
        console.log("保存失败", err)
      } else {
        console.log("保存成功")
      }
    })
  }
}
