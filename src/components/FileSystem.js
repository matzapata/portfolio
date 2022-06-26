import { MenuAlt1Icon, FolderIcon } from "@heroicons/react/solid";
import { DocumentIcon, ChatAltIcon } from "@heroicons/react/outline";
import profileImage from "../img/profile.jpg";
import { Link } from "react-router-dom";

export function FileLink({ name, active, commitMessage = "", to = "", lastChild = false }) {
    return (
        <Link to={to}>
            <div className={`${!lastChild && "border-b"} border-dark-400 px-4 py-2 flex justify-between items-center`}>
                <div className="flex items-center">
                    <DocumentIcon className="w-4 h-4 mr-4 text-dark-200" />
                    <p className={`text-dark-${active ? "100" : "200"} font-fira-code text-sm`}>{name}</p>
                </div>
                <p className="text-sm text-dark-300 font-fira-code lg:w-52">{commitMessage}</p>
                <p className="hidden text-sm text-dark-300 font-fira-code lg:block">1 month ago</p>
            </div>
        </Link>
    );
}

export function FolderLink({ name, active, commitMessage = "", to = "", lastChild = false }) {
    return (
        <Link to={to}>
            <div className={`${!lastChild && "border-b"} border-dark-400 flex px-4 py-2 items-center justify-between`}>
                <div className="flex items-center">
                    <FolderIcon className="w-4 h-4 mr-4 text-dark-200" />
                    <p className={`text-dark-${active ? "100" : "200"} font-fira-code text-sm`}>{name}</p>
                </div>
                <p className="text-sm text-dark-300 font-fira-code lg:w-52">{commitMessage}</p>
                <p className="hidden text-sm text-dark-300 font-fira-code lg:block">1 month ago</p>
            </div>
        </Link>
    );
}


export function FileTree({ children }) {
    return (
        <div className="max-w-6xl m-4 mt-8 border rounded lg:mx-20 border-[#30363d]">
            <div className="flex lg:bg-dark-500 items-center justify-between p-4 border-b border-[#30363d]">
                <div className="flex items-center">
                    <img src={profileImage} className="w-5 h-5 rounded-full" alt="profile" />
                    <p className="ml-4 text-sm font-medium text-dark-200 ">matzapata</p>
                </div>
                <div className="flex items-center text-dark-300">
                    <p className="hidden mr-4 text-xs font-fira-code lg:block">Latest commit 8c78247 on May 15, 2021</p>
                    <Link to="/contact-me">
                        <ChatAltIcon className="w-4 h-4" />
                    </Link>
                </div>
            </div>
            {children}
        </div>
    );
}


export function File({ title, children, className }) {
    return (
        <div className="max-w-6xl mb-10 md:mx-4 lg:mx-20 md:border border-dark-400 md:rounded-md">
            <div className="flex lg:bg-dark-500 items-center px-4  py-3 border-t lg:border-b md:border-t-0 border-[#30363d]">
                <MenuAlt1Icon className="hidden w-4 h-4 mr-2 text-dark-300 lg:block" />
                <p className="text-xs font-fira-code text-dark-300">{title} 171 lines | 14kb</p>
            </div>
            <div className={`${className} lg:px-20`}>
                {children}
            </div>
        </div>
    );
}