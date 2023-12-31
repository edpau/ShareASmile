import ImageUtils from "./ImageUtils"
//import '../App.css'
import '../styles/ItemCard.css'


import { Link } from "react-router-dom";

import {Image, Transformation} from "cloudinary-react"

export default function ItemCard({item, width = 190, height = 200,}) {
  console.log(item,"item in user")
  return (
    <div className="ItemCard">
      <div className="ItemCardImg">
     <Link to={"/ItemPage/"+item._id}>
     <Image  cloudName="dtssx2anj" publicId = {item.imageId}
     width ="180" height="220">
    </Image>
      {/* <img 
          className="ItemCardImg"
          src={ImageUtils(item)}
          alt={item.itemName}
          width={width}
          height={height}
        /> */}
     </Link>
      </div>
        <div className="ItemCardTextCon">
        {/* Todo use the item name */}
        {/* <p>{item.name}</p> */}
        <h1>{item.itemName}</h1>
        <div className="ItemCardOwnerCon">

      <Image className= "listerImage" cloudName="dtssx2anj" publicId = {item.lister.userImageURL}
     width ="30" height="30"  >
    </Image>
        <h2>{item.lister.userName}</h2>
        </div>
        </div>
    </div>
  )
}
