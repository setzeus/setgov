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
                color='grey'
                onClick={this.handleSegmentedSelection}
                active={this.props.Election.activeElectionSegment == this.props.name}
            >
                <Icon color='grey' name={icon} size='large'/>
            </Button>
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
        changeActiveSegment: segment => dispatch(changeActiveSegment(segment))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ElectionSegmentButton);