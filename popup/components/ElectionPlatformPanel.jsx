
import React from 'react';
import Base from './Base';
import SegmentHeader from './SegmentHeader';
import ElectionPlatformPanelCategory from './ElectionPlatformPanelCategory';
import { connect } from 'react-redux';

import { tagSetup  } from '../scripts/canidateSetup';

class ElectionPlatformPanel extends Base {

    constructor(props) {
        super(props);
        var tags = tagSetup(this.props.PlatformCounts);
    }
   
    render() {
        return (
            <div className='ElectionPlatformPanel'>
                <SegmentHeader title='Election Platform'/>

                <div className='data_container'>
                    <ElectionPlatformPanelCategory tags={tags}  />
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