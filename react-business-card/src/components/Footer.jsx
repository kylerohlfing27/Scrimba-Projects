
import gitHubIcon from '../assets/GitHub-Icon.png'

export default function Footer() {
    return (
        <div className="footer">
            <span className="footer-text" onClick={(e) => {
                e.preventDefault()
                window.open('https://github.com/kylerohlfing27', '_blank').focus()
            }}><img src={gitHubIcon} alt="GitHub Icon" className="github-icon" id="github-icon"/>Check out my GitHub!</span>
        </div>
    )
}