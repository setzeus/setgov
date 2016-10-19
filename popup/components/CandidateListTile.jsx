import React from 'react';
import Base from './Base';
import { Link } from 'react-router/lib';

export default function TransactionTile(props) {
    	console.log(props)
    
        return (
           
            	<Link  to='/candidate' className='candidate_tile raised'>
            		<div className={'avatar  ' + props.image}>
            		</div>
            		<div className='text_info'>
            			<p className={'name  '+ props.party}>{props.name}</p>
            			<p className='race'>{props.race}</p>
            		</div>
            	</Link>
               
        );
    
}



