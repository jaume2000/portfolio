"use client"

import { useState } from "react"
import {ProjectExplanationContent_properties} from '../ProjectExplanationBox'


const DefaultContent:React.FC<ProjectExplanationContent_properties> = ({events}) => {
    
    const [meme, setMeme] = useState(false)

    //Restart state on open.
    events.onopen = ()=>{setMeme(false)}

    return(
    <div className={'centered full_size ' + (meme ? 'meme' : '')}>
        { !meme ?
        <div>
        <p>{"Yep, you just discovered the dialog box, but it isn't finished yet, give me a little bit more of time."}</p>
        <p>{"Um... while i work, you can have a cookie :)"}</p>
        <button onClick={()=>{setMeme(true)}}>{"Get a cookie"}</button>
        </div> : undefined}
    </div>
            )
}

export default DefaultContent