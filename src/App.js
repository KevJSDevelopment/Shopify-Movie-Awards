import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import MovieCard from './MovieCard'
import NominationCard from './NominationCard'
import { Grid, Typography, TextField } from '@material-ui/core'

const App = () => {
  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([])
  // const [search, setSearch] = useState("")

  const fetchMovies = (search) => {

    fetch(`http://www.omdbapi.com/?s=${search}&apikey=a77eded2`)
    .then((success) => success.json() )
    .then((movies) => {
      if(!movies.Error){
        setMovies(movies.Search) 
      }
      else if(movies.Error !== "Too many results."){
        setMovies([])
      }
    })

  }

  return (
    <div className="App">
      <Grid container direction="column" alignItems="center" spacing={3}>
        <Grid item xs={12} style={{width: "100%"}}>
          <Paper elevation={3} style={{textAlign: "center"}} >
            <TextField id="outlined-search" label="Search Movies" type="search" variant="standard" onChange={(ev) => fetchMovies(ev.target.value)}/>
          </Paper>
        </Grid>
        <Grid item xs={12} style={{width: "100%"}}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={6}>
              <Paper elevation={3} >
                <Grid container direction="column" spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="overline">
                      Movies
                    </Typography>
                  </Grid>
                    {movies !== [] ? movies.map((movie, index) => {
                      return <MovieCard movie={movie} count={index} />
                    }) : null}
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3}>
                <Typography variant="overline">
                    Your Nominated Movies
                </Typography>
                {nominations !== [] ? nominations.map( nomination => {
                  return <NominationCard nomination/>
                }): null}      
              </Paper>
            </Grid>
          </Grid>    
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
