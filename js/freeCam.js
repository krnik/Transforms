export default class FreeCam {
    constructor (targetQuery, viewQuery) {
        this.target = document.querySelector(targetQuery);
        this.view = document.querySelector(viewQuery);
        //Rotate values
        this.rotateX = 0;
        this.rotateY = 0;
        this.rotateZ = 0;
        //Current deg of rotate
        this.prevRotX = 0;
        this.prevRotY = 0;
        this.prevRotZ = 0;
        //Translates
        const translation = this.getTranslate3dValues();
        this.translateX = translation[0];
        this.translateY = translation[1];
        this.translateZ = translation[2];
        //Point of mousedown event
        this.mouseStartX = 0;
        this.mouseStartY = 0;
        this.init();
    }

    getTranslate3dValues (axis) {
        const style = this.target.style.transform;
        return style.match(/(-?\d+)px/g).map(e => parseInt(e));
    }

    init () {
        const addMouseTrack = (event) => {
            this.transform(event);
        };
        this.view.addEventListener('mousedown', (event) => {
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
      this.rotateX = (event.offsetX - this.mouseStartX) / 24;
      this.rotateY = (event.offsetY - this.mouseStartY) / 24;
      const translate = `${this.translateX}px, ${this.translateY}px, ${this.translateZ}px`;
      this.target.style.transform = `rotateY(${this.rotateX + this.prevRotX}deg) rotateX(${this.rotateY + this.prevRotY}deg) translate3d(${translate})`;
    }
}
