
import './css/Studies.css'
import '@/css/globals.css'
import PlainText from './PlainText'
import {getLanguageAllDictionary } from '@/lang/lang'

const Studies = ({lang}:{lang:string}) => {

    let dict = getLanguageAllDictionary(lang).About

    return <>
    <div className='centered'><a href='https://www.upv.es' target='_blank'><img id='upv_logo' src={"/public/UPV_hacker.png"} alt={"UPV logo"}/></a></div>
    <PlainText text={dict.studies.content}/>
    </>
}

export default Studies