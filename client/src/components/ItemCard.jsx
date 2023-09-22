import ImageUtils from "./ImageUtils"
import '../App.css'

export default function ItemCard({item, width = 190, height = 190,}) {

  console.log(item)

  return (
    <div className="ItemCard">
      <img 
          className="ItemCardImg"
          src={ImageUtils(item)}
          alt={item.itemName}
          width={width}
          height={height}
        />
        <div className="ItemCardTextCon">
        {/* Todo use the item name */}
        {/* <p>{item.name}</p> */}
        <p>{item.itemName}</p>
        <div className="ItemCardOwnerCon">
        <img 
          className="ItemCardOwnerImg"
          src={ImageUtils(item)}
          alt={item.name}
          width="30px"
          height="30px"
        />
        <p>{item.lister.userName}</p>
        </div>
        </div>
    </div>
  )
}
