import React, {Component} from 'react';
import {connect} from 'react-redux';
import { setStateFromKeywords } from '../scripts/getKeyWordsFromPage';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.GeneralElection)
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
    GeneralElection: state.GeneralElection
  };
};

export default connect(mapStateToProps)(App);
