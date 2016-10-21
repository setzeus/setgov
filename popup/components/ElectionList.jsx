import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router/lib';
import { Button } from 'semantic-ui-react';

import Base from './Base';
import ElectionListTile from './ElectionListTile';

class ElectionList extends Base {
    constructor(props) {
        super(props);
    }
    handleElectionTiles(data) {
        return data.map((tile, index) => {
            return (
                <ElectionListTile
                    key={index}
                    title={tile.title}
                    democrat={tile.democrat}
                    republican={tile.republican}
                    image={tile.list_image}
                    index={index}
                />
            );
        });
    }
    render() {
        return (
            <div className='ElectionList'>
                {
                    this.props.environment == undefined ?
                    console.log('props came back undefined') :
                    this.handleElectionTiles(this.props.environment.elections)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        environment: state.environment
    };
};

export default connect(mapStateToProps)(ElectionList);