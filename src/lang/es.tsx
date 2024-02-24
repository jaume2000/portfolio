let es: translation_structure =
    {
        Header: {
            title: "Jaume Ivars Grimalt - Portafolio",
            meta_description: "Web de Portafolio de Jaume Ivars Grimalt: Ingeniero en computación, programador fullstack e ingeniero en inteligencia artificial"
        },
        PresentationPage:{
            main_title: "¡Bienvenido!",
            presentation: "Me llamo Jaume Ivars Grimalt, y hago desarrollo fullstack y proyectos de IA"
        },
        MenuBar:{
            about: "Sobre\xA0mí",
            works: "Trabajos",
            contact: "Contáctame",
        },
        Works: {
            title: "Mis trabajos",
            portfolio_project_card_title: "Portafolio",
            portfolio_project_content: {
                content: <><p>ES Portfolio Project</p></>
            },
            sparked_project_card_title: "",
            sparked_project_content: {
                content: <><p>ES Sparked Project</p></>
            },
            microengineers_project_card_title: "",
            microengineers_project_content: {
                content: <><p>ES Microengineers Project</p></>
            },
            stablediffusion_card_title: "Stable Diffussion Tuneado",
            stablediffusion_project_content: {
                content: <><p>ES Stable diffussion Project</p></>
            },
            visual_perceptron_card_title: "Visualización de un Perceptrón",
            visual_perceptron_project_content: {
                content: <><p>ES Perceptron Project</p></>
            },
            hardware_project_card_title: "Simulador de Puertas Lógicas",
            hardware_project_content: {
                content: <><p>ES Logic Gates Project</p></>
            },
            autoencoder_card_title: "IA: Autoencoder",
            autoencoder_project_content: {
                explanation_1: <>
                    <h2 style={{ textAlign: 'center' }}>Proyecto de IA: Autoencoder</h2>
                    <p>
                        {`A ver, ¿qué es un autoencoder? Un autoencoder es una red neuronnal tipo feed-forward
                    que se suele usar para generación de datos, como la generación de imágenes. En este caso usé MNIST (un dataset de números manuscritos) e hice una red de convolucional seguido de una FF para el encoder que proyectaba
                    la imagen a un espacio de 2 dimensiones, de tal modo que se podía generar una imagen de un número nuevo a partir de una "coordenada" en un plano y una red FF seguida de de convolucionales transpuestas para el decoder.`}
                    </p>
                    <p>
                        {`En resumen, hice una red que aprendió a representar imágenes de 28x28 de números en solo 2 "pixeles" que comprimen la información como para decodificarla a una nueva imagen 28x28, por eso,
                    es un modelo generativo. Aquí abajo podéis ver en qué parte del plano se codifican todas las imágenes del dataset, y con este plano, podemos decodificarlas y generar nuevas imágenes.`}
                    </p>
                </>,

                explanation_2: <>
                    <h2 style={{ textAlign: 'center' }}>Animación</h2>
                    <p>
                        {`La siguiente animación se ha hecho seleccionando diferentes puntos del plano, unos seguidos del otro, haciendo un recorrido y generando los números. El resultado al ponerlas juntas
                    es esta curiosa animación donde parece que los números se pliegan y deforman para formar otros. A esto se le llama explorar el espacio latente. `}
                    </p>
                </>
            },
            sorting_algorithms_project_card_title: "Algoritmos de ordenado",
            sorting_algorithms_project_content: {
                content: <>
                    <h2 style={{ textAlign: 'center' }}>Proyecto de algoritmos de ordenado</h2>
                    <p>
                        Puedes encontrar el proyecto en la {<a href="https://github.com/jaume2000/SortingAlgorithms/" target="_blank">repo de github</a>} o
                        si lo prefieres puedes encontrar el código {<a href="https://jaume2000.github.io/SortingAlgorithms/" target="_blank"> aquí</a>}.
                    </p>
                    <h2 style={{ textAlign: 'center' }}>Motivación</h2>
                    <p>
                        {`Bueno, cuando estaba haciendo mi grado en ingeniería informática, pensé que sería interesante hacer una web visual de los algoritmos de ordenado,
                        así que implementé los 5 más famosos en una tarde por diversión.`}
                    </p>
                    <p>{`¿Porqué no lo pruebas aquí abajo?`}</p>
                </>
            },
            link_to_web: "Link\xA0web",
            github_link_to_repo_text: "Link\xA0a\xA0github",
        },
        About: {
            title: "Sobre mí",
            general_info_comment: "/*\nSi se te complica entender esto, porfavor, revisa Habilidades.txt\nAdemás contiene información extra!\n*/",
            name_variable: "nombre",
            birth_variable: "nacimiento",
            soft_skills: {
                variable:"habilidades_sociales",
                self_taught:"autodidacta",
                likes_challenges:"me gustan los retos",
                entrepeneur:"emprendedor",
                leadership:"liderazgo",
                startup_culture:"cultura de las startups ♥ ",
                creative:"creativo",
                fast_learner:"aprendizaje veloz",
            },
            getProgrammingLanguages_function: "get_Habilidades_Tecnicas",
            getNaturalLanguages_function: "get_Idiomas_Hablados",
            birth_month: "Octubre",
            language_variable: "idiomas_hablados",
            native_value: "nativo",
            english_language: "inglés",
            spanish_language: "español",
            catalan_language: "catalán",
            french_language: "francés",
            habilities_text: "Habilidades.js",
            habilities_transcribed_text: "Habilidades.txt",
            habilities_transcribed_content: 
    `Mi nombre es Jaume Ivars Grimalt, nací en Octubre de 2001 aquí en Alicante, España, por lo que actualmente tengo 21 años. Actualmente vivo en Valencia, me trasladé a estudiar la carrera de Ingeniería Informática y me encantó la ciudad. Me apasiona el mundo del emprendimiento, lo que me ha llevado a ser autodidacta y a liderar pequeños equipos en proyectos personales.
    Tengo 4 años de experiencia en Unity3D y su lenguaje C#. También he aprendido c y c++ en clubes de programación de competición. Aprendí por mi cuenta JavaScript, HTML y CSS para más tarde aprender TypeScript, React, NextJS y otras librerías como Express, D3, ThreeJS, etc. También tuve la oportunidad de aprender bases de datos y servicios en la nube (Firebase, MongoDB, AWS S3, Google Cloud Buckets) y creación de APIs.
    Como me he especializado en informática (algoritmos, IA, etc.) he aprendido mucho Python (pytorch, keras, tensowflow, numpy, matplotlib, ...).
    Siempre he sido bilingüe, hablo castellano y catalán y uso el inglés a diario por ocio y trabajo. Actualmente estoy en proceso de aprender francés.`,
            studies: {
                doc_title:"Estudios.docx",
                content:`Me licencié en Informática en 2023 en la Universidad Politécnica de Valencia. Mi nota media es de 8,3 con matrícula de honor en estadística e Inteligencia Artificial.
                Durante mi formación en la universidad participé en una gran variedad de proyectos:
                • Mentor del Club de Desarrollo de Videojuegos
                • Miembro de ACM (ACM es una organización mundial responsable de los precios Turing)
                • 4 veces reelegido delegado
                • Inició 2 proyectos de puesta en marcha en Start.inf`,
            },
            cv:{
                doc_title:"CV.html",
                web_title:"¡Bienvenido a mi web de descarga de CV!",
                web_description:"Recuerda que puedes revisar mi LinkedIn también en ",
                web_contact_info_link:"Información de contacto",
                web_download_cv_button:"Descargar CV (en inglés)",
                web_check_cv_description:"Si lo prefieres, puedes visualizar el pdf del CV en una nueva pestaña",
                web_check_cv_button:"Visualizar CV (en inglés)",
            },
            work_experience: {
                doc_title:'Experiencia_laboral.tsx',
                sciling_work_experience:'',
                neurocatching_work_experience:''
            }
        },
        Contact: {
            title: "¡Hablemos sobre nuevos proyectos!"
        }
}

export default es
