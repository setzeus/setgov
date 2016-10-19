import React from 'react';
import { Icon } from 'semantic-ui-react';

import Base from './Base';
import ElectionPlatformPanelSubType from './ElectionPlatformPanelSubType';

export default class ElectionPlatformPanelCategory extends Base {

    constructor(props) {
        super(props);
        this.autoBind('onMouseOver', 'onMouseOut');
        this.state = {
            categoryMouseOver: false,
            subTypeMouseOver: false,
            activeSubType: false
        };
    }

    onMouseOver() {
        //console.log('got here');
        this.setState({
            activeSubType: true
        });
    }
    onMouseOut() {
        console.log('got here');
        this.setState({
            activeSubType: false
        });
    }
    render() {
        return (
            <div
                className='ElectionPlatformPanelCategory'
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
            >
                <div className='category_container'>
                    <div className='category'>
                        #Economy (7)
                    </div>
                    <Icon name='level down' size='big'/>
                </div>
                {this.state.activeSubType ?
                    <ElectionPlatformPanelSubType />
                    :
                    null
                }
            </div>
        );
    }
}