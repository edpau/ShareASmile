import MainHeader from './MainHeader'
import ImageUtils from "./ImageUtils"
import CategoryCircle from './CategoryCircle'
import ItemCardContainer from './ItemCardContainer'

import '../styles/userPage.css'

import {Image, Transformation} from "cloudinary-react"

//get data
import { useState, useEffect } from "react";
import { getUserItems } from "../apiServics";

export default function UserPage() {
//get data
const [items, setItem] = useState([]);

useEffect(()=>{
  getUserItems().then((data) => {
        setItem(data)
    })
}, [])

  return (
    <div className="UserPage">
      <MainHeader heading = 'User'></MainHeader>

      <div className = "UserPageUserImageCon">
      <Image className = "UserPageUserImage" cloudName="dtssx2anj" publicId = "https://res.cloudinary.com/dtssx2anj/image/upload/v1695488858/pr0ecobii6rekn5mkfqe.jpg"
     >
       </Image>
      </div>


      <div className='UserDetailCon'>
      <p>@edpau</p>
      <p>London, England, United Kingdom</p> 
      <p>{items.length} listing</p>
      </div>
      <ItemCardContainer items={items} setItem={setItem}/>


    </div>
  )
}
