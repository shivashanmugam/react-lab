import React from "react";
import { VISIBILITY_FILTERS } from '../constants'
import cx from 'classnames';
import {connect} from 'react-redux';
import {setFilter} from '../redux/actions';

const VisibilityFilters = ({activeFilter, setFilter}) => {

    return (
        <div>
            {Object.keys(VISIBILITY_FILTERS).map((key, index) => {
                const currentFilter = VISIBILITY_FILTERS[key];
                return (
                    <span key={`filter-${key}`}
                        className = {cx(`filter`, currentFilter == activeFilter && 'filter--active')}
                        onClick={() => {setFilter(currentFilter)/* changeFilter type */ }}
                    >
                        {currentFilter}
                    </span>
                )
            })}
        </div>
    )
}

const mapStateToProps = function(state){
    return { 'activeFilter' : state.visibilityFilter} 
}

const mapDispatchToProps = {setFilter}

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilters)
