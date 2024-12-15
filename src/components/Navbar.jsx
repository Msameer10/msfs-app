export default function Navbar() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark sticky-top" data-bs-theme="dark">
                <div class="container-fluid">
                    <h1><a class="navbar-brand" href="#">MSFS App</a></h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link" href="#">Option 1</a>
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