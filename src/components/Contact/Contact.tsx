import '@/lang/lang'
import {getLanguageAllDictionary} from '@/lang/lang'
import ColoredCardIntersection from '../utils/ColoredCardIntersection/ColoredCardIntersection'
import '@/css/globals.css'
import './style.css'

const Contact = ({lang}: {lang:string})=>{

    let dict = getLanguageAllDictionary(lang).Contact

    return(
        <div className='contact_container fullpage'>
            <h1 id='contact'>
                {dict.title}
            </h1>
            <div className='centered' id='contact_card'>
                <ColoredCardIntersection min_width='300px' width='50vw' height='300px' color_outset='20px' border_radio='10px'>
                    <div className='centered full_size'>
                        <div>
                            <p>{"Gmail: jaumeig95@gmail.com"}</p>
                            <br/>
                            <p><a href="https://linkedin.com/in/jaume-ivars-grimalt" target='_blank'><img className="linkedin_contact" src='/public/linkedin_logo.png'/></a></p>
                            <br/>
                            <p><a href="https://github.com/jaume2000" target='_blank'><img className="linkedin_contact" src='/public/github-mark.png'/></a></p>
                        </div>
                    </div>
                </ColoredCardIntersection>
            </div>
        </div>
    )
}

export default Contact