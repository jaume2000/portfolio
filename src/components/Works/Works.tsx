import '@/lang/lang'
import {getLanguageAllDictionary} from '@/lang/lang'
import '@/css/globals.css'
import './style.css'


const Works = ({lang}: {lang:string})=>{

    let dict = getLanguageAllDictionary(lang).Works

    return(
        <div className='works_container fullpage'>
            <div className="black_waves_2"/>
            <h1 id='works'>
                {dict.title}
            </h1>
            <div className='works_grid'>
                <div className='grid_element portfolio_project project_background'>
                    <div className='portfolio_title_container full_size centered'>
                        <h2>{dict.portfolio_project_card_title}</h2>
                    </div>
                    <Technologies lang_dict={dict} github_repo="https://github.com/jaume2000/portfolio" technologies={["nextjs", "react", "typescript"]}/>
                </div>
                <div className='grid_element project_background stablediffusion_project'>
                    <div className='full_size centered'>
                        <h2>{dict.stablediffusion_card_title}</h2>
                    </div>
                    <Technologies lang_dict={dict} technologies={["python", "colab"]}/>
                </div>
                <div className='grid_element project_background perceptron_project'>
                    <div className='full_size centered'>
                        <h2>{dict.visual_perceptron_card_title}</h2>
                    </div>
                    <Technologies lang_dict={dict} technologies={["c_sharp"]} background_color='white' text_color='black'/>
                </div>
                <div className='grid_element project_background hardware_project'>
                    <div className='full_size centered'>
                        <h2>{dict.hardware_project_card_title}</h2>
                    </div>
                    <Technologies lang_dict={dict} technologies={["unity3d", "c_sharp"]} background_color='white' text_color='black'/>
                </div>
            </div>
        </div>
    )
}

const Technologies = ({lang_dict, technologies,background_color="black", text_color="white", github_repo}:{lang_dict:object, technologies:string[],background_color?:string, text_color?:string, github_repo?:string}) => {


    let nextjs_text:string = "NextJS"
    let react_text:string = "React"
    let typescript_text:string = "TypeScript"
    let python_text:string = "Python"
    let colab:string = "Google\xA0Colab"
    let c_sharp:string = "C#"
    let unity3d:string = "Unity\xA03D"
    let github_repo_text:string = lang_dict['github_link_to_repo_text' as keyof typeof lang_dict] as string //"Link\xA0to\xA0repository"

    const tech_dict = {
        "nextjs":
        <div className="technology_logo_container" style={{"--text_length": ((nextjs_text.length+2) + "ch")} as React.CSSProperties}>
            <img className='technology_logo round_border' alt='nextjs logo' src="/public/nextjs_logo.png"></img>
            <p>{nextjs_text}</p>
        </div>,

        "react":
        <div className="technology_logo_container" style={{"--text_length": ((react_text.length+2) + "ch")} as React.CSSProperties}>
            <img className='technology_logo round_border' alt='reactjs logo' src="/public/react_logo.png"></img>
            <p>{react_text}</p>
        </div>,

        "typescript": 
        <div className="technology_logo_container" style={{"--text_length": ((typescript_text.length +2) + "ch")} as React.CSSProperties}>
            <img className='technology_logo ts_logo' alt='typescript logo' src="/public/typescript_logo.png"></img>
            <p>{typescript_text}</p>
        </div>,

        "python": 
        <div className="technology_logo_container" style={{"--text_length": ((python_text.length +2) + "ch")} as React.CSSProperties}>
            <img className='technology_logo round_border white_background' alt='python logo' src="/public/python_logo.png"></img>
            <p>{python_text}</p>
        </div>,

        "colab": 
        <div className="technology_logo_container" style={{"--text_length": ((colab.length +2) + "ch")} as React.CSSProperties}>
            <img className='technology_logo round_border white_background' alt='colab logo' src="/public/colab_logo.jpg"></img>
            <p>{colab}</p>
        </div>,

        "c_sharp": 
        <div className="technology_logo_container" style={{"--text_length": ((c_sharp.length +2) + "ch")} as React.CSSProperties}>
            <img className='technology_logo' alt='c sharp logo' src="/public/c_sharp_logo.png"></img>
            <p>{c_sharp}</p>
        </div>,

        "unity3d": 
        <div className="technology_logo_container" style={{"--text_length": ((unity3d.length +2) + "ch")} as React.CSSProperties}>
            <img className='technology_logo round_border' alt='unity 3d logo' src="/public/unity3d_logo.png"></img>
            <p>{unity3d}</p>
        </div>
    }

    let github_repo_object = <div className="technology_logo_container" style={{"--text_length": ((github_repo_text.length +2) + "ch")} as React.CSSProperties}>
    <img className='technology_logo round_border' alt='github repository' src="/public/github-mark.png"></img>
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