import React from 'react';

import './styles.css';

const panelResultRowTags = (props) => {
    let listTags = props.tags.join(',');

    return (
        <div className='panel-result-row__tags'>
            {listTags}
        </div>
    )
}

export default panelResultRowTags;