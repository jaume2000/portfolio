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
                <div className='W1 grid_element centered'>
                    <p>{"Portfolio project"}</p>
                </div>
                <div className='W2 grid_element centered'>
                    <p>{"Perceptron C#"}</p>
                </div>
                <div className='W3 grid_element centered'>
                    <p>{"Logic Gate Simulator"}</p>
                </div>
                <div className='W4 grid_element centered'>
                    <p>{"Fine-Tuned Stable Diffusion"}</p>
                </div>
                <div className='W5 grid_element centered'>
                    <p>{"Neurocatching Web"}</p>
                </div>
            </div>
        </div>
    )
}

export default Works