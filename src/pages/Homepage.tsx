import Moviecard from "~/components/Moviecard"
import { useState } from "react"
const Homepage = () => {
    const movies =[
        {id:1, alt:"movie1", title:"movie 1", date: 2020 },
        {id:2, alt:"movie2", title:"movie 2", date: 2021 },
        {id:3, alt:"movie3", title:"movie 3", date: 2022 }
    ]

    const [search, setsearch] = useState("");

    function handlesubmit(){
        alert(search)
    }

  return (
    
    <div id="home" className="flex flex-col  gap-20 items-center">
        <form className=" h-8 p-1 w-80 flex flex-col items-center " id="searchform" onSubmit={handlesubmit} >
            <label>Search</label>
            <input 
            onChange={e => setsearch(e.target.value)}
            value = {search}    
            className="bg-blue-100 w-full"
            type="text" 
            placeholder="Search for Movies... " /> 

            <button  
            onClick={handlesubmit}
            type="submit" 
            className="bg-orange-500 p=5 rounded-lg w-[100px]">
                Submit</button>
        </form>

      <div id="movies-grid" className="gap-5 flex"> 
            {movies.map(moviee => moviee.title.toLowerCase().startsWith(search) && <Moviecard movie={moviee} key={moviee.id} />

            )}
      </div>
    </div>
  )
}


export default Homepage

