import ReactPlayer from "react-player";

let en: translation_structure = {
    Header: {
        title: "Jaume Ivars Grimalt - Portfolio",
        meta_description: "Portfolio web of Jaume Ivars Grimalt: Computer scientist, fullstack programmer and artificial intelligence engineer."
    },
    PresentationPage:{
        main_title: "Welcome!",
        presentation: "I'm Jaume Ivars Grimalt and I do fullstack developing and AI projects"
    },
    MenuBar:{
        about: "About\xA0me",
        works: "My\xA0work",
        contact: "Contact",
    },
    Works: {
        title: "Some of my projects",
        portfolio_project_card_title: "Portfolio Project",
        portfolio_project_content: {
            content: <>
            <h2 style={{ textAlign: 'center' }}>Proyecto de este portafolio</h2>
            <p>{`A picture is worth a thousand words. And in this case, it's better if you take a look at the portfolio yourself. But if you are interested in motivation or technical details, stay.`}</p>
            <h2 style={{ textAlign: 'center' }}>{'Motivation'}</h2>
            <p>{`After almost finishing my degree, I had so many projects done and so much to share that I thought it would be a good idea to create my own website and share everything I have done and learnt.
                Besides, this is a perfect excuse to practice and learn!`}
            </p>
            <h2 style={{ textAlign: 'center' }}>{`Current functionalitites`}</h2>
            <p>{`Currently you can only change your language, see a brief description of my profile (About me), see the description of my projects (Jobs) or contact me (Contact me). But I have a little something planned for the future.... Read on!`}</p>

            <h2 style={{ textAlign: 'center' }}>{`Technical details for nerds like me`}</h2>
            <p>{`The website is made with Next.js, plan CSS (without bootstrap or tailwind, to practice the basis, there is no other reason) and Typescript, a full-stack React framework using Express in the back-end. But you may have noticed that it has no back-end! Why use Next.js then?
                It turns out that in the future I'd like to be able to add features like people leaving comments or opinions about my work, make a meeting booking system, maybe even add a
                feed of my LinkedIn posts or who knows! With my imagination it's hard to predict how this is going to scale, so why not prepare for the big one today?`}
            </p>

        </>
        },
        sparked_project_card_title: "",
        sparked_project_content: {
            intro: <>
                <h2>SparkED project</h2>
                <p style={{ textAlign: 'center' }}>{`Wow... This is the biggest project in my portfolio I would say. Where do we start...?`}</p>
            </>,
            whatIsSparked_title: 'What is SparkED?',
            whatIsSparked: <>
                <p>{`SparkED is an initiative that promotes entrepreneurship among students from different careers through the creation of an environment of proactive profiles interested in developing their own projects and transforming their ideas into actions and results.`}</p>
                <p>{`At SparkED, members have the opportunity to learn how to differentiate themselves, validate their ideas and establish quality connections through events and activities focused on entrepreneurship, personal growth and soft skills.`}</p>
                <p>{`Main activities include: mentoring talks, technical and non-code skills workshops, events related to communication and teamwork, and weekly meetings for project coordination and networking among members.`}</p>
            </>,
            myRole_title: 'What is my role in SparkED?',
            myRole: <>
                <p>{`I am currently a member of the `}<span className="bold">{`Core Team`}</span>{`, This means that I am part of the management of the community. So I help to organise the events,
                organise the networkings, invite and select new members, influence the direction the initiative takes or manage its budget.`}</p>
                <p>{`My main role in the community is to be in charge of SparkED's communication and web development and maintenance departments. In the
                communication area, I am in charge of managing our CRM (Customer Relationship Management), where I contact business people, entrepreneurs, universities and institutions
                and institutions for partnerships. For example, at the first community event I was in charge of booking the auditorium. I am also in charge of the collaboration with the entrepreneurship area of my university, the UPV.
                We have come to an agreement that we will hold a monthly event together with their budget allocation. Regarding the technological part, I am the main developer of the community website, which is still under construction,
                but we already have the domain `} <a href="sparked.es">sparked.es</a>.
                </p>
            </>,
            myRoadmap_title: 'My roadmap',
            myRoadmap1: <>
                <p>{`I met Pablo Martínez (Pau for friends) at a talk by Adrià Solà, an influencer with more than 3M followers on personal development, that same day,
                I was about to leave the door of the Paraninfo auditorium when a thought crossed my mind:
                'Jaume, it's 18:00 on a Friday in summer, and I'm at an event on how to be a 1% student rather than on the beach on holiday, I'm sure that here,
                in this room, there are extremely valuable people, I'm going to stay'. So I did, and at the end, when there were a dozen kids left, and we said goodbye to Adrià, I saw a small group of 5 kids chatting, the last ones who were still there.
                were still there. I just joined them and we started chatting, we liked each other very much and exchanged numbers. And I had no idea that this would be one of the most shocking decisions of my life.
                `}</p>
            </>,
            myRoadmap2: <>
                <p>{`Since then, everything has been growing, I met amazing people, we attended an incredible amount of events, such as VDS, the biggest entrepreneurship event in Valencia, events of Ideas UPV (the entrepreneurship area of the university), like Day Emprende or Week Emprende, etc.
                like Day Emprende or Week Emprende, etc. So eventually we decided to do our own event, Spark your Speech. This event, in the end, turned out to be the biggest event in the history of UPV entrepreneurship made by and for students,
                with more than 100 attendees. Because I had participated in IdeasUPV years ago in several projects, I already had contacts with whom I could book a large auditorium and obtain funding, which made the process much easier. Finally, I would like to mention that
                I had the opportunity to participate as a speaker.
                `}</p>
            </>,
            myRoadmap3: <>
            <h2>{`What's for the future?`}</h2>
                <p>{`SparkED's future is no lower than the moon itself, it is having unprecedented growth. As of today, we are organising the mother of all events. In May we will be hosting "SparkED: The grat show",
                an event where we expect to have 250 to 300 attendees, 5 talks, 8 workshops and 3 networkings with entrepreneurs, influencers and companies. All in the auditorium where it all started: the Paraninfo + the entire school of computer science, where I did my bachelor's and master's degrees.`}</p>
                <p>{`Other events that we have already discussed and organised to take place during these months are: Notion workshop for project management, tax workshop, visits to Zeleros (a company that develops hyperloop transport) and visits to Lanzadera, Spain's largest startup incubator.
                    hyperloop transport) and visits to Lanzadera, the largest startup incubator in Spain.`}</p>
            </>,
            acknowledgements_title: 'Aknowledgements',
            acknowledgements: <>
                <p>{`Throughout this article I have spoken only about myself, as that is what this website is dedicated to, to record my personal achievements. However, this project was not started by me, nor am I the only person who helps to organise it.
                who helps to organise it, so it would be very unfair not to recognise the titanic effort that the other members have made.`}</p>
                <p>{`Above all, I would like to thank `}<a href="https://www.linkedin.com/in/pablo-martinez-ruiz/">Pau Martínez</a> {`for creating this fabulous community, always full of energy and the vision that currently drives the community.`}</p>
                <p>{`I also thank the other members of the Core Team for administering and creating activities for the community: Sergio C., Sergio Marí, Manon Lagrange, Antonio Gabriel, Yoana Ilianova and Claudia Herrero.`}</p>
                <p>{`Thank you for being the shining stars of enthusiasm, creativity and potential that you are. When I am with you, I know I am in the right place, because I admire something in all of you.`}</p>
                <p>{`I would also like to thank all SparkED members of the community, without them, this project would be impossible. Above all, to the most active members who usually come to the networkings. Thank you <3`}</p>

            </>,
            gallery_title: 'Galería'
        },
        microengineers_project_card_title: "",
        microengineers_project_content: {
            content: <><p>EN Microengineers Project</p></>
        },
        stablediffusion_card_title: "Fine-Tunned Stable Diffussion",
        stablediffusion_project_content: {
            content: <><p>EN Stable Diffusion Project</p></>
        },
        visual_perceptron_card_title: "Perceptron Visualization",
        visual_perceptron_project_content: {
            content: <><p>EN Perceptron Project</p></>
        },
        hardware_project_card_title: "Logic Gate Simulator",
        hardware_project_content: {
            content: <><p>EN Logic Gate Simulator Project</p></>
        },
        sorting_algorithms_project_card_title: "Sorting algorithms",
        sorting_algorithms_project_content: {
            content: <>
                <h2 style={{ textAlign: 'center' }}>Sorting algorithms project</h2>
                <p>
                    You can find this project in my {<a href="https://github.com/jaume2000/SortingAlgorithms/" target="_blank">github repo</a>} or
                    if you want, you can {<a href="https://jaume2000.github.io/SortingAlgorithms/" target="_blank">open it</a>} in a new tab.
                </p>
                <h2 style={{ textAlign: 'center' }}>Motivation</h2>
                <p>
                    {"Well, when I was doing my computer science degree I tought it would be fun to make a satisfactory visual sorting algorithm, so I programmed the 5 more famous in one day for fun."}
                </p>
                <p>{"Why you don't try it down below?"}</p>
            </>
        },
        autoencoder_card_title: "AI: Autoencoder",
        autoencoder_project_content: {
            explanation_1: <>
                <h2 style={{ textAlign: 'center' }}>AI Project: Autoencoder</h2>
                <p>
                    {`What is an autoencoder? An autoencoder is a feed-forward neural network that is often used for data generation, such as image generation.
                that is often used for data generation, such as image generation. In this case I used MNIST (a dataset of handwritten numbers) and made a convolutional network followed by a FF for the encoder which projected
                the image to a 2-dimensional space, so that an image of a new number could be generated from a "coordinate" in a plane and a FF network followed by transposed convolutionals for the decoder.`}</p>
                <p>
                    {`In short, I made a network that learned to represent 28x28 images of numbers in only 2 "pixels" that compress the information to decode it to a new 28x28 image, that's why,
                is a generative model. Here below you can see in which part of the blueprint all the images of the dataset are encoded, and with this blueprint, we can decode them and generate new images.`}
                </p>
            </>,

            explanation_2: <>
                <h2 style={{ textAlign: 'center' }}>Animation</h2>
                <p>
                    {`The following animation has been made by selecting different points of the plane, one after the other, making a path and generating the numbers. The result of putting them together
                is this curious animation where it seems that the numbers fold and deform to form others. This is called exploring latent space. `}
                </p>
            </>
        },
        link_to_web: "Web\xA0link",
        github_link_to_repo_text: "Link\xA0to\xA0github",
    },
    About: {
        title: "About me",
        general_info_comment: "/*\nIf this is too hard to understand, please, check Habilities.txt\nAlso contains extra info!\n*/",
        name_variable: "name",
        birth_variable: "birth",
        soft_skills: {
            variable:"soft_skills",
            self_taught:"self-taught",
            likes_challenges:"I like challenges",
            entrepeneur:"entrepeneur",
            leadership:"leadership",
            startup_culture:"startup culture ♥ ",
            creative:"creative",
            fast_learner:"fast learner",
        },
        getProgrammingLanguages_function: "get_Hard_Skills",
        getNaturalLanguages_function: "get_Natural_Languages",
        birth_month: "October",
        language_variable: "spoken_languages",
        native_value: "native",
        english_language: "english",
        spanish_language: "spanish",
        catalan_language: "catalan",
        french_language: "french",
        habilities_text: "Habilities.js",
        habilities_transcribed_text: "Habilities.txt",
        habilities_transcribed_content: 
`My name is Jaume Ivars Grimalt, I was born in October 2001 here in Alicante, Spain, so I am currently 21 years old. Curently I am currently living in Valencia, I moved on to study a degree in Computer Engineering and loved the city. I am passionate about the world of entrepreneurship, which has led me to be self-taught and to lead small teams in personal projects.
I have 4 years of experience in Unity3D and its language C#. I have also learned c and c++ in competitive programming clubs. I learned on my own JavaScript, HTML and CSS to later learn TypeScript, React, NextJS and other libraries such as Express, D3, ThreeJS, etc. I also had the chance to learn databases and cloud services (Firebase, MongoDB, AWS S3, Google Cloud Buckets) and API creation.
Because I have specialized in computer science (algorithms, AI, etc.) I have learned a lot of Python (pytorch, keras, tensowflow, numpy, matplotlib, ...).
I have always been bilingual, speaking Spanish and Catalan and I use English every day for leisure and work. I am currently in the process of learning French.`,
        studies: {
            doc_title:"Studies.docx",
            content:
`I graduated in a bachelor of Computer Science on 2023 at the Polytechnic University of Valencia. My average score is 8.3 with honors in statistics and Artificial Intelligence.
During my education at the university I participated in a large variety of projects:
• Videogame Development Club mentor
• ACM Member (ACM is a global organization responsible of the Turing prices)
• 4 time reelected delegate
• Started 2 startup projects at Start.inf`,
        },
        cv:{
            doc_title:"CV.html",
            web_title:"Welcome to my CV download web!",
            web_description:"Remember that you can check my LinkedIn too in ",
            web_contact_info_link:"Contact Info",
            web_download_cv_button:"Download CV",
            web_check_cv_description:"If you preffer, you can check the CV's PDF in a new tab.",
            web_check_cv_button:"Check CV",
        },
        work_experience: {
            doc_title:'Work_experience.tsx',
            sciling_work_experience:'',
            neurocatching_work_experience:''
        }

    },
    Contact: {
        title: "Let's talk about new projects!"
    }
}

export default en