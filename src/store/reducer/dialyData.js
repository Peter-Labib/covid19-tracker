const initialState = {
    totalConfirmed: null,
    totalDeaths: null,
    date: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'dialyData':
            return {
                ...state,
                totalConfirmed: action.confirmed,
                totaldeaths: action.deaths,
                date: action.date
            };
        default:
            return state
    }
}

export default reducer