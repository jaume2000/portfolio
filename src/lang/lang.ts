//import ca from './ca'
import es from './es'
import en from './en'
//import fr from './fr'


let dict: {[key:string]: translation_structure}= {
    es: es,
    //ca: ca,
    en: en,
    //fr: fr
}

const getLanguageAllDictionary = (lang: string): {[key:string]:{[key:string]:string}} =>{
    lang = lang.replaceAll('_','-').split('-')[0];
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

const isLenguageAvailable= (l:string):boolean => Object.keys(dict).includes(l)
const getAvailableLenguages = ():string[] => Object.keys(dict)


export {getLanguageDictionary, isLenguageAvailable, getAvailableLenguages}