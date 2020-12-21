import React, { useEffect } from 'react'

const App = () => {

  const fetchMovies = () => {
    fetch("http://www.omdbapi.com/?apikey=[3d1fca0c]&s=batman")
    .then((success) => { success.json() } )
    .then((movies) => { console.log(movies) } )
    .catch((error)=>{ console.log(error)});
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
