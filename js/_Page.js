import DOM3D from './_DOM3D.js';

export default class Page extends DOM3D {
    constructor (elem) {
        super();
        this.DOM = elem;
        this.false = true;
        this.rotation = null;
        this.translation = null;
    }
    // Get values of pages if setPositionForPages method wasn't called
    // getValues (elem, prop) {
    //     const base = '\\((\\d+)\\w*\\)';
    //     const x = new RegExp(`${prop}X${base}`);
    //     const y = new RegExp(`${prop}Y${base}`);
    //     const z = new RegExp(`${prop}Z${base}`);
    //     const t = elem.style.transform;
    //     return {
    //         X : x.exec(t) ? parseInt(x.exec(t)[1]) : 0,
    //         Y : y.exec(t) ? parseInt(y.exec(t)[1]) : 0,
    //         Z : z.exec(t) ? parseInt(z.exec(t)[1]) : 0,
    //     };
    // }
    // Set values for rotation and translate from object.
    setValues (valObj) {
        this.rotation = {
            X : valObj.rX || 0,
            Y : valObj.rY || 0,
            Z : valObj.rZ || 0,
        };
        this.translation = {
            X : valObj.tX || 0,
            Y : valObj.tY || 0,
            Z : valObj.tZ || 0,
        };
        this.update();
    }
    // Update transform for DOM element
    update () {
        const translate = `${this.translation.X}px, ${this.translation.Y}px, ${this.translation.Z}px`;
        const transform = `translate3d(${translate}) rotateX(${this.rotation.X}deg) rotateY(${this.rotation.Y}deg) rotateZ(${this.rotation.Z}deg)`;
        this.DOM.style.transform = transform;
    }
}