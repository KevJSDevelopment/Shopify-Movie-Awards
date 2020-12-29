import React from 'react'
import MovieCard from './MovieCard'
import NominationCard from './NominationCard'
import {Grid, TextField, Button, Grow, Paper, Typography, Slide, makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    search: {
      marginRight: "10%",
      marginLeft: "10%",
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },
    movieContainer: {
      marginLeft: "5%"
    },
    gridItems: {
      width: "100%"
    },
    text: {
      textAlign: "center"
    },
    submit: {
      width: "94%",
      margin: "3%",
    },
    results: {
      width: "25%",
      margin: "3%",
      borderRadius: "5px 50px 50px 5px",
      float: "right",
      color: theme.palette.secondary.contrastText
    },
    paper: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        maxHeight: window.innerHeight * .8,
        overflowY: "auto"
    },
    label: {
        color: theme.palette.secondary.contrastText,
    },
    input: {
        color: theme.palette.secondary.contrastText,
    },
}))

const Nominations = (props) => {

    const classes = useStyles()

    return (
        <Slide in={!props.transitioning} direction="right" timeout={{exit: 2000, enter:  0}}>
            <Grid container direction="column" alignItems="center" spacing={3}>
                <Grid item xs={12} className={classes.gridItems}>
                    <Paper elevation={3} className={classes.search}>
                        <TextField id="outlined-search" fullWidth={true} InputLabelProps={{className: classes.label}} InputProps={{className: classes.input}} label="Search Movies" type="search" autoComplete="off" variant="standard" onChange={(ev) => props.fetchMovies(ev.target.value)}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} className={classes.gridItems}>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={5} className={classes.movieContainer}>
                            <Paper elevation={3} className={classes.paper}>
                                <Grid container direction="column">
                                <Grid item xs={12} className={classes.text}>
                                    <Typography variant="overline">
                                    Movies
                                    </Typography>
                                </Grid>
                                    {props.movies !== [] ? props.movies.map((movie, index) => {
                                    return <MovieCard movie={movie} listFull={props.listFull} handleMovieTitle={props.handleMovieTitle} handleYear={props.handleYear} handleNominated={props.handleNominated} index={index} key={index} />
                                    }) : null}
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={1}>

                        </Grid>
                        <Grid item xs={5} className={classes.nominationContainer}>
                            <Paper elevation={3} className={classes.paper}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item xs={12} className={classes.text}>
                                        <Typography variant="overline">
                                            Your Nominated Movies
                                        </Typography>
                                    </Grid>
                                    {props.nominations !== [] ? props.nominations.map((nomination, index) => {
                                        return <NominationCard nomination={nomination} submitted={props.submitted} handleMovieTitle={props.handleMovieTitle} handleYear={props.handleYear} handleRemoved={props.handleRemoved} index={index} key={index}/>
                                    }) : null}  
                                    {props.listFull ? 
                                        <Grow in={props.listFull} timeout={3000}>
                                            {!props.submitted ? <Button onClick={() => props.handleNominate()} color="primary" variant="contained" className={classes.submit} size="small">
                                                Submit Nominations
                                            </Button> : 
                                            <Button variant="contained" className={classes.submit} disabled size="small">
                                                Submit Nominations
                                            </Button>}
                                        </Grow>
                                    : null}    
                                </Grid>
                            </Paper> 
                            <Grow in={props.submitted} timeout={1000} className={classes.results}>
                                <Button onClick={() => props.setResultsPage(true)} color="primary" variant="contained" size="small">
                                    See Results
                                </Button>    
                            </Grow>
                        </Grid>
                    </Grid>    
                </Grid>
            </Grid>
        </Slide>
    )
}

export default Nominations
