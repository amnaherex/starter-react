import Moviecard from "~/components/Moviecard"
import { useState , useEffect} from "react";
import {getmovie,search } from "../services/api";
const Homepage = () => {
    const [movies , setmovies] = useState([]);
    const [loading , setloading] = useState(true);
    const [error , seterror] = useState("");
    const [searchQuery, setsearch] = useState("");

    function handlesubmit(){
        alert(search)
    }

    

    useEffect( ()=> {
      async function call( ){
      try {
        const data = await getmovie();
        setmovies(data);
      } catch (error) {
        console.log("theres some error");
        seterror("there is an error");
      }
      finally{
        setloading(false);
      }
    }
    call();
    } , [])

  return (
    
    <div id="home" className="md:p-10 p-5 flex flex-col h-screen bg-neutral-800 w-full items-center md:gap-10">
        <form className=" flex gap-5 " id="searchform" onSubmit={handlesubmit} >
            <input 
            onChange={e => setsearch(e.target.value)}
            value = {search}    
            className="bg-white rounded-sm p-2 w-100 "
            type="text" 
            placeholder="Search for Movies... " /> 

            <button  
            onClick={handlesubmit}
            type="submit" 
            className="text-white font-bold bg-red-500 rounded-sm  p-2 w-20 ">
                Submit</button>
        </form>

      <div className="movies-grid">
          {movies.map((movie) => (
            <Moviecard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>

  )
}


export default Homepage

