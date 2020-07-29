import React from 'react'
import { Card, CardContent, Typography, CircularProgress } from '@material-ui/core'
import './GridItem.css'
import CountUp from 'react-countup'

const GridItem = (props) => {

    const checkStatusNum = () => {
        if (props.statusNumber | props.statusNumber === 0) {
            return <CountUp
                start={0}
                end={props.statusNumber}
                duration={3}
                separator=',' />
        } else {
            return <CircularProgress />
        }
    }

    return (
        <Card className={`${props.class}`}>
            <CardContent>
                <Typography color='textSecondary' gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant='h5' component='h2' gutterBottom>
                    {checkStatusNum()}
                </Typography>
                <Typography color='textSecondary' gutterBottom>
                    {props.date}
                </Typography>
                <Typography component='p'>
                    {props.status}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default GridItem
