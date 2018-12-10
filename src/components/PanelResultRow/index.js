import React from 'react';

import PanelResultRowTags from '../PanelResultRowTags';

import './styles.css';

const panelResultRow = (props) => {
    return (
        <div className='panel-result-row'>
            <div className='panel-result-row__name'>
                &bull;&nbsp;&nbsp;
                {props.objectData.name}
            </div>
            <PanelResultRowTags
            tags={props.objectData.tags}
            />
        </div>
    )
}

export default panelResultRow;