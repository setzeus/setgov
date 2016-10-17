import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router';

import React from 'react';
import Base from './Base';

export default class RootHeader extends Base {
    render() {
        return (
            <div className='RootHeader'>
                <div className='header row'>
                    <div className='back_button_container'>
                        <Icon name='arrow circle outline left' size='big'/>
                    </div>
                    <div className='header_title'>
                        Marco Rubio (R)
                    </div>
                    <div className='back_button_container'>
                        <Icon name='arrow circle outline left' style={{ color: 'white' }} size='big'/>
                    </div>
                </div>
            </div>
        );
    }
}