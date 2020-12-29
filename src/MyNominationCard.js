import React, { useState } from 'react'
import { Grid, Slide, Paper, Typography, makeStyles, Tooltip } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    item: {
        margin: "2%"
    },
    paper: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.light,
        border: `3px solid ${theme.palette.primary.light}`
    }
}))

const MyNominationCard = (props) => {

    const [hover, setHover] = useState(false)
    
    const classes = useStyles()

    return (
        <Grid item xs={12} className={classes.item}>
            <Slide 
            in={true} 
            direction="up"
            {...(true ? { timeout: (props.index + 5) * 100 } : {})}>
                <Paper id={`nomination-paper-${props.index}`} className={classes.paper} elevation={!hover ? 3 : 20} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <Tooltip title={`${props.nomination.Title} (${props.handleYear(props.nomination.Year)})`} arrow={true}  placement="top">
                        <Typography variant="overline" style={{overflowX: true}}>
                            {props.nomination.Title.length > 50 ? props.handleMovieTitle(props.nomination.Title, 50) : props.nomination.Title} ({props.handleYear(props.nomination.Year)})
                        </Typography>
                    </Tooltip>
                </Paper>
            </Slide>
        </Grid>
    )
}

export default MyNominationCard
