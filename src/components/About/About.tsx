"use client"
import { useState, useEffect } from 'react'

import '@/lang/lang'
import {getLanguageAllDictionary} from '@/lang/lang'
import Text from 'react/'
import '@/css/globals.css'
import ConsoleContainer from '@/components/utils/ConsoleContainer/ConsoleContainer'
import './style.css'
import GeneralInformation from './GeneralInformation'
import TestingInformation from './TestInformation'
import PlainText from './PlainText'
import CVDownload from './CVDownload'
import Studies from './Studies'
import FolderContainer from '@/components/utils/FolderContainer/FolderContainer'
import WorkExperience from './WorkExperience'
import Tab from '@/components/utils/Tab/Tab'

const About = ({lang}: {lang:string})=>{

    let dict = getLanguageAllDictionary(lang).About

    const selectOptions = [
        {console: <GeneralInformation lang={lang}/>, title: dict.habilities_text},
        {console: <PlainText text={dict.habilities_transcribed_content}/>, title: dict.habilities_transcribed_text},
        {console: <Studies lang={lang}/>, title: dict.studies.doc_title},
        {console: <CVDownload lang={lang}/>, title: dict.cv.doc_title},
        {console: <WorkExperience lang={lang}/>, title: dict.work_experience.doc_title},
    ]

    let [selectedContent, setSelectedContent] = useState(0);


    return(
        <div className='about_container fullpage'>
            <h1 id='about'>
                {dict.title}
            </h1>
            <div className='console_and_file_container'>
                <FolderContainer className={"custom_folder_container"} content_list={selectOptions} selectedKey={selectedContent} setSelectedContent={setSelectedContent}/>
                <ConsoleContainer className={"custom_console"} title={selectOptions[selectedContent].title} mode={"hacker_console"}>
                    {selectOptions[selectedContent].console}
                </ConsoleContainer>
            </div>
        </div>
    )
}

export default About