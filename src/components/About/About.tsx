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
import FolderContainer from '@/components/utils/FolderContainer/FolderContainer'
import Tab from '@/components/utils/Tab/Tab'

const About = ({lang}: {lang:string})=>{

    let dict = getLanguageDictionary(lang,"About")

    const selectOptions = [
        {console: <GeneralInformation lang={lang}/>, title: dict.habilities_text},
        {console: <PlainText text={dict.habilities_transcribed_content}/>, title: dict.habilities_transcribed_text},
        {console: <PlainText custom_style={false} text=
            {"asd\nasd"}
        />, title: "Studies.docx"},
        {console: <TestingInformation content='Me llamo Jaume y este es mi 4to archivo'/>, title: "Work_experience.tsx"},
        {console: <TestingInformation content='Me llamo Jaume y este es mi 4to archivo'/>, title: "CV.html"},
    ]

    let [selectedContent, setSelectedContent] = useState(0);


    return(
        <div className='about_container fullpage'>
            <h1 id='about'>
                {dict.title}
            </h1>
            <ConsoleContainer title={selectOptions[selectedContent].title} mode={"hacker_console"} style={{height:"500px", width:'60%', left: "5%", position: "relative", top:"50px"}}>
                {selectOptions[selectedContent].console}
            </ConsoleContainer>
            <FolderContainer content_list={selectOptions} selectedKey={selectedContent} setSelectedContent={setSelectedContent}/>
        </div>
    )
}

export default About