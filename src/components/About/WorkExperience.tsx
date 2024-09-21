import '@/globals.css'
import './css/WorkExperience.css'
import PlainText from './PlainText'
import { getLanguageAllDictionary } from '@/lang/lang'
import ReactMarkdown from 'react-markdown'

const WorkExperience = ({lang}:{lang:string}) => {

    let dict = getLanguageAllDictionary(lang).About.work_experience


    return (
        <div>
            <div className='flex justify-center pb-10'>
                <img className={"work_logo invert"} src={"/public/vestaz_logo.png"}/>
            </div>
            <ReactMarkdown>{dict.vestaz_work_experience}</ReactMarkdown>

            
            <div className='flex justify-center pb-10 pt-14'>
                <img className={"work_logo"} src={"/public/neurocatching_logo.png"}/>
            </div>
            <ReactMarkdown>{dict.neurocatching_work_experience}</ReactMarkdown>


            <div className='flex justify-center pb-10 pt-14'>
                <img className={"work_logo"} src={"/public/logo-sciling-light.png"}/>
            </div>
            <ReactMarkdown className="pb-40">{dict.sciling_work_experience}</ReactMarkdown>
        </div>
    )
}

export default WorkExperience