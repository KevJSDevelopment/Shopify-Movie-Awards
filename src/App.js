import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import MovieCard from './MovieCard'
import NominationCard from './NominationCard'
import { Grid, Typography, TextField, Button, Grow, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    height: window.innerHeight
  },
  search: {
    marginRight: "10%",
    marginLeft: "10%",
  },
  movieContainer: {
    marginLeft: "5%", 
    
  },
  nominationContainer: {
    marginRight: "1%",
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
  }
})

const App = () => {
  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([])
  const [listFull, setListFull] = useState(false)

  const classes = useStyles()

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

  const getNominations = () => {
    let iterator = 0
    const arr = []
    while(localStorage.getItem(`nomination-${iterator}`)){
      const movieArr = localStorage.getItem(`nomination-${iterator}`).split(",")
      arr.push({ Title: movieArr[0], Year: movieArr[1]})
      iterator++
    }
    setNominations(arr)
  }

  const handleNominate = () => {
    nominations.forEach(nomination => {
      fetch(`http://localhost:3000/nominations`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({title: nomination.title, year:nomination.year})
      })
      .then(res => res.json())
      .then(data => {

      })
    })
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
    arr.forEach((nomination, index) => {
      /*
        Using localStorage instead of storing info in the backend database because user should not be required to sign in.
        This way:  
          1) Data still persists 
          2) User can cast nominations without signing up or signing in
          3) The only data stored in local storage is publicly accessable information from the api
      */
      localStorage.setItem(`nomination-${index}`, [nomination.Title, nomination.Year])
    })
  }

  const handleRemoved = (index) => {
    const arr = [...nominations]
    arr.splice(index, 1)
    setNominations(arr)
    localStorage.clear()
    arr.forEach((nomination, index) => {
      localStorage.setItem(`nomination-${index}`, [nomination.Title, nomination.Year])
    })
  }

const handleMovieTitle = (title) => {
    const string = title.substring(0, 45) + "..."
    return string
}

  const handleYear = (year) => {
    const stringLength = year.length
    const lastChar = year.charAt(stringLength - 1)

    if(parseInt(lastChar) || lastChar === "0"){
        return year
    }
    
    year = year.substring(0, stringLength - 1)
    return year
  }

  useEffect(() => {
    checkListFull()
  }, [nominations])

  useEffect(()=> {
    getNominations()
  }, [])

  return (
    <Paper id="App" elevation={3} color="primary" className={classes.root}>
      <Typography variant="h2" color="primary" align="center">
        Shoppies Movie Awards
      </Typography>
      <Grid container direction="column" alignItems="center" spacing={3}>
        <Grid item xs={12} className={classes.gridItems}>
          <Paper elevation={3} className={classes.search}>
            <TextField id="outlined-search" fullWidth={true} label="Search Movies" type="search" autoComplete="off" variant="standard" onChange={(ev) => fetchMovies(ev.target.value)}/>
          </Paper>
        </Grid>
        <Grid item xs={12} className={classes.gridItems}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={5} className={classes.movieContainer}>
              <Paper elevation={3}>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12} className={classes.text}>
                    <Typography variant="overline">
                      Movies
                    </Typography>
                  </Grid>
                    {movies !== [] ? movies.map((movie, index) => {
                      return <MovieCard movie={movie} listFull={listFull} handleMovieTitle={handleMovieTitle} handleYear={handleYear} handleNominated={handleNominated} index={index} key={index} />
                    }) : null}
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={5} className={classes.nominationContainer}>
              <Paper elevation={3}>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12} className={classes.text}>
                    <Typography variant="overline">
                        Your Nominated Movies
                    </Typography>
                  </Grid>
                  {nominations !== [] ? nominations.map((nomination, index) => {
                    return <NominationCard nomination={nomination} handleMovieTitle={handleMovieTitle} handleYear={handleYear} handleRemoved={handleRemoved} index={index} key={index}/>
                  }) : null}  
                  {listFull ? 
                    <Grow in={listFull} timeout={3000}>
                      <Button onClick={() => handleNominate()} variant="contained" className={classes.submit} size="small">
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
