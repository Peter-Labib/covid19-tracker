const initialState = {
    infectedNum: null,
    recoverdNum: null,
    deathsNum: null,
    lastUpdate: null,
    countryList: null,
    country: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'virusData':
            return {
                ...state,
                infectedNum: action.infectedNum,
                recoverdNum: action.recoverdNum,
                deathsNum: action.deathsNum,
                lastUpdate: action.lastUpdate
            };
        case 'countrySelection':
            return {
                ...state,
                country: action.country
            };
        case 'countriesList':
            return {
                ...state,
                countryList: action.countries
            };
        default:
            return state
    }
}

export default reducer