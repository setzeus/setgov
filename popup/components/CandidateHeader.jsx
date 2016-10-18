import React from 'react';
import Base from './Base';


export default class CandidateHeader extends Base {

    constructor(props) {
        super(props);
    }

    render() {
        let url;
        switch (this.props.name) {
        case 'Patrick Murphy':
            url = 'https://s3-us-west-2.amazonaws.com/setgov/patrick+murphy+resized.jpg';
            break;
        case 'Marco Rubio':
            url = 'https://s3-us-west-2.amazonaws.com/setgov/Marco-Rubio.jpg';
            break;
        }

        const imageStyle = {
            backgroundImage: `url('${url}')`
        };
        return (
            <div className='CandidateHeader'>
                <div className='photo_container' style={imageStyle}>
                    <div className='latest_poll_container'>
                        <div className='latest_poll_text'>
                            Latest: 47.3%
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}