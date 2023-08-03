
const getLanguageAllDictionary = (lang: string): {[key:string]:{[key:string]:string}} =>{
    if(Object.keys(dict).find((x: string)=>x==lang) !== undefined){
        let str = lang as keyof typeof dict;
        return dict[str];
    }
    return dict.en
}

const getLanguageDictionary = (lang: string, page: string): {[key:string]:string} =>{
    if(lang =="default"){lang="en"}

    let page_key = page as keyof translation_structure

    if(Object.keys(dict).find((x: string)=>x==lang) !== undefined){
        let lang_key = lang as keyof typeof dict;
        return dict[lang_key][page_key];
    }

    return dict.en[page_key]
}


type translation_structure = {
    PresentationPage: {
        main_title: string,
        presentation: string
    },
    MenuBar: {
        about: string,
        works: string,
        contact: string
    },
    Works:{
        title: string
    },
    About: {
        title: string
    },
    Contact: {
        title: string
    }
}


let dict: {[key:string]: translation_structure}= {
    es: {
        PresentationPage:{
            main_title: "¡Bienvenido!",
            presentation: "Me llamo Jaume Ivars Grimalt, y soy desarrollador fullstack"
        },
        MenuBar:{
            about: "Sobre mí",
            works: "Trabajos",
            contact: "Contáctame",
        },
        Works: {
            title: "Mis trabajos"
        },
        About: {
            title: "Sobre mí"
        },
        Contact: {
            title: "Contacto"
        }

    },
    en: {
        PresentationPage:{
            main_title: "Welcome!",
            presentation: "My name is Jaume Ivars Grimalt and I am fullstack developer"
        },
        MenuBar:{
            about: "About me",
            works: "My work",
            contact: "Contact me",
        },
        Works: {
            title: "My work"
        },
        About: {
            title: "About me"
        },
        Contact: {
            title: "Contact me"
        }
    },
    fr:{
        PresentationPage:{
            main_title: "Bienvenue!",
            presentation: "Je m'appelle Jaume Ivars et je suis développeur fullstack"
        },
        MenuBar:{
            about: "A propos de moi",
            works: "Travaux",
            contact: "Me contacter",
        },
        Works: {
            title: "Mes travaux"
        },
        About: {
            title: "A propos de moi"
        },
        Contact: {
            title: "Contact"
        }
    }
}

export default getLanguageDictionary