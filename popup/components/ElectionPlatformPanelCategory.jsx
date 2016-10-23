import React from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Base from './Base';
import ElectionCategoryTile from './ElectionCategoryTile';

export default class ElectionPlatformPanelCategory extends Base {

    constructor(props) {
        super(props);
        console.log(this.props.tags)
    }
    handleSubTags(data){
        
            return data.map( (tile, index) => {
                console.log(tile)
                return(
                    <ElectionCategoryTile 
                        key={index}
                        text={tile.text}
                        count={tile.count}
                        subTags={tile.subTags}
                    />    

                ); 
            });
       
    }

   
    render() {
        return (
            <div className='ElectionPlatformPanelCategory' >
              {
                this.handleSubTags(this.props.tags)
              }
           
            </div>
        );
    }
}