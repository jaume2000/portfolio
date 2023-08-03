import '@/lang/lang'
import getLanguageDictionary from '@/lang/lang'
import '@/css/globals.css'
import './style.css'

const Works = ({lang}: {lang:string})=>{

    let dict = getLanguageDictionary(lang,"Works")

    return(
        <div className='works_container fullpage'>
            <h1 id='works'>
                {dict.title}
            </h1>
        </div>
    )
}

export default Works