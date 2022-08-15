import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import File from "../components/File";
import FileTree from "../components/FileTree";
import FileLink from "../components/FileLink";


function Contact() {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
        isValid: false,
    });

    const validateForm = (newState) => {
        if (newState.name === '') return false;
        if (newState.email === '') return false;
        if (newState.message === '') return false;
        return true;
    } 

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
            isValid: validateForm({
                ...state, 
                [e.target.name]: e.target.value,
            })
        });
    };


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
                        className="w-full px-3 py-1 mt-2 mb-4 text-gray-300 border rounded-md focus:outline-blue-500 focus:bg-dark-500 bg-dark-700 border-dark-500"
                    />
                    <label className="block text-dark-100 font-fira-code">_email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={onChange}
                        className="w-full px-3 py-1 mt-2 mb-4 text-gray-300 border rounded-md focus:outline-blue-500 focus:bg-dark-500 bg-dark-700 border-dark-500"
                    />
                    <label className="block text-dark-100 font-fira-code">_message:</label>
                    <textarea
                        rows="10"
                        name="message"
                        onChange={onChange}
                        className="w-full px-3 py-1 mt-2 mb-4 text-gray-300 border rounded-md focus:outline-blue-500 focus:bg-dark-500 bg-dark-700 border-dark-500"
                    ></textarea>
                    <button disabled={!state.isValid} type="submit" className="px-3 py-1 text-white bg-green-600 border border-green-500 rounded font-fira-code disabled:bg-green-800">Contact</button>
                </form>
            </File>
        </>
    );
}

export default Contact;
