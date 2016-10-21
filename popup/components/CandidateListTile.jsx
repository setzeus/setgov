import React from 'react';
import { Link } from 'react-router/lib';

import Base from './Base';

export default class CandidateListTile extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        const imageStyle = {
        backgroundImage: `url('${this.props.image}')`
        };
        return (
            <Link to={'/candidate/' + this.props.index} className='candidate_tile raised'>
                <div className='avatar' style={imageStyle} />
                <div className='text_info'>
                    <p className={'name ' + this.props.party}>{this.props.name}</p>
                    <p className='race'>{this.props.race}</p>
                </div>
            </Link>
        );
    }
}