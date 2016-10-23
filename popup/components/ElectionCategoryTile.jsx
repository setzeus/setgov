import React from 'react';

import Base from './Base';
import ElectionCategorySubTile from './ElectionCategorySubTile';
export default class ElectionCategoryTile extends Base {
    constructor(props) {
        super(props);
    }
    handleSubTags(data){
    	return data.map( ( tile, index ) => {
    		return(
    			<ElectionCategorySubTile 
    				key={index}
    				text={tile.text}
    				link={tile.link}
    				name={tile.name}
    				count={tile.count}
    			/>
    		);
    	});
    }
    render() {
       
        return (
            <div className="ElectionCategoryTile" >
            	<div className='row'>
            		<p>{this.props.text + this.props.count}</p>
            	
            	</div>
            	<div className='row_status'></div>
				<div className='sub_row_container'>
					{
						this.handleSubTags(this.props.subTags)
					}
          		</div>
            </div>
        );
    }
}



