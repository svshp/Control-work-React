import React, { Component } from 'react';

import { FILTER_SEARCH } from '../../components/typesFilters';
import arrayFilters from '../../components/arrayFilters';

import './styles.css';

class PanelFilters extends Component {
    render() {
        let {typeFilter,
             handleFilterChange,
             handleFilterSearch,
             handleSearchClear} = this.props;

        return (
            <div className='panel-filters'>
                <label className='panel-filters__search'>
                    <input type='radio'
                        value={FILTER_SEARCH}
                        onChange={handleFilterChange}
                        checked={typeFilter === FILTER_SEARCH}
                    />
                    <div className='panel-filters__search_field'
                        onClick={handleFilterSearch}
                    >
                        <div className='panel-filters__search_field-img'>
                            &#128269;
                        </div>
                        <input type='text'
                            className='panel-filters__search_field-input'
                            placeholder='Search...'
                            onChange={handleFilterSearch}
                        />
                        <button type="button"
                            className='panel-filters__search_field-clear'
                            onClick={handleSearchClear}
                        >
                            х
                        </button>
                    </div>
                </label>
                {arrayFilters.map((item, index) => (
                    <label key={index}>
                        <input type='radio'
                            value={item.type}
                            onChange={handleFilterChange}
                            checked={typeFilter === item.type}
                        />
                        {item.title}
                    </label>
                ))}
            </div>
        )
    }
}

export default PanelFilters;