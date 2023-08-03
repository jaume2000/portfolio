
import './style.css'

type console_mode = "dark_console"|"light_console"|"hacker_console"

const ConsoleContainer = ({children, mode, style}:{children: React.ReactNode|undefined, mode:console_mode, style:object}) => {

    return (
    <div className={"console_container " + mode}>
        <div className="console_container_header">
            <div className="console_container_header_left">
                <div className="decorator first_dot dot"/>
                <div className="decorator second_dot dot"/>
                <div className="decorator third_dot dot"/>
            </div>
            <div className="console_container_header_right">
                <div className="decorator"/>
                <div className="decorator"/>
                <div className="decorator"/>
            </div>
        </div>
        <div className="console_container_content">
            {children}
        </div>
    </div>)
}

export default ConsoleContainer