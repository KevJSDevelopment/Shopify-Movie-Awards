import React, { useState } from 'react'
import { Paper, Typography, Grid, Slide, Button , makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    item: {
        marginLeft:"1%", 
        marginRight: "1%",
    },
    paper: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText,
        padding: "1%"
    },
    button: {
        float: "right",
        color: theme.palette.secondary.contrastText
    }
}))

const MovieCard = (props) => {
    
    const [hover, setHover] = useState(false)
    const classes = useStyles()

    return (
        <Grid item xs={12} className={classes.item}>
            <Slide 
            in={true} 
            direction="up"
            {...(true ? { timeout: (props.index + 5) * 100 } : {})}>
                <Paper id={`movie-paper-${props.index}`} className={classes.paper} elevation={!hover ? 3 : 20} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <Typography variant="overline" style={{overflowX: true}}>
                        {props.movie.Title.length > 45 ? props.handleMovieTitle(props.movie.Title, 45) : props.movie.Title} ({props.handleYear(props.movie.Year)})
                    </Typography>
                    {!props.listFull ? 
                    <Button variant="contained" size="small" className={classes.button} color="primary" onClick={() => props.handleNominated(props.movie)}>
                        Nominate
                    </Button>
                    : <Button variant="outlined" disabled className={classes.button} size="small">
                        Nominate
                    </Button>}
                </Paper>
            </Slide>
        </Grid>
    )
}

export default MovieCard
