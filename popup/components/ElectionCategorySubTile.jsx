
import React from 'react';

import Base from './Base';

export default class ElectionCategorySubTile extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='ElectionCategorySubTile' >
                <div className="text_results">
                    <p className="amp">#</p>
                    <p className="title">{this.props.text}</p>
                    <i className='count'>({this.props.count})</i>
                </div>
                <a href={this.props.link} target='_blank'>
                    <div className={' sub_button button_' + this.props.name}></div>
                </a>
            </div>
        );
    }
}



