import React from 'react';
import Page from './Page.jsx';

export default class View extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentTarget : this.props.camProgress,
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({currentTarget : nextProps.camProgress});
    }
    
    render () {
        const pages = this.props.pages.map((p, i) => {
            return <Page page={p} id={i} key={i} />;
        });

        const vw = this.props.size.vw;
        const vh = this.props.size.vh;
        const viewCss = {
            transform : `translate3d(${vw >> 1}px, ${vh >> 1}px, 0px)`,
        };
        const targetNo = this.state.currentTarget;
        
        return <div id="view" style={viewCss}>
            <div id="camera" className={`show-${targetNo}`}>
                {pages}
            </div>
            <div id="skybox" className={`skybox-${targetNo}`}>
                <div className="front" />
                <div className="back" />
                <div className="top" />
                <div className="down" />
                <div className="left" />
                <div className="right" />
            </div>
        </div>;
    }
}
