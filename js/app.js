import Scene from './scene.js';
import FreeCam from './freeCam.js';

document.addEventListener('DOMContentLoaded', () => {
    const pagesInitial = [
        { // Page 1
            rX : 0,
            rY : 0,
            rZ : 0,
            tX : 50,
            tY : 143,
            tZ : -1400,
        },
        { // Page 2
            rX : 0,
            rY : 0,
            rZ : 0,
            tX : 0,
            tY : -500,
            tZ : 0,
        },
        { // Page 3
            rX : 0,
            rY : 0,
            rZ : 0,
            tX : 0,
            tY : 0,
            tZ : 0,
        },
        { // Page 4
            rX : 0,
            rY : 0,
            rZ : 0,
            tX : 0,
            tY : 0,
            tZ : 0,
        },
    ];

    const x = new Scene('.page', '#view');
    x.setPositionForPages(pagesInitial);
    console.log(x);
    window.freeCam = new FreeCam('#container', 'body');
});
