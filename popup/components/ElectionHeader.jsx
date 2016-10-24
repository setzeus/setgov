import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router/lib';
import { Icon } from 'semantic-ui-react';

import Base from './Base';
import { changeActiveComponent } from '../actions/SetGovHome';


class ElectionHeader extends Base {

    constructor(props) {
        super(props);
    }
    handleClick() {
        this.props.changeActiveComponent('CandidateView');
    }

    render() {
        const democrat_image_style = {
            backgroundImage: `url('${this.props.Election.d_image}')`
        };
        const republican_image_style = {
            backgroundImage: `url('${this.props.Election.r_image}')`
        };
        return (
            <div className='ElectionHeader column'>
                <Link
                    to={'/candidate/' + this.props.Election.d_index}
                    className='photo_container_top row'
                    onClick={() => this.handleClick()}
                >
                    <div className='flex justify-space-between row'>
                        <div className='arrow_container'>
                            <Icon name='chevron left' size='big'/>
                        </div>
                        <div className='avatar_container'>
                            <div className='avatar' style={democrat_image_style} />
                        </div>
                        <div className='data_container column'>
                            <div className='candidate_name'>
                                {this.props.Election.democrat}
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    to={'/candidate/' + this.props.Election.r_index}
                    className='photo_container_bottom row'
                    onClick={() => this.handleClick()}
                >
                    <div className='flex justify-space-between row'>
                        <div className='data_container column'>
                            <div className='candidate_name'>
                                {this.props.Election.republican}
                            </div>
                        </div>
                        <div className='avatar_container'>
                            <div className='avatar' style={republican_image_style} />
                        </div>
                        <div className='arrow_container'>
                            <Icon name='chevron right' size='big'/>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Election: state.Election
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeActiveComponent: component => dispatch(changeActiveComponent(component))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ElectionHeader);