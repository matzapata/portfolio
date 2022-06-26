import { useState } from "react";
import Breadcrumb from "../Breadcrumb";
import { File, FileLink, FileTree } from "../FileSystem";


export default function Contact() {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    });

    function onChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setState({
            ...state,
            [name]: value
        });
    }

    return (
        <>
            <Breadcrumb current="_contact-me" />


            <FileTree>
                <FileLink name="Phone" commitMessage="+54 1138608532" />
                <FileLink name="Email" commitMessage="matuzapata@gmail.com" />
                <FileLink name="ContactForm.jsx" commitMessage="form" />
            </FileTree>

            <File title="ContactForm.jsx" className="px-8 pt-8 pb-20">
                <form action="https://public.herotofu.com/v1/69fa1110-f569-11ec-95d6-ef970076a4ff" method="post">
                    <label className="block text-dark-100 font-fira-code">_name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={onChange}
                        className="w-full px-3 py-1 mt-2 mb-4 text-gray-300 border rounded-md focus:outline-blue-500 focus:bg-dark-400 bg-dark-600 border-dark-400"
                    />
                    <label className="block text-dark-100 font-fira-code">_email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={onChange}
                        className="w-full px-3 py-1 mt-2 mb-4 text-gray-300 border rounded-md focus:outline-blue-500 focus:bg-dark-400 bg-dark-600 border-dark-400"
                    />
                    <label className="block text-dark-100 font-fira-code">_message:</label>
                    <textarea
                        rows="10"
                        name="message"
                        onChange={onChange}
                        className="w-full px-3 py-1 mt-2 mb-4 text-gray-300 border rounded-md focus:outline-blue-500 focus:bg-dark-400 bg-dark-600 border-dark-400"
                    ></textarea>
                    <button type="submit" className="px-3 py-1 text-white bg-green-600 border border-green-500 rounded font-fira-code">Contact</button>
                </form>
            </File>
        </>
    );
}