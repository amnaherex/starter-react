
const Moviecard = ({movie}) => {

    function fav(){
alert(movie.title + " added to fav")
    }

  return (
    <div id="movie-card" className="flex h-90 w-70  justify-center items-center bg-neutral-400 rounded-md flex-col  p-10 ">
      <div className="bg-red-100" id="movie-poster">
        <img src={movie.url} alt={movie.title} />
      </div>

      <div
      className="
                  relative md:bottom-[60px] md:left-[55px]  bg-neutral-300 rounded-[100px] p-1      "
      id="overlay">
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
