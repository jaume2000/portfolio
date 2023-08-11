"use client"
import { useState, useEffect } from 'react'

import '@/lang/lang'
import {getLanguageDictionary} from '@/lang/lang'
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
import Tab from '@/components/utils/Tab/Tab'

const About = ({lang}: {lang:string})=>{

    let dict = getLanguageDictionary(lang,"About")

    const selectOptions = [
        {console: <GeneralInformation lang={lang}/>, title: dict.habilities_text},
        {console: <PlainText text={dict.habilities_transcribed_content}/>, title: dict.habilities_transcribed_text},
        {console: <Studies lang={lang}/>, title: "Studies.docx"},
        {console: <CVDownload lang={lang}/>, title: "CV.html"},
        {console: <TestingInformation content='Not done yet. Please, visit in a few days.'/>, title: "Work_experience.tsx"},
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