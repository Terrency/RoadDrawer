import Group from "zrender/src/container/Group";
import {RoadLine} from "./RoadLine";

function Road(angle = 0){
    Group.call(this);
    let leftLine = new RoadLine({
        x1: 160,
        y1: 10,
        x2: 700,
        y2: 640
    });
    this.add(leftLine);
    let rightLine = new RoadLine({
        x1: 10,
        y1: 160,
        x2: 640,
        y2: 700
    });
    rightLine.draggable = true;
    this.add(rightLine);
    this.rotation = angle / 180 * Math.PI;
    this.origin = [400, 400];
}
Road.prototype = Object.create(Group.prototype);

export {Road}