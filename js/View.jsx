import React from 'react';
import Page from './Page.jsx';

export default class View extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            targets : this.props.pagesData.slice(),
            currentTarget : this.props.cam,
            currentPos : {
                rotateX : this.props.pagesData[this.props.cam].rotateX * -1,
                rotateY : this.props.pagesData[this.props.cam].rotateY * -1,
                rotateZ : this.props.pagesData[this.props.cam].rotateZ * -1,
                translateX : this.props.pagesData[this.props.cam].translateX * -1,
                translateY : this.props.pagesData[this.props.cam].translateY * -1,
                translateZ : this.props.pagesData[this.props.cam].translateZ * -1,
            },
        }
    }

    calcCameraPosition () {
        const cam = this.state.currentPos;  
        const translate = `translate3d(${cam.translateX}px, ${cam.translateY}px, ${cam.translateZ}px)`;
        const rotate = `rotateX(${cam.rotateX}deg) rotateY(${cam.rotateY}deg) rotateZ(${cam.rotateZ}deg)`;
        return `${rotate} ${translate}`;
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.cam === this.state.currentTarget) return;
        clearInterval(this.animInterval);
        this.setState({currentTarget : nextProps.cam});
        const nextPos = Object.assign({}, this.state.targets[nextProps.cam]);
        const fps = this.props.fps;
        // CurrentPositions
        const crX = this.state.currentPos.rotateX;
        const crY = this.state.currentPos.rotateY;
        const crZ = this.state.currentPos.rotateZ;
        const ctX = this.state.currentPos.translateX;
        const ctY = this.state.currentPos.translateY;
        const ctZ = this.state.currentPos.translateZ;
        console.log(crX, crY, crZ, ctX, ctY, ctZ);
        // TargetPositions
        const trX = nextPos.rotateX * -1;
        const trY = nextPos.rotateY * -1;
        const trZ = nextPos.rotateZ * -1;
        const ttX = nextPos.translateX * -1;
        const ttY = nextPos.translateY * -1;
        const ttZ = nextPos.translateZ * -1;
        console.log(trX, trY, trZ, ttX, ttY, ttZ);
        // Adding part 
        const arX = (trX - crX) / (fps * 2);
        const arY = (trY - crY) / (fps * 2);
        const arZ = (trZ - crZ) / (fps * 2);
        const atX = (ttX - ctX) / (fps * 2);
        const atY = (ttY - ctY) / (fps * 2);
        const atZ = (ttZ - ctZ) / (fps * 2);
        console.log(`arX:${arX}\narY:${arY}\narZ:${arZ}\natX:${atX}\natY:${atY}\natZ:${atZ}`);
        this.animInterval = setInterval(() => {
            const posRounded = {
                rotateX : Math.round(this.state.currentPos.rotateX),
                rotateY : Math.round(this.state.currentPos.rotateY),
                rotateZ : Math.round(this.state.currentPos.rotateZ),
                translateX : Math.round(this.state.currentPos.translateX),
                translateY : Math.round(this.state.currentPos.translateY),
                translateZ : Math.round(this.state.currentPos.translateZ), 
            };
            if (
                posRounded.rotateX >= trX &&
                posRounded.rotateY >= trY &&
                posRounded.rotateZ >= trZ &&
                posRounded.translateX >= ttX &&
                posRounded.translateY >= ttY &&
                posRounded.translateZ >= ttZ
            ) {
                console.log('kuniec');
                clearInterval(this.animInterval);
                this.setState({
                    currentPos : posRounded, 
                });
                return;
            }
            const newPos = {
                rotateX : this.state.currentPos.rotateX + arX,
                rotateY : this.state.currentPos.rotateY + arY,
                rotateZ : this.state.currentPos.rotateZ + arZ,
                translateX : this.state.currentPos.translateX + atX,
                translateY : this.state.currentPos.translateY + atY,
                translateZ : this.state.currentPos.translateZ + atZ,
            };
            this.setState({
                currentPos : newPos,
            });
        }, (1000 / fps));
    }

    componentWillUnmount () {
        clearInterval(this.animInterval);
    }
    
    render () {
        const pages = this.props.pagesData.map((p, i) => {
            return <Page page={p} id={i} key={i} />;
        });

        const vw = this.props.dim.vw;
        const vh = this.props.dim.vh;
        const viewCss = {
            transform : `translate3d(${vw >> 1}px, ${vh >> 1}px, 0px)`,
        };
        const cameraCss = {
            transform : this.calcCameraPosition(this.state.currentTarget),
        };
        
        return <div id="view" style={viewCss}>
            <div id="camera" style={cameraCss}>
                {pages}
            </div>
            {/*<div id="skybox">
                <div className="front" />
                <div className="back" />
                <div className="top" />
                <div className="bottom" />
                <div className="left" />
                <div className="right" />
            </div>*/}
        </div>;
    }
}
