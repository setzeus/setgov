import React, {Component} from 'react';
import {connect} from 'react-redux';
import { setStateFromKeywords } from '../scripts/getKeyWordsFromPage';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setStateFromKeywords(this.props.dispatch)
    //basic clicker to log redux is working across platform
    // document.addEventListener('click', () => {
    //   console.log('testing')
    //   this.props.dispatch({
    //     type: 'FLORIDA_SENATE'
    //   });
    // });
  }

  render() {
    return(
        <div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
