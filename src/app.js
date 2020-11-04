import * as zrender from 'zrender/src/zrender';
import Text from "zrender/src/graphic/Text";
import {RoadLine} from "./RoadLine";
import {Scene} from "./Scene";

const zr = zrender.init(document.querySelector("#canvas"));

const scene = new Scene();
let line = new RoadLine({
   x1: 160,
   y1: 10,
   x2: 700,
   y2: 640
});
scene.add(line);
let line1 = new RoadLine({
   x1: 100,
   y1: 70,
   x2: 600,
   y2: 700
});
scene.add(line1);
let text = new Text({
   style: {
      text: "导出当前配置"
   }
});
text.on("click", ()=>{
   let children = scene.children();
   let lines = children.filter(item => {
      return item.type === "roadline";
   })
   let datas = [];
   lines.forEach(item => {
      datas.push(item.toData());
   })
   console.debug(datas)
})
text.position = [700, 10]
scene.add(text);
zr.add(scene);
document.oncontextmenu = function(){
   return false;
}
zr.on("contextmenu", function(evt) {
   let line = new RoadLine({
      x1: evt.offsetX,
      y1: evt.offsetY,
      x2: evt.offsetX + 100,
      y2: evt.offsetY + 100
   });
   scene.add(line);
});


