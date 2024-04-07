import { DocumentIcon } from "@heroicons/react/solid";
import { useMatch } from "react-router-dom";
import PropTypes from "prop-types"

function FileLink({
    to,
    name,
    commitMessage,
}) {
    const active = useMatch(to);

    return (
        <a href={to}>
            <div className={`px-4 py-2 flex justify-between items-center`}>
                <div className="flex items-center">
                    <DocumentIcon className="w-4 h-4 mr-4 text-dark-200" />
                    <p className={`text-dark-${active ? "100" : "200"} font-fira-code text-sm`}>{name}</p>
                </div>
                <p className="text-sm text-dark-300 font-fira-code lg:w-52">{commitMessage}</p>
            </div>
        </a>
    );
}

FileLink.propTypes = {
    name: PropTypes.string,
    commitMessage: PropTypes.string,
    to: PropTypes.string,
}

FileLink.defaultProps = {
    to: "#",
    commitMessage: "",
}

export default FileLink;
