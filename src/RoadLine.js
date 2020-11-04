import Group from "zrender/src/container/Group";
import Line from "zrender/src/graphic/shape/Line";
import {Point} from "./Point";
import {checkIntersection} from "line-intersect";

function RoadLine(ops){
    Group.call(this);
    this.type = "roadline";
    this.start = {
        x: ops.x1,
        y: ops.y1
    };
    this.end = {
        x: ops.x2,
        y: ops.y2
    };
    this.crossPoints = [];
    let line = new Line({
        shape: {
            x1: this.start.x,
            y1: this.start.y,
            x2: this.end.x,
            y2: this.end.y
        }
    });
    this.add(line);

    this.startPoint = new Point(this.start)
    this.add(this.startPoint);
    this.endPoint = new Point(this.end)
    this.add(this.endPoint);
    this.startPoint.ondrag = function (evt) {
        line.attr({
            shape:{
                x1: evt.offsetX,
                y1: evt.offsetY
            }
        });
    };
    this.endPoint.ondrag = function (evt) {
        line.attr({
            shape:{
                x2: evt.offsetX,
                y2: evt.offsetY
            }
        });
    };
    this.cross = () => {
        this.parent.cross();
    }
    this.crossLine = (target) => {
        let res = checkIntersection(this.start.x,this.start.y, this.end.x, this.end.y, target.start.x, target.start.y, target.end.x, target.end.y);
        return res.point || null;
    }
    this.toData = function(){
        return {
            start: this.start,
            end: this.end
        }
    }
}

RoadLine.prototype = Object.create(Group.prototype);

export {RoadLine}