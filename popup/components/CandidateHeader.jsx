import React from 'react';
import Base from './Base';

export default class CandidateHeader extends Base {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='CandidateHeader'>
                <div className='photo_container'>
                    <div className='latest_poll_container'>
                        <div className='latest_poll_text'>
                            Latest: 47.3%
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}