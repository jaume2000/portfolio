import '@/css/globals.css'
import './css/CVDownload.css'

const CVDownload = ({lang}:{lang:string}) => {

    return (
    <>
        <h2 className='centered_text'>{"Welcome to my CV download web!"}</h2>
        <div className='centered_content'>
            <a id='cv_button_container' href="/CV.pdf" download>
                <div id='cv_button_decoration'><p>{"Download CV"}</p></div>
            </a>
        </div>
    </>)
}

export default CVDownload