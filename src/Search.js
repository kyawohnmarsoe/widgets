import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Search =()=>{
    const [term,setTerm]=useState('cat')
    const [debouncedTerm,setdebouncedTerm]=useState(term)
    const [items,setItems]=useState([])

    useEffect(() => {
        const timeoutId = setTimeout(()=>{
            setdebouncedTerm(term)
        },500)
        return ()=>{
            clearTimeout(timeoutId)
        }
    },[term])

    useEffect(() => {
        const search = async () => {
          const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
              action: 'query',
              list: 'search',
              origin: '*',
              format: 'json',
              srsearch: debouncedTerm,
            },
          });
     
          setItems(data.query.search);
        };
        if (debouncedTerm) {
          search();
        }
      }, [debouncedTerm]);



    const itemsRender = items.map((item,index) =>{ 
        return <div key={index} className="item">
            <div className="content">
               <div className="header"> {item.title}</div>
               <span dangerouslySetInnerHTML={{__html:item.snippet}}></span>
                
            </div>
            </div>
    })
    
    
    return<div>
        <form className="ui form">
            <div className="field">
                <label>Enter Search Term</label>
            <input 
                className="input"
                value={term}
                onChange={(e)=>setTerm(e.target.value)}
            />
            </div>
        </form>
        <div className="ui celled list">
        {itemsRender}
        </div>
    </div>
}
export default Search