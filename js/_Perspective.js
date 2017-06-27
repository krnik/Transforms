import DOM3D from './_DOM3D.js';

export default class Perspective extends DOM3D {
    constructor (elem, autoSet) {
        super(elem);
        this.vw = null;
        this.vh = null;
        this.autoUpdatingStyles = {};
        this.rotate = {
            x : 0,
            y : 0,
            z : 0,
        };
        this.translate = {
            x : 0,
            y : 0,
            z : 0,
        };
        this.init(autoSet);
    }
    init (autoSet) {
        if (autoSet) {
            this.setAutoUpdating('width', 'vw');
            this.setAutoUpdating('height', 'vh');
        }
        this.updateDimensions();
    }
    updateDimensions (dim) {
        if (typeof dim === 'object') {
            this.vw = dim.vw;
            this.vh = dim.vh;
        } else {
            this.vw = window.innerWidth;
            this.vh = window.innerHeight;
        }
        this.setElemSize();
    }
    setElemSize () {
        for (const i in this.autoUpdatingStyles) {
            const multi = this.autoUpdatingStyles[i][1];
            if (i === 'transform') {
                this.DOM.style[i] = `translate3d(${this.vw * multi}px, ${this.vh * multi}px, 0px)`;
                return;
            }
            if (i === 'perspectiveOrigin') {
                this.DOM.style[i] = `${this.vw * multi}px ${this.vh * multi}px`;
                return;
            }
            const ax = this.autoUpdatingStyles[i][0];
            const val = this[ax] * multi;
            this.DOM.style[i] = `${val}px`;
        }
    }
    setAutoUpdating (prop, axis, multiplier) {
        if (this.autoUpdatingStyles[prop]) console.info('Nadpiszesz wartość');
        this.autoUpdatingStyles[prop] = [axis, multiplier ? multiplier : 1];
        this.setElemSize();
    }
    set3D (val) {
        if (typeof val !== 'object') return;
        console.log(val);
        this.rotate = {
            x : val.rX || 0,
            y : val.rY || 0,
            z : val.rZ || 0,
        };
        this.translate = {
            x : val.tX || 0,
            y : val.tY || 0,
            z : val.tZ || 0,
        };
        this.set3DStyles();
    }
    progressCamera (val) {
        if (typeof val !== 'object') {console.error('ProgressCamera arg is not object'); return;}
        // Magic
    };
    set3DStyles () {
        const transStr = `${this.translate.x}px, ${this.translate.y}px, ${this.translate.z}px`;
        const rotateStr = `rotateX(${this.rotate.x}deg) rotateY(${this.rotate.y}deg) rotateZ(${this.rotate.z}deg)`;
        this.DOM.style.transform = `${rotateStr} translate3d(${transStr})`;
    }
}
