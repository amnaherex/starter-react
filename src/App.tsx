import Homepage from "./pages/Homepage"
import { Routes,Route } from "react-router-dom";
import Favs from "./pages/Favs"
import Nav from "./components/Nav";
const App = () => {
  return (
    <div>
      <Nav/>
    <main className="h-screen flex justify-center items-center ">
      <Routes>
     <Route path="/"   element={<Homepage/>} />
     <Route path="/favs" element={<Favs/>} / >
      </Routes> 
    </main>
    </div>
  )
}

export default App
