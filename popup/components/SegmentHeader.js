import React from 'react';
import Base from './Base';

export default class SegmentHeader extends Base{


	constructor(props){
	    super(props);
  	}

	render() {
		return (
			<div className="SegmentHeader">
				<div className="title_container">
					<div className="title_text">
						{this.props.title}
					</div>
				</div>
			</div>
	    );
	}
}