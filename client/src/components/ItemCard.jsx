import ImageUtils from "./ImageUtils"
import '../App.css'

import { Link } from "react-router-dom";

import {Image, Transformation} from "cloudinary-react"

export default function ItemCard({item, width = 190, height = 200,}) {

  return (
    <div className="ItemCard">
     <Link to={"/ItemPage/"+item._id}>

     <Image  cloudName="dtssx2anj" publicId = {item.imageId}
     width ="190" height="220">
    </Image>

      {/* <img 
          className="ItemCardImg"
          src={ImageUtils(item)}
          alt={item.itemName}
          width={width}
          height={height}
        /> */}
     </Link>
        <div className="ItemCardTextCon">
        {/* Todo use the item name */}
        {/* <p>{item.name}</p> */}
        <p>{item.itemName}</p>
        <div className="ItemCardOwnerCon">

      <Image className= "image" cloudName="dtssx2anj" publicId = {item.imageId}
     width ="30" height="30"  >
    </Image>
        {/* <img 
          className="ItemCardOwnerImg"
          src={ImageUtils(item)}
          alt={item.name}
          width="30px"
          height="30px"
        /> */}
        <p>{item.lister.userName}</p>
        </div>
        </div>
    </div>
  )
}
