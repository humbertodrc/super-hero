export default function Navbar({exit}) {
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="!#">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="!#">Equipo</a>
                    </li>
                </ul>
                <div className="d-flex">
                    <button className="btn btn-danger btn-sm"  onClick={exit}>Salir</button>
                </div>
                </div>
            </div>
        </nav>
    )
}
