
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router/lib';
import { Button } from 'semantic-ui-react';

import Base from './Base';

export default class RaceList extends Base {
    constructor(props) {
        super(props);
    }

    

    render() {
        
        return (
            <div className='RaceList'>
                <div className='race_list_container'>
                	<div className='race_tile'>
                		<p>Presidential Election</p>
                		<div className="race_info">
                			<div className='race_participants'>
                				<p>Hilliary Clinton</p>
                				<p>Donald Trump</p>
                			</div>
                			<div>
                                photo of location of race         
                            </div>
                		</div>
                	</div>
                </div>
            </div>
        );
    }
}



