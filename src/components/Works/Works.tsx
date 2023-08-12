import '@/lang/lang'
import {getLanguageDictionary} from '@/lang/lang'
import '@/css/globals.css'
import './style.css'

const Works = ({lang}: {lang:string})=>{

    let dict = getLanguageDictionary(lang,"Works")

    return(
        <div className='works_container fullpage'>
            <div className="black_waves_2"/>
            <h1 id='works'>
                {dict.title}
            </h1>
            <div className='works_grid'>
                <div className='grid_element portfolio_project project_background'>
                    <div className='portfolio_title_container full_size centered'>
                        <h2>{"Portfolio Project"}</h2>
                    </div>
                    <Technologies github_repo="https://github.com/jaume2000/portfolio" technologies={["nextjs", "react", "typescript"]}/>
                </div>
                <div className='grid_element project_background stablediffusion_project'>
                    <div className='full_size centered'>
                        <h2>{"Fine-Tuned Stable Diffusion"}</h2>
                    </div>
                    <Technologies technologies={["python", "colab"]}/>
                </div>
                <div className='grid_element project_background perceptron_project'>
                    <div className='full_size centered'>
                        <h2>{"Visual Perceptron"}</h2>
                    </div>
                    <Technologies technologies={["c_sharp"]} background_color='white' text_color='black'/>
                </div>
                <div className='grid_element project_background hardware_project'>
                    <div className='full_size centered'>
                        <h2>{"Logic Gate Simulator"}</h2>
                    </div>
                    <Technologies technologies={["unity3d", "c_sharp"]} background_color='white' text_color='black'/>
                </div>
            </div>
        </div>
    )
}

const Technologies = ({technologies,background_color="black", text_color="white", github_repo}:{technologies:string[],background_color?:string, text_color?:string, github_repo?:string}) => {

    let nextjs_text:string = "NextJS"
    let react_text:string = "React"
    let typescript_text:string = "TypeScript"
    let python_text:string = "Python"
    let colab:string = "Google\xA0Colab"
    let c_sharp:string = "C#"
    let unity3d:string = "Unity\xA03D"
    let github_repo_text:string = "Link\xA0to\xA0repository"

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
            <a href="https://colab.research.google.com/" target='_blank'>{colab}</a>
        </div>,

        "c_sharp": 
        <div className="technology_logo_container" style={{"--text_length": ((c_sharp.length +2) + "ch")} as React.CSSProperties}>
            <img className='technology_logo' alt='c sharp logo' src="/c_sharp_logo.png"></img>
            <a href="https://dotnet.microsoft.com/es-es/languages/csharp" target='_blank'>{c_sharp}</a>
        </div>,

        "unity3d": 
        <div className="technology_logo_container" style={{"--text_length": ((unity3d.length +2) + "ch")} as React.CSSProperties}>
            <img className='technology_logo round_border' alt='unity 3d logo' src="/unity3d_logo.png"></img>
            <a href="https://unity.com" target='_blank'>{unity3d}</a>
        </div>
    }

    let github_repo_object = <div className="technology_logo_container" style={{"--text_length": ((github_repo_text.length +2) + "ch")} as React.CSSProperties}>
    <img className='technology_logo round_border' alt='github repository' src="/github-mark.png"></img>
    <a href={github_repo} target='_blank'>{github_repo_text}</a>
</div>

    return (
        <div className='technologies' style={{"--technologies_background_color": background_color, "--technologies_text_color": text_color} as React.CSSProperties}>
            {technologies.map((x,i)=>{return tech_dict[x  as keyof typeof tech_dict]})}
            {github_repo ? github_repo_object : undefined}
        </div>

    )

}

export default Works