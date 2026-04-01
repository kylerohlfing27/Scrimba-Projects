import aws from "../assets/skills/aws.png"
import confluence from "../assets/skills/confluence.png"
import figma from "../assets/skills/figma.png"
import git from "../assets/skills/git.png"
import gitlab from "../assets/skills/gitlab.png"
import java from "../assets/skills/java.png"
import javascript from "../assets/skills/js.png"
import mongodb from "../assets/skills/mongo.png"
import nextJs from "../assets/skills/next-js.png"
import nodeJs from "../assets/skills/node-js.png"
import openai from "../assets/skills/openai.png"
import react from "../assets/skills/react.png"
import sql from "../assets/skills/sql.png"
import vite from "../assets/skills/vite.png"

export default function Skills() {
    return (
        <section className="skills" id="skills">
            <p className="section-header">Skills</p>
            <p className="skills-description">The skills, tools, and technologies I use:</p>
            <div className="skills-container">
                <div className="skill">
                    <img src={javascript} alt="Javascript" className="skill-img" />
                    Javascript
                </div>
                <div className="skill">
                    <img src={react} alt="React" className="skill-img" />
                    React
                </div>
                <div className="skill">
                    <img src={nodeJs} alt="Node.js" className="skill-img" />
                    Node.js
                </div>
                <div className="skill">
                    <img src={nextJs} alt="Next.js" className="skill-img" />
                    Next.js
                </div>
                <div className="skill">
                    <img src={vite} alt="Vite" className="skill-img" />
                    Vite
                </div>
                <div className="skill">
                    <img src={java} alt="Java" className="skill-img" />
                    Java
                </div>
                <div className="skill">
                    <img src={sql} alt="SQL" className="skill-img" />
                    SQL
                </div>
                <div className="skill">
                    <img src={git} alt="Git" className="skill-img" />
                    Git
                </div>
                <div className="skill">
                    <img src={gitlab} alt="GitLab" className="skill-img" />
                    GitLab
                </div>
                <div className="skill">
                    <img src={aws} alt="AWS" className="skill-img" />
                    AWS
                </div>
                <div className="skill">
                    <img src={openai} alt="OpenAI" className="skill-img" />
                    OpenAI
                </div>
                <div className="skill">
                    <img src={mongodb} alt="MongoDB" className="skill-img" />
                    MongoDB
                </div>
                <div className="skill">
                    <img src={figma} alt="Figma" className="skill-img" />
                    Figma
                </div>
                <div className="skill">
                    <img src={confluence} alt="Confluence" className="skill-img" />
                    Confluence
                </div>
            </div>
        </section>
    )
}