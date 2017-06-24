import DOM3D from './_DOM3D.js';
import Page from './_Page.js';
import Perspective from './_Perspective.js';

export default class Scene extends DOM3D {
    constructor (pagesQuery, viewQuery) {
        super();
        // Array of pages DOM elements
        this.pages = this.getEls(pagesQuery).map(e => new Page(e));
        // Pages Container
        this.container = new Perspective(this.getEl(pagesQuery).parentElement);
        // Topmost wrapper of HTML content in body
        this.topMost = new Perspective(this.getEl(viewQuery));
        // PerspectiveDiv
        this.perspDiv = new Perspective('DIV');
        // Scene element
        this.scene = new Perspective('DIV', true);
        // Arrays with values of desirable transforms for pages and container
        this.targets = [];
        // Append to DOM, remove later when will be possible to adjust starting css of elements
        this.init();
    }
    // Initialize all functions of object
    init () {
        // Initial DOM manipulating
        this.scene.set('id', 'scene');
        this.perspDiv.append(this.container);
        this.topMost.append(this.perspDiv);
        this.scene.append(this.topMost);
        this.getEl('body').insertBefore(this.scene.DOM, this.getEl('.loader'));

        this.scene.setAutoUpdating('perspective', 'vh');
        this.perspDiv.setAutoUpdating('perspective', 'vh');
        this.topMost.setAutoUpdating('transform', 'vwvh', 0.5);
    }
    // Set Starging positions for pages
    setPositionForPages (arr) {
        if (arr.length !== this.pages.length) return;
        for (let [i, el] of arr.entries()) {
            this.pages[i].setValues(el);
        }
        this.setContainerPosition(0);
        this.initControls(arr);
    }
    setContainerPosition (pageNo) {
        const pageRef = this.pages[pageNo];
        const values = {
            rX : pageRef.rotate.x * -1,
            rY : pageRef.rotate.y * -1,
            rZ : pageRef.rotate.z * -1,
            tX : pageRef.translate.x * -1,
            tY : pageRef.translate.y * -1,
            tZ : pageRef.translate.z * -1,
        };
        console.log(values);
        this.container.set3D(values);
    }
    initControls (arr) {
        this.targets = arr.slice();
        console.log(this.targets);
    }
}
