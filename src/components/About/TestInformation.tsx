
const TestInformation = ({content= "Este es un texto de prueba"}:{content?:string})=>{

    return (<p>
        {content}
    </p>)
}

export default TestInformation