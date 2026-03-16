
import emailIcon from "../assets/email-icon.png"
import linkedinIcon from "../assets/linkedin-icon.png"

export default function Information() {
    return (
        <div className="information">
            <h1>Kyle Rohlfing</h1>
            <p>Full-Stack Software Engineer</p>
            <div className="buttons">
                <button className="email-btn" id="email-btn" onClick={(e) => {
                    e.preventDefault()
                    window.location.href='mailto:kylerohlfing27@gmail.com'
                }}><img src={emailIcon} alt="Email" className="icon" />Email</button>
                <button className="linkedin-btn" id="linkedin-btn" onClick={(e) => {
                    e.preventDefault()
                    window.open('https://www.linkedin.com/in/kyle-rohlfing1227/', '_blank').focus()
                }}><img src={linkedinIcon} alt="LinkedIn" className="icon" />LinkedIn</button>
            </div>
        </div>
    )
}