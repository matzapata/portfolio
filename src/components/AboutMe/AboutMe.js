import { FileTree, FolderLink, FileLink } from "../FileSystem";
import { Routes, Route } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import Skills from "./content/Skills";
import Readme from "./content/Readme";
import Interests from "./content/Interests";
import Education from "./content/Education";
import Experience from "./content/Experience";

export default function AboutMe() {
    return (
        <>
            <Breadcrumb current="_about-me" />

            <FileTree>
                <FolderLink name="Interests" to="/about-me/interests" commitMessage="updated proys" isLastChild />
                <FolderLink name="Education" to="/about-me/education" commitMessage="3 items" />
                <FolderLink name="Experience" to="/about-me/experience" commitMessage="3 items" />
                <FolderLink name="Skills.md" to="/about-me/skills" commitMessage="new" />
                <FileLink name="README.md" to="/about-me" commitMessage="3 items" />
            </FileTree>

            <Routes>
                <Route path="" element={<Readme />}/>
                <Route path="skills" element={<Skills />}/>
                <Route path="education" element={<Education />}/>
                <Route path="interests" element={<Interests />}/>
                <Route path="experience" element={<Experience />}/>
            </Routes>

        </>
    );
}