import React,{useState} from 'react'

const Accordion =(props)=>{
  const items =[
    {
      title: 'What is React?',
      desc: 'React is Javascript Framework for Web Development',
    },
    {
      title:'Why should we use React?',
      desc:'React is very popular and has strong community',
    },
    {
      title:'How can we use React?',
      desc:'We can use React by creating reuseable components',
    }
  ]
    const[activeIndex,setActiveIndex]= useState(null)
   
    const clickHandler = (index) =>{
       setActiveIndex(index)
    }

    const itemRender =  items.map((item,index) => {
        const active = index === activeIndex ? 'active' : ''
        return <div onClick={()=>clickHandler(index)} className="item" key={index}>
                            <h2 className={`title ${active}`} >{item.title}</h2>
                            <p className={`content ${active}`} >{item.desc}</p>
                           
                        </div>
    })
    return <div className="ui styled accordion">
      { itemRender }
    </div>
}
export default Accordion