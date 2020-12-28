import React from 'react'
import MovieCard from './MovieCard'
import NominationCard from './NominationCard'
import {Grid, TextField, Button, Grow, Paper, Typography, Slide, makeStyles} from '@material-ui/core'


const Nominations = (props) => {

    return (
        <Slide in={!props.transitioning} direction="right" timeout={{exit: 2000, enter:  0}}>
            <Grid container direction="column" alignItems="center" spacing={3}>
                <Grid item xs={12} className={props.classes.gridItems}>
                    <Paper elevation={3} className={props.classes.search}>
                        <TextField id="outlined-search" fullWidth={true} label="Search Movies" type="search" autoComplete="off" variant="standard" onChange={(ev) => props.fetchMovies(ev.target.value)}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} className={props.classes.gridItems}>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={5} className={props.classes.movieContainer}>
                            <Paper elevation={3}>
                                <Grid container direction="column" spacing={2}>
                                <Grid item xs={12} className={props.classes.text}>
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
                        <Grid item xs={5} className={props.classes.nominationContainer}>
                            <Paper elevation={3}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item xs={12} className={props.classes.text}>
                                        <Typography variant="overline">
                                            Your Nominated Movies
                                        </Typography>
                                    </Grid>
                                    {props.nominations !== [] ? props.nominations.map((nomination, index) => {
                                        return <NominationCard nomination={nomination} submitted={props.submitted} handleMovieTitle={props.handleMovieTitle} handleYear={props.handleYear} handleRemoved={props.handleRemoved} index={index} key={index}/>
                                    }) : null}  
                                    {props.listFull ? 
                                        <Grow in={props.listFull} timeout={3000}>
                                            {!props.submitted ? <Button onClick={() => props.handleNominate()} variant="contained" className={props.classes.submit} size="small">
                                                Submit Nominations
                                            </Button> : 
                                            <Button variant="contained" className={props.classes.submit} disabled size="small">
                                                Submit Nominations
                                            </Button>}
                                        </Grow>
                                    : null}    
                                </Grid>
                            </Paper> 
                            <Grow in={props.submitted} timeout={1000} className={props.classes.results}>
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
