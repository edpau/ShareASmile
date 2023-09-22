import '../App.css'
import { useParams } from 'react-router-dom'

//get data
import { useState, useEffect } from "react";
import { getOneItem } from "../apiServics"

export default function ItemPage() {

    //get itemId from URL
    const {itemId} = useParams() 

   console.log(itemId)

    
    //get data
const [item, setItem] = useState([]);

useEffect(()=>{
  getOneItem(itemId).then((data) => {
    console.log(data, "data")
        setItem(data)
    })
}, [])



  return (
    <div className="ItemPage">
    <p>ItemPage</p>
   <p>{item.itemName}</p>
    </div>
  )
}
