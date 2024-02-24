"use client"

import '@/lang/lang'
import { Dispatch, SetStateAction, useState } from 'react'
import {getLanguageAllDictionary} from '@/lang/lang'
import '@/css/globals.css'
import './style.css'
import ProjectCardContainer from './ProjectCardContainer'
import ProjectCard from './ProjectCard'
import {ProjectExplanationBox, ProjectExplanationContent_properties} from './ProjectExplanationBox'
import DefaultContent from './ProjectExplanationContents/DefaultContent'
import SortingAlgorithmsContent from './ProjectExplanationContents/SortingAlgorithmsContent'
import AutoencoderContent from './ProjectExplanationContents/AutoencoderContent'


const BuildingInfo = () => {

    return (
        <div className='centered full_size' ><h1 color='wwhite'>No info yet</h1></div>
    )
}

const Works = ({lang}: {lang:string})=>{

    const [hidden_work_explanation, set_hidden_work_explanation] = useState(true);
    const [first_time_load, setFirstTime] = useState(true);
    const [explanation_content, setExplanationContent]= useState(<DefaultContent events={{onclose:()=>{},onopen:()=>{} }}/>)

    let dict = getLanguageAllDictionary(lang).Works

    const CustomProjectCard = ({title, background_style, title_style,technologies, github_repo, explanation_content,web_link}:{key:number, title:string, background_style:React.CSSProperties, title_style:React.CSSProperties,technologies:string[], github_repo?:string, explanation_content?:JSX.Element, web_link?:string}) => {

        return <ProjectCard
            title={title}
            title_style={title_style}
            background_style={background_style}
            technologies={technologies}
            github_repo={github_repo}
            explanation_content={explanation_content ?? <BuildingInfo/>}

            lang={lang}
            setHiddenExplanation={set_hidden_work_explanation}
            setFirstTime={setFirstTime}
            setExplanationContent={setExplanationContent}
            web_link={web_link}

        />
    }

    // Para añadir el explanation_content, solo debes crear el JSX necesario y metero en explanation_content. Se añadirá cuando se clicke la targeta.
    // Puedes añadir en el JSX padre onclose y onopen para llamar eventos si lo deseas, para resetear o para iniciar el estado.


    const project_cards = [
        <CustomProjectCard key={0} title={dict.portfolio_project_card_title}
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
        />,
        <CustomProjectCard key={1} title={""}
        web_link={'https://sparked.es/'}

        background_style={{
            backgroundImage: 'url("/public/sparked_background.png")',
            backgroundColor: 'black',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        } as React.CSSProperties}
        title_style={{}}
        technologies={['nextjs','react','typescript']}
        />,
        <CustomProjectCard key={2} title={""}
            background_style={{
                backgroundImage: 'url("/public/microengineers.jpeg")',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'white',
            } as React.CSSProperties}
            title_style={{}}
            //github_repo='https://github.com/jaume2000/CNN_Autoencoder'
            technologies={['python', 'pytorch']}
            explanation_content={<AutoencoderContent lang={lang}/>}
            
        />,
        <CustomProjectCard key={3} title={dict.autoencoder_card_title}
            background_style={{
                backgroundImage: 'url("/public/autoencoder.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'right 0 top 00px'
            } as React.CSSProperties}
            title_style={{
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.7)',
                fontFamily: "'Times New Roman', Times, serif"
            } as React.CSSProperties}
            github_repo='https://github.com/jaume2000/CNN_Autoencoder'
            technologies={['python', 'pytorch']}
            explanation_content={<AutoencoderContent lang={lang}/>}
            
        />,
        <CustomProjectCard key={4} title={dict.sorting_algorithms_project_card_title}
            web_link={'https://jaume2000.github.io/SortingAlgorithms/'}

            background_style={{
                backgroundImage: 'url("/public/algorithms_background.png")',
                backgroundSize: 'cover',
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
            explanation_content={<SortingAlgorithmsContent lang={lang}/>}
        />,
        <CustomProjectCard key={5} title={dict.stablediffusion_card_title}
            background_style={{
                backgroundImage: 'url("/public/stablediffusion_img1.png")',
                backgroundPosition: 'right 0 top 00px',
                backgroundSize: 'cover',
            } as React.CSSProperties}
            title_style={{
                fontFamily: "'DancingScript', cursive"}
            }
            technologies={['python','colab']}
        />,
        <CustomProjectCard key={6} title={dict.visual_perceptron_card_title}
            background_style={{
                backgroundImage: 'url("/public/neural_network_background.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'right 0 top 00px'
            } as React.CSSProperties}
            title_style={{
                width: '100%',
                backgroundColor: 'rgba(255,255,255,0.1)',
                fontFamily: "'Times New Roman', Times, serif"
            } as React.CSSProperties}
            technologies={['c_sharp']}
        />,
        <CustomProjectCard key={7} title={dict.hardware_project_card_title}
            background_style={{
                backgroundImage: 'url("/public/logic_gate_background.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'right 0 top 00px',
            } as React.CSSProperties}
            title_style={{
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color:'gold'
            } as React.CSSProperties}
            technologies={['unity3d','c_sharp']}
        />,
    ]

    return (
        <div className='works_container fullpage'>
            <div className="black_waves_2"/>
            <h1 id='works'>
                {dict.title}
            </h1>
            <ProjectCardContainer project_cards={project_cards}/>
            <ProjectExplanationBox first_time_load={first_time_load} hidden={hidden_work_explanation} setHidden={set_hidden_work_explanation} content={explanation_content}/>
        </div>
    )
}

export default Works
