import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';

import Base from './Base';

import { changeActiveSegment } from '../actions/Candidate';

class CandidateSegmentButton extends Base {
    constructor(props) {
        super(props);
        this.autoBind('handleSegmentedSelection');
    }

    handleSegmentedSelection() {
        this.props.changeActiveSegment(this.props.name);
    }

    render() {
        let icon;
        switch (this.props.name) {
        case 'contributions':
            icon = 'money';
            break;
        case 'info':
            icon = 'info';
            break;
        case 'history':
            icon = 'history';
            break;
        }
        return (
            <Button
                inverted
                onClick={this.handleSegmentedSelection}
                color='red'
                active={'this.props.activeSegment' == 'contributions'}
            >
                <Icon name={icon} size='large'/>
            </Button>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log('CandidateSegmentButton mapStateToProps');
    //console.log(state);

    return {
        Candidate: state.Candidate
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeActiveSegment: segment => dispatch(changeActiveSegment(segment))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateSegmentButton);