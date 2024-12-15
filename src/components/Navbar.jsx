import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark sticky-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <h1><Link className="navbar-brand" to="/">MSFS App</Link></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link disabled" to="#">Option 2</Link>
                        <Link className="nav-link disabled" to="#">Option 3</Link>
                    </div>
                    </div>
                </div>
            </nav>
        </header>    
    )
}