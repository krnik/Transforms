import DOM3D from './_DOM3D.js';

export default class Page extends DOM3D {
    constructor (elem) {
        super(elem);
        this.false = true;
        this.rotate = null;
        this.translate = null;
    }
    // Set values for rotation and translate from object.
    setValues (valObj) {
        this.rotate = {
            x : valObj.rX || 0,
            y : valObj.rY || 0,
            z : valObj.rZ || 0,
        };
        this.translate = {
            x : valObj.tX || 0,
            y : valObj.tY || 0,
            z : valObj.tZ || 0,
        };
        this.update();
    }
    // Update transform for DOM element
    update () {
        const translate = `${this.translate.x}px, ${this.translate.y}px, ${this.translate.z}px`;
        const transform = `translate3d(${translate}) rotateX(${this.rotate.x}deg) rotateY(${this.rotate.y}deg) rotateZ(${this.rotate.z}deg)`;
        this.DOM.style.transform = transform;
    }
}