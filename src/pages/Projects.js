import FileTree from "../components/FileTree";
import FileLink from "../components/FileLink";
import File from "../components/File";
import Breadcrumb from "../components/Breadcrumb";

function Projects() {
    return (
        <>
            <Breadcrumb current="_projects"/>

            <FileTree>
                <FileLink name="Devjet.md" to="#usedevjet"  />
                <FileLink name="Crypto.md" to="#crypto"  />
                <FileLink name="Portfolio.md" to="#portfolio" />
                <FileLink name="Bookbinding.md" to="#bookbinding" />
                <FileLink name="Bootwindcss.md" to="#bootwindcss" isLastChild />
            </FileTree>

            <File title="README.md" className="px-8 py-10 markdown-body" >
                <h1 id="usedevjet" className="mb-2 text-2xl">Devjet</h1>
                <p>Devjet is a collection of guides, examples, templates, and resources to help you build your websites faster.</p>
                <p>It was created using:</p>
                <ul className="py-2 pl-8 list-disc">
                    <li>Next.js</li>
                    <li>Firebase authentication</li>
                    <li>MDX for posts writing</li>
                    <li>Tailwindcss</li>
                    <li>Netlify hosting</li>
                </ul>
                <p>Even tough it's still a work in progress, you can find the deploy website at <a href="https://www.usedevjet.com/">www.usedevjet.com</a></p>

                <hr className="mt-6 border-gray-800"/>
                
                <h1 id="crypto">Crypto</h1>
                <p>Crypto is a collection of cryptographic algorithms implemented in portable C. This implementations were developed for a microcontroller application used in a college project about digital signature.</p>
                <p>The source code can be found at: <a href="https://github.com/matzapata/crypto">matzapata/crypto</a></p>
                
                <hr className="mt-6 border-gray-800"/>

                <h1 id="portfolio">Portfolio</h1>
                <p>The portfolio website is a simple web application developed with <code>react</code> and <code>tailwindcss</code>. It was deployed in <code>netlify</code> and makes use of the <code>herotofu</code> service to implement the contact form.</p>
                <p>The deployed website can be found here: <a href="https://matiaszapata.netlify.app/">www.matiaszapata.netlify.app</a> </p>
                
                <hr className="mt-6 border-gray-800"/>
                
                <h1 id="bootwindcss">Bootwindcss</h1>
                <p>Bootwindcss is ab adaptation of the bootstrap source code to allow an armonic work with tailwindcss bringing in this way the best of both frameworks to the table.</p>
                <p>The source code can be found here: <a href="https://github.com/matzapata/bootwindscss">matzapata/bootwindscss</a></p>
                <p>And the documentation website build with nuxtjs and deployed on netlify can be found here: <a href="https://bootwindscss.netlify.app/">Bootwindcss</a></p>
                
                <hr className="mt-6 border-gray-800"/>

                <h1 id="bookbinding">Bookbinding</h1>
                <p>This CLI made with <code>gluegun</code> uses <code>pdf-lib</code> to given a book pdf, create the corresponding pagination for a bookbinding process of one page per booklet.</p>
                <p>The source code can be found here: <a href="https://github.com/matzapata/bookbinding">matzapata/bookbinding</a></p>
                   
            </File>
        </>
    );
}

export default Projects;
