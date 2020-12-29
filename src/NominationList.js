import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import NominationResult from './NominationResult'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    list: {
        overflowY: "auto",
        maxHeight: window.innerHeight * .7,
        padding: "1%",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    },
    title: {
        textAlign: "center",
    }
}))

const NominationList = (props) => {

    const [allNominations, setAllNominations] = useState([])

    const classes = useStyles()

    const getAllNominations = async () => {
        const res = await fetch(`http://localhost:3000/nominations`)
            
        const data = await res.json()

        setAllNominations(data.nominations)

    }

    useEffect(() => {
        getAllNominations()
    }, [])

    return (
        <Paper variant="elevation" elevation={3} className={classes.list}>
            <Grid container direction="column">
                <Grid item xs={12} className={classes.title}>
                    <Typography variant="overline">
                        <u>All Nominations</u>
                    </Typography>
                </Grid>
                {allNominations !== [] ? allNominations.map( (nomination, index) => {
                    return <NominationResult nomination={nomination} handleYear={props.handleYear} handleMovieTitle={props.handleMovieTitle} index={index} key={index} />
                }) : null}
            </Grid>   
        </Paper>
    )
}

export default NominationList
