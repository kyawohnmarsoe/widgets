import React,{useState,useEffect} from 'react'

const Convert = ({language,inputText}) => {
    const [outputText,setoutputText] = useState('')
    useEffect(() => {
        console.log("change")
    }, [language,inputText])
    return <div>
         <div className="field">{outputText}</div>
    </div>
}

export default Convert