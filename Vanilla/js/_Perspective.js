import DOM3D from './_DOM3D.js';

export default class Perspective extends DOM3D {
    constructor (elem, autoSet) {
        super(elem);
        this.vw = null;
        this.vh = null;
        this.intervalId = null;
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
    set3D (val, skybox) {
        if (typeof val !== 'object') return;
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
        this.set3DStyles(skybox);
    }
    progressCamera (val, fps, skybox) {
        if (typeof val !== 'object') {
            console.error('ProgressCamera arg is not object');
            return;
        }
        clearInterval(this.intervalId);
        // Current TRANSFORM values
        // To make it fully compatibile with freeCam it should get values
        // straight from inline style. 
        const crX = this.rotate.x;
        const crY = this.rotate.y;
        const crZ = this.rotate.z;
        const ctX = this.translate.x;
        const ctY = this.translate.y;
        const ctZ = this.translate.z;
        // Differences
        const drX = (val.rX - crX) / (fps * 2);
        const drY = (val.rY - crY) / (fps * 2);
        const drZ = (val.rZ - crZ) / (fps * 2);
        const dtX = (val.tX - ctX) / (fps * 2);
        const dtY = (val.tY - ctY) / (fps * 2);
        const dtZ = (val.tZ - ctZ) / (fps * 2);
        // Magic
        this.intervalId = setInterval(() => {
            const round = {
                rotX : Math.round(this.rotate.x),
                rotY : Math.round(this.rotate.y),
                rotZ : Math.round(this.rotate.z),
                transX : Math.round(this.translate.x),
                transY : Math.round(this.translate.y),
                transZ : Math.round(this.translate.z),
            };
            if (
                round.rotX === val.rX &&
                round.rotY === val.rY &&
                round.rotZ === val.rZ &&
                round.transX === val.tX &&
                round.transY === val.tY &&
                round.transZ === val.tZ
            ) {
                this.rotate = {
                    x : val.rX,
                    y : val.rY,
                    z : val.rZ,
                };
                this.translate = {
                    x : val.tX,
                    y : val.tY,
                    z : val.tZ,
                };
                this.set3DStyles(skybox);
                clearInterval(this.intervalId);
                return;
            }
            const nextRotate = {
                x : this.rotate.x + drX,
                y : this.rotate.y + drY,
                z : this.rotate.z + drZ,
            };
            const nextTranslate = {
                x : this.translate.x + dtX,
                y : this.translate.y + dtY,
                z : this.translate.z + dtZ,
            };
            this.rotate = nextRotate;
            this.translate = nextTranslate;
            this.set3DStyles(skybox);
        }, (1000 / fps));
    };
    set3DStyles (skybox) {
        const transStr = `${this.translate.x}px, ${this.translate.y}px, ${this.translate.z}px`;
        const rotateStr = `rotateX(${this.rotate.x}deg) rotateY(${this.rotate.y}deg) rotateZ(${this.rotate.z}deg)`;
        if (skybox) {
            this.DOM.style.transform = `${rotateStr} translate3d(${transStr}) scale3d(25, 25, 25)`;
            return;
        }
        this.DOM.style.transform = `${rotateStr} translate3d(${transStr})`;
    }
}
