import React from 'react';

export default class Page extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            rotateX : this.props.page.rotateX,
            rotateY : this.props.page.rotateY,
            rotateZ : this.props.page.rotateZ,
            translateX : this.props.page.translateX,
            translateY : this.props.page.translateY,
            translateZ : this.props.page.translateZ,
        };
    }
    
    render () {
        const translate = `translate3d(${this.state.translateX}px, ${this.state.translateY}px, ${this.state.translateZ}px)`;
        const pageCss = {
            transform : `${translate} rotateX(${this.state.rotateX}deg) rotateY(${this.state.rotateY}deg) rotateZ(${this.state.rotateZ}deg)`,
        };
        const pageName = this.props.page.name ? this.props.page.name : `Page: ${this.props.id}`;
        
        return <div style={pageCss}
            className={`page item_${this.props.id}`}>
            <div className="page__wrapper">

            </div>
            <div className="page__name">
                {pageName}
            </div>
        </div>;
    }
}
