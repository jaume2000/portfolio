import { text } from "stream/consumers"

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
                content: <>
                <h2>Proyecto de este portafolio</h2>
                <p>{`Vale mejor una imagen que mil palabras. Y en este caso, vale más que veas por tu cuenta el portafolio. Pero si te interesa la motivación o los detalles técnicos, quédate.`}</p>
                <h2>Motivación</h2>
                <p>{`Tras estar a  punto de terminar la carrera, tenía tantos proyectos hechos y tanto que compartir que pensé que sería buena idea crear mi propia página web y compartir todo lo que he hecho y aprendido.
                    Además, ¡esto es una perfecta excusa para practicas y aprender!
                    `}
                </p>
                <h2>Funcionalidades actuales</h2>
                <p>{`Actualmente solo puedes cambiar de idioma, ver una breve descripción de mi perfil (Sobre mí), ver la descripción de mis proyectos (Trabajos) o ponerte en contacto conmigo (Contáctame). Pero tengo cositas planeadas para el futuro... ¡Sigue leyendo!`}</p>

                <h2>{`Detalles técnicos para frikis como yo`}</h2>
                <p>{`La web está hecha con Next.js, css plano (sin bootstrap o tailwind, para practicar las bases no por nada más) y Typescript, un framework full-stack de React donde usa Express en la parte de back-end. Pero te habrás dado cuenta que no tiene back-end! ¿Para qué usar Next.js entonces? Resulta que en el futuro me gustaría poder 
                añadir funcionalidades como que la gente deje sus comentarios u opiniones sobre mis trabajos, hacer un sistema de reserva de reuniones, puede que incluso añadir un feed de mis publicaciones de LinkedIn o quien sabe! Con mi imaginación es dificil
                predecir cómo va a escalar esto, así que, ¿porqué no prepararse para lo más grande hoy?`}</p>

            </>
            },
            sparked_project_card_title: "",
            sparked_project_content: {
                intro: <>
                    <h2>Proyecto de SparkED</h2>
                    <p style={{ textAlign: 'center' }}>{`Wow... Este es el proyecto más grande de mi portafolio diría yo. ¿Por dónde empezamos...?`}</p>
                </>,
                whatIsSparked_title: '¿Qué es SparkED?',
                whatIsSparked: <>
                    <p>{`SparkED es una iniciativa que promueve el emprendimiento entre estudiantes de diferentes carreras a través de la creación de un entorno de perfiles proactivos interesados en desarrollar sus propios proyectos y transformar sus ideas en acciones y resultados.`}</p>
                    <p>{`En SparkED, los miembros tienen la oportunidad de aprender a diferenciarse, validar sus ideas y establecer conexiones de calidad a través de eventos y actividades enfocadas en el emprendimiento, el crecimiento personal y las soft skills.`}</p>
                    <p>{`Entre las principales actividades se incluyen: charlas con mentores, talleres técnicos y de habilidades no-code, eventos relacionados con la comunicación y el trabajo en equipo, y reuniones semanales para la coordinación del proyecto y fomentar el networking entre los miembros.`}</p>
                </>,
                myRole_title: '¿Cual es mi rol en SparkED?',
                myRole: <>
                    <p>{`Actualmente soy miembro del `}<span className="bold">{`Core Team`}</span>{`, esto significa que formo parte de la dirección de la comunidad. Por lo que ayudo a organizar los eventos,
                    organizar los networkings, invitar y seleccionar los miembros nuevos, influir en la dirección que toma la iniciativa o administrar su presupuesto.`}</p>
                    <p>{`Mi rol principal en la comunidad es el de encargado en los departamentos de comunicación y desarrollo y mantenimiento de la web de SparkED. En el
                    área de comunicación, me encargo de administrar nuestro CRM (Customer Relationship Managment) donde contacto con empresarios, emprendedores, universidades e instituciones
                    para hacer colaboraciones. Por ejemplo, en el primer evento de la comunidad me encargué de la reserva del auditorio. También me encargo de la parte de colaboración con el área de emprendimiento de mi universidad, la UPV.
                    Hemos llegado a acordar que realizaremos un evento mensual junto con su asignación de presupuesto. Respecto a la parte tecnológica, soy el principal desarrollador de la web de la comunidad, la cual acualmente sigue en construcción,
                    pero ya contamos con el dominio sparked.es.
                    `}
                    </p>
                </>,
                myRoadmap_title: 'El camino que seguí',
                myRoadmap1: <>
                    <p>{`Conocí a Pablo Martínez (Pau para los amigos) en una charla de Adrià Solà, un influencer de más de 3M de seguidores sobre desarrollo personal, ese mismo día,
                    estaba a punto de salir de la puerta del auditorio Paraninfo cuando un pensamiento se me pasó por la cabeza:
                    'Jaume, son las 18:00 un viernes en verano, y estoy en un evento de cómo ser un estudiante 1% en vez de en la playa de vacaciones, estoy seguro de que aquí,
                    en esta sala, hay gente extremadamente valiosa, voy a quedarme'. Así lo hice, y al final, cuando quedábamos una docena de chavales, y despedimos a Adrià, vi un grupito de 5 chavales charlando, los últimos que
                    aún seguían allí. Me junté con ellos sin más y empezamos a charlar, nos caimos muy bien e intercambiamos números. Y no tenía ni idea, de que esta sería una de las decisiones más impactantes de toda mi vida.
                    `}</p>
                </>,
                myRoadmap2: <>
                    <p>{`Desde entonces, todo ha sido crecimiento, conocí a gente increíble, acudimos a una cantidad increíble de eventos, como el VDS, el mayor evento de emprendimiento de Valencia, a eventos de Ideas UPV (el área de emprendimiento de la universidad)
                    como el Day Emprende o el Week Emprende, etc. Así que eventualmente decidimos hacer nuestro propio evento, el Spark your Speech. Este evento, al final resultó ser el mayor evento de la historia de la UPV de emprendimiento hecho por y para estudiantes,
                    con más 100 asistentes. Debido a que años atrás participé en IdeasUPV en varios proyectos ya tenía contactos con los que poder reservar un auditorio grande y obtener financiación, lo cual facilitó mucho el proceso. Por último, comentar que
                    tuve la ocasión de participar como ponente.
                    `}</p>
                </>,
                myRoadmap3: <>
                <h2>¿Qué hay para el futuro?</h2>
                    <p>{`El futuro de SparkED no apunta más bajo que la propia luna, está teniendo un crecimiento sin precedentes. A día de hoy, estamos organizando la madre de los eventos. En Mayo tendrá lugar "SparkED: The grat show",
                    un evento donde esperamos tener de 250 a 300 asistentes, 5 charlas, 8 talleres y 3 networkings que realizarán empresarios, influencers y empresas. Todo en el auditorio donde todo empezó: el Paraninfo + toda la escuela de informática, donde hice mi grado y mi master.`}</p>
                    <p>{`Otros eventos que ya tenemos hablados y organizados para hacer a lo largo de estos meses son: Taller de Notion para gestión de proyectos, taller de fiscalidad, visitas a Zeleros (empresa que desarrolla transporte
                        del tipo hyperloop) y visitas a Lanzadera, la mayor incubadora de startups de España.`}</p>
                </>,
                acknowledgements_title: 'Agradecimientos',
                acknowledgements: <>
                    <p>{`En todo este artículo he hablado solo de mi, ya que esta página web está dedicada a eso, a registrar mis logros personales. No obstante, este proyecto no lo empecé yo ni tampoco soy la única persona
                    que ayuda a organizarlo, por lo que sería muy injusto no reconocer el titánico esfuerzo que los demás miembros han realizado.`}</p>
                    <p>{`Sobretodo, agradecerle a `}<a href="https://www.linkedin.com/in/pablo-martinez-ruiz/">Pau Martínez</a> {` por crear esta fabulosa comunidad, siempre lleno de enrgía y la visión que actualmente lleva la comunidad.`}</p>
                    <p>{`Agradezco también al resto de miembros del Core Team por administrar y crear actividades para la comunidad: Sergio C., Sergio Marí, Manon Lagrange, Antonio Gabriel, Yoana Ilianova y Claudia Herrero.`}</p>
                    <p>{`Gracias por ser las estrellas brillantes de entusiasmo, creatividad y potencial que soys. Cuando estoy con vosotros, sé que estoy en el lugar correcto, porque de todos vosotros admiro algo.`}</p>
                    <p>{`También quiero agradecer a todos los miembros de SparkED que conforman la comunidad, sin ellos, este proyecto sería imposible. Sobretodo, a los miembros más activos que suelen venir a los networkings. Gracias <3`}</p>

                </>,
                gallery_title: 'Galería'
            },
            microengineers_project_card_title: "",
            microengineers_project_content: {
                content1: <>
                <h2>{`Microengineers UPV`}</h2>
                <p>{`
                Microengineers es un grupo de Generación Espontánea (grupo que gestiona los clubs universitarios) de la UPV.
                El grupo está dedicado a hacer proyectos de biotecnología. Actualmente hay dos principales: un proyecto de biosensores, y en el que
                yo participo: Mycrospace.
                `}
                </p>
                </>,
                myRole_title: `Mi papel en Microengineers: Mycrospace`,
                content2: <>
                <p>{`Mycrospace es un proyecto que consiste, principalmente, en desarrollar una app de conteo de colonias automático de las
                placas petri. Actualmente en los laboratorios de neustra universidad este conteo se sigue haciendo a mano y todas las apps
                existentes tinen una calidad muy mala. Así que con colaboración con los mejores investigadores de la facultad de biotecnología,
                vamos a crear esta app.`}</p>
                </>,
                content3: <>
                <p>{`Yo me involucro en el corazón de la aplicación: crear la herramienta para taggear el dataset y crear el modelo de IA
                que haga la tarea. Para la parte de diseño, UX, UIn frontend y otras tareas de BBDD ya hay otras personas que la hacen.
                El TFM de mi master en Inteligencia Artificial está hecho en base a este proyecto.`}</p>
                </>
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
                    <h2>Proyecto de IA: Autoencoder</h2>
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
                    <h2>Animación</h2>
                    <p>
                        {`La siguiente animación se ha hecho seleccionando diferentes puntos del plano, unos seguidos del otro, haciendo un recorrido y generando los números. El resultado al ponerlas juntas
                    es esta curiosa animación donde parece que los números se pliegan y deforman para formar otros. A esto se le llama explorar el espacio latente. `}
                    </p>
                </>
            },
            sorting_algorithms_project_card_title: "Algoritmos de ordenado",
            sorting_algorithms_project_content: {
                content: <>
                    <h2>Proyecto de algoritmos de ordenado</h2>
                    <p>
                        Puedes encontrar el proyecto en la {<a href="https://github.com/jaume2000/SortingAlgorithms/" target="_blank">repo de github</a>} o
                        si lo prefieres puedes encontrar el código {<a href="https://jaume2000.github.io/SortingAlgorithms/" target="_blank"> aquí</a>}.
                    </p>
                    <h2>Motivación</h2>
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
