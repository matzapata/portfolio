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
                <FileLink name="CV - Zapata Matias.pdf" to={config.cvDownloadLink} />
                <FileLink name="README.md" to="#about-me" />
            </FileTree>

            <File title="README.md" className="px-8 py-10 markdown-body">
                <h1 id="about-me">About me 👋</h1>
                <p>{config.about}</p>
                <hr className="mt-6 border-gray-800" />

                <h1 id="experience" >Experience</h1>
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
                <hr className="mt-6 border-gray-800" />

                <h1 id="education">Education</h1>
                {config.education.map((ed, index) => (
                    <EducationCard
                        key={index}
                        institution={ed.institution}
                        institutionImageUrl={ed.institutionImageUrl}
                        title={ed.title}
                        timeSpan={ed.timeSpan}
                    />
                ))}
                <hr className="mt-6 border-gray-800" />

            

                <h1 id="skills" >Skills</h1>
                {Object.keys(config.skills).map((s, i) => (
                    <div key={i} className="mb-2">
                        <h2 className="mb-1">{s}</h2>
                        <div className="flex flex-wrap">
                            {config.skills[s].map((v, j) => (<code className="mb-1 mr-2" key={j}>{v}</code>))}
                        </div>
                    </div>
                )
                )}
                <hr className="mt-6 border-gray-800" />
            </File>

        </>
    );
}

export default AboutMe;
