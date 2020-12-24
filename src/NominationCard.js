import React, { useState } from 'react'
import { Paper, Typography, Grid, Slide, Button , makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    item: {
        marginLeft:"1%", 
        marginRight: "1%"
    },
    button: {
        float: "right"
    }
})

const NominationCard = (props) => {

    const [hover, setHover] = useState(false)
    const classes = useStyles()

    return (
        <Grid item xs={12} className={classes.item}>
            <Slide 
            in={true} 
            direction="up"
            {...(true ? { timeout: (props.index + 5) * 100 } : {})}>
                <Paper id={`nomination-paper-${props.index}`} elevation={!hover ? 3 : 20} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <Typography variant="overline" style={{overflowX: true}}>
                        {props.nomination.Title.length > 45 ? props.handleMovieTitle(props.nomination.Title) : props.nomination.Title} ({props.handleYear(props.nomination.Year)})
                    </Typography>
                    <Button variant="outlined" size="small" className={classes.button} color="primary" onClick={() => props.handleRemoved(props.index)}>
                        Remove
                    </Button>
                </Paper>
            </Slide>
        </Grid>
    )
}

export default NominationCard
