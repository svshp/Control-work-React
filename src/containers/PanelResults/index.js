import React, { Component } from 'react';

import { FILTER_ALL, FILTER_SEARCH } from '../../components/typesFilters';
import PanelResultRow from '../../components/PanelResultRow';

import './styles.css';

class PanelResults extends Component {
    selectedItem(tags, searchText, searchFlag = false) {
        let result = false;

        for (let i = 0; i < tags.length; i++) {
            if (searchFlag) {
                if (tags[i].toUpperCase().indexOf(searchText.toUpperCase()) !== -1) {
                    result = true;
                    break;
                }
            }
            else {
                if (tags[i].slice(-1) === searchText) {
                    result = true;
                    break;
                }
            }
        }

        return result;
    }

    render() {
        let outResults = [];
        let {arrayData, typeFilter, searchText} = this.props;

        if (typeFilter === FILTER_ALL) {
            outResults = arrayData.concat();
        }
        else {
            outResults = arrayData.filter((item) => {
                if (typeFilter === FILTER_SEARCH) {
                    if (searchText) {
                        return this.selectedItem(item.tags, searchText, true);
                        }
                    else {
                        return true;
                    }
                }
                else {
                    const indexTag = typeFilter.slice(-1);
                
                    return this.selectedItem(item.tags, indexTag);
                }
            });
        }

        return (
            <div className='panel-results'>
                {outResults.map((item, index) => (
                    <PanelResultRow
                        key={index}
                        objectData={item}
                    />
                ))}
            </div>
        )
    }
}

export default PanelResults;