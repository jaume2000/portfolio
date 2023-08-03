import ca from './ca'
import es from './es'
import en from './en'
import fr from './fr'


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

const getLanguageEmoji = (lang:string): string => {

    let emojis = {
        es: "🇪🇸",
        en: "🇬🇧",
        fr: "🇫🇷",
        ca: "ca"
    }
    let lang_key = lang as keyof typeof emojis

    return emojis[lang_key]
}



let dict: {[key:string]: translation_structure}= {
    es: es,
    ca: ca,
    en: en,
    fr: fr
}

export {getLanguageDictionary, getLanguageEmoji}