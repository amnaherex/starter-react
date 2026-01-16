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

      <div id="movies-grid" className="gap-5 flex"> 
            {movies.map(moviee => moviee.title.toLowerCase().startsWith(search) && <Moviecard movie={moviee} key={moviee.id} />

            )}
      </div>
    </div>
  )
}


export default Homepage

