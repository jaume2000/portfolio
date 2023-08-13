import './style.css'

const ColoredCardIntersection = ({children, min_width, height, width, color_outset, intersection_color, border_radio, card_color_1, card_color_2}:{children:React.ReactNode, min_width:string, height:string, width:string, color_outset:string, border_radio?:string, intersection_color?:string, card_color_1?:string, card_color_2?:string}) => {

    const style = {"--card_min_width": min_width, "--card_width": width, "--card_height": height, "--card_color_outset": color_outset, "--card_intersection_color": intersection_color, "--card_border_radio": border_radio, "--card_color_1": card_color_1, "--card_color_2": card_color_2} as React.CSSProperties
    
    return (
    <div className='colored_card' style={style}>
        <div className="colored_card_intersection">
            {children}
        </div>
        <div className="colored_card_c1" style={style}/>
        <div className="colored_card_c2 " style={style}/>
    </div>
    )

}

export default ColoredCardIntersection