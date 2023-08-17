import { Dispatch, SetStateAction, useState, useEffect } from 'react'

import './css/ProjectExplanationContent.css'
import React from 'react';


export interface ProjectExplanationContent_properties {
    events:{onclose:()=>void,onopen:()=>void}
    otherprops?:any
}
interface ProjectExplanationBox_properties {
    content: React.ReactElement<ProjectExplanationContent_properties>;
    first_time_load:boolean;
    hidden:boolean;
    setHidden:Dispatch<SetStateAction<boolean>>
}



const ProjectExplanationBox:React.FC<ProjectExplanationBox_properties> = ({content,first_time_load,hidden,setHidden}) => {

    useEffect(()=>{
        if(!first_time_load){
            if(hidden){
                content.props.events.onclose? content.props.events.onclose() : undefined;
            }
            else {
                content.props.events.onopen? content.props.events.onopen() : undefined;


            }
        }


    }, [hidden,first_time_load,content.props])

    let background = (
    <>
        <div className={"project_explanation_background" + (hidden ? ' hidden_explanation' : ' shown_explanation')} onClick={()=>{setHidden(true)}} style={{'--z_index': (first_time_load ? '-1' : '12')} as React.CSSProperties}/>
        <div className={"project_explanation_box" + (hidden ? ' hidden_explanation' : ' shown_explanation')}
            style={{'--z_index': (first_time_load ? '-1' : '13')} as React.CSSProperties}>
                {content}
        </div>
    </>
    )

    return background

}



export {ProjectExplanationBox}