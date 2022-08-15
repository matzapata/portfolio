import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import File from "../components/File"
import FileLink from "../components/FileLink"
import FileTree from "../components/FileTree"


export default function Thanks() {
    return (
        <>
            <Breadcrumb current="_contact-me" />

            <FileTree>
                <FileLink name="Phone" commitMessage="+54 1138608532" />
                <FileLink name="Email" commitMessage="matuzapata@gmail.com" />
                <FileLink name="ContactForm.jsx" commitMessage="form" />
            </FileTree>

            <File title="ContactForm.jsx" className="px-8 pt-8 pb-20">
                <div className="md:text-center">
                    <h3 className="text-lg font-medium text-white font-fira-code">Thank you! 🤘</h3>
                    <p className="mb-6 md:max-w-xs md:mx-auto font-fira-code text-dark-300">Your message has been accepted. You will recieve answer really soon!</p>
                    <Link to="/contact-me">
                        <button
                            className="px-4 py-2 text-white border rounded bg-dark-600 font-fira-code border-dark-500"
                        >
                            send-new-message
                        </button>
                    </Link>
                </div>
            </File>
        </>
    );
}