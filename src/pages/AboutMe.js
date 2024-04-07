import File from "../components/File";
import FileTree from "../components/FileTree";
import FileLink from "../components/FileLink";
import FolderLink from "../components/FolderLink";
import Breadcrumb from "../components/Breadcrumb";
import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import config from "../config";

function AboutMe() {
    return (
        <>
            <Breadcrumb current="_about-me" />

            <FileTree>
                <FolderLink name="Education" to="#education" />
                <FolderLink name="Experience" to="#experience" />
                <FolderLink name="Skills.md" to="#skills" />
                <FileLink name="CV - Zapata Matias.pdf" to={config.cv} />
                <FileLink name="README.md" to="#about-me" />
            </FileTree>

            <File title="README.md" className="px-8 py-10 markdown-body divide-y divide-gray-700">
                <div className="py-6 space-y-2">
                    <h1 id="about-me" className="text-lg font-medium">About me 👋</h1>
                    Hi, I'm Matias Zapata, a full-stack software developer. A short summary of my life for you quick reader: 'I just love building products with technology' all the rest is a subproduct of that underlying principle. Another important thing for you to know, I love learning and I hate ignorance so wathever you read here about what I know, is already out of date.
                    <br />
                    I have an electronics background so development in C and C++ is my root but the willingness to make products people use lead me to focus in Node.js, React, Nextjs, Typescript, SQL, and many languages and frameworks more. I have hands-on experience with app development using React Native and have dived into the web3 realm, working on solutions involving smart wallets, decentralized exchanges (DEXes), bridges, etc. As an agile and proactive team member, I actively contributed to core feature developments including payment systems, wallet management, and user experience. Beyond coding, I participated in QA testing and provided valuable feedback during pull request reviews. I also participated as a propulsion team member in the Shell Eco Marathon where we won a podium in LATAM!
                </div>

                <div className="py-6 space-y-2">
                    <h1 id="experience" className="text-lg font-medium">Experience</h1>
                    {config.experience.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            title={exp.title}
                            company={exp.company}
                            companyImageUrl={exp.companyImageUrl}
                            description={exp.description}
                            timeSpan={exp.timeSpan}
                            place={exp.place}
                        />
                    ))}
                </div>

                <div className="py-6 space-y-2">
                    <h1 id="education" className="text-lg font-medium">Education</h1>
                    {config.education.map((ed, index) => (
                        <EducationCard
                            key={index}
                            institution={ed.institution}
                            institutionImageUrl={ed.institutionImageUrl}
                            title={ed.title}
                            timeSpan={ed.timeSpan}
                        />
                    ))}
                </div>

                <div className="py-6 space-y-2">
                    <h1 id="skills" className="text-lg font-medium">Skills</h1>
                    {Object.keys(config.skills).map((s, i) => (
                        <div key={i} className="mb-2">
                            <h2 className="mb-1">{s}</h2>
                            <div className="flex flex-wrap">
                                {config.skills[s].map((v, j) => (<code className="mb-1 mr-2" key={j}>{v}</code>))}
                            </div>
                        </div>
                    ))}
                </div>

            </File>

        </>
    );
}

export default AboutMe;
