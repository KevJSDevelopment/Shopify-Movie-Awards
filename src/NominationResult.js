import React, { useState } from 'react'
import Grow from '@material-ui/core/Grow'
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    first: {
        marginLeft: "2%",
        marginRight: "2%",
        backgroundColor: "#ffd700",
        color: theme.palette.secondary.contrastText,
        padding: "5px",
        width: "95%"
    },
    second: {
        marginLeft: "4%",
        marginRight: "4%",
        backgroundColor: "#bec2cb",
        color: theme.palette.secondary.contrastText,
        padding: "5px",
        width: "90%"
    },
    third: {
        marginLeft: "6%",
        marginRight: "6%",
        backgroundColor: "#cd7f32",
        color: theme.palette.secondary.contrastText,
        padding: "5px",
        width: "85%"
    },
    item: {
        width: "80%",
        marginLeft: "8%",
        marginRight: "8%",
        padding: "5px",
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText
    }
}))

const NominationResult = (props) => {

    const classes = useStyles()

    const handleClass = () => {
        switch (props.index) {
            case 0:
                return classes.first
            case 1:
                return classes.second
            case 2:
                return classes.third
            default:
                return classes.item
        }
    }

    const handleTextWidth = () => {
        switch (props.index) {
            case 0:
                return 40
            case 1:
                return 35
            case 2:
                return 30
            default:
                return 30
        }
    }

    const handlePlacement = () => {
        switch (props.index) {
            case 0:
                return <b>(1st)</b>
            case 1:
                return <b>(2nd)</b>
            case 2:
                return <b>(3rd)</b>
            default:
                return null
        }
    }

    return (
        <Grid item xs={12}>
            <Grow 
            in={true} 
            {...(true ? { timeout: (props.index + 5) * 300 } : {})}>
                <Paper id={`nomination-paper-${props.index}`} className={handleClass()} elevation={3}>
                    <Typography variant="overline">
                        {props.nomination.title.length > handleTextWidth() ? props.handleMovieTitle(props.nomination.title, handleTextWidth()) : props.nomination.title} ({props.handleYear(props.nomination.year)}): Nominations - {props.nomination.total}
                    </Typography>
                </Paper>
            </Grow>
        </Grid>
    )
}

export default NominationResult
