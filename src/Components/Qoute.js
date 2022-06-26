import React ,{useState , useEffect} from 'react'
import axios from 'axios'
import {Qout , Text} from '../QoutStiles'

const url ='https://api.quotable.io/random'

const Qoute = () => {
    const[data , setData] = useState(null)

    useEffect(() =>{
        axios.get(url).then((response)=>{
            setData(response.data)
        }).catch((error) =>{
            console.log(error)
        })
    }, [])

if (!data) return null
   return (
    <Qout>
        <Text>{data.content}</Text>
        <Text>{data.authorSlug}</Text>
        
    </Qout>
  )
}

export default Qoute