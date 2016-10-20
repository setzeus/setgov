import React from 'react';
import { Link } from 'react-router/lib';
import Base from './Base';

export default function CandidateListTile(props) {
    console.log(props);
    return (
        <Link to={'/candidate/' + props.index} className='candidate_tile raised'>
            <div className={'avatar ' + props.image} />
            <div className='text_info'>
                <p className={'name ' + props.party}>{props.name}</p>
                <p className='race'>{props.race}</p>
            </div>
        </Link>
    );
}