import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Link, useMatch } from "react-router-dom";


export default function NavBar() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => { setOpen(open => !open); };

    function MobileNavLink({ to, text }) {
        return (
            <li>
                <Link to={to} className="block w-full p-4 text-white border-b border-dark-400 font-fira-code">
                    {text}
                </Link>
            </li>
        );
    }

    function DesktopNavLink({ text, to }) {
        const active = useMatch(to + '/*');
        return (
            <li>
                <Link to={to}>
                    <div className="relative">
                        <p className={`${active ? "text-dark-100" : "text-dark-200"} px-8 py-3 border-r  border-r-dark-400 font-fira-code`}>
                            {text}
                        </p>
                        {active && <div className="h-0.5 absolute bottom-0 left-0 bg-orange-400 w-full"></div>}
                    </div>
                </Link>
            </li>
        );
    }

    return (
        <div className="sticky top-0 left-0 z-10 bg-dark-500">
            {/* Desktop */}
            <div className="hidden border-b lg:flex bg-dark-500 border-dark-400">
                <Link to="/" className="p-3 pr-20 border-r text-dark-100 font-fira-code border-dark-400">matias-zapata</Link>

                <ul className="flex">
                    <DesktopNavLink to="/" text="_hello" />
                    <DesktopNavLink to="/about-me" text="_about-me" active />
                    <DesktopNavLink to="/projects" text="_projects" />
                    <DesktopNavLink to="/contact-me" text="_contact-me" />
                </ul>
            </div>

            {/* Mobile */}
            <div className="flex items-center justify-between p-4 border-b lg:hidden font-fira-code text-dark-300 border-dark-400 ">
                <h1>matias-zapata</h1>
                <button className="p-1" onClick={() => { setOpen(open => !open); }}>
                    <MenuIcon className="w-5 h-5" />
                </button>
            </div>
            {open &&
                <div className="absolute top-0 left-0 z-10 w-screen h-screen bg-dark-600">
                    <div className="flex items-center justify-between p-4 border-b font-fira-code text-dark-300 border-dark-400">
                        <Link to="/" onClick={toggleMenu}>matias-zapata</Link>
                        <button className="p-1" onClick={toggleMenu}>
                            <XIcon className="w-5 h-5" />
                        </button>
                    </div>
                    <ul onClick={toggleMenu}>
                        <MobileNavLink to="/" text="_hello" />
                        <MobileNavLink to="/about-me" text="_about-me" />
                        <MobileNavLink to="/projects" text="_projects" />
                        <MobileNavLink to="/contact-me" text="_contact-me" />
                    </ul>
                </div>
            }
        </div>
    );
}