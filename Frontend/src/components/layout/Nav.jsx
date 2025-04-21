import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <nav className="hidden md:flex items-center text-white gap-5 font-semibold text-2xl">
        <Link to="/">Home</Link>
        <Link>Movies</Link>
        <Link>Anime</Link>
    </nav>
  )
}

export default Nav