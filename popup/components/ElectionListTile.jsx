import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router/lib';
import { Button } from 'semantic-ui-react';

import Base from './Base';

export default class ElectionListTile extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='ElectionListTile column'>
                <div className='election_title'>
                    Presidential Election
                </div>
                <div className='row justify-space-between flex'>
                    <div className='column candidate_container'>
                        <div className='democrat'>
                            Hillary Clinton
                        </div>
                        <div className='republican'>
                            Donald Trump
                        </div>
                    </div>
                    <div className='state_container'>
                    </div>
                </div>
            </div>
        );
    }
}