
const Moviecard = ({movie}) => {

    function fav(){
alert("movie added to fav")
    }

  return (
    <div id="movie-card" className="flex justify-center items-center bg-orange-100 flex-col ">
      <div id="movie-poster">
        <img src={movie.url} alt={movie.title} />
      </div>

      <div id="overlay">
        <button onClick={fav} id="fav">❤</button>
      </div>

      <div id="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.date}</p>
      </div>
    </div>
    
  )
}

export default Moviecard;
