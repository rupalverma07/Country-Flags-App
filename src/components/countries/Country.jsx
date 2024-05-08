import React, { useEffect,useState } from 'react'
import Card from './Card'
import './Country.css';


const Country = () => {
    const[country,setCountry] = useState('')

  const getFlagData = async() =>{
    try {
        let result = await fetch('https://restcountries.com/v3.1/all')
       let data = await result.json()
       console.log(data);
       setCountry(data);
        
    } catch (error) {
        console.log(error)
    }
       

        
    }

    useEffect(()=>{
        getFlagData()
    },[])
  return (

    
    <div className='row'>
        {country.length>0 ? (country.map(items=> <Card imgUrl={items.flags.png} name={items.name.common} altUrl={items.flags.alt} />)):('')}
      
    </div>
  )
}

export default Country
