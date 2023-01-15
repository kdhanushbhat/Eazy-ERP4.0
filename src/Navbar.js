import logo from "./ez.png";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md sticky-top bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#home">
          <img src={logo} alt="logo" className="logo ms-3 rounded" />
        </a>
        <button
          className="navbar-toggler"
          style={{ backgroundColor: "white" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <hr />
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-light ">
            <li className="nav-item">
              <a className="nav-link " href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#whaterp">
                What is ERP?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ezstart">
                About EaZy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactform">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
