import React from 'react';
import Base from './Base';

import SegmentHeader from './SegmentHeader';


export default class CandidateContributions extends Base{
	render() {
		return (
			<div className='CandidateContributions'>
				<SegmentHeader title='Campaign Contributions'/>
				<div className='chart_container'/>
				<div className='plz_work'>
					<div className='data_box right'>
						<div className='div_text'>
							$12 N
						</div>
					</div>
					<div className='data_box'>
						<div className='div_text'>
							Test123
						</div>
					</div>
					<div className='data_box left'>
						<div className='div_text'>
							as
						</div>
					</div>

				</div>
			</div>
		);
	}
}



// <div className='data_box right'>
// 						<div className='column data_box_info'>
// 							<p>tesdfsdfsdfsdfsdfsdst</p>
// 							<p>test</p>
// 						</div>
// 					</div>
// 					<div className='data_box'>
// 						<div className='column data_box_info'>
// 							<p>test</p>
// 							<p>tessdfsdfsdfsdt</p>
// 						</div>
// 					</div>
// 					<div className='data_box left'>
// 						<div className='column data_box_info'>
// 							<p>test</p>
// 							<p>tessdfsdfsdfsdft</p>
// 						</div>
// 					</div>