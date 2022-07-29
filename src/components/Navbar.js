import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/"><h1>Reading List 🚀</h1></Link>
            <div className="links">
                {/* Using the 'Link' tags below instead of anchor tags, to assist with the React Router */}
                <Link to="/create" className="custom-btn"><button>New Post</button></Link>
            </div>
        </nav>
     );
}
 
export default Navbar;