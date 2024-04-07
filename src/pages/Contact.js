import Breadcrumb from "../components/Breadcrumb";
import FileTree from "../components/FileTree";
import FileLink from "../components/FileLink";


function Contact() {
    return (
        <>
            <Breadcrumb current="_contact-me" />

            <FileTree>
                <FileLink name="Linkedin" commitMessage="Message me" to={"https://www.linkedin.com/in/matias-zapata-b57406143"} />
                <FileLink name="Email" commitMessage="matuzapata@gmail.com" />
                <FileLink name="Phone" commitMessage="+54 1138608532" />
            </FileTree>
        </>
    );
}

export default Contact;
