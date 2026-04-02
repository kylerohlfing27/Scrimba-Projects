

export default function Projects() {
    return(
        <section className="projects" id="projects">
            <p className="section-header">Projects</p>
            <p className="projects-description">Some of my noteworthy projects:</p>
            <div className="projects-container">
                <div className="project-image">
                    <img src="#" alt="Project Image" className="project-img"/>
                </div>
                <div className="project-info">
                    <h3 className="project-title">Project Title</h3>
                    <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur. Sed at ligula a enim efficitur commodo.</p>
                    <a href="#" className="project-link">
                        <img src="#" alt="Project Link" className="link-img"/>
                    </a>
                </div>
            </div>
        </section>
    )
}