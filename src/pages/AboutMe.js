import File from "../components/File"
import FileTree from "../components/FileTree"
import FileLink from "../components/FileLink"
import FolderLink from "../components/FolderLink"
import Breadcrumb from "../components/Breadcrumb";
import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";

function AboutMe() {
    return (
        <>
            <Breadcrumb current="_about-me" />

            <FileTree>
                <FolderLink name="Education" to="#education" />
                <FolderLink name="Experience" to="#experience" />
                <FolderLink name="Skills.md" to="#skills" />
                <FileLink name="README.md" to="#about-me" />
            </FileTree>

            <File title="README.md" className="px-8 py-10 markdown-body">
                <h1 id="about-me">About me</h1>
                <p>Full stack developer and electronic engineering student passionate about technology and its application in business. Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full-stack Developer.</p>

                <hr className="mt-6 border-gray-800" />

                <h1 id="education" >Education</h1>
                <ol>
                    <EducationCard
                        institution="Henry"
                        institutionImageUrl="/images/henry.jpg"
                        title="Full Stack Developer"
                        timeSpan="may. 2022 - ago. 2022"
                    />
                    <EducationCard
                        institution="Universidad Tecnologica Nacional"
                        institutionImageUrl="/images/utn.jpg"
                        title="Electronic engineering"
                        timeSpan="mar. 2018 - nov. 2024"
                    />
                    <EducationCard
                        institution="Coursera"
                        institutionImageUrl="/images/coursera.jpg"
                        title="Understanding plants - Part I: What a plant knows"
                        timeSpan="2020"
                    />
                    <EducationCard
                        institution="Instituto general pacheco"
                        institutionImageUrl="/images/igp.jpg"
                        title="High school with economics orientation"
                        timeSpan="nov. 2017"
                    />
                    <EducationCard
                        institution="UTN"
                        institutionImageUrl="/images/utn.jpg"
                        title="Basic robotics course"
                        timeSpan="2016"
                    />
                </ol>

                <hr className="mt-6 border-gray-800" />

                <h1 id="experience" >Experience</h1>
                <ol>
                    <ExperienceCard
                        title="KiriFan propulsion team member"
                        company="KiriFan"
                        companyImageUrl="/images/kiri-fan.jpg"
                        description="Design and manufacture of embedded systems for data
                        collection and control of a BLDC motor for the Shell eco
                        matathon competition."
                        timeSpan="2019 - 2020 · 1 years"
                        place="Buenos Aires, Argentina"
                    />
                    <ExperienceCard
                        title="Product design"
                        company="Kraken"
                        companyImageUrl="/images/placeholder.jpg"
                        description="Design and manufacture of embedded systems for data
                        collection and control of a BLDC motor for the Shell eco
                        matathon competition."
                        timeSpan="2019 - 2020 · 2 years"
                        place="Buenos Aires, Argentina"
                    />
                    <ExperienceCard
                        title="Design and manufacture of 3D printed parts"
                        company="Freelance"
                        companyImageUrl="/images/placeholder.jpg"
                        timeSpan="2018 - present"
                        place="Buenos Aires, Argentina"
                    />
                    <ExperienceCard
                        title="CAD Designer"
                        company="ArqRaz"
                        companyImageUrl="/images/placeholder.jpg"
                        timeSpan="2017 - 2018"
                        description="Design of 2D and 3D architectonic blueprints for family homes"
                        place="Buenos Aires, Argentina"
                    />
                </ol>

                <hr className="mt-6 border-gray-800" />

                <h1 id="skills" >Skills</h1>
                <ul>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Redux with redux toolkit</li>
                    <li>Typescript</li>
                    <li>Css</li>
                    <li>Css frameworks like bootstrap, bulma and tailwindcss</li>
                    <li>Chakra UI</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>C</li>
                    <li>HTML</li>
                    <li>Bash</li>
                    <li>Linux</li>
                </ul>
            </File>

        </>
    );
}

export default AboutMe;
