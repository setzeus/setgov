

import React from 'react';
import { connect } from 'react-redux';
import CandidateListTile from './CandidateListTile';

import Base from './Base';

class CandidateList extends Base {
    constructor(props) {
        super(props);
        this.autoBind();
    }
    handleCandidateTiles(data) {
        return data.map((tile, index) => {
            return (
                <CandidateListTile
                    key={index}
                    name={tile.name}
                    party={tile.party}
                    race={tile.race}
                    image={tile.image}
                    index={index}
                />
            );
        });
    }

    render() {
        return (
            <div className='CandidateList'>
                <div className='candidate_list_container'>
                    {
                    this.props.environment == undefined ?
                    console.log('props came back undefined') :
                    this.handleCandidateTiles(this.props.environment.candidates)
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        environment: state.environment
    };
};

export default connect(mapStateToProps)(CandidateList);
