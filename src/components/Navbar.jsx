import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark sticky-top" data-bs-theme="dark">
                <div class="container-fluid">
                    <h1><Link class="navbar-brand" to="/">MSFS App</Link></h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <Link class="nav-link" to="/about">About</Link>
                        <a class="nav-link" href="#">Option 2</a>
                        <a class="nav-link" href="#">Option 3</a>
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </div>
                    </div>
                </div>
            </nav>
        </header>    
    )
}