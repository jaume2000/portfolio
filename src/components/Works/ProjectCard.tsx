
import { bool } from 'aws-sdk/clients/signer'
import './css/ProjectCard.css'
import {getLanguageAllDictionary} from '@/lang/lang'

export default function ProjectCard ({lang, title, technologies, github_repo, title_style, background_style}:{lang:string, title:string, title_style:React.CSSProperties, technologies:string[], github_repo?:string, background_style:React.CSSProperties}) {


    return (
        <div className='grid_element project_background' style={background_style}>
            <div className='portfolio_title_container full_size centered'>
                <h2 style={title_style}>{title}</h2>
            </div>
            <Technologies lang={lang} github_repo={github_repo} technologies={technologies}/>
        </div>
    )
}

const Technologies = ({lang, technologies,background_color="black", text_color="white", github_repo}:{lang:string, technologies:string[],background_color?:string, text_color?:string, github_repo?:string}) => {

    let dict = getLanguageAllDictionary(lang).Works

    let nextjs_text:string = "NextJS"
    let react_text:string = "React"
    let typescript_text:string = "TypeScript"
    let python_text:string = "Python"
    let colab:string = "Google\xA0Colab"
    let c_sharp:string = "C#"
    let unity3d:string = "Unity\xA03D"
    let github_repo_text:string = dict.github_link_to_repo_text;

    const tech_dict = {
        "nextjs":
        <SingleTecnology title={nextjs_text} alt='Next.js logo' src='/public/nextjs_logo.png' />,

        "react":
        <SingleTecnology title={react_text} alt='React.js logo' src='/public/react_logo.png' />,

        "typescript": 
        <SingleTecnology title={typescript_text} alt='Typescript logo' src='/public/typescript_logo.png' additional_img_class='ts_logo' round_border={false}/>,

        "python":
        <SingleTecnology title={python_text} alt='Python logo' src='/public/python_logo.png' white_background={true}/>,

        "colab":
        <SingleTecnology title={colab} alt='Google Colab logo' src='/public/colab_logo.jpg' white_background={true}/>,

        "c_sharp": 
        <SingleTecnology title={c_sharp} alt='C# logo' src='/public/c_sharp_logo.png'/>,

        "unity3d": 
        <SingleTecnology title={unity3d} alt='Unity3D logo' src='/public/unity3d_logo.png'/>,

    }



    let github_repo_object = (
        <SingleTecnology title={github_repo_text} alt='Github logo' src='/public/github-mark.png' href={github_repo}/>
    )



    return (
        <div className='technologies' style={{"--technologies_background_color": background_color, "--technologies_text_color": text_color} as React.CSSProperties}>
            {technologies.map((x,i)=>{return tech_dict[x  as keyof typeof tech_dict]})}
            {github_repo ? github_repo_object : undefined}
        </div>

    )

}

const SingleTecnology = ({src, title, alt, href, additional_img_class, white_background=false, round_border=true}:{src:string, title:string, alt:string, additional_img_class?:string, white_background?:bool, round_border?:bool, href?:string}) => {
    
    let img_classes = 'technology_logo' + (round_border ? ' round_border':'') + (white_background ? ' white_background':'') + (additional_img_class ? ' ' + additional_img_class : '')
    
    return (
        <div className="technology_logo_container" style={{"--text_length": ((title.length +2) + "ch")} as React.CSSProperties}>
            <img className={img_classes} alt={alt} src={src}></img>
            {href ? <a href={href} target='_blank'>{title}</a> : <p>{title}</p>}
        </div>
    )
}