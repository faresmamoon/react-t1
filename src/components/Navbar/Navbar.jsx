import style from './Navbar.module.css'

function Navbar(){
   
    return <>
   <nav className={` navbar navbar-expand-lg    ${style.test}`}>
  <div className="container ">
    <a className="navbar-brand text-white fs-2 " href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto  ">
        <a className="nav-link active text-white fs-4" aria-current="page" href="#">Portfolio</a>
        <a className="nav-link text-white fs-4" href="#">About</a>
        <a className="nav-link text-white fs-4" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>

    </>
}
export default  Navbar 