import Scene from './scene.js';
import FreeCam from './freeCam.js';

document.addEventListener('DOMContentLoaded', () => {
    const pagesInitial = [
        { // Page 1
            rX : 20,
            rY : 0,
            rZ : 0,
            tX : 50,
            tY : 143,
            tZ : 1220,
        },
        { // Page 2
            rX : 10,
            rY : 20,
            rZ : 30,
            tX : 2000,
            tY : -500,
            tZ : -660,
        },
        { // Page 3
            rX : 0,
            rY : 0,
            rZ : 0,
            tX : 450,
            tY : 1110,
            tZ : 10,
        },
        { // Page 4
            rX : 0,
            rY : 0,
            rZ : 0,
            tX : 0,
            tY : 1500,
            tZ : -2400,
        },
    ];

    const x = new Scene('.page', '#view');
    x.setPositionForPages(pagesInitial);
    window.freeCam = new FreeCam('#container', 'body');
});
