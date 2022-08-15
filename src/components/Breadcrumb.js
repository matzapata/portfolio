import { AcademicCapIcon, AtSymbolIcon, BookOpenIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Breadcrumb({ current }) {
    return (
        <div className="border-b font-fira-code border-dark-500 bg-dark-700 lg:px-8">
            <div className="flex items-center p-6 text-blue-400">
                <BookOpenIcon className="w-5 h-5 mr-4 text-dark-300" />
                <p className="lg:text-lg">
                    <Link to="/">matzapata</Link>
                    <span className="text-dark-300"> / </span>
                    {current}
                </p>
            </div>
            <div className="flex px-6 pb-4 space-x-4">
                <div className="flex items-center text-dark-300">
                    <AcademicCapIcon className="w-4 h-4 mr-2" />
                    <a href="https://www.linkedin.com/in/matias-zapata-b57406143" className="text-sm">Linkedin</a>
                </div>
                <div className="flex items-center text-dark-300">
                    <AtSymbolIcon className="w-4 h-4 mr-2" />
                    <a href="mailto:matuzapata@gmail.com" className="text-sm">Email</a>
                </div>
            </div>
        </div>
    );
}

Breadcrumb.propTypes = {
    current: PropTypes.string
};

export default Breadcrumb;