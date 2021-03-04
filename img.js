var fs = require("fs");
var gm = require("gm");


let cfg = {
  iphone7: {
    screen_width: 374,
    screen_height: 888,
    icon_width: 128,
    icon_height: 128,
    edge_h: 156,
    edge_v: 64,
    space_h: 62,
    space_v: 96
  },
  iphone11: {
    screen_width: 828,
    screen_height: 1792,
    icon_width: 128,
    icon_height: 128,
    edge_h: 64,
    edge_v: 160,
    space_h: 62,
    space_v: 82
  },
}

var imgPath = './source.jpg'
var savedFolder = './icons'

var rowCount = 6;
var columnCount = 4;
let profile = cfg.iphone11

let imgSource = gm(imgPath)
imgSource.size((err, value) => {
  let scale = Math.max(value.width / profile.screen_width, value.height / profile.screen_height)

  let icon_width = profile.icon_width * scale
  let icon_height = profile.icon_height * scale
  let edge_h = profile.edge_h * scale
  let edge_v = profile.edge_v * scale
  let space_h = profile.space_h * scale
  let space_v = profile.space_v * scale

  for (i = 0; i < rowCount; i++) {
    for (j = 0; j < columnCount; j++) {
      let xoff = edge_h + j * (icon_width + space_h);
      let yoff = edge_v + i * (icon_height + space_v);
      let box = (xoff, yoff, xoff + icon_width, yoff + icon_height);
      
      var savePath = savedFolder + "/" + (i + 1) + (j + 1) + ".png";
      console.log("准备保存:", savePath)
      gm(imgPath).crop(icon_width, icon_height, xoff, yoff).write(savePath, (err, buffer) => {
        if (err) {
          console.log("保存失败", err)
        } else {
          console.log("保存成功")
        }
      })
    }
  }

})


