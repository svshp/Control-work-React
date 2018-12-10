import { FILTER_ALL,
         FILTER_1,
         FILTER_2,
         FILTER_3,
         FILTER_4,
         FILTER_5 } from './typesFilters';

const ArrayFilters = () => {
    return (
        [
            {
                type: FILTER_ALL,
                title: 'All'
            },
            {
                type: FILTER_1,
                title: 'Tag 1'
            },
            {
                type: FILTER_2,
                title: 'Tag 2'
            },
            {
                type: FILTER_3,
                title: 'Tag 3'
            },
            {
                type: FILTER_4,
                title: 'Tag 4'
            },
            {
                type: FILTER_5,
                title: 'Tag 5'
            }
        ]
    )
}

export default ArrayFilters();