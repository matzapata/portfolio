import { Link } from "react-router-dom";
import File from "./File"

function NotFound() {
    return (
        <div className="flex-1 md:mt-8">
            <File title="404.jsx" className="p-8 markdown-body" >
                <h1>404 NOT FOUND</h1>
                <p>The requested URL has not been found.</p>
                <Link to="/">Go back home</Link>
            </File>
        </div>
    );
}

export default NotFound;
