import axios from '../../axios-instance'

export const importVirusData = (infected, lastUpdate, recoverd, deaths) => {
    return {
        type: 'virusData',
        infectedNum: infected,
        recoverdNum: recoverd,
        deathsNum: deaths,
        lastUpdate
    }
}

export const countrySelectionHandler = (country) => {
    return {
        type: 'countrySelection',
        country
    }
}

export const fetchCountryList = (countries) => {
    return {
        type: 'countriesList',
        countries
    }
}

export const fetchData = () => {
    return (dispatch, getState) => {
        const country = getState().totalData.country
        if (country === '') {
            axios.get().then(res => {
                dispatch(importVirusData(res.data.confirmed.value,
                    new Date(res.data.lastUpdate).toLocaleString(),
                    res.data.recovered.value, res.data.deaths.value))
            })
        } else {
            axios.get(`/countries/${country}`).then(res => {
                dispatch(importVirusData(res.data.confirmed.value,
                    new Date(res.data.lastUpdate).toLocaleString(),
                    res.data.recovered.value, res.data.deaths.value))
            }).catch(err => console.log(err))
        }

        axios.get('/countries').then(res => {
            dispatch(fetchCountryList(res.data.countries))
        })
    }
}

