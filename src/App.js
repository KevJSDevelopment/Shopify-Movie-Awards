import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import {Typography, makeStyles } from '@material-ui/core'
import Nominations from './Nominations'
import CheckResults from './CheckResults'
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
  root: {
    height: window.innerHeight * 1.10
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
  },
  results: {
    width: "25%",
    margin: "3%",
    borderRadius: "5px 50px 50px 5px",
    float: "right"
  },
  header: {
    marginBottom: "1%"
  }
})

const App = () => {
  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([])
  const [listFull, setListFull] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [resultsPage, setResultsPage] = useState(false)
  const [transitioning, setTransitioning] = useState(false)

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

  const handleresultsPage = () => {
    setResultsPage(true)
  }

  const getNominations = () => {
    let iterator = 0
    const arr = []
    if(localStorage.getItem("submitted")){
      setSubmitted(true)
      setResultsPage(true)
    }
    while(localStorage.getItem(`nomination-${iterator}`)){
      const movieArr = localStorage.getItem(`nomination-${iterator}`).split(",")
      arr.push({ Title: movieArr[0], Year: movieArr[1]})
      iterator++
    }
    setNominations(arr)
  }

  const handleNominate = async () => {
    nominations.forEach(async (nomination) => {
      const res = await fetch(`http://localhost:3000/nominations`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({title: nomination.Title, year: nomination.Year})
      })
      const data = await res.json()
      // if(!data.auth){
      //   return <Alert severity="error">{data.message}</Alert>
      // }
    })
    localStorage.setItem("submitted", "true")
    setSubmitted(true)
    setTransitioning(true)
    setTimeout(handleresultsPage, 2500)
    // return <Alert severity="success"> Successfully nominated: {nominations.forEach(nomination => `${nomination.Title}, (${nomination.Year}), `)} </Alert>
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

const handleMovieTitle = (title, length) => {
    const string = title.substring(0, length) + "..."
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
      <Paper elevation={3} className={classes.header}>
        <Typography variant="h2" color="primary" align="center">
          Shoppies Movie Awards
        </Typography>
      </Paper>
      {resultsPage ? null : <Nominations submitted={submitted} setResultsPage={setResultsPage} transitioning={transitioning} classes={classes} movies={movies} nominations={nominations} fetchMovies={fetchMovies} listFull={listFull} handleYear={handleYear} handleNominated={handleNominated} handleMovieTitle={handleMovieTitle} handleRemoved={handleRemoved} handleNominate={handleNominate}/>}
      {resultsPage ? <CheckResults submitted={submitted} nominations={nominations} setTransitioning={setTransitioning} setResultsPage={setResultsPage} handleYear={handleYear} handleMovieTitle={handleMovieTitle} /> : null}
    </Paper>
  );
}

export default App;
