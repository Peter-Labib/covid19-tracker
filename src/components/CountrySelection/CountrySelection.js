import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionType from '../../store/action/index'

import { FormControl, Select, MenuItem, FormHelperText } from '@material-ui/core'
import style from './CountrySelection.module.css'

const CountrySelection = (props) => {
    const { countrySelection, countries, fetchVirusData, fetchedCountry } = props
    const [country, setCountry] = useState('')
    const [countriesList, setCountriesList] = useState([])

    useEffect(() => {
        countrySelection(country)
        setCountriesList(countries)
    }, [countrySelection, country, countries, countriesList])

    useEffect(() => {
        if (fetchedCountry !== country || !countriesList) {
            fetchVirusData()
        }
    }, [fetchedCountry, country, fetchVirusData, countriesList])
    return (
        <div className={style.countrySelect}>
            <FormControl style={{ width: '100%', marginTop: '1rem' }}>
                <Select
                    onChange={e => setCountry(e.target.value)}
                    value={country}
                    displayEmpty >
                    <MenuItem value={''}>Global</MenuItem>
                    {countriesList ? countriesList.map(country => <MenuItem key={country.name} value={country.name}> {country.name}</MenuItem>) : null}
                </Select>
                <FormHelperText>Select Your Country</FormHelperText>
            </FormControl>
        </div>

    )
}

const mapStateToProps = state => ({
    countries: state.totalData.countryList,
    fetchedCountry: state.totalData.country
})

const mapDispatchToProps = dispatch => ({
    countrySelection: (country) => dispatch(actionType.countrySelectionHandler(country)),
    fetchVirusData: () => dispatch(actionType.fetchData())
})

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelection)
