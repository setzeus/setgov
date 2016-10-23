import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';

import Base from './Base';
import { changeActiveSegment } from '../actions/Election';

class ElectionSegmentButton extends Base {
    constructor(props) {
        super(props);
        this.autoBind('handleSegmentedSelection');
    }

    handleSegmentedSelection() {
        this.props.changeActiveSegment(this.props.name);
    }

    render() {
        console.log(this.props.Election.activeElectionSegment)
        let icon;
        switch (this.props.name) {
        case 'platform':
            icon = 'unordered list';
            break;
        case 'info':
            icon = 'info';
            break;
        case 'livepolls':
            icon = 'line chart';
            break;
        }
        return (
            <Button
                inverted
                onClick={this.handleSegmentedSelection}
                color='red'
                active={this.props.Election.activeSegment == this.props.name}
            >
                <Icon name={icon} size='large'/>
            </Button>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps')

    console.log(state.Election)
    return {
        Election: state.Election
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeActiveSegment: segment => dispatch(changeActiveSegment(segment))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ElectionSegmentButton);