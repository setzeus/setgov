import React from 'react';
import { Icon } from 'semantic-ui-react';

import Base from './Base';
import ElectionPlatformPanelSubType from './ElectionPlatformPanelSubType';

export default class ElectionPlatformPanelCategory extends Base {

    constructor(props) {
        super(props);
        this.autoBind('onMouseOver', 'onMouseOut');
        this.state = {
            activeSubType: null
        };
    }

    onMouseOver() {
        console.log('got here');
        this.setState({
            activeSubType: <ElectionPlatformPanelSubType />
        });
    }
    onMouseOut() {
        this.setState({
            activeSubType: null
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
                {this.state.activeSubType}
            </div>
        );
    }
}