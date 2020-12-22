import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import MovieCard from './MovieCard'
import { Grid } from '@material-ui/core'

const App = () => {
  const [movies, setMovies] = useState([])

  const fetchMovies = () => {

    fetch("http://www.omdbapi.com/?s=hey&apikey=a77eded2")
    .then((success) => success.json() )
    .then((movies) => setMovies(movies) )

  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div className="App">
      <Grid container direction="row">
        <Paper elevation={3} className={classes.Container}>
            {movies.map( movie => {
              return <MovieCard movie={movie} />
            })}
        </Paper>
      </Grid>
    </div>
  );
}

export default App;
