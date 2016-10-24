import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import ElectionCategoryTile from './ElectionCategoryTile';

class ElectionPlatformPanelCategory extends Base {

    constructor(props) {
        super(props);
    }
    handleTags(data) {
        return data.map((tile, index) => {
            return (
                <ElectionCategoryTile
                    key={index}
                    text={tile.text}
                    count={tile.count}
                    subTags={tile.subTags}
                />
            );
        });
    }
    render() {
        return (
            <div className='ElectionPlatformPanelCategory' >
                {
                    this.handleTags(this.props.tags)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Election: state.Election
    };
};

export default connect(mapStateToProps)(ElectionPlatformPanelCategory);