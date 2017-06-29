import React from 'react';

export default class Page extends React.Component {
    render () {
        const pageName = this.props.page.name ? this.props.page.name : `Page: ${this.props.id}`;
        return <div className={`page item-${this.props.id}`}>
            {this.props.page.content}
            <div className="page__name">
                {pageName}
            </div>
        </div>;
    }
}
