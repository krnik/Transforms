import React from 'react';

export default class Nav extends React.Component {
    handleButtonClick = (dir) => {
        if (typeof this.props.click === 'function') {
            this.props.click(dir);
        }
    };
    
    render () {
        return <div className="nav">
            <div className="nav__wrapper">
                <button
                    className="nav__prev"
                    disabled={this.props.current === 0 ? true : null}
                    onClick={ev => this.handleButtonClick(-1)}>
                    Previous
                </button>
                <span>{this.props.current}</span>
                <button
                    className="nav__next"
                    disabled={this.props.current === this.props.len - 1 ? true : null}
                    onClick={ev => this.handleButtonClick(1)}>
                    Next
                </button>
            </div>
        </div>;
    }
}
