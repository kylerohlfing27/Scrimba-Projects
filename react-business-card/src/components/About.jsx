
import emailIcon from "../assets/email-icon.png"
import linkedinIcon from "../assets/linkedin-icon.png"

export default function About() {
    return (
        <div className="about">
            <h1>Kyle Rohlfing</h1>
            <p>Full-Stack Software Engineer</p>
            <div className="buttons">
                <button className="email-btn" id="email-btn"><img src={emailIcon} alt="Email" className="icon" />Email</button>
                <button className="linkedin-btn" id="linkedin-btn"><img src={linkedinIcon} alt="LinkedIn" className="icon" />LinkedIn</button>
            </div>
            <div className="about-section">
                <h2>About</h2>
                <p>I'm a full-stack software engineer with a passion for creating innovative and efficient solutions. With experience in both front-end and back-end development, I enjoy working on projects that challenge me to learn and grow as a developer.</p>
                <h2>Interests</h2>
                <p>In my free time, I enjoy hiking, playing video games, and exploring new technologies. I'm always eager to connect with other professionals in the industry and collaborate on exciting projects.</p>
            </div>
        </div>
    )
}