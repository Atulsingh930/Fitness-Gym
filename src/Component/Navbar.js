import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link} from 'react-router-dom'


const Navbar = () => {
  const [query, setquery] = useState("")
const navigate = useNavigate();
  const SearchAPI = (e)=>
  {
    e.preventDefault();
    navigate(`/Search/${query}`)
  }
  return (
    <>
   
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <form className="d-flex" role="search" onSubmit={SearchAPI}>
              <input className="form-control me-2" type="search" placeholder="Search" onChange={(e)=>setquery(e.target.value)} aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
      </div>
    </nav>
    
  </>
  )
}

export default Navbar