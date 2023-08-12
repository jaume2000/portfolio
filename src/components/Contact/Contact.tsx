import '@/lang/lang'
import {getLanguageDictionary} from '@/lang/lang'
import ColoredCardIntersection from '../utils/ColoredCardIntersection/ColoredCardIntersection'
import '@/css/globals.css'
import './style.css'

const Contact = ({lang}: {lang:string})=>{

    let dict = getLanguageDictionary(lang,"Contact")

    return(
        <div className='contact_container fullpage'>
            <h1 id='contact'>
                {dict.title}
            </h1>
            <div className='centered' id='contact_card'>
                <ColoredCardIntersection width='500px' height='300px' color_outset='20px' border_radio='10px'>
                    <div className='centered full_size'>
                        <div>
                            <p>{"Gmail: jaumeig95@gmail.com"}</p>
                            <br/>
                            <p>{"Linkedin: "}<a href="https://linkedin.com/in/jaume-ivars-grimalt" target='_blank'>{"https://linkedin.com/in/jaume-ivars-grimalt"}</a></p>
                            <br/>
                            <p>{"Github: "}<a href="https://github.com/jaume2000" target='_blank'>{"https://github.com/jaume2000"}</a></p>
                        </div>
                    </div>
                </ColoredCardIntersection>
            </div>
        </div>
    )
}

export default Contact