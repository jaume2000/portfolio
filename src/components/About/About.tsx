"use client"
import { useState, useEffect } from 'react'

import '@/lang/lang'
import {getLanguageAllDictionary} from '@/lang/lang'
import Text from 'react/'
import ConsoleContainer from '@/components/utils/ConsoleContainer/ConsoleContainer'
import './style.css'
import SkillsCode from './SkillsCode'
import TestingInformation from './TestInformation'
import PlainText from './PlainText'
import CVDownload from './CVDownload'
import Studies from './Studies'
import FolderContainer from '@/components/utils/FolderContainer/FolderContainer'
import WorkExperience from './WorkExperience'
import Tab from '@/components/utils/Tab/Tab'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import {ConsoleIcon, FeatherIcon, MoonIcon, SunIcon} from '@/components/SVGs/svg_gallery'

const About = ({lang}: {lang:string})=>{

    let dict = getLanguageAllDictionary(lang).About

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

    let [selectedContent, setSelectedContent] = useState(0);


    return(
        <div className='about_container fullpage'>
            <div className='container'>
                <div style={{width: "100%", display: "flex", justifyContent: "end"}}>
                    <button className='p-2'>
                        <SunIcon color="#ffffff"/>
                    </button>
                    <button className='p-2'>
                        <ConsoleIcon color="#ffffff"/>
                    </button>
                    <button className='p-2'>
                        <MoonIcon color="#ffffff"/>
                    </button>
                    <button className='p-2'>
                        <FeatherIcon color="#ffffff"/>
                    </button>
                </div>
                <h1 id='about'>
                    {dict.title}
                </h1>
                <div className='console_and_file_container'>
                    <FolderContainer className={"custom_folder_container"} content_list={selectOptions} selectedKey={selectedContent} setSelectedContent={setSelectedContent}/>
                    <ConsoleContainer className={"custom_console"} title={selectOptions[selectedContent].title} theme={"hacker_console"}>
                        {selectOptions[selectedContent].console}
                    </ConsoleContainer>
                </div>
            </div>
        </div>
    )
}

export default About