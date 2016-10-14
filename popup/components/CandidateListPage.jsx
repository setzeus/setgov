import React from 'react';
import Base from './Base';

import {connect} from 'react-redux';

class CandidateListPage extends Base {
  constructor(props) {
    super(props);

  }

  dispatchRace(msg){
  	console.log(msg)
  }
  render() {
  	console.log(this.props)
  	//custom styles for party_selection
   
    return (
			<div className='CandidateListPage'>
				<div className='party_selection'>
					<div className=' button raised dem'
						onClick={ () => this.props.dispatch({ type :'DEMOCRAT'})}>
            
					</div>

					<div className='button raised rep'
						onClick={ () => this.props.dispatch({ type :'REPUBLICAN'})} 
						>
						
					</div>
				</div>

				<div className='party_candidates'>

				</div>
			</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ElectionInfo: state.ElectionInfo
  };
};

export default connect(mapStateToProps)(CandidateListPage);



