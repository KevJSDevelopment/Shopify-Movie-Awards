import React, { useEffect } from 'react'

const App = () => {

  const fetchMovies = () => {
    // fetch("http://www.omdbapi.com/?apikey=[3d1fca0c]&s=batman")
    // .then((success) => { success.json() } )
    // .then((movies) => { console.log(movies) } )
    // .catch((error)=>{ console.log(error)});
    fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-byyear&page=1&year=2000", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "a2e3b55477msh0ea9f07ff156ef5p1c0080jsn43c96fb2724b",
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
      }  
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
      console.error(err);
    });
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
