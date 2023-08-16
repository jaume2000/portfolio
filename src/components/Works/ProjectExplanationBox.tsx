"use client"

import { Dispatch, SetStateAction, useState } from 'react'

import './css/ProjectExplanationContent.css'

export default function ProjectExplanationBox ({hidden,setHidden}:{hidden:boolean,setHidden:Dispatch<SetStateAction<boolean>>}) {

    const [first_time, setFirst_time] = useState(true)
    const [meme, setMeme] = useState(false)

    console.log(first_time)

    let background = (
    <>
        <div className={"project_explanation_background" + (hidden ? ' hidden_explanation' : ' shown_explanation')} onClick={()=>{setHidden(true)}}/>
        <div className={"project_explanation_box" + (hidden ? ' hidden_explanation' : ' shown_explanation') + (meme ? ' meme' : '')}>
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