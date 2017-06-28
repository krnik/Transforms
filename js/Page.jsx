import React from 'react';

export default class Page extends React.Component {
    render () {
        const translate = `translate3d(${this.props.page.translateX}px, ${this.props.page.translateY}px, ${this.props.page.translateZ}px)`;
        const pageCss = {
            transform : `${translate} rotateX(${this.props.page.rotateX}deg) rotateY(${this.props.page.rotateY}deg) rotateZ(${this.props.page.rotateZ}deg)`,
        };
        const pageName = this.props.page.name ? this.props.page.name : `Page: ${this.props.id}`;
        
        return <div style={pageCss}
            className={`page item_${this.props.id}`}>
            <div className="page__wrapper">
                {this.props.page.content ? <iframe src={this.props.page.content} /> : null}
            </div>
            <div className="page__name">
                {pageName}
            </div>
        </div>;
    }
}
