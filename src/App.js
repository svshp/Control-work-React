import React, { Component } from 'react';

import PanelFilters from './containers/PanelFilters';
import PanelResults from './containers/PanelResults';

import ArrayData from './sdks.json';
import { FILTER_ALL, FILTER_SEARCH } from './components/typesFilters';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayData: ArrayData,
            typeFilter: FILTER_ALL,
            searchText: ''
        };
    }

//    Как передать сюда параметр filterSearch,
//    для объединения следующих обработчиков:
//    handleFilterChange и handleFilterSearch ???
//
//    handleFilterChangeSearch(event, filterSearch = false) {
//        let fieldInput = document.querySelector('.panel-filters__search_field-input');
//
//        this.setState({
//            typeFilter: filterSearch ? FILTER_SEARCH : event.target.value,
//            searchText: fieldInput.value
//        });
//    }

    handleFilterChange(event) {
        let fieldInput = document.querySelector('.panel-filters__search_field-input');

        this.setState({
            typeFilter: event.target.value,
            searchText: fieldInput.value
        });
    }

    handleFilterSearch() {
        let fieldInput = document.querySelector('.panel-filters__search_field-input');
    
        this.setState({
            typeFilter: FILTER_SEARCH,
            searchText: fieldInput.value
        });
    }

    handleSearchClear(event) {
        let fieldInput = document.querySelector('.panel-filters__search_field-input');
        fieldInput.value = '';

        this.setState({
            searchText: ''
        });
    }

    render() {
        return (
            <div className='app-component container'>
                <div className='app-component__titel'>
                    <h2>SDKs</h2>
                </div>
                <div className='app-component__wraper'>
                    <PanelFilters
                        typeFilter={this.state.typeFilter}
                        handleFilterChange={this.handleFilterChange.bind(this)}
                        handleFilterSearch={this.handleFilterSearch.bind(this)}
                        handleSearchClear={this.handleSearchClear.bind(this)}
                    />
                    <PanelResults
                        arrayData={this.state.arrayData}
                        typeFilter={this.state.typeFilter}
                        searchText={this.state.searchText}
                    />
                </div>
            </div>
        )
    }
}

export default App;