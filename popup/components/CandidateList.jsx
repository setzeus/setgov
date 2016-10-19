

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router/lib';
import { Button } from 'semantic-ui-react';

import Base from './Base';

class CandidateList extends Base {
    constructor(props) {
        super(props);
    }

    

    render() {
        
        return (
            <div className='CandidateList'>
                <div className='candidate_list_container'>
            	
            		<Link  to='/candidate' className='candidate_tile raised'>
            		
                		<div className='avatar hilliary'>
                		</div>
                		<div className='text_info'>
                			<p className='name dem'>Hilliary Clinton</p>
                			<p className='race'>Presidential Election</p>

                		</div>
             
            		</Link>
            	
                	
                	<Link to='/candidate' className='candidate_tile raised'>
                		<div className='avatar donald'>
                		</div>
                		<div className='text_info'>
                			<p className='name rep'>Donald Trump</p>
                			<p className='race'>Presidential Election</p>
                		</div>
                	</Link>
                	<Link to='/candidate' className='candidate_tile raised'>
                		<div className='avatar murphy'>
                		</div>
                		<div className='text_info'>
                			<p className='name dem'>Patrick Murphy</p>
                			<p className='race'>Florida Senate Election</p>
                		</div>
                	</Link>
                	<Link  to='/candidate' className='candidate_tile raised'>
                		<div className='avatar rubio'>
                		</div>
                		<div className='text_info'>
                			<p className='name rep'>Marco Rubio</p>
                			<p className='race'>Florida Senate Election</p>
                		</div>
                	</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ElectionInfo: state.ElectionInfo
    };
};

export default connect(mapStateToProps)(CandidateList);
