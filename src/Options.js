const options = [
    {
      label:'Midnight Blue',
      value:'blue'
    },
    {
      label:'Super Red',
      value:'red'
    },
    {
      label:'Romantic Purple',
      value:'purple'
    }
  ]

  const [selected,setSelected] = useState(options[0])
  const [showDropdown,setShowDropdown] = useState(true)