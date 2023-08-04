
const Tab = ({n, children}:{n:number, children?:React.ReactNode}) => {

    return (<span>{"\xA0".repeat(n)}{children}</span>)
}

export default Tab