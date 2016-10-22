
import React from 'react';
import Base from './Base';
import SegmentHeader from './SegmentHeader';
import ElectionPlatformPanelCategory from './ElectionPlatformPanelCategory';
import { connect } from 'react-redux';

import { tagSetup , trumpSetup } from '../scripts/canidateSetup';

class ElectionPlatformPanel extends Base {

    constructor(props) {
        super(props);
        console.log(tagSetup(this.props.PlatformCounts, 'H.Clinton'));
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


const mapStateToProps = (state) => {
    return {
        PlatformCounts: state.PlatformCounts
    };
};

export default connect(mapStateToProps)(ElectionPlatformPanel);