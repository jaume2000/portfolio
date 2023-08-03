import '@/lang/lang'
import {getLanguageDictionary} from '@/lang/lang'
import '@/css/globals.css'
import './style.css'

const Contact = ({lang}: {lang:string})=>{

    let dict = getLanguageDictionary(lang,"Contact")

    return(
        <div className='contact_container fullpage'>
            <h1 id='contact'>
                {dict.title}
            </h1>
        </div>
    )
}

export default Contact