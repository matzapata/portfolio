
const config = {
    cv: "/cv-zapata-matias.pdf",
    experience: [
        {
            title: "Fullstack developer",
            company: "SphereOne",
            companyImageUrl: "/images/sphereone.jpg",
            description: "I play a vital role as one of the early team members, extensively involved in all aspects of the product. My contributions focused on developing core features, including payment routes creation and execution, as well as creating and managing wallets and keys for users. I also gained proficiency in app development using React Native and actively utilized my product ownership skills to enhance the user experience. Additionally, I immersed myself in the web3 world, developing solutions involving solidity, smart wallets, decentralized exchanges (DEXes), and bridges. Agile in approach, I consistently delivered high-quality results within demanding deadlines. Not only developed code but also I’ve been part of the QA testing and unit tests development. Super active team member, jumping in calls every time to provide help where’s needed and contribute feedback on code quality for pull requests reviews. Also worked in web development with react, typescript, tailwindcss, redux, and more.",
            timeSpan: "Nov 2022 - Present",
            place: "Austin, Texas, USA (Remote)",
        },
        {
            title: "Freelance fullstack developer",
            company: "Freelance",
            companyImageUrl: "/images/placeholder.jpg",
            description: "Freelance project developed for MJinversiones. Involved the integration of the Binance and Cryptomarket APIs to obtain real-time market data. An authentication system was implemented from scratch with JWT and the application was deployed in netlify.",
            timeSpan: "Sep 2022",
            place: "Buenos Aires, Argentina",
        },
        {
            title: "[Academic] Fullstack developer",
            company: "Henry",
            companyImageUrl: "/images/henry.jpg",
            description: "Worked building two fullstack web pages with a PERN stack. The first one of them was an individual project that make use of the-dog-api and a server to showcase dog breeds, the second one of them was a sports betting platform built with a team of 6 people using the agile method and incorporating multiple integrations like auth0, mercadopago, etc.",
            timeSpan: "2022",
            place: "Buenos Aires, Argentina",
        },
        {
            title: "KiriFan propulsion team member",
            company: "KiriFan",
            companyImageUrl: "/images/kiri-fan.jpg",
            description: "KiriFan is an academic team developing energy efficient electric cars to compete in the Shell Eco Marathon. In this case, I was part of the propulsion team in charge of the development of the electronics necessary for the operation of the car. I was in charge not only of the development of embedded systems for data collection and control of a BLDC engine but also of administrative aspects such as getting sponsors and managing public relations.",
            timeSpan: "2019 - 2020 · 1 years",
            place: "Buenos Aires, Argentina",
        },
        {
            title: "Product design",
            company: "Kraken",
            companyImageUrl: "/images/placeholder.jpg",
            description: "Together with the creator of this SME, I was in charge of materializing the development of a retractable lid for trucks. Here I learned to value the iterative process of product improvement focused on the consumer. I also learned to have a vision of the production process from the conception of the design.",
            timeSpan: "2019 - 2021 · 2 years",
            place: "Buenos Aires, Argentina",
        },
        {
            title: "Design and manufacture of 3D printed parts",
            company: "Freelance",
            companyImageUrl: "/images/placeholder.jpg",
            description: "I assisted different clients with a wide range of requirements in the development of product designs and their corresponding 3D printing prototyping. Successfully face the different challenges that this technology entails and achieve customer satisfaction in all cases.",
            timeSpan: "2018 - present",
            place: "Buenos Aires, Argentina",
        },
        {
            title: "CAD Modeler",
            company: "ArqRaz",
            companyImageUrl: "/images/placeholder.jpg",
            timeSpan: "2017 - 2018",
            description: "I used my Autocad design skills to take sketches from paper to computer enabling technical development. Also generated 3D designs and renders from their corresponding 2D counterparts for better visualization of the project by the construction company's clients.",
            place: "Buenos Aires, Argentina",
        },
    ],
    education: [
        {
            institution: "Udemy",
            institutionImageUrl: "/images/udemy.jpg",
            title: "NestJs",
            timeSpan: "2024",
        },
        {
            institution: "Udemy",
            institutionImageUrl: "/images/udemy.jpg",
            title: "Microservices with typescript, nats, docker and kubernetes",
            timeSpan: "2023",
        },
        {
            institution: "AlgoExpert",
            institutionImageUrl: "/images/algoexpert.jpg",
            title: "System design",
            timeSpan: "2023",
        },
        {
            institution: "Platzi",
            institutionImageUrl: "/images/platzi.jpg",
            title: "Serverless with AWS",
            timeSpan: "2023",
        },
        {
            institution: "Platzi",
            institutionImageUrl: "/images/platzi.jpg",
            title: "Smart contract security",
            timeSpan: "2023",
        },
        {
            institution: "Platzi",
            institutionImageUrl: "/images/platzi.jpg",
            title: "Solidity",
            timeSpan: "2023",
        },
        {
            institution: "Henry",
            institutionImageUrl: "/images/henry.jpg",
            title: "Full Stack Developer Bootcamp",
            timeSpan: "2022",
        },
        {
            institution: "Universidad Tecnologica Nacional",
            institutionImageUrl: "/images/utn.jpg",
            title: "Electronic engineering",
            timeSpan: "2018 - ongoing",
        },
        {
            institution: "Universidad Tecnologica Nacional",
            institutionImageUrl: "/images/utn.jpg",
            title: "Robotics",
            timeSpan: "2016",
        },
        {
            institution: "Coursera",
            institutionImageUrl: "/images/coursera.jpg",
            title: "Understanding plants - Part I: What a plant knows",
            timeSpan: "2020",
        },
    ],
    skills: {
        Languages: ["typescript", "C++", "C", "python", "VHDL", "solidity", "more..."],
        Frontend: [
            "react",
            "nextjs (app/pages router)",
            "tailwindcss",
            "flowbite",
            "figma",
            "redux",
            "react-native",
            "redux toolkit",
            "ChakraUI",
            "bootstrap",
            "supabase",
            "firebase",
        ],
        Backend: ["nestjs", "typeorm", "design patterns", "architecture", "sequelize", "prisma", "authentication"],
        Databases: ["postgres (sql)", "mongodb (no-sql)", "redis", "blockchain?)", "firebase (no-sql)",],
        Devtools: ["git", "docker", "kubernettes", "linux", "vercel", "railways", "scrum", "eslint", "prettier"]
    },
    projects: [
        {
            name: "🔥 EXPLAINIT. AI powered documentation",
            title: "🔥 EXPLAINIT. AI powered documentation",
            description: "Explain it takes a url for a documentation website, crawls all the information from it and loads it into a vector database to later create an interactive chat powered by AI that can answer any question about it in a precise way. I used nestjs for the backend with postgres using pgvector for the vector database and nextjs for the frontend. For payments provider I used lemonsqueezy and the deployment was done through docker images to railways. For the ai chat I leveraged gpt apis and langchain.",
            links: [
                {
                    title: "Deployment",
                    href: "https://explainit.mzslabs.com"
                },
                {
                    title: "Source code (private, reach out for access)",
                    href: "/contact-me"
                }
            ]
        },
        {
            name: "🔥 CHATWITH. AI powered files conversations",
            title: "🔥 CHATWITH. AI powered files conversations",
            description: "Chatwith is a platform that allows users to upload files and have a conversation with them. It's a RAG based chatbot that can answer questions about the file content. The code is totally modular aiming to allow me to spin up new projects quickly like I did with ExplainIt right above. The tech stack used is: Nextjs, nestjs, postgres, pgvector, lemonsqueezy, docker, vercel, gpt apis and langchain. Resend for email providers, gcp for files and much more.",
            links: [
                {
                    title: "Deployment",
                    href: "https://get-chatwith.com"
                },
                {
                    title: "Source code (private, reach out for access)",
                    href: "/contact-me"
                }
            ]
        },
        {
            name: "🔥 GETHAT. Browserless crawler for serverless functions",
            title: "🔥 GETHAT. Browserless crawler for serverless functions",
            description: "Comming soon. One problem we had to deal with at work while building ai agents for blockchain interaction was the crawling of websites in a serverless enviroment, we wanted to quickly get something out but most of the browsers won't fit within the lambda limits and the prices of browserless or alike were not in our plans. We had to rethink the deployment strategy. GETHAT comes to solve that, I aim to expose a simple api payed by credits so that scrapping with js rendering is not a problem for serverless services. (Ongoing)",
            links: []
        },
        {
            name: "DOME",
            title: "DOME. IOT system with react native and C++ for esp8266",
            description: "Dome is an IOT system that aims to reduce by 10x the complexity in smart houses systems. The current solutions typically require specialists to make the installation and lack a good ui/ux. That's why I created DOME, you can replace your current wall switches and sockets, connect them to the app and share access with your family. Also, the device will include mechanical switches so that you decide what's more convenient for each situation. The tech stack used is: React native with typescript, redux-toolkit, tailwindcss, firebase, C++ for esp8266 and altium for pcb design.",
            links: [
                {
                    title: "Figma designs",
                    href: "https://www.figma.com/file/vcR1ODs3bJzUiS0fuz7EVW/DOME?node-id=1102%3A9203"
                }, {
                    title: "Source code",
                    href: "https://github.com/matzapata/dome"
                }
            ]
        },
        {
            name: "EID",
            title: "EID. Electronic identification device",
            description: "Prototype of an electronic identification device built with the purpose of solve the inefficiency of different organizations, whether business or government, to process paperwork and validate documentation of different types. Built with C and C++.",
            links: [
                {
                    title: "Source code",
                    href: "https://github.com/matzapata/EID"
                }
            ]
        },
        {
            name: "Devjet",
            title: "Devjet. Code recipes and generators for web developers",
            description: "Devjet is a website that helps web developers build faster by providing code recipes and generators to work with PERN or NEXTJS stacks. I've worked building the website from scratch with nextjs, typescript, chakraui, MDX, supabase and deployed it on vercel. The CLI that generates code is build with typescript and gluegun. Looking backwards the concept is the same than shadcns/ui but didn't move it as far.",
            links: [
                {
                    title: "Deployment",
                    href: "https://devjet.vercel.app"
                }
            ]
        },
        {
            name: "Portfolio",
            title: "Portfolio",
            description: "Portfolio website created with react and tailwindcss, deployed on netlify. The idea of the project was to showcase a little bit about me on the internet, some of the projects i'm currently working on, my education, etc and give the visitors the opportunity to contact me.",
            links: [
                {
                    title: "Deployment",
                    href: "https://mzslabs.com"
                },
                {
                    title: "Source code",
                    href: "https://github.com/matzapata/portfolio"
                }
            ]
        },
        {
            name: "Bootwindcss",
            title: "Bootwindcss. Tailwindcss and bootstrap styles library",
            description: "Library combining tailwindcss and bootstrap styles. Documentation page created with nuxt and deployed on netlify. It's currently deprecated, would not use in any project, instead i would chose another tool like flowbite or shadcn/ui but it helped me develop css skills",
            links: [
                {
                    title: "Deployment",
                    href: "https://bootwindscss.netlify.app"
                },
                {
                    title: "Source code",
                    href: "https://github.com/matzapata/bootwindscss"
                }
            ]
        },
        {
            name: "Bookbinding",
            title: "Bookbinding. CLI for book pagination",
            description: "This CLI made with <code>gluegun</code> uses <code>pdf-lib</code> to given a book pdf, create the corresponding pagination for a bookbinding process of one page per booklet.",
            links: [{
                title: "Source code",
                href: "https://github.com/matzapata/bookbinding"
            }]
        },
        {
            name: "Prodemaster pg",
            title: "Prodemaster PG. Sports betting platform",
            description: "Prodemaster is a sports betting platform that allows users to participate in public tournaments or create their own tournaments to compete with friends for cash prizes. The project was developed as a group project for Henry with React, Express, Postgress, Typescript and Prisma among other technologies.",
            links: [],
        }
    ]
};

export default config;