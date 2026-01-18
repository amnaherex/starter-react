interface Movie {
  title: string;
  url: string;
  id: number;
  date: number;
}

// 1. Fixed the curly brace after the arrow function
const Moviecard = ({ movie }: { movie: Movie }) => {
  
  // 2. Function must be INSIDE the component to access 'movie' prop
  function fav() {
    alert(movie.title + " added to fav");
  }

  return (
    <div id="movie-card" className="flex h-90 w-70 justify-center items-center bg-neutral-400 rounded-md flex-col p-10">
      <div className="bg-red-100" id="movie-poster">
        <img src={movie.url} alt={movie.title} className="w-full h-auto" />
      </div>

      <div
        className="relative md:bottom-[60px] md:left-[55px] bg-neutral-300 rounded-[100px] p-1"
        id="overlay"
      >
        <button onClick={fav} id="fav" className="hover:text-red-500 transition-colors">
          ❤
        </button>
      </div>

      <div id="movie-info" className="text-center">
        <h3 className="font-bold">{movie.title}</h3>
        <p>{movie.date}</p>
      </div>
    </div>
  );
}; // 3. Correctly closed the component here

export default Moviecard;