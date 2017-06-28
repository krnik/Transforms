import React from 'react';
import ReactDOM from 'react-dom';

import View from './View.jsx';
import Loader from './Loader.jsx';
import Nav from './Nav.jsx';

// import FreeCam from './freeCam.js';

document.addEventListener('DOMContentLoaded', () => {
    const pagesInitial = [ //r-rotate t-translate
        { // Page 1 
            rotateX : 20,
            rotateY : 0,
            rotateZ : 0,
            translateX : 50,
            translateY : 143,
            translateZ : 1220,
            content : 'https://krnik.github.io/Chairs/',
        },
        { // Page 2
            rotateX : 0,
            rotateY : 50,
            rotateZ : 0,
            translateX : 2000,
            translateY : -500,
            translateZ : -660,
        },
        { // Page 3
            rotateX : 0,
            rotateY : 0,
            rotateZ : 120,
            translateX : 450,
            translateY : 1110,
            translateZ : 10,
        },
        { // Page 4
            rotateX : 0,
            rotateY : 0,
            rotateZ : 0,
            translateX : 0,
            translateY : 1500,
            translateZ : -2400,
        },
    ];

    class App extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                vw : window.innerWidth,
                vh : window.innerHeight,
                len : this.props.pages.length,
                camProgress : 0,
            };
            this.resizeTimeout = null;  
        }

        componentDidMount () {
            window.addEventListener('resize', this.handleWindowResize);
            const st = document.createElement('style');
            st.append(
                this.props.pages.reduce((acc, val, i) => {
                    const rx = val.rotateX ? val.rotateX * -1 : 0;
                    const ry = val.rotateY ? val.rotateY * -1 : 0;
                    const rz = val.rotateZ ? val.rotateZ * -1 : 0;
                    const tx = val.translateX ? val.translateX * -1 : 0;
                    const ty = val.translateY ? val.translateY * -1 : 0;
                    const tz = val.translateZ ? val.translateZ * -1 : 0;
                    const cam = `.show-${i} { transform : rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) translate3d(${tx}px, ${ty}px, ${tz}px) }\n`;
                    const sb = `.skybox-${i} { transform: translate3d(0, 0, 50vh) scale3d(25, 25, 25) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) }\n`;
                    return acc + cam + sb;
                }, '')
            );
            st.append(`#camera, #skybox { transition: transform ${this.props.transition.time} ${this.props.transition.function} }\n#skybox { transform-origin: 0 0 ${this.state.vh / 4}px }`);
            document.querySelector('head').appendChild(st);
        }
        
        handleWindowResize = () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                this.setState({
                    vw : window.innerWidth,
                    vh : window.innerHeight,
                });
            }, 200);
        };
        
        handleCamProgressChange = (dir) => {
            const newCameraPosition = this.state.camProgress + dir;
            if (newCameraPosition < 0 || newCameraPosition === this.state.len) return;
            this.setState({camProgress : newCameraPosition});
        };

        render () {
            const vwHalf = this.state.vw >> 1;
            const vhHalf = this.state.vh >> 1;
            const css = {
                width : this.state.vw,
                height : this.state.vh,
                perspective : this.state.vh,
                perspectiveOrigin : `${vwHalf}px ${vhHalf >> 1}px`,
            };
            const size = {
                vw : this.state.vw,
                vh : this.state.vh,
            };

            return <div id="scene" style={css}>
                <Loader size={size} />
                <View
                    pages={this.props.pages}
                    size={size}
                    camProgress={this.state.camProgress}
                    transition={this.props.transition} />
                <Nav
                    current={this.state.camProgress}
                    len={this.state.len}
                    click={this.handleCamProgressChange} />
            </div>;
        }
    }

    const transitionSettings = {
        function : 'cubic-bezier(.28,.73,.65,.56)',
        time : '1.75s',
    };
    ReactDOM.render(
        <App
            pages={pagesInitial}
            transition={transitionSettings}/>,
        document.querySelector('#app')
    );
});
