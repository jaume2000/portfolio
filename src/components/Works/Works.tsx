import '@/lang/lang'
import {getLanguageDictionary} from '@/lang/lang'
import '@/css/globals.css'
import './style.css'

const Works = ({lang}: {lang:string})=>{

    let dict = getLanguageDictionary(lang,"Works")

    return(
        <div className='works_container fullpage'>
            <h1 id='works'>
                {dict.title}
            </h1>
            <div className='works_grid'>
                <div className='W1 grid_element'>
                    
                </div>
                <div className='W2 grid_element'/>
                <div className='W3 grid_element'/>
                <div className='W4 grid_element'/>
                <div className='W5 grid_element'/>
                <div className='W6 grid_element'/>
            </div>
        </div>
    )
}

export default Works