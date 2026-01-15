import Moviecard from "./components/moviecard"
const App = () => {
  return (
    <div className="h-screen flex w-screen">
     
      <Moviecard movie={ {
        url:"logo.png" , 
        alt:"Stranger Things", 
        title:"Stranger Things",
         date: 2020
      }} />
    </div>
  )
}

export default App
