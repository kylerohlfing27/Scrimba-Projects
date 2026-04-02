import nextworld from "../assets/experience/nextworld.png"
import dish from "../assets/experience/dish.png"
import scholarpath from "../assets/experience/scholarpath.png"

export default function Experience() {
    return(
        <section className="experience" id="experience">
            <p className="section-header">Experience</p>
            <p className="experience-description">A quick summary of my most recent experiences:</p>
            <div className="experience-container">
                <img src={nextworld} alt="Nextworld Logo" className="nextworld-img"/>
                <div className="experience-info">
                    <h3 className="experience-title">Application Developer</h3>
                    <ul className="experience-list">
                        <li className="experience-list-item">Acted as Procurement Lead on a multi-month cross-functional initiative, designing and implementing an automated process to aggregate and validate inventory data as it entered the system</li>
                        <li className="experience-list-item">Partnered with Product and Engineering as Procurement Lead to design and implement Consigned Inventory functionality, translating operational requirements into new platform functionality</li>
                        <li className="experience-list-item">Designed, developed, and optimized business applications using a no-code platform, designing workflows and logic to enhance core functionality</li>
                        <li className="experience-list-item">Delivered secure integrations with external applications and REST APIs, improving data consistency and reporting accuracy across platforms</li>
                        <li className="experience-list-item">Developed new platform functionality and delivered demos to stakeholders for review and adoption</li>
                        <li className="experience-list-item">Created reusable components and templates, accelerating development timelines and supporting team-wide efficiency</li>
                    </ul>
                </div>
                <p className="experience-dates">Mar 2023 - Jan 2026</p>
            </div>
            <div className="experience-container">
                <img src={dish} alt="DISH Logo" className="dish-img"/>
                <div className="experience-info">
                    <h3 className="experience-title">Software Test Engineer</h3>
                    <ul className="experience-list">
                        <li className="experience-list-item">Performed manual and automated regression testing across software applications and live network platform with Java scripting</li>
                        <li className="experience-list-item">Analyzed defects and test results, providing feedback to development teams</li>
                        <li className="experience-list-item">Wrote and optimized SQL queries for dynamic data retrieval and database record management in test environments</li>
                    </ul>
                </div>
                <p className="experience-dates">Mar 2022 - Mar 2023</p>
            </div>
            <div className="experience-container">
                <img src={scholarpath} alt="Scholarpath Logo" className="scholarpath-img"/>
                <div className="experience-info">
                    <h3 className="experience-title">Technology Development Intern</h3>
                    <ul className="experience-list">
                        <li className="experience-list-item">Full-stack development of component-based web applications using Laravel & PostgreSQL</li>
                    </ul>
                </div>
                <p className="experience-dates">Jun 2020 - Aug 2020</p>
            </div>
        </section>
    )
}