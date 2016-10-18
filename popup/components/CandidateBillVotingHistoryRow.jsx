import React from 'react';
import { Label, Icon } from 'semantic-ui-react';

import Base from './Base';

export default class CandidateBillVotingHistoryRow extends Base {
    render() {
        return (
            <div className='CandidateBillVotingHistoryRow'>
                <div className='column' >
                    <div className='circle_divider flex-center'/>
                    <div className='circle column'>
                        <div className='flex-center'>123</div>
                    </div>
                    <div className='circle_divider flex-center'/>
                </div>
                2 Amdt 4720
                <Label basic size='large' color='blue'>Passed</Label>
                <Icon size='big' name='thumbs up' color='red'/>
            </div>
        );
    }
}