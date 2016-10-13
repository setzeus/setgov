import React from 'react';
import Base from './Base';
import BillVotingHistoryRow from './BillVotingHistoryRow';
import SegmentHeader from './SegmentHeader';

export default class CandidateBillVotingHistory extends Base{
  render() {
    return (
      <div className="CandidateBillVotingHistory">
        <SegmentHeader />
        <div className="data_container">
          <BillVotingHistoryRow />
          <BillVotingHistoryRow />
          <BillVotingHistoryRow />
        </div>
      </div>
    );
  }
}
