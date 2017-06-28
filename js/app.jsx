import React from 'react';
import ReactDOM from 'react-dom';

import View from './View.jsx';
import Loader from './Loader.jsx';
import Nav from './Nav.jsx';

import FreeCam from './freeCam.js';

document.addEventListener('DOMContentLoaded', () => {
    const pagesInitial = [ //r-rotate t-translate
        { // Page 1 
            rotateX : 20,
            rotateY : 0,
            rotateZ : 0,
            translateX : 50,
            translateY : 143,
            translateZ : 1220,
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
            window.addEventListener('resize', this.handleWindowResize)
        }
        
        handleWindowResize = () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                this.setState({
                    vw : window.innerWidth,
                    vh : window.innerHeight,
                });
            }, 250);
        };
        
        handleCamProgressChange = (dir) => {
            const cam = this.state.camProgress;
            const camNew = cam + dir;
            if (camNew < 0 || camNew === this.state.len) return;
            this.setState({camProgress : camNew});
            // this.setState({camProgress : cam});
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
            const dim = {
                vw : this.state.vw,
                vh : this.state.vh,
            };

            return <div id="scene" style={css}>
                {/*<Loader dim={dim} />*/}
                <View
                    pagesData={this.props.pages}
                    dim={dim}
                    cam={this.state.camProgress}
                    fps={50} />
                <Nav
                    current={this.state.camProgress}
                    len={this.state.len}
                    click={this.handleCamProgressChange} />
            </div>;
        }
    }


    ReactDOM.render(
        <App pages={pagesInitial}/>,
        document.querySelector('#app')
    );
    setTimeout(() => {
        window.freeCam = new FreeCam('#camera', 'body');
    }, 2000);
});


// const x = new Scene('.page', '#view');
// x.initPositionForPages(pagesInitial);
// console.log(x);
// window.freeCam = new FreeCam('#container', 'body');
