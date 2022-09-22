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
                <FileLink name="Eid.md" to="#eid"  />
                <FileLink name="Portfolio.md" to="#portfolio" />
                <FileLink name="Pi dogs.md" to="#pi-dogs" />
                <FileLink name="Prodemaster pg.md" to="#pg-prodemaster" />
                <FileLink name="Bookbinding.md" to="#bookbinding" />
                <FileLink name="Bootwindcss.md" to="#bootwindcss" isLastChild />
            </FileTree>

            <File title="README.md" className="px-8 py-10 markdown-body" >
                <h1 id="usedevjet" className="mb-2 text-2xl">Devjet</h1>
                <p>Devjet is a website that helps web developers build faster by providing code recipes and generators to work with PERN or NEXTJS stacks. I’ve worked building the website from scratch with nextjs, typescript, chakraui, MDX, supabase and deployed it on vercel. The CLI that generates code is build with typescript and gluegun. I currently work writing posts and code generators as content for it.</p>
                <p>Visit at: <a href="https://www.usedevjet.com/">www.usedevjet.com</a></p>

                <hr className="mt-6 border-gray-800"/>
                
                <h1 id="eid">EID</h1>
                <p>Prototype of an electronic identification device built with the purpose of solve the inefficiency of different organizations, whether business or government, to process paperwork and validate documentation of different types. Built with C and C++.</p>
                <p>The source code can be found at: <a href="https://github.com/matzapata/EID">matzapata/crypto</a></p>
                
                <hr className="mt-6 border-gray-800"/>

                <h1 id="portfolio">Portfolio</h1>
                <p>Portfolio website created with react and tailwindcss, deployed on netlify. The idea of the project was to showcase a little bit about me on the internet, some of the projects i'm currently working on, my education, etc and give the visitors the opportunity to contact me. Visit at: <a href="https://matiaszapata.netlify.app/">www.matiaszapata.netlify.app</a>.</p>
                
                <hr className="mt-6 border-gray-800"/>

                <h1 id="pi-dogs">PI dogs Henry</h1>

                <p>Fullstack project that makes use of the-dog-api to showcase different dog breeds. The project allows users to make use of different filters and search posibilities. Also they are capable of adding their own breeds to the list. It was created with React, Express, Sequelize, Redux, Tailwindcss, Jest and deployed on Netlify and elephantsql for Henry's Individual Project.</p>
                <p>The source code can be found here: <a href="https://github.com/matzapata/PI-Dogs">matzapata/PI-Dogs</a></p>
                <p>And the deployment at <a href="https://pi-dogs-zapata.netlify.app">pi-dogs-zapata.netlify.app</a></p>

                <hr className="mt-6 border-gray-800"/>

                <h1 id="pg-prodemaster">Prodemaster PG Henry</h1>
                <p>Prodemaster is a sports betting platform that allows users to participate in public tournaments or create their own tournaments to compete with friends for cash prizes. The project was developed as a group project for Henry with React, Express, Postgress, Typescript and Prisma among other technologies.</p>
                <p>The source code can be found here: <a href="https://github.com/matzapata/PG-Henry">matzapata/PG-Henry</a></p>

                <hr className="mt-6 border-gray-800"/>
                
                <h1 id="bootwindcss">Bootwindcss</h1>
                <p>Library combining tailwindcss and bootstrap styles. Documentation page created with nuxt and deployed on netlify. Currently deprecated, would not use in any project, instead i would chose another tool like flowbite or chakra-ui but it helped me develop css skills.</p>
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
