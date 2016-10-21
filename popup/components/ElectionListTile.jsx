import React from 'react';
import { Link } from 'react-router';

import Base from './Base';


export default class ElectionListTile extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        // let path;
        // if (this.props.title.includes('Florida')) {
        //     path = '/images/Florida-icon.png';
        // } else if (this.props.title.includes('Presidential')) {
        //     path = '/images/USA-icon.png';
        // }

        const imageStyle = {
            backgroundImage: `url('${this.props.image}')`
        };
        return (
            <Link to={'/election/' + this.props.index} className='ElectionListTile column'>
                <div className='election_title'>
                    {this.props.title}
                </div>
                <div className='row justify-space-between flex'>
                    <div className='column candidate_container'>
                        <div className='democrat'>
                            {this.props.democrat}
                        </div>
                        <div className='republican'>
                            {this.props.republican}
                        </div>
                    </div>
                    <div className='state_container' style={imageStyle} />
                </div>
            </Link>
        );
    }
}