import { FileTree, FileLink } from "../FileSystem";
import { Routes, Route } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import Proy1 from "./Content/Proy1";
import Proy2 from "./Content/Proy2";

export default function AboutMe() {
    return (
        <>
            <Breadcrumb current="_projects"/>

            <FileTree>
                <FileLink name="Proy1.md" to="/projects/proy1" commitMessage="new" />
                <FileLink name="Proy2.md" to="/projects/proy2" commitMessage="updated proys" isLastChild />
            </FileTree>

            <Routes>
                <Route path="" element={<Proy1 />} />
                <Route path="proy1" element={<Proy1 />} />
                <Route path="proy2" element={<Proy2 />} />
            </Routes>
        </>
    );
}