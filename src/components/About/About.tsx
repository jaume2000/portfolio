import '@/lang/lang'
import getLanguageDictionary from '@/lang/lang'
import '@/css/globals.css'
import './style.css'

const About = ({lang}: {lang:string})=>{

    let dict = getLanguageDictionary(lang,"About")

    return(
        <div className='about_container fullpage'>
            <h1 id='about'>
                {dict.title}
            </h1>
        </div>
    )
}

export default About