import React from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Base from './Base';
import ElectionPlatformPanelSubType from './ElectionPlatformPanelSubType';

export default class ElectionPlatformPanelCategory extends Base {

    constructor(props) {
        super(props);
      
        this.state = {
           
            subTypeMouseOver: false,
            activeSubType: false
        };
    }

   
    render() {
        return (
            <div className='ElectionPlatformPanelCategory' >
              
           
            </div>
        );
    }
}