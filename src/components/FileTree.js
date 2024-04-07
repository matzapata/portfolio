import { ChatAltIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function FileTree({ children }) {
    return (
        <div className="max-w-3xl m-4 mt-8 border rounded lg:mx-14 border-dark-400">
            <div className="flex items-center justify-between p-4 border-b border-dark-400">
                <div className="flex items-center">
                    <img src="/images/profile.jpg" className="w-5 h-5 rounded-full" alt="profile" />
                    <p className="ml-4 text-sm font-medium text-dark-200 ">matzapata</p>
                </div>
                <div className="flex items-center text-dark-300">
                    <p className="hidden mr-4 text-xs font-fira-code lg:block">Latest commit 8c78247 on May 15, 2021</p>
                    <Link to="/contact-me">
                        <ChatAltIcon className="w-4 h-4" />
                    </Link>
                </div>
            </div>
            <div className="divide-y ">
                {children}
            </div>
        </div>
    );
}

export default FileTree;

