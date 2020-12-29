import React, { useState } from 'react'
import { Paper, Typography, Grid, Slide, Button , makeStyles, useTheme} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    item: {
        marginLeft:"1%", 
        marginRight: "1%"
    },
    button: {
        float: "right"
    },
    paper: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText
    }
}))

const NominationCard = (props) => {

    const [hover, setHover] = useState(false)
    const classes = useStyles()
    return (
        <Grid item xs={12} className={classes.item}>
            <Slide 
            in={true} 
            direction="up"
            {...(true ? { timeout: (props.index + 5) * 100 } : {})}>
                <Paper id={`nomination-paper-${props.index}`} className={classes.paper} elevation={!hover ? 3 : 20} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <Typography variant="overline" style={{overflowX: true}}>
                        {props.nomination.Title.length > 40 ? props.handleMovieTitle(props.nomination.Title) : props.nomination.Title} ({props.handleYear(props.nomination.Year)})
                    </Typography>
                    {!props.submitted ? <Button variant="outlined" size="small" className={classes.button} color="primary" onClick={() => props.handleRemoved(props.index)}>
                        Remove
                    </Button> : <Button variant="outlined" disabled size="small" className={classes.button}>
                        Remove
                    </Button>}
                </Paper>
            </Slide>
        </Grid>
    )
}

export default NominationCard
