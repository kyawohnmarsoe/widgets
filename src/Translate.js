//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React,{useState} from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const Translate = () => {
    const options = [
        {
            label:'Afganistan',
            value:'af'
        },
        {
            label:'Arabic',
            value:'ar'
        },
        {
            label:'Hindi',
            value:'hi'
        }
    ]
    const [language,setLanguage] = useState(options[0])
    const [inputText,setInputText] = useState('')
   

    return <div className="ui form">
        <div className="field">Type anything you want to translate</div>
           
            <input value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
            <Dropdown 
                label="Select Language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
      

        <Convert language={language} inputText={inputText}/>
    
    </div>
}

export default Translate