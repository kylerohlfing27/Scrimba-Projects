import aboutImg from "../assets/about/fish.jpeg"

export default function About() {
    return (
        <section className="about" id="about">
            <p className="section-header">About Me</p>
            <div className="about-container">
                <img src={aboutImg} alt="About Me Image" className="about-img"/>
                <div className="about-info">
                    <h2 className="about-title">My Life Story</h2>
                    <p className="about-paragraph">I’m a full-stack software engineer who enjoys building applications that solve real problems and create meaningful impact. I work across the stack with technologies like JavaScript, TypeScript, Python, and modern frameworks to design scalable, user-focused solutions. I value clean architecture, thoughtful design, and continuous learning. I’m always looking for opportunities to collaborate, grow, and build products that people find useful.</p>
                    <p className="about-paragraph">I graduated from the University of Missouri in 2021 with a Bachelor’s degree in Information Technology, emphasizing Computer Science. Through my coursework in Data Structures and Algorithms, Database Systems, Software Engineering, and Object-Oriented Programming, I developed a strong foundation in designing and building software systems.</p>
                    <p className="about-paragraph">After college, I moved to the Denver area to begin my professional career as a Software Test Engineer at DISH Wireless, where I worked on their 5G platform. I then transitioned into an Application Developer role at Nextworld, where I expanded my development skill set and served as a team lead for a group focused on building Procurement and Inventory ERP applications.</p>
                    <p className="about-paragraph">In my free time, I like to spend time with friends, go fishing, snowboard, play both board and video games, and hang out with my cats. I enjoy staying active, unwinding outdoors, and finding time to relax with hobbies that keep me balanced outside of work.</p>
                    <p className="quick-facts">Quick facts about me:</p>
                    <div className="facts-container">
                        <ul className="facts-list">
                            <li className="fact-item">B.S. Information Technology</li>
                            <li className="fact-item">Hobbies include fishing, snowboarding, and gaming</li>
                        </ul>
                        <ul className="facts-list">
                            <li className="fact-item">Passionate about building full-stack applications</li>
                            <li className="fact-item">Avid learner with a continuous growth mindset</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}