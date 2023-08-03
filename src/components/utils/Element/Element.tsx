import './style.css'

const Element = ({text, href}:{text:string, href: string}) => {

    return (
        <a className="dropdown_element" href={href}>{text}</a>
    )
}

export default Element