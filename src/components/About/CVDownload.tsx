import '@/css/globals.css'
import './css/CVDownload.css'
import PlainText from './PlainText'
import { getLanguageAllDictionary } from '@/lang/lang'

const CVDownload = ({lang}:{lang:string}) => {

    let dict = getLanguageAllDictionary(lang).About.cv

    return (
    <>
        <h2 className='centered_text' id='cv_title'>{dict.web_title}</h2>
        <p className='centered_text'>{dict.web_description}<a href='#contact'>{dict.web_contact_info_link}</a></p>
        <div className='centered_content'>
            <a className='cv_button_container' href="/public/CV.pdf" download>
                <div className='cv_button_decoration'><p>{dict.web_download_cv_button}</p></div>
            </a>
        </div>
        <br/>
        <br/>
        <p className='centered_text'>{dict.web_check_cv_description}</p>
        <div className='centered_content'>
            <a className='cv_button_container' href="/public/CV.pdf" target='_blank'>
                <div className='cv_button_decoration'><p>{dict.web_check_cv_button}</p></div>
            </a>
        </div>

    </>)
}

export default CVDownload