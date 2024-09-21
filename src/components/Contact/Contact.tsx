import '@/lang/lang'
import {getLanguageAllDictionary} from '@/lang/lang'
import ColoredCardIntersection from '../utils/ColoredCardIntersection/ColoredCardIntersection'
import '@/globals.css'
import './style.css'

const Contact = ({lang}: {lang:string})=>{

    const dict = getLanguageAllDictionary(lang).Contact

    return(
        <div className='contact_container_with_bulb'>
            <img src="/public/bulb.png" className='bulb_image' alt="" />
        <div className='contact_container fullpage'>
            <div className='flex'> 
                <div className='left-diagonal-container'>
                    <div className='left-diagonal-1'/>
                    <div className='left-diagonal-2'/>
                    <div className='left-diagonal-3'/>
                    <div className='left-diagonal-4'/>
                </div>
                <div className='right-diagonal-container'>
                    <div className='right-diagonal-1'/>
                    <div className='right-diagonal-2'/>
                    <div className='right-diagonal-3'/>
                    <div className='right-diagonal-4'/>
                </div>
            </div>

            <h1 id='contact'>
            {dict.title}
            </h1>

            <div className='centered' id='contact_card'>

                <ColoredCardIntersection min_width='300px' width='50vw' height='300px' color_outset='20px' border_radio='10px'>
                    <div className='centered full_size'>
                        <div>
                            <p className='masked-text'>{"Email: jaumeig95@gmail.com"}</p>
                            <a className='masked-text' href='https://linkedin.com/in/jaume-ivars-grimalt'>{"Checkout my LikedIn"}</a>
                            <a className='masked-text' href='https://github.com/jaume2000'>{"Checkout my Github"}</a>
                        </div>
                    </div>
                </ColoredCardIntersection>
            </div>
        </div>
        </div>
    )
}

export default Contact