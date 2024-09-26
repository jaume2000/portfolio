
import { ConsoleTheme } from '@/components/About/About'
import './style.css'

const ConsoleContainer = ({className, children, theme, style, title}:{className?:string, children: React.ReactNode|undefined, theme:ConsoleTheme, style?:object, title?:string}) => {

    const theme_string = theme + "_console"

    return (
    <div className={className+" console_container " + theme_string } style={style}>
        <div className="console_container_header">
            <div className="console_container_header_left">
                <div className="decorator first_dot dot"/>
                <div className="decorator second_dot dot"/>
                <div className="decorator third_dot dot"/>
            </div>
            <div className="console_container_header_center">
                <p>{title}</p>
            </div>
            <div className="console_container_header_right">
                <div className="decorator"/>
                <div className="decorator"/>
                <div className="decorator"/>
            </div>
        </div>
        <div className="scrollbar style-8 console_container_content">
            {children}
        </div>
    </div>)
}

export default ConsoleContainer