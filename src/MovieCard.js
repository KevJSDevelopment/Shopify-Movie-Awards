import React, { useState } from 'react'
import { Paper, Typography, Grid, Slide, Button , makeStyles, Tooltip} from '@material-ui/core'

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
    },
    card: {
        zIndex: 2,
        width: "50%",
        float: "right"
    },
    title: {
        overflowX: 'auto'
    }
      
}))

const MovieCard = (props) => {
    
    const [hover, setHover] = useState(false)
    const [clicked, setClicked] = useState(false)
    const classes = useStyles()

    const handleClick = () => {
        props.handleNominated(props.movie)
        setClicked(true)
    }

    return (
        <Grid item xs={12} className={classes.item}>
            <Slide 
            in={true} 
            direction="up"
            {...(true ? { timeout: (props.index + 5) * 100 } : {})}>
                <Paper id={`movie-paper-${props.index}`} className={classes.paper} elevation={!hover ? 3 : 20} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <Tooltip title={`${props.movie.Title} (${props.handleYear(props.movie.Year)})`} arrow={true} placement="top">
                    <Typography variant="overline" className={classes.title}>
                        {props.movie.Title.length > 45 ? props.handleMovieTitle(props.movie.Title, 45) : props.movie.Title} ({props.handleYear(props.movie.Year)})
                    </Typography>
                </Tooltip>
                <Button variant="contained" size="small" disabled={props.listFull || props.movie.selected || clicked} className={classes.button} color="primary" onClick={() => handleClick()}>
                    Nominate
                </Button>
                </Paper>
            </Slide>
        </Grid>
    )
}

export default MovieCard
