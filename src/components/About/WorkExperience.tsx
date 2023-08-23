import '@/css/globals.css'
import './css/WorkExperience.css'
import PlainText from './PlainText'
import { getLanguageAllDictionary } from '@/lang/lang'

const WorkExperience = ({lang}:{lang:string}) => {

    let dict = getLanguageAllDictionary(lang).About.work_experience


    return (
        <div>
            <img className={"work_logo"} src={"/public/neurocatching_logo.png"}/>
            <PlainText text=
            {`02/2023 - 08/2023 (7 meses)
            * Main developer in the principal software of the company (the name is Discovery).
            -> Fullstack development with jQuery, MySQL, Node.js and AWS. Used JavaScript.
            -> This sofware takes biometric data of the user while observing an ad to study the emotions and where is looking this user to collect the data and calculate insights.
            * Developer in other project (NeuroAds).
            -> Fullstack development with React.js and Google Cloud. Used JavaScript and Python.
            -> Via Artificial Intelligence the app generates an improved ad.
            `}/>
            <img className={"work_logo"} src={"/public/logo-sciling-light.png"}/>
            <PlainText text={"06/2023 - 09/2023 (4 meses)"}/>

        </div>
    )

    /*
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
    */
}

export default WorkExperience