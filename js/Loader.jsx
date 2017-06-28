import React from 'react';

export default class Loader extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            class : 'loader',
            visible : true,
        };
    }
    
    render () {
        if (!this.state.visible) return null;
        const css = {
            width : this.props.size.vw,
            height : this.props.size.vh,
        };
        return <div style={css} className={this.state.class}>
            <div></div>
            <div></div>
        </div>;
    }
}
