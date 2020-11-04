import Group from "zrender/src/container/Group";
import {Point} from "./Point";

function Scene(){
    Group.call(this);
    this.cross = () => {
        let children = this.children();
        let crossPoints = children.filter(item => {
            return item.type === "crosspoint";
        })
        crossPoints.forEach(cp => {
            this.remove(cp);
        })
        let lines = children.filter(item => {
            return item.type === "roadline";
        })
        for(let i=0; i< lines.length; i++){
            let line1 = lines[i];
            for(let j=1; j< lines.length; j++){
                let line2 = lines[j];
                let point = line1.crossLine(line2);
                if(!point) continue;
                let crpoint = new Point(point);
                crpoint.draggable = false;
                crpoint.type = "crosspoint";
                this.add(crpoint);
            }
        }
    }
}

Scene.prototype = Object.create(Group.prototype);

export {Scene}