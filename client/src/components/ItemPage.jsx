import '../styles/ItemPage.css'
import { useParams } from 'react-router-dom'

//get data
import { useState, useEffect } from "react";
import { getOneItem } from "../apiServics"

import {Image, Transformation} from "cloudinary-react"

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
      <Image  cloudName="dtssx2anj" publicId = {item.imageId}
     width ="422" height="370">
    </Image>
    <div className='ItemTextCon'>
   <h1>{item.itemName}</h1>
   <p>🗂️{item.category}</p>
   <p>📍{item.shareMethod}</p>
   {/* learn this line, as lister data come a bit later than the rest of the data */}
   {item.lister&&<p>➕Shared by {item.lister.userName}</p>}
   {/* //TODO add back time later */}
   {/* <p>{item.dateAdded}</p> */}
   <p>Description: </p>
   <div className='DescriptionTextBox'>
    <p>{item.description}</p>

   </div>
    </div>
    <div className='buttonCon'>
    {item.lister&&<button className='button-54' type="button">Message @{item.lister.userName}</button>}

    </div>


    </div>
  )
}
