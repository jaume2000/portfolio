"use client"

import { useState } from "react"

const Dropdown = ({children}:{children:React.ReactNode}) => {

    const [shown] = useState(false)
    //const [selectedOption, setSelectedOption] = useState(0);


    if(!shown){
    return(
        <div className="dropdown_button">
            <span className="flag">{"Selected option"}</span>
        </div>
        )
    }
    else {
        return(
        <>
            <div className="dropdown_button">
                <span className="flag">{"Selected option"}</span>
            </div>
            <div className="drop_down_menu_open">
                {children}
            </div>
        </>
        )
    }
}

export default Dropdown