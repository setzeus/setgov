
import React from 'react';

import Base from './Base';

export default class ElectionCategorySubTile extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='ElectionCategorySubTile' >
           		{this.props.text}
            </div>
        );
    }
}



