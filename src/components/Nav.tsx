import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div  className="flex 
    bg-black h-10 md:h-[60px] w-full  font-bold px-5 md:px-10 items-center justify-between
    ">
        <Link className=" text-2xl
        md:text-3xl text-blue-300
        " to="/">Movie App</Link>
        
        <div className="flex md:gap-10 gap-5 text-white ">
      <Link className="hover:text-blue-200 trasition-all ease-in duration-300" to="/" >Home</Link>
      <Link className="hover:text-blue-200 trasition-all ease-in duration-300" to="/Favs" >Favourites</Link>
      <Link className="hover:text-blue-200 trasition-all ease-in duration-300" to="/Favs" >About</Link>
        </div>
    </div>
  )
}

export default Nav;
