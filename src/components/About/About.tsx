"use client"
import { useState } from 'react'

import '@/lang/lang'
import {getLanguageAllDictionary} from '@/lang/lang'
import ConsoleContainer from '@/components/utils/ConsoleContainer/ConsoleContainer'
import './style.css'
import SkillsCode from './SkillsCode'
import CVDownload from './CVDownload'
import Studies from './Studies'
import FolderContainer from '@/components/utils/FolderContainer/FolderContainer'
import WorkExperience from './WorkExperience'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import {ConsoleIcon, FeatherIcon, MoonIcon, SunIcon} from '@/components/SVGs/svg_gallery'

export type ConsoleTheme = "hacker" | "sun" | "moon" | "feather"

const About = ({lang}: {lang:string})=>{

    const [theme, setTheme] = useState<ConsoleTheme>("hacker")

    const dict = getLanguageAllDictionary(lang).About

    const selectOptions = [

        //(in rework) Hay que reescribri todo esto con markdown
        {console: <AboutMe lang={lang}/>, title: dict.aboutme.doc_title},
        {console: <SkillsCode lang={lang}/>, title: dict.skills_code.doc_title},
        //{console: <PlainText text={dict.skills.habilities_transcribed_content}/>, title: dict.skills.doc_title},
        {console: <Studies lang={lang}/>, title: dict.studies.doc_title},
        {console: <CVDownload lang={lang}/>, title: dict.cv.doc_title},
        {console: <WorkExperience lang={lang}/>, title: dict.work_experience.doc_title},
        {console: <ContactMe lang={lang}/>, title: dict.conctactme.doc_title},
    ]

    const [selectedContent, setSelectedContent] = useState(0);


    return(
        <div className='about_container fullpage'>
            <div className='container'>
                <div style={{width: "100%", display: "flex", justifyContent: "end"}}>
                    <button className={'p-2 bg-black rounded-xl ' + (theme == "sun" ? "invert" : "")} onClick={()=>setTheme("sun")}>
                        <SunIcon color="#ffffff"/>
                    </button>
                    <button className={'p-2 bg-black rounded-xl ' + (theme == "moon" ? "invert" : "")} onClick={()=>setTheme("moon")}>
                        <MoonIcon color="#ffffff"/>
                    </button>
                    <button className={'p-2 bg-black rounded-xl ' + (theme == "hacker" ? "invert" : "")} onClick={()=>setTheme("hacker")}>
                        <ConsoleIcon color="#ffffff"/>
                    </button>
                    <button className={'p-2 bg-black rounded-xl ' + (theme == "feather" ? "invert" : "")} onClick={()=>setTheme("feather")}>
                        <FeatherIcon color="#ffffff"/>
                    </button>
                </div>
                <h1 id='about'>
                    {dict.title}
                </h1>
                <div className='console_and_file_container'>
                    <FolderContainer className={"custom_folder_container"} content_list={selectOptions} selectedKey={selectedContent} setSelectedContent={setSelectedContent}/>
                    <ConsoleContainer className={"custom_console"} title={selectOptions[selectedContent].title} theme={theme}>
                        {selectOptions[selectedContent].console}
                    </ConsoleContainer>
                </div>
            </div>
        </div>
    )
}

export default About