import React from 'react';
import Base from './Base';
import { Link } from 'react-router';
import { Button, Icon } from 'semantic-ui-react';

import CandidateBillVotingHistory from './CandidateBillVotingHistory';

export default class CandidateView extends Base{

  constructor(props){
    super(props);
    this.autoBind("handleSegmentedSelection");
    this.state= {
      activeSegment: "history"
    }
  }

  handleSegmentedSelection(selection){
    this.setState({
      activeSegment: selection
    });
  }

  render() {
    console.log(this.state);
    let activeComponent;
    switch(this.state.activeSegment){
      case "finances":
        activeComponent = <CandidateFinances />;
        break;
      case "finances":
        activeComponent = <CandidateInformation />;
        break;
      case "history": 
        activeComponent = <CandidateBillVotingHistory />;
        break;

    }
    return (
      <div className="CandidateView">
       	<div className="photo_container">
  	     	<div className="name_container">
            Latest: 47.3%
  	     	</div>
       	</div>
        <div className="segmented_controller_container">
          <Button.Group>
            <Button 
              onClick={this.handleSegmentedSelection.bind(this,"money")} 
              inverted={true} 
              color="red" 
              active={this.state.activeSegment == "money"}>
                <Icon name="money" size="large" />
            </Button>
            <Button 
              onClick={this.handleSegmentedSelection.bind(this,"info")} 
              inverted={true} 
              color="red" 
              active={this.state.activeSegment == "info"}>
                <Icon name="info" size="large" />
            </Button>
            <Button 
            onClick={this.handleSegmentedSelection.bind(this,"history")}
            inverted={true} 
            color="red" 
            active={this.state.activeSegment == "history"}>
              <Icon name="history" size="large" />
            </Button>
          </Button.Group>
        </div>
        {activeComponent}
     </div>
    );
  }
}