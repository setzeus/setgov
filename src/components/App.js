import React from 'react';
import { Link } from 'react-router';

const App = React.createClass({
 
  render: function () {
    return (
     <div className="scoreboard">
     	<div className="header">
      		<Link to="/test">test</Link>
    	</div>
     </div>
    );
  }
});
export default App;