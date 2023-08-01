
const getLanguageAllDictionary = (lang: string): {[key:string]:{[key:string]:string}} =>{
    if(Object.keys(dict).find((x: string)=>x==lang) !== undefined){
        let str = lang as keyof typeof dict;
        return dict[str];
    }
    return dict.en
}

const getLanguageDictionary = (lang: string, page: string): {[key:string]:string} =>{
    if(Object.keys(dict).find((x: string)=>x==lang) !== undefined){
        let str = lang as keyof typeof dict;
        return dict[str][page];
    }
    return dict.en[page]
}

let dict: {[key:string]: {[key:string]: {[key:string]:string}}}= {
    es: {
        PresentationPage:{
            main_title: "¡Bienvenido!",
            presentation: "Me llamo Jaume Ivars Grimalt, y soy desarrollador fullstack"
        },
    },
    en: {
        PresentationPage:{
            main_title: "Wellcome!",
            presentation: "My name is Jaume Ivars Grimalt and I am fullstack developer"
        },
    },
    fr:{
        PresentationPage:{
            main_title: "Eh bien!",
            presentation: "Je m'appelle Jaume Ivars et je suis développeur fullstack"
        }
    }
}

export default getLanguageDictionary