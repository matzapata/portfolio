import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function FindMe() {
    return (
        <div className="flex justify-between border-t border-dark-500">
            <div className="p-3">
                <p className="font-fira-code text-dark-300">find me in:</p>
            </div>
            <div className="flex text-dark-300">
                <a href="https://www.linkedin.com/in/matias-zapata-b57406143" className="block p-3 border-l border-l-dark-500">
                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </a>
                <a href="https://github.com/matzapata/" className="block p-3 border-l border-l-dark-500">
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                </a>
            </div>
        </div>
    );
}

export default FindMe;
