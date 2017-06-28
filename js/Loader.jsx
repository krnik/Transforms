import React from 'react';

export default class Loader extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            class : 'loader',
            visible : true,
        };
    }
    
    componentDidMount () {
        this.fadeOutTimeout = setTimeout(() => {
            this.setState({
                class: 'loader loaded',
            });
            this.hideTimeout = setTimeout(() => {
                this.setState({visible : false});
            }, 500);
        }, 2000);
    }
    
    componentWillUnmount () {
        clearTimeout(this.fadeOutTimeout);
        clearTimeout(this.hideTimeout);
    }

    render () {
        if (!this.state.visible) return null;
        const dim = {
            width : this.props.dim.vw,
            height : this.props.dim.vh,
        };
        return <div style={dim} className={this.state.class}>
            Jakiś fajny tekst
        </div>;
    }
}
