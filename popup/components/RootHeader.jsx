import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import React from 'react';
import Base from './Base';

class RootHeader extends Base {
    render() {
        let title;
        if (this.props.environment.activeComponent == 'CandidateView') {
            title = this.props.Candidate.name;
        } else {
            title = this.props.Election.name;
        }
        return (
            <div className='RootHeader'>
                <div className='header row'>
                    <div className='back_button_container'>
                        <Link to={this.props.to}>
                            <Icon name='arrow circle outline left' size='big'/>
                        </Link>
                    </div>
                    <div className='header_title'>
                        {title}
                    </div>
                    <div className='back_button_container'>
                        <Icon name='arrow circle outline left' style={{ color: 'white' }} size='big'/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        environment: state.environment,
        Candidate: state.Candidate,
        Election: state.Election
    };
};

export default connect(mapStateToProps)(RootHeader);