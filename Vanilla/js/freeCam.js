export default class FreeCam {
    constructor (targetQuery, viewQuery) {
        this.target = document.querySelector(targetQuery);
        this.view = document.querySelector(viewQuery);
        //Rotate values
        this.rotateX = 0;
        this.rotateY = 0;
        this.rotateZ = 0;
        // Current deg of rotate
        this.prevRotX = 0;
        this.prevRotY = 0;
        this.prevRotZ = 0;
        //Translates
        this.translateX = 0;
        this.translateY = 0;
        this.translateZ = 0;
        //Point of mousedown event
        this.mouseStartX = 0;
        this.mouseStartY = 0;
        this.init();
    }

    getTranslate3dValues () {
        const style = this.target.style.transform;
        if (!style) return [0, 0, 0];
        return style.match(/(-?\d+)px/g).map(e => parseInt(e));
    }

    getRotateValues (axis) {
        const regExpStr = axis + '\\((-?\\d+.?\\d*)deg';
        const val = this.target.style.transform.match(new RegExp(regExpStr));
        return parseInt(val[1]);
    }

    updatePosition () {
        this.prevRotX = this.getRotateValues('X');
        this.prevRotY = this.getRotateValues('Y');
        this.prevRotZ = this.getRotateValues('Z');
        const translate = this.getTranslate3dValues();
        this.translateX = translate[0];
        this.translateY = translate[1];
        this.translateZ = translate[2];
    }

    init () {
        this.updatePosition();
        const addMouseTrack = (event) => {
            this.transform(event);
        };
        this.view.addEventListener('mousedown', (event) => {
            this.updatePosition();
            this.mouseStartX = event.offsetX;
            this.mouseStartY = event.offsetY;
            this.view.addEventListener('mousemove', addMouseTrack);
        });
        this.view.addEventListener('mouseup', () => {
            this.prevRotX = this.prevRotX + this.rotateX;
            this.prevRotY = this.prevRotY + this.rotateY;
            this.view.removeEventListener('mousemove', addMouseTrack);
        });
    }

    transform (event) {
      this.rotateY = (event.offsetX - this.mouseStartX) / 24;
      this.rotateX = (event.offsetY - this.mouseStartY) / 24;
      const translate = `${this.translateX}px, ${this.translateY}px, ${this.translateZ}px`;
      this.target.style.transform = `rotateX(${this.rotateX + this.prevRotX}deg) rotateY(${this.rotateY + this.prevRotY}deg) rotateZ(0deg) translate3d(${translate})`;
    }
}
