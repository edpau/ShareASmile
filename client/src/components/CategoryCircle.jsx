import ImageUtils from "./ImageUtils"
import '../App.css'


export default function CategoryCircle({item, size = 60, dummyName}) {

  return (
    <div className='CategoryCircle'>
        <img 
          className="CategoryCircleImg"
          src={ImageUtils(item)}
          alt={item.name}
          width={size}
          height={size}
        />
        <div className="CategoryCircleTextCon">
        {/* Todo use the item name */}
        {/* <p>{item.name}</p> */}
        <p>{dummyName}</p>

        </div>

    </div>
  )
}
