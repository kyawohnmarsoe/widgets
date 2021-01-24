import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Search =()=>{
    const [term,setTerm]=useState('cat')
    const [secondTerm,setSecondTerm]=useState(term)
    const [items,setItems]=useState([])

    useEffect( () => {
     const timeOutId = setTimeout(() => {
        setSecondTerm(term)
     }, 1000);   
    },[term] )

    useEffect(()=>{
        search()
    },[term])

    const changeHandler=(e)=>{
        setTerm(e.target.value)
    }
    const search = ()=>{
        axios.get('https://en.wikipedia.org/w/api.php',{
           params:{
               action:'query',
               list:'search',
               origin:'*',
               format:'json',
               srsearch:term
           }
       })
       .then(response=>setItems(response.data.query.search)
        )
        .catch(error=>console.log(error.message))
       
    }

    const itemsRender = items.map((item,index) =>{ return <div key={index} >{item.title}</div>})
    
    
    return<div>
        <form className="ui form">
            <input 
                type="text"
                value={term}
                onChange={changeHandler}
            />
        </form>
        {itemsRender}
    </div>
}
export default Search