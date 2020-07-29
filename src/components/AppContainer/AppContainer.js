import React from 'react'
import { Container } from '@material-ui/core'
import Header from '../Header/Header'
import CardGrid from '../CardGrid/CardGrid'
import CountrySelection from '../CountrySelection/CountrySelection'
import Chart from '../Chart/Chart'

const AppContainer = () => {
    return (
        <Container maxWidth='lg'>
            <Header />
            <CardGrid />
            <CountrySelection />
            <Chart />
        </Container >
    )
}

export default AppContainer
