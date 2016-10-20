import React from 'react';
import { connect } from 'react-redux';
import Base from './Base';


class CandidateHeader extends Base {

    constructor(props) {
        super(props);
    }

    render() {
        const imageStyle = {
            backgroundImage: `url('${this.props.Candidate.bannerImageUrl}')`
        };
        return (
            <div className='CandidateHeader'>
                <div className='photo_container' style={imageStyle}>
                    <div className='latest_poll_container'>
                        <div className='latest_poll_text'>
                            Latest: {this.props.Candidate.latestPollResult}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        environment: state.environment,
        Candidate: state.Candidate
    };
};

export default connect(mapStateToProps)(CandidateHeader);