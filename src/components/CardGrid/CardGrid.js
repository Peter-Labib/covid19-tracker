import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import GridItem from '../GridItem/GridItem'

const CardGrid = (props) => {

    const cardsData = [
        { title: 'Infected', statusNumber: props.infectedNum, date: props.lastUpdate, status: 'Number of active cases of COVID-19' },
        { title: 'Recoverd', statusNumber: props.recoverdNum, date: props.lastUpdate, status: 'Number of recoveries from COVID-19' },
        { title: 'Deaths', statusNumber: props.deathsNum, date: props.lastUpdate, status: 'Number of deaths from COVID-19' }
    ]

    const cards = cardsData.map((card, i) => (
        <Grid item xs={12} md={6} lg={4} key={i}>
            <GridItem
                class={card.title}
                key={i}
                title={card.title}
                statusNumber={card.statusNumber}
                date={card.date}
                status={card.status}
            />
        </Grid>
    ))

    return (
        <Grid container spacing={3} alignItems='stretch'>
            {cards}
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    infectedNum: state.totalData.infectedNum,
    recoverdNum: state.totalData.recoverdNum,
    deathsNum: state.totalData.deathsNum,
    lastUpdate: state.totalData.lastUpdate
})


export default connect(mapStateToProps)(CardGrid)
