import ImageUtils from "./ImageUtils"
import '../App.css'

export default function ItemCard({item, width = 190, height = 190, dummyName}) {
  return (
    <div className="ItemCard">
      <img 
          className="ItemCardImg"
          src={ImageUtils(item)}
          alt={item.name}
          width={width}
          height={height}
        />
        <div className="ItemCardTextCon">
        {/* Todo use the item name */}
        {/* <p>{item.name}</p> */}
        <p>{dummyName}</p>
        <div className="ItemCardOwnerCon">
        <img 
          className="ItemCardOwnerImg"
          src={ImageUtils(item)}
          alt={item.name}
          width="30px"
          height="30px"
        />
        <p>Edward Pau</p>
        </div>
        </div>
    </div>
  )
}
