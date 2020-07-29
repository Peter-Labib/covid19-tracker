import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionType from '../../store/action/index'
import { CircularProgress } from '@material-ui/core'
import { Line, Bar } from 'react-chartjs-2'

const Chart = (props) => {

    const { fetchDialyData, confirmedDaily, deathsDaily, date, selectedCountry, infectedNum, recoverdNum, deathsNum } = props

    const [confirmed, setConfirmed] = useState([])
    const [deaths, setDeaths] = useState([])
    const [dates, setDates] = useState([])
    const [country, setCountry] = useState()
    const [infected, setInfected] = useState()
    const [recoverd, setRecoverd] = useState()
    const [countryDeaths, setCountryDeaths] = useState()

    useEffect(() => {

        setConfirmed(confirmedDaily)
        setDeaths(deathsDaily)
        setDates(date)
        setCountry(selectedCountry)
        setInfected(infectedNum)
        setRecoverd(recoverdNum)
        setCountryDeaths(deathsNum)
    }, [confirmedDaily, deathsDaily, date, selectedCountry, infectedNum, recoverdNum, deathsNum])

    useEffect(() => {

        fetchDialyData()
    }, [fetchDialyData])

    const renderChart = () => {
        let chart = <CircularProgress />
        if (country) {
            chart = (
                <Bar
                    data={{
                        labels: ['Infected', 'Recoverd', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(255, 0, 0, 0.5)'
                            ],
                            data: [infected, recoverd, countryDeaths]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` }
                    }} />)
        } else if (dates) {
            chart = (
                <Line data={{
                    labels: dates.map(date => date),
                    datasets: [{
                        label: 'Deaths',
                        data: deaths.map(num => num),
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)'
                    }, {
                        label: 'Infected',
                        data: confirmed.map(num => num),
                        fill: true,
                        borderColor: '#3333ff',
                        backgroundColor: 'rgb(0, 0, 255, 0.3)'
                    }]
                }} />
            )
        }
        return chart
    }

    return (
        <React.Fragment>
            {renderChart()}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    confirmedDaily: state.dailyData.totalConfirmed,
    deathsDaily: state.dailyData.totaldeaths,
    date: state.dailyData.date,

    selectedCountry: state.totalData.country,
    infectedNum: state.totalData.infectedNum,
    recoverdNum: state.totalData.recoverdNum,
    deathsNum: state.totalData.deathsNum,
})

const mapDispatchToProps = (dispatch) => ({
    fetchDialyData: () => dispatch(actionType.fetchDialyData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
