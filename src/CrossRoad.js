import Group from 'zrender/src/container/Group';
import {Road} from "./Road";

function CrossRoad(position = [0, 0]){
    Group.call(this);
    let road1 = new Road();
    this.add(road1);
    // let road2 = new Road(45);
    // this.add(road2);
    // let road3 = new Road(90);
    // this.add(road3);
    this.position = position;
}
CrossRoad.prototype = Object.create(Group.prototype);

export {CrossRoad}