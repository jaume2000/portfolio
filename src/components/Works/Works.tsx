"use client"

import '@/lang/lang'
import React, { useState } from 'react'
import {getLanguageAllDictionary} from '@/lang/lang'
import '@/globals.css'
import './style.css'
import ProjectCardContainer from './ProjectCardContainer'
import ProjectCard from './ProjectCard'
import {ProjectExplanationBox} from './ProjectExplanationBox'

import DefaultContent from './ProjectExplanationContents/DefaultContent'
import PortfolioContent from './ProjectExplanationContents/PortfolioContent'
import SparkedContent from './ProjectExplanationContents/SparkedContent'
import MicroengineersContent from './ProjectExplanationContents/MicroengineersContent'
import AutoencoderContent from './ProjectExplanationContents/AutoencoderContent'
import SortingAlgorithmsContent from './ProjectExplanationContents/SortingAlgorithmsContent'
import StableDiffussionContent from './ProjectExplanationContents/StableDiffussionContent'
import LogicGateSimulatorContent from './ProjectExplanationContents/LogicGateSimulatorContent'
import PerceptronContent from './ProjectExplanationContents/PerceptronContent'
import FairJourneyContent from './ProjectExplanationContents/FairJourneyContent'


const BuildingInfo = () => {

    return (
        <div className='centered full_size' ><h1 color='wwhite'>No info yet</h1></div>
    )
}

const Works = ({lang}: {lang:string})=>{

    //////////////////////////////////////////////////////////////
    //      Hay que separar los proyectos de emprendimiento     //
    //      de los proyectos de programación y curiosidades.    //
    //////////////////////////////////////////////////////////////

    const [hidden_work_explanation, set_hidden_work_explanation] = useState(true);
    const [first_time_load, setFirstTime] = useState(true);
    const [explanation_content, setExplanationContent]= useState(<DefaultContent events={{onclose:()=>{},onopen:()=>{} }}/>)

    const dict = getLanguageAllDictionary(lang).Works

    const CustomProjectCard = ({title, background_style, title_style,technologies, github_repo, explanation_content,web_link, id}:{title:string, background_style:React.CSSProperties, title_style:React.CSSProperties,technologies:string[], github_repo?:string, explanation_content?:JSX.Element, web_link?:string, id?:string}) => {

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
            id={id}
        />
    }

    // Para añadir el explanation_content, solo debes crear el JSX necesario y metero en explanation_content. Se añadirá cuando se clicke la targeta.
    // Puedes añadir en el JSX padre onclose y onopen para llamar eventos si lo deseas, para resetear o para iniciar el estado.


    //Startup & entrepreneurship projects
    const startups_cards = [
        <CustomProjectCard title={""}
        key={"project_card_"+dict.portfolio_project_card_title}
        web_link={'https://sparked.es/'}
        background_style={{
            backgroundImage: 'url("/public/sparked_background.png")',
            backgroundColor: 'black',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        } as React.CSSProperties}
        title_style={{}}
        technologies={[]}
        explanation_content={<SparkedContent lang={lang}/>}
        id='sparked'
        />,

        <CustomProjectCard
        title={"Mycrospace"}
        id="mycrospace"
        key={"project_card_" + dict.portfolio_project_card_title}
        background_style={{
            backgroundImage: 'url("/public/mycrospace.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "white",
        } as React.CSSProperties}
        title_style={{
            background: "linear-gradient(90deg, magenta, yellow)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontFamily: "Poppins",
            textShadow: "0px -6px 0px rgba(240, 240, 240, 1)",
            filter: "drop-shadow(0px 0px 30px rgba(0, 0, 0, 1))",
        }}
        technologies={[]}
        explanation_content={<MicroengineersContent lang={lang} />}
        />,

        <CustomProjectCard
        title={"Fair Journey"}
        id="mycrospace"
        key={"project_card_" + dict.portfolio_project_card_title}
        background_style={{
            backgroundImage: 'url("/public/fairjourney.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "white",
        } as React.CSSProperties}
        title_style={{
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontFamily: "Poppins",
            textShadow: "0px -6px 0px rgba(240, 240, 240, 1)",
            filter: "drop-shadow(0px 0px 30px rgba(0, 0, 0, 1))",
        }}
        technologies={[]}
        explanation_content={<FairJourneyContent lang={lang} />}
        />

    ]

    //Other projects
    const project_cards = [
        <CustomProjectCard title={dict.portfolio_project_card_title}
            key={"project_card_"+dict.portfolio_project_card_title}
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
            explanation_content={<PortfolioContent lang={lang}/>}
        />,


        <CustomProjectCard title={dict.autoencoder_card_title}
            key={"project_card_"+dict.portfolio_project_card_title}
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

        <CustomProjectCard title={dict.sorting_algorithms_project_card_title}
            web_link={'https://jaume2000.github.io/SortingAlgorithms/'}

            key={"project_card_"+dict.portfolio_project_card_title}
            background_style={{
                backgroundImage: 'url("/public/algorithms_background.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'right 0 top 00px',
            } as React.CSSProperties}
            title_style={{
                fontFamily: 'ChalkBoard, arial',
                fontWeight: '100',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color:'white'
            } as React.CSSProperties}
            technologies={['html','css','typescript']}
            explanation_content={<SortingAlgorithmsContent lang={lang}/>}
        />,

        <CustomProjectCard title={dict.stablediffusion_card_title}
            key={"project_card_"+dict.portfolio_project_card_title}
            background_style={{
                backgroundImage: 'url("/public/stablediffusion_img1.png")',
                backgroundPosition: 'right 0 top 00px',
                backgroundSize: 'cover',
            } as React.CSSProperties}
            title_style={{
                fontFamily: "'DancingScript', cursive"}
            }
            technologies={['python','colab']}
            explanation_content={<StableDiffussionContent lang={lang}/>}
        />,

        <CustomProjectCard title={dict.visual_perceptron_card_title}
            key={"project_card_"+dict.portfolio_project_card_title}
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
            explanation_content={<PerceptronContent lang={lang}/>}
        />,

        <CustomProjectCard title={dict.hardware_project_card_title}
            key={"project_card_"+dict.portfolio_project_card_title}
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
            explanation_content={<LogicGateSimulatorContent lang={lang}/>}
        />,
    ]

    project_cards.map((card, index) => {
        return React.cloneElement(card, {key: index})
    })

    return (
        <div className='works_container fullpage'>
            <div className="black_waves_2 bg-color-black"/>
                <section className='startup_works_container'>
                    <h1 id='works'>
                        {dict.startups_title}
                    </h1>
                    <ProjectCardContainer project_cards={startups_cards}/>
                    <ProjectExplanationBox first_time_load={first_time_load} hidden={hidden_work_explanation} setHidden={set_hidden_work_explanation} content={explanation_content}/>
                </section>
            <div className='black_waves_wrapper'>
                <div className="black_waves_2 bg-color-gray"/>
            </div>
                <section>
                    <h1 id='works'>
                        {dict.title}
                    </h1>
                    <ProjectCardContainer project_cards={project_cards}/>
                    <ProjectExplanationBox first_time_load={first_time_load} hidden={hidden_work_explanation} setHidden={set_hidden_work_explanation} content={explanation_content}/>
                </section>
        </div>
    )
}

export default Works
