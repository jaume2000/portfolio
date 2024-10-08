import React from 'react'
import './style.css'

const FolderContainer = ({className,content_list, selectedKey, setSelectedContent}:{className:string, content_list:{console:React.ReactElement, title:string}[], selectedKey: number, setSelectedContent: (arg0:number)=>void})=> {

    return <div className={'folder_container ' + className}>
        <div>
        <p>{"root"}</p>
        {content_list.map((x,i)=>{
            return (<span key={i}>
                <p>{"\xA0\xA0|"}</p>
                <p>{"\xA0\xA0|---"}
                    <button className={selectedKey == i ? "selected_option" : undefined}
                    onClick={()=>setSelectedContent(i)}>{x.title}</button>
                    </p>
            </span>)
            }
        )}
    </div>
    </div>
}

export default FolderContainer