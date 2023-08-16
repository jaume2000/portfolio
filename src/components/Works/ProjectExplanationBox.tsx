"use client"

import { Dispatch, SetStateAction, useState } from 'react'

import './css/ProjectExplanationContent.css'

export default function ProjectExplanationBox ({first_time_load,hidden,setHidden}:{first_time_load:boolean, hidden:boolean,setHidden:Dispatch<SetStateAction<boolean>>}) {

    let [meme, setMeme] = useState(false)

    let background = (
    <>
        <div className={"project_explanation_background" + (hidden ? ' hidden_explanation' : ' shown_explanation')} onClick={()=>{setHidden(true)}} style={{'--z_index': (first_time_load ? '-1' : '12')} as React.CSSProperties}/>
        <div className={"project_explanation_box" + (hidden ? ' hidden_explanation' : ' shown_explanation') + (meme ? ' meme' : '')}
            style={{'--z_index': (first_time_load ? '-1' : '13')} as React.CSSProperties}
        >
            <div>
                <p>{"Yep, you just discovered the dialog box, but it isn't finished yet, give me a little bit more of time."}</p>
                <p>{"Um... while i work, you can have a cookie :)"}</p>
                <button onClick={()=>{setMeme(true)}}>{"Get a cookie"}</button>
            </div>
        </div>
    </>
    )

    return background

}