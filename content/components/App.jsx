import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStateFromKeywords } from '../scripts/getKeyWordsFromPage';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
        setStateFromKeywords(this.props.dispatch);
      
    }

    render() {
        return (
            <div></div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        PlatformCounts: state.PlatformCounts
    };
};

export default connect(mapStateToProps)(App);
