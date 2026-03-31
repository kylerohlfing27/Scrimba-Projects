import profilePic from "../assets/hero/profile.jpg"
import locationMarker from "../assets/hero/location.png"
import greenIcon from "../assets/hero/icon-dot-emerald-500.png"
import githubIcon from "../assets/hero/github.png"
import linkedinIcon from "../assets/hero/linked-in.png"

export default function Hero() {
    return (
        <>
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-info">
                        <h1 className="hero-name">Hi, my name's Kyle</h1>
                        <p className="hero-description">I'm a full-stack software engineer with a passion for creating applications that have a real impact, combining thoughtful design with scalable engineering to build solutions that people can rely on. I enjoy working across the entire stack, from crafting intuitive front-end experiences to building robust back-end systems that power them.</p>
                        <div className="hero-supp-info">
                            <img src={locationMarker} alt="Location Marker" className="location-img"/>
                            <p className="location">Littleton, CO</p>
                        </div>
                        <div className="hero-supp-info">
                            <img src={greenIcon} alt="Green Icon" className="available-img"/>
                            <p className="available">Currently available for work</p>
                        </div>
                        <div className="social-icons">
                            <img src={githubIcon} alt="GitHub Icon" className="social-icon" onClick={() => routeLink('https://github.com/kylerohlfing27')} />
                            <img src={linkedinIcon} alt="LinkedIn Icon" className="social-icon" onClick={() => routeLink('https://www.linkedin.com/in/kyle-rohlfing1227/')} />
                        </div>
                    </div>
                    <img src={profilePic} alt="Profile Picture" className="hero-img"/>
                </div>
            </section>
        </>
    )
}

function routeLink(url) {
    window.open(url, '_blank').focus();
}