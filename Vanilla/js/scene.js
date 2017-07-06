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
        // Scene element
        this.scene = new Perspective('DIV', true);
        // Skybox
        this.skybox = new Perspective(this.getEl('#skybox'));
        // Arrays with values of desirable transforms for pages and container
        this.targets = [];
        // State of progress. Varies from 0 to this.targets.length - 1
        this.progress = null;
        // Control bar dom element
        this.nav = new Page('DIV');
        // Id for timeout function
        this.timeoutId = null;
        // Append to DOM, remove later when will be possible to adjust starting css of elements
        this.init();
    }

    // Initialize all functions of object
    init () {
        // Initial DOM manipulating
        this.scene.set('id', 'scene');
        this.topMost.append(this.container);
        this.scene.append(this.topMost);
        this.getEl('body').insertBefore(this.scene.DOM, this.getEl('.loader'));
        // Set basic viewport relative style properties
        this.scene.setAutoUpdating('perspective', 'vh');
        this.scene.setAutoUpdating('perspectiveOrigin', 'vwvh', 0.5);
        this.topMost.setAutoUpdating('transform', 'vwvh', 0.5);
        // Navbar
        this.nav.set('className', 'nav');
        const nav_wrapper = document.createElement('DIV');
        const prev = document.createElement('BUTTON');
        const next = document.createElement('BUTTON');
        nav_wrapper.className = 'nav__wrapper';
        prev.className = 'nav__prev';
        next.className = 'nav__next';
        prev.append('Previous');
        next.append('Next');
        prev.dataset.dir = -1;
        next.dataset.dir = 1;
        nav_wrapper.appendChild(prev);
        nav_wrapper.appendChild(next);
        this.nav.append(nav_wrapper);
        this.getEl('body').appendChild(this.nav.DOM);

        // Add Resize Event Listener
        window.addEventListener('resize', () => {
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => {
                const vw = window.innerWidth;
                const vh = window.innerHeight;
                this.container.updateDimensions(vw, vh);
                this.topMost.updateDimensions(vw, vh);
                this.scene.updateDimensions(vw, vh);
            }, 250);
        });
        // Add Prev / Next Event Listener
        this.getEl('.nav').addEventListener('click', (ev) => {
            if (ev.target.tagName !== 'BUTTON') return;
            const dir = parseInt(ev.target.dataset.dir);
            const progress = this.progress;
            this.setProgress(progress + dir);
            this.handleNavBtnDisabling(); 
        });
    }

    // Set Starging positions for pages
    initPositionForPages (arr) {
        if (arr.length !== this.pages.length) return;
        for (let [i, el] of arr.entries()) {
            this.pages[i].setValues(el);
        }
        this.setProgress(0, true);
        this.initTargets(arr);
        this.handleNavBtnDisabling();
    }

    setContainerPosition (pageNo, force) {
        const pageRef = this.pages[pageNo]
        const values = {
            rX : pageRef.rotate.x * -1,
            rY : pageRef.rotate.y * -1,
            rZ : pageRef.rotate.z * -1,
            tX : pageRef.translate.x * -1,
            tY : pageRef.translate.y * -1,
            tZ : pageRef.translate.z * -1,
        };
        if (force) {
            this.container.set3D(values);
            this.skybox.set3D(values, true);
            return;
        }
        this.container.progressCamera(values, 40);
        this.skybox.progressCamera(values, 40, true);
    }

    setProgress (num, force) {
        if (typeof num !== 'number') return;
        this.progress = num;
        this.setContainerPosition(num, force);
    }

    initTargets (arr) {
        this.targets = arr.slice();
    }

    handleNavBtnDisabling () {
        [...this.nav.DOM.querySelectorAll('button')].forEach(e => e.removeAttribute('disabled'));
        if (this.progress === 0) {
            this.nav.DOM.querySelector('.nav__prev').setAttribute('disabled', true);
            return;
        }
        if (this.progress + 1 === this.targets.length) {
            this.nav.DOM.querySelector('.nav__next').setAttribute('disabled', true);
            return;
        }
    }
}
