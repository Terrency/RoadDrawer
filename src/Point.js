import Circle from "zrender/src/graphic/shape/Circle";

function Point(model){
    Circle.call(this);
    this.shape.r = 5;
    this.shape.cx = model.x;
    this.shape.cy = model.y;
    this.draggable = true;
    this.ondragend = (evt) => {
        model.x = evt.offsetX;
        model.y = evt.offsetY;
        this.parent.cross();
    };
}
Point.prototype = Object.create(Circle.prototype);

export {Point}