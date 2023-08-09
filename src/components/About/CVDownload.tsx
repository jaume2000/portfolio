import '@/css/globals.css'
import './css/CVDownload.css'
import PlainText from './PlainText'

const CVDownload = ({lang}:{lang:string}) => {

    return (
    <>
        <h2 className='centered_text' id='cv_title'>{"Welcome to my CV download web!"}</h2>
        <p className='centered_text'>{'Remember that you can check my linkedin too in '}<a href='#contact'>{'Contact info'}</a></p>
        <div className='centered_content'>
            <a id='cv_button_container' href="/CV.pdf" download>
                <div id='cv_button_decoration'><p>{"Download CV"}</p></div>
            </a>
        </div>
    </>)
}

export default CVDownload