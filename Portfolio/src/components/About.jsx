import aboutImg from "../assets/about/fish.jpeg"

export default function About() {
    return (
        <section className="about" id="about">
            <p className="section-header">About Me</p>
            <div className="about-container">
                <img src={aboutImg} alt="About Me Image" className="about-img"/>
                <div className="about-info">
                    <h2 className="about-title">My Life Story</h2>
                    <p className="about-paragraph">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                    <p className="about-paragraph">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                    <p className="about-paragraph">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                    <p className="quick-facts">Quick facts about me:</p>
                    <div className="facts-container">
                        <ul className="facts-list">
                            <li className="fact-item">B.S. Information Technology</li>
                            <li className="fact-item">Fact 2</li>
                        </ul>
                        <ul className="facts-list">
                            <li className="fact-item">Avid learner</li>
                            <li className="fact-item">Fact 4</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}