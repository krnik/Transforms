import DOM3D from './_DOM3D.js';
import Page from './_Page.js';

export default class Scene extends DOM3D {
    constructor (pagesQuery, viewQuery) {
        super();
        this.DOM = {
            // Array of pages DOM elements
            pages : this.getEls(pagesQuery).map(e => new Page(e)),
            // Pages Container
            pagesParent : new Page(this.getEl(pagesQuery).parentElement),
            // Topmost wrapper of HTML content in body
            topMost : new Page(this.getEl(viewQuery)),
        };
        // Scene element
        this.scene = this.createScene();
        // Append to DOM, remove later when will be possible to adjust starting css of elements
        this.init();
    }
    // Create #scene element to wrap page content
    createScene () {
        const scene = document.createElement('DIV');
        scene.id = 'scene';
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        scene.style.overflow = 'hidden';
        scene.style.width = `${vw}px`;
        scene.style.height = `${vh}px`;
        return scene;
    };
    // Set Starging positions for pages
    setPositionForPages (arr) {
        if (arr.length !== this.DOM.pages.length) {
            console.error('Długość tablicy startowych pozycji musi być taka jak długość tablicy stron!');
            return;
        }
        for (let [i, el] of arr.entries()) {
            this.DOM.pages[i].setValues(el);
        }
        this.setContainerPosition(0);
    }
    setContainerPosition (pageNo) {
        const pageRef = this.DOM.pages[pageNo];
        const values = {
            rX : pageRef.rotation.X,
            rY : pageRef.rotation.Y,
            rZ : pageRef.rotation.Z,
            tX : pageRef.translation.X * -1,
            tY : pageRef.translation.Y * -1,
            tZ : pageRef.translation.Z * -1,
        };
        this.DOM.pagesParent.setValues(values);
    }
    // Initialize all functions of object
    init () {
        this.scene.appendChild(this.DOM.topMost.DOM);
        this.getEl('body').insertBefore(this.scene, this.getEl('body').firstElementChild);
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const top = this.DOM.topMost.DOM;
        top.style.perspective = `${vh}px`; 
        top.style.perspectiveOrigin = `${vw / 2}px ${vh / 2}px`;
        top.style.transformOrigin = `${vw / 2}px ${vh / 2}px 0px`;
        
    }
}
