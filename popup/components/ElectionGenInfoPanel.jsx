import React from 'react';
import { Icon } from 'semantic-ui-react';

import Base from './Base';
import SegmentHeader from './SegmentHeader';

export default class ElectionGenInfoPanel extends Base {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='ElectionGenInfoPanel'>
                <SegmentHeader title='General Election Info'/>
                <div className='data_container column'>
                    <div className='row date_container padding'>
                        <Icon size='big' name='calendar'/>
                        <div className='label'>Election Date</div>
                        <div className='date_value'>Nov 9th 2016</div>
                    </div>
                    <div className='row summary_header padding'>
                        <Icon size='big' name='file text outline'/>
                        <div className='label'>Summary</div>
                    </div>
                    <div className='summary_body padding'>
                        <p>
                            In 2016, citizens will elect candidates to serve in a wide variety of federal,
                            state and local offices. Voters will elect a president to succeed the term-limited
                            incumbent, Barack Obama. All 435 seats in the United States House of Representatives
                            and 34 of the 100 seats in the United States Senate will be up for election. Voters in
                            23 states will elect 93 state executive officials, including governors, secretaries of state,
                            attorneys general and more. Seats in 86 of the country's 99 state legislative chambers will be up for grabs.
                            Municipal officials, including city councillors and mayors, will be up for election in 46 of the nation's 100
                            largest cities. Many candidates for state and local judicial offices, as well as for school boards,
                            will grace the ballots, along with state and local ballot measures.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}