import { FileTree, FolderLink, FileLink, File } from "../FileSystem";
import { Routes, Route } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import Project1 from "./Content/Project1";

export default function AboutMe() {
    return (
        <>
            <Breadcrumb current="_projects"/>

            <FileTree>
                <FolderLink name="interests" active commitMessage="3 items"/>
                <FolderLink name="education" commitMessage="3 items"/>
                <FileLink name="College.md" to="college" commitMessage="new" />
                <FileLink name="Henry.md" to="henry" commitMessage="updated proys" isLastChild />
            </FileTree>

            <Routes>
                <Route path="" element={
                    <File title="College.md" className="p-8 markdown-body" children={<Project1 />}/>
                } />
                <Route path="henry" element={
                    <File title="Henry.md" className="p-8 markdown-body" >
                        <h1>Henry</h1>
                    </File>
                } />
            </Routes>
        </>
    );
}