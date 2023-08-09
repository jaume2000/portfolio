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
            <h2 className='centered_text'>{"Section not finished yet."}</h2>
            <p className='centered_text'>{"Gmail: jaumeig95@gmail.com"}</p>
            <p className='centered_text'>{"Linkedin: "}<a href="https://linkedin.com/in/jaume-ivars-grimalt" target='_blank'>{"https://linkedin.com/in/jaume-ivars-grimalt"}</a></p>
            <p className='centered_text'>{"Github: "}<a href="https://github.com/jaume2000" target='_blank'>{"https://github.com/jaume2000"}</a></p>
        </div>
    )
}

export default Contact