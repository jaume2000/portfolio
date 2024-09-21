import '@/globals.css'
import './css/CVDownload.css'
import { getLanguageAllDictionary } from '@/lang/lang'
import ReactMarkdown from 'react-markdown';

const AboutMe = ({lang}:{lang:string}) => {
    const dict = getLanguageAllDictionary(lang).About.aboutme

    return (
        <div className='font-arial'>
            <ReactMarkdown>{dict.content1}</ReactMarkdown>
            <div className='centered_content'>
                <a className='cv_button_container' href="#mycrospace">
                    <div className='cv_button_decoration'><p>{dict.check_mycrospace_work}</p></div>
                </a>
            </div>
            <br />
            <ReactMarkdown>{dict.content2}</ReactMarkdown>
            <div className='centered_content'>
                <a className='cv_button_container' href="#sparked">
                    <div className='cv_button_decoration'><p>{dict.check_sparked_work}</p></div>
                </a>
            </div>
            <br />
            <ReactMarkdown>{dict.content3}</ReactMarkdown>
            <div className='centered_content'>
                <a className='cv_button_container' href="#sparked">
                    <div className='cv_button_decoration'><p>{dict.check_fairjourney_work}</p></div>
                </a>
            </div>
            <br />
            <ReactMarkdown>{dict.content4}</ReactMarkdown>
        </div>
    )

}

export default AboutMe