import '@/lang/lang'
import {getLanguageDictionary} from '@/lang/lang'
import '@/css/globals.css'
import './style.css'

const Works = ({lang}: {lang:string})=>{

    let dict = getLanguageDictionary(lang,"Works")

    let nextjs_text:string = "NextJS"
    let react_text:string = "React"
    let typescript_text:string = "TypeScript"

    return(
        <div className='works_container fullpage'>
            <h1 id='works'>
                {dict.title}
            </h1>
            <div className='works_grid'>
                <div className='grid_element portfolio_project'>
                    <div className='portfolio_title_container full_size centered'>
                        <h2>{"Portfolio Project"}</h2>
                    </div>
                    <div className='technologies'>
                        <div className="technology_logo_container" style={{"--text_length": ((nextjs_text.length+2) + "ch")} as React.CSSProperties}>
                            <img className='technology_logo round_border' alt='nextjs logo' src="/nextjs_logo.png"></img>
                            <a href="https://nextjs.org/" target='_blank'>{nextjs_text}</a>
                        </div>
                        <div className="technology_logo_container" style={{"--text_length": ((react_text.length+2) + "ch")} as React.CSSProperties}>
                            <img className='technology_logo round_border' alt='reactjs logo' src="/react_logo.png"></img>
                            <a href="https://react.dev/" target='_blank'>{react_text}</a>
                        </div>
                        <div className="technology_logo_container" style={{"--text_length": ((typescript_text.length +2) + "ch")} as React.CSSProperties}>
                            <img className='technology_logo ts_logo' alt='typescript logo' src="/typescript_logo.png"></img>
                            <a href="https://www.typescriptlang.org/" target='_blank'>{typescript_text}</a>
                        </div>
                    </div>
                </div>
                <div className='grid_element centered'>
                    <p>{"Perceptron C#"}</p>
                </div>
                <div className='grid_element centered'>
                    <p>{"Logic Gate Simulator"}</p>
                </div>
                <div className='grid_element centered'>
                    <p>{"Fine-Tuned Stable Diffusion"}</p>
                </div>
                <div className='grid_element centered'>
                    <p>{"Neurocatching Web"}</p>
                </div>
            </div>
        </div>
    )
}

export default Works