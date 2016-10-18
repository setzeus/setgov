import React from 'react';
import { Icon } from 'semantic-ui-react';

import Base from './Base';

export default class ElectionPlatformPanelSubType extends Base {
    render() {
        return (
            <div className='ElectionPlatformPanelSubType'>
                <div className='sub_type'>
                    #Tax Plan (17)
                </div>
                <Icon name='chevron right'/>
            </div>
        );
    }
}