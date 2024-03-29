import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import {Typography, makeStyles, Switch } from '@material-ui/core'
import Nominations from './Nominations'
import CheckResults from './CheckResults'
import {ThemeProvider, createMuiTheme} from '@material-ui/core'
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Reset from './Reset'

const theme1 = createMuiTheme({
  palette: {
    primary: {
      light: '#bef67a',
      main: '#8bc34a',
      dark: '#5a9216',
      contrastText: '#222222',
    },
    secondary: {
      light: '#888888',
      main: '#5b5b5b',
      dark: '#323232',
      contrastText: 'whitesmoke',
    },
  },
  typography: {
    fontFamily: [
      'Arvo'
    ].join(','),
  },
})

const theme2 = createMuiTheme({
  palette: {
    primary: {
      light: '#bef67a',
      main: '#8bc34a',
      dark: '#5a9216',
      contrastText: '#222222',
    },
    secondary: {
      light: '#FFFFFF',
      main: '#F5F5F5',
      dark: '#F5F5F5',
      contrastText: '#222222',
    },
  },
  typography: {
    fontFamily: [
      'Arvo'
    ].join(','),
  },
})

const useStyles = makeStyles(theme => ({
  root: {
    height: window.innerHeight * 1.2
  },
  header: {
    marginBottom: "1%"
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
  switch: {
    float: "right",
  },
  light: {
    float: "right"
  },
  dark: {
    float: "right",
    marginRight: "5%"
  }
}))

const App = () => {
  const [movies, setMovies] = useState([])
  const [nominations, setNominations] = useState([])
  const [listFull, setListFull] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [resultsPage, setResultsPage] = useState(false)
  const [transitioning, setTransitioning] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const classes = useStyles()

  const fetchMovies = (search) => {

    const arr = search.split("")

    const key = process.env.REACT_APP_OMDB_API_KEY

    if(search === ""){
      setMovies([])
    }
    if(arr[arr.length - 1] !== " "){
      fetch(`https://www.omdbapi.com/?s=${search}&apikey=${key}`)
      .then((success) => success.json() )
      .then((movies) => {
        if(!movies.Error){
          const movieArr = []
          movies.Search.forEach(movie => {
            let selected = false
            nominations.forEach(nomination => {
                if(nomination.Title === movie.Title && nomination.Year === movie.Year){
                    selected = true
                }
            });
            movieArr.push({Title: movie.Title, Year: movie.Year, selected: selected})
          })
          setMovies(movieArr) 
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
    const server = process.env.REACT_APP_SERVER
    
    nominations.forEach(async (nomination) => {
      await fetch(`${server}/nominations`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({title: nomination.Title, year: nomination.Year})
      })
    })
    localStorage.setItem("submitted", "true")
    setSubmitted(true)
    setTransitioning(true)
    setTimeout(handleresultsPage, 2500)
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
      localStorage.setItem(`nomination-${index}`, [nomination.Title, nomination.Year])
    })
  }

  const handleRemoved = async (index) => {
    const arr = [...nominations]
    arr.splice(index, 1)
    setNominations(arr)
    localStorage.clear()
    arr.forEach((nomination, index) => {
      localStorage.setItem(`nomination-${index}`, [nomination.Title, nomination.Year])
    })
    const search = document.querySelector("#outlined-search")
    search.value = ""
    fetchMovies(search.value)
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

  const reset = () => {
    localStorage.clear()
    setResultsPage(false)
    setNominations([])
    setSubmitted(false)
    setTransitioning(false)
    fetchMovies("")
  }

  useEffect(() => {
    checkListFull()
  }, [nominations])

  useEffect(()=> {
    getNominations()
  }, [])

  return (
    <ThemeProvider theme={darkMode ? theme1 : theme2}>
      <Paper id="App" elevation={3} className={classes.root} style={{backgroundColor: darkMode ? theme1.palette.secondary.dark : theme2.palette.secondary.main}}>
        <Paper elevation={3} className={classes.header} style={{backgroundColor: darkMode ? theme1.palette.secondary.main : theme2.palette.secondary.light}}>
          <Typography variant="h2" color="primary" align="center">
            Shoppies Movie Awards
          </Typography>
        </Paper>
        <Brightness3Icon className={classes.dark} style={{color: darkMode ? theme1.palette.primary.main : theme1.palette.secondary.light}}/>
        <Switch size="small" color="primary" checked={darkMode} className={classes.switch} onChange={() => setDarkMode(!darkMode)} />
        <BrightnessHighIcon className={classes.light} color={darkMode ? "secondary" : "primary"}/> 
        {resultsPage ? null : <Nominations submitted={submitted} setResultsPage={setResultsPage} transitioning={transitioning} classes={classes} movies={movies} nominations={nominations} fetchMovies={fetchMovies} listFull={listFull} handleYear={handleYear} handleNominated={handleNominated} handleMovieTitle={handleMovieTitle} handleRemoved={handleRemoved} handleNominate={handleNominate}/>}
        {resultsPage ? <CheckResults submitted={submitted} nominations={nominations} setTransitioning={setTransitioning} setResultsPage={setResultsPage} handleYear={handleYear} handleMovieTitle={handleMovieTitle} /> : null}
        {submitted ? <Reset reset={reset} submitted={submitted} /> : null}
      </Paper>
    </ThemeProvider>
  );
}

export default App;
