import FileTree from "../components/FileTree";
import FileLink from "../components/FileLink";
import File from "../components/File";
import Breadcrumb from "../components/Breadcrumb";
import config from "../config";

function Projects() {
    return (
        <>
            <Breadcrumb current="_projects" />

            <FileTree>

                {config.projects.map((project, index) => (
                    <FileLink
                        key={index}
                        name={project.title}
                        to={`#${project.name}`}
                    />
                ))}
            </FileTree>

            <File title="README.md" className="px-8 py-10 markdown-body divide-y divide-gray-700" >
                {config.projects.map((project, index) => (
                    <div key={index} className="py-6">
                        <h1 id={project.name} className="mb-2 text-2xl">{project.title}</h1>
                        <p>{project.description}</p>
                        {!project.links.length ? null : (
                            <div className="mt-2">
                                <span className="font-bold">Links</span>
                                <ul>
                                    {project.links.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.href}>{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </File>
        </>
    );
}

export default Projects;
