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
                <div className='grid_element portfolio_project project_background'>
                    <div className='portfolio_title_container full_size centered'>
                        <h2>{"Portfolio Project"}</h2>
                    </div>
                    <Technologies technologies={["nextjs", "react", "typescript"]}/>
                </div>
                <div className='grid_element project_background stablediffusion_project'>
                    <div className='full_size centered'>
                        <h2>{"Fine-Tuned Stable Diffusion"}</h2>
                    </div>
                    <Technologies technologies={["python", "colab"]}/>
                </div>
                <div className='grid_element centered'>
                    <p>{"Perceptron C#"}</p>
                </div>
                <div className='grid_element centered'>
                    <p>{"Logic Gate Simulator"}</p>
                </div>
                <div className='grid_element centered'>
                    <p>{"Neurocatching Web"}</p>
                </div>
            </div>
        </div>
    )
}

const Technologies = ({technologies}:{technologies:string[]}) => {

    let nextjs_text:string = "NextJS"
    let react_text:string = "React"
    let typescript_text:string = "TypeScript"
    let python_text:string = "Python"
    let colab:string = "Google\xA0Colab"

    const tech_dict = {
        "nextjs":
        <div className="technology_logo_container" style={{"--text_length": ((nextjs_text.length+2) + "ch")} as React.CSSProperties}>
            <img className='technology_logo round_border' alt='nextjs logo' src="/nextjs_logo.png"></img>
            <a href="https://nextjs.org/" target='_blank'>{nextjs_text}</a>
        </div>,

        "react":
        <div className="technology_logo_container" style={{"--text_length": ((react_text.length+2) + "ch")} as React.CSSProperties}>
            <img className='technology_logo round_border' alt='reactjs logo' src="/react_logo.png"></img>
            <a href="https://react.dev/" target='_blank'>{react_text}</a>
        </div>,

        "typescript": 
        <div className="technology_logo_container" style={{"--text_length": ((typescript_text.length +2) + "ch")} as React.CSSProperties}>
            <img className='technology_logo ts_logo' alt='typescript logo' src="/typescript_logo.png"></img>
            <a href="https://www.typescriptlang.org/" target='_blank'>{typescript_text}</a>
        </div>,

        "python": 
        <div className="technology_logo_container" style={{"--text_length": ((python_text.length +2) + "ch")} as React.CSSProperties}>
            <img className='technology_logo round_border white_background' alt='python logo' src="/python_logo.png"></img>
            <a href="https://www.python.org/" target='_blank'>{python_text}</a>
        </div>,

        "colab": 
        <div className="technology_logo_container" style={{"--text_length": ((colab.length +2) + "ch")} as React.CSSProperties}>
            <img className='technology_logo round_border white_background' alt='colab logo' src="/colab_logo.jpg"></img>
            <a href="https://www.python.org/" target='_blank'>{colab}</a>
        </div>
    }

    return (
        <div className='technologies'>
            {technologies.map((x,i)=>{return tech_dict[x  as keyof typeof tech_dict]})}
        </div>

    )

}

export default Works