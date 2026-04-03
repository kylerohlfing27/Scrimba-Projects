import logo from "../assets/nav/kr-logo.png"

export default function Nav() {
    return (
        <>
            <div className="nav-container">
                <img src={logo} alt="logo" className="nav-logo" onClick={logoClick}/>
                <nav className="nav">
                    <a href="#about" className="nav-links">About</a>
                    <a href="#skills" className="nav-links">Skills</a>
                    <a href="#experience" className="nav-links">Experience</a>
                    {/* <a href="#projects" className="nav-links">Projects</a> */}
                    <a href="#contact" className="nav-links">Contact</a>
                </nav>
            </div>
        </>
    )
}

function logoClick() {
    window.location.href = "#"
}