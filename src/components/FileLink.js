import { DocumentIcon } from "@heroicons/react/solid";
import { useMatch } from "react-router-dom";
import PropTypes from "prop-types"

function FileLink({
    to,
    name,
    lastChild,
    commitMessage,
}) {
    const active = useMatch(to);

    return (
        <a href={to}>
            <div className={`${!lastChild && "border-b"} border-dark-500 px-4 py-2 flex justify-between items-center`}>
                <div className="flex items-center">
                    <DocumentIcon className="w-4 h-4 mr-4 text-dark-200" />
                    <p className={`text-dark-${active ? "100" : "200"} font-fira-code text-sm`}>{name}</p>
                </div>
                <p className="text-sm text-dark-300 font-fira-code lg:w-52">{commitMessage}</p>
                <p className="hidden text-sm text-dark-300 font-fira-code lg:block">1 month ago</p>
            </div>
        </a>
    );
}

FileLink.propTypes = {
    name: PropTypes.string,
    commitMessage: PropTypes.string,
    to: PropTypes.string,
    lastChild: PropTypes.bool
}

FileLink.defaultProps = {
    to: "#",
    commitMessage: "",
    lastChild: false,
}

export default FileLink;
