"use client"

import '@/lang/lang'
import { useState } from 'react'
import {getLanguageAllDictionary} from '@/lang/lang'
import '@/css/globals.css'
import './style.css'
import ProjectCardContainer from './ProjectCardContainer'
import ProjectCard from './ProjectCard'
import ProjectExplanationBox from './ProjectExplanationBox'


const Works = ({lang}: {lang:string})=>{

    const [hidden_work_explanation, set_hidden_work_explanation] = useState(true);

    let dict = getLanguageAllDictionary(lang).Works

    const project_cards = [
        <ProjectCard key={0} lang={lang} title={dict.portfolio_project_card_title}
            background_style={{ backgroundImage: 'linear-gradient(75deg, var(--main_color1) 45%, white 45.1%, white 54.9%, var(--main_color2) 55%)'} as React.CSSProperties}
            title_style={{
                userSelect: 'none',
                margin: 0,
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '100vh',
                padding: '1vh 5vh 0px 5vh'} as React.CSSProperties}
            technologies={['nextjs','react','typescript']}
            github_repo='https://github.com/jaume2000/portfolio'

            setHiddenExplanation={set_hidden_work_explanation}
        />,
        <ProjectCard key={1} lang={lang} title={dict.stablediffusion_card_title}
            background_style={{
                backgroundImage: 'url("/public/stablediffusion_img1.png")',
                backgroundPosition: 'right 0 top 00px',
                backgroundSize: '145%',
            } as React.CSSProperties}
            title_style={{
                fontFamily: "'DancingScript', cursive"}
            }
            technologies={['python','colab']}

            setHiddenExplanation={set_hidden_work_explanation}
        />,
        <ProjectCard key={2} lang={lang} title={dict.visual_perceptron_card_title}
            background_style={{
                backgroundImage: 'url("/public/neural_network_background.png")',
                backgroundSize: '100%',
                backgroundPosition: 'right 0 top 00px'
            } as React.CSSProperties}
            title_style={{
                width: '100%',
                backgroundColor: 'rgba(255,255,255,0.1)',
                fontFamily: "'Times New Roman', Times, serif"
            } as React.CSSProperties}
            technologies={['c_sharp']}

            setHiddenExplanation={set_hidden_work_explanation}
        />,
        <ProjectCard key={3} lang={lang} title={dict.hardware_project_card_title}
            background_style={{
                backgroundImage: 'url("/public/logic_gate_background.webp")',
                backgroundSize: '100%',
                backgroundPosition: 'right 0 top 00px',
            } as React.CSSProperties}
            title_style={{
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color:'gold'
            } as React.CSSProperties}
            technologies={['unity3d','c_sharp']}

            setHiddenExplanation={set_hidden_work_explanation}
        />,

        <ProjectCard key={4} lang={lang} title={dict.sorting_algorithms_project_card_title}
            web_link={'https://jaume2000.github.io/SortingAlgorithms/'}

            background_style={{
                backgroundImage: 'url("/public/algorithms_background.png")',
                backgroundSize: '100%',
                backgroundPosition: 'right 0 top 00px',
            } as React.CSSProperties}
            title_style={{
                fontFamily: 'ChalkBoard, arial',
                fontWeight: '100',
                fontSize: '3.5vw',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color:'white'
            } as React.CSSProperties}
            technologies={['html','css','typescript']}

            setHiddenExplanation={set_hidden_work_explanation}
        />,
    ]

    return (
        <div className='works_container fullpage'>
            <div className="black_waves_2"/>
            <h1 id='works'>
                {dict.title}
            </h1>
            <ProjectCardContainer project_cards={project_cards}/>
            <ProjectExplanationBox hidden={hidden_work_explanation} setHidden={set_hidden_work_explanation}/>
        </div>
    )
}

export default Works
