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
            <div className="ElectionCategoryTile" id={this.props.text+'Result'} >
            	<div className='row'>
            		<p className='cat_title'> {this.props.text} </p>
                    <p>({this.props.count})</p>
            	</div>
            	<div className='row_status'></div>
				<div className='sub_row_container' id={this.props.text+'_sub_container'}>
					{
						this.handleSubTags(this.props.subTags)
					}
          		</div>
            </div>
        );
    }
}



