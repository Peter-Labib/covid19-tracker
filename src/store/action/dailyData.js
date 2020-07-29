import axios from '../../axios-instance'

const importDialyData = (confirmed, deaths, date) => {
    return {
        type: 'dialyData',
        confirmed,
        deaths,
        date
    }
}

export const fetchDialyData = () => {
    return dispatch => {
        axios.get('/daily').then(res => {
            const confirmed = []
            const deaths = []
            const reportDate = []
            for (const iterator of res.data) {
                confirmed.push(iterator.confirmed.total)
                deaths.push(iterator.deaths.total)
                reportDate.push(iterator.reportDate)
            }
            dispatch(importDialyData(
                confirmed,
                deaths,
                reportDate
            ))
        })
    }
}