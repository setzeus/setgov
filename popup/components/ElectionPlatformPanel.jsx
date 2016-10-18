
import React from 'react';
import Base from './Base';
import SegmentHeader from './SegmentHeader';
import ElectionPlatformPanelCategory from './ElectionPlatformPanelCategory';

export default class ElectionPlatformPanel extends Base {

    constructor(props) {
        super(props);
    }
    onMouseOver() {
        console.log('got here');
    }
    render() {
        return (
            <div className='ElectionPlatformPanel'>
                <SegmentHeader title='Election Platform'/>
                <div className='data_container'>
                    <ElectionPlatformPanelCategory />
                </div>
            </div>
        );
    }
}