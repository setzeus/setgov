
import React from 'react';

import Base from './Base';

export default class ElectionCategorySubTile extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='ElectionCategorySubTile' >
                <div className='text_results'>
                    <p className={'amp_' + this.props.party}>#</p>
                    <p className='title'>{this.props.text}</p>
                    <i className='count'>({this.props.count})</i>
                </div>
                <a href={this.props.link} rel='noopener noreferrer' target='_blank'>
                    <div className={' sub_button button_' + this.props.party}></div>
                </a>
            </div>
        );
    }
}