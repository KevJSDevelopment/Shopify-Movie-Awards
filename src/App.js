import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import MovieCard from './MovieCard'
import NominationCard from './NominationCard'
import { Grid, Typography, TextField, Button, Grow } from '@material-ui/core'

const App = () => {
  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([])
  const [listFull, setListFull] = useState(false)

  const fetchMovies = (search) => {

    const arr = search.split("")

    const key = process.env.REACT_APP_OMDB_API_KEY

    if(search === ""){
      setMovies([])
    }
    if(arr[arr.length - 1] !== " "){
      fetch(`http://www.omdbapi.com/?s=${search}&apikey=${key}`)
      .then((success) => success.json() )
      .then((movies) => {
        if(!movies.Error){
          setMovies(movies.Search) 
        }
      })
    }

  }

  const handleNominate = () => {

  }

  const checkListFull = () => {
    if(nominations.length >= 5){
      setListFull(true)
    }
    else{
      setListFull(false)
    }
  }
  const handleNominated = (movie) => {
    const arr = [...nominations]
    arr.push(movie)
    setNominations(arr)
  }

  const handleRemoved = (index) => {
    const arr = [...nominations]
    arr.splice(index, 1)
    setNominations(arr)
  }

  useEffect(() => {
    checkListFull()
  }, [nominations])

  return (
    <Paper id="App" elevation={3} color="primary" style={{height: window.innerHeight}}>
      <Typography variant="h2" color="primary" align="center">
        Shoppies
      </Typography>
      <Grid container direction="column" alignItems="center" spacing={3}>
        <Grid item xs={12} style={{width: "100%"}}>
          <Paper elevation={3} style={{textAlign: "center"}} >
            <TextField id="outlined-search" fullWidth={true} label="Search Movies" type="search" autoComplete="off" variant="standard" onChange={(ev) => fetchMovies(ev.target.value)}/>
          </Paper>
        </Grid>
        <Grid item xs={12} style={{width: "100%"}}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={6}>
              <Paper elevation={3}>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="overline">
                      Movies
                    </Typography>
                  </Grid>
                    {movies !== [] ? movies.map((movie, index) => {
                      return <MovieCard movie={movie} listFull={listFull} handleNominated={handleNominated} index={index} key={index} />
                    }) : null}
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3}>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="overline">
                        Your Nominated Movies
                    </Typography>
                  </Grid>
                  {nominations !== [] ? nominations.map((nomination, index) => {
                    return <NominationCard nomination={nomination} handleRemoved={handleRemoved} index={index} key={index}/>
                  }) : null}  
                  {listFull ? 
                    <Grow in={listFull} timeout={3000}>
                      <Button onClick={() => handleNominate()} variant="contained" style={{float: "right"}} size="small">
                        Submit Nominations
                      </Button> 
                    </Grow>
                  : null}    
                </Grid>
              </Paper>             
            </Grid>
          </Grid>    
        </Grid>
      </Grid>
    </Paper>
  );
}

export default App;
