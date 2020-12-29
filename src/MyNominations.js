import React from 'react'
import { Paper, Typography, makeStyles, Grid } from '@material-ui/core'
import MyNominationCard from './MyNominationCard'
const useStyles = makeStyles(theme => ({
    title: {
        textAlign: "center",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    }
}))

const MyNominations = (props) => {

    const classes = useStyles()

    return (
        <Paper elevation={3} className={classes.title}>
            <Grid container direction="column">
                <Grid item xs={12}>
                    <Typography variant="overline">
                        <u>My Nominations</u>
                    </Typography>
                </Grid>
                {props.nominations.map( (nomination, index) => {
                   return <MyNominationCard handleYear={props.handleYear} handleMovieTitle={props.handleMovieTitle} nomination={nomination} index={index} key={index} />
                })}
            </Grid>
        </Paper>
    )
}

export default MyNominations
