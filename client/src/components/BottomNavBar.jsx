import { Link } from "react-router-dom";

import {Image, Transformation} from "cloudinary-react"

import "../styles/BottomNavBar.css"

export default function BottomNavBar() {
  return (
    <div className="BottomNavBarCon">
      <div className="BottomNavBar">
        <Link to={"/"}><p>🏠</p></Link>
        {/* google icon */}
        <Link to={"/AddItemPage"}><span class="material-symbols-outlined">
add
</span></Link>
        <Link to={"/UserPage/1"}><Image className= "navUserImage" cloudName="dtssx2anj" publicId = "https://res.cloudinary.com/dtssx2anj/image/upload/v1695488858/pr0ecobii6rekn5mkfqe.jpg"></Image></Link>
      </div>
    </div>
  );
}
