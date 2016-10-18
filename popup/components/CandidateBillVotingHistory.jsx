import React from 'react';

import Base from './Base';
import CandidateBillVotingHistoryRow from './CandidateBillVotingHistoryRow';
import SegmentHeader from './SegmentHeader';

export default class CandidateBillVotingHistory extends Base {
  render() {
    return (
      <div className='CandidateBillVotingHistory'>
        <SegmentHeader title='Bill Voting History'/>
        <div className='data_container'>
          <CandidateBillVotingHistoryRow/>
        </div>
      </div>
    );
  }
}