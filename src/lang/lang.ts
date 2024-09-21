//import ca from './ca'
import es from './es'
import en from './en'
import { translation_structure } from './translation_structure'
//import fr from './fr'


const dict: {[key:string]: translation_structure}= {
    es: es,
    //ca: ca,
    en: en,
    //fr: fr
}
const available_languages = Object.keys(dict)

const getLanguageAllDictionary = (lang: string): translation_structure =>{
    lang = lang.replaceAll('_','-').split('-')[0];
    if(Object.keys(dict).find((x: string)=>x==lang) !== undefined){
        const str = lang as keyof typeof dict;
        return dict[str];
    }
    return dict.en
}

const getLanguageDictionary = (lang: string, page: string) =>{
    if(lang =="default"){lang="en"}

    const page_key = page as keyof translation_structure

    if(Object.keys(dict).find((x: string)=>x==lang) !== undefined){
        const lang_key = lang as keyof typeof dict;
        return dict[lang_key][page_key];
    }

    return dict.en[page_key]
}

const isLenguageAvailable= (l:string):boolean => available_languages.includes(l)
const getAvailableLenguages = ():string[] => available_languages


export {getLanguageDictionary, isLenguageAvailable, getAvailableLenguages, getLanguageAllDictionary}