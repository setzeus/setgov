import React from 'react';
import Base from './Base';

import SegmentHeader from './SegmentHeader';


export default class CandidateContributions extends Base {
	render() {
		return (
			<div className='CandidateContributions'>
				<SegmentHeader title='Campaign Contributions'/>
				<div className='chart_container'/>
				<div className='row'>
					<div className='data_box column right'>
						<div className='data_box_value'>
							$12 M
						</div>
                        <div className='data_box_label'>
                            Total Raised
                        </div>
					</div>
					<div className='data_box column'>
						<div className='data_box_value'>
							$16 M
						</div>
                        <div className='data_box_label'>
                            Total Spent
                        </div>
					</div>
					<div className='data_box column left'>
						<div className='data_box_value'>
							$8 M
						</div>
                        <div className='data_box_label'>
                            On Hand
                        </div>
					</div>
				</div>
			</div>
		);
	}
}