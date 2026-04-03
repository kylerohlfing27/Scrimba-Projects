import email from "../assets/contact/gmail.png"
import phone from "../assets/contact/phone.png"

export default function Contact() {
    return(
        <section className="contact" id="contact">
            <p className="section-header">Contact Me</p>
            <p className="contact-description">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
            <a href="mailto:kylerohlfing27@gmail.com" className="contact-item">
                <img src={email} alt="Email" className="contact-img"/>
                <p className="contact-text">kylerohlfing27@gmail.com</p>
            </a>
            <span className="contact-item">
                <img src={phone} alt="Phone" className="contact-img"/>
                <p className="contact-text">314-315-5134</p>
            </span>
        </section>
    )
}