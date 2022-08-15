import { MenuAlt1Icon } from "@heroicons/react/solid";

function File({
    title,
    children,
    className
}) {
    return (
        <div className="max-w-3xl mb-10 md:mx-4 lg:mx-14 md:border border-dark-500 md:rounded-md">
            <div className="flex items-center px-4 py-3 border-t lg:border-b md:border-t-0 border-dark-400">
                <MenuAlt1Icon className="hidden w-4 h-4 mr-2 text-dark-300 lg:block" />
                <p className="text-xs font-fira-code text-dark-300">{title} 171 lines | 14kb</p>
            </div>
            <div className={`${className} lg:px-20`}>
                {children}
            </div>
        </div>
    );
}

export default File;
