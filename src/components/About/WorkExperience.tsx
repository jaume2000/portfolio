import '@/globals.css'
import './css/WorkExperience.css'
import { getLanguageAllDictionary } from '@/lang/lang'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

const WorkExperience = ({lang}:{lang:string}) => {

    const dict = getLanguageAllDictionary(lang).About.work_experience


    return (
        <div>
            <div className='flex justify-center pb-10'>
                <Image className={"work_logo invert"} src={"/public/vestaz_logo.png"} alt="Vestaz Logo" width={500} height={500}/>
            </div>
            <ReactMarkdown>{dict.vestaz_work_experience}</ReactMarkdown>

            
            <div className='flex justify-center pb-10 pt-14'>
                <Image className={"work_logo"} src={"/public/neurocatching_logo.png"} alt="Neurocatching Logo" width={500} height={500}/>
            </div>
            <ReactMarkdown>{dict.neurocatching_work_experience}</ReactMarkdown>


            <div className='flex justify-center pb-10 pt-14'>
                <Image className={"work_logo"} src={"/public/logo-sciling-light.png"} alt="Sciling Logo" width={500} height={500}/>
            </div>
            <ReactMarkdown className="pb-40">{dict.sciling_work_experience}</ReactMarkdown>
        </div>
    )
}

export default WorkExperience