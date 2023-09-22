import '../App.css'
import { useParams } from 'react-router-dom'


export default function ItemPage() {

    const {itemId} = useParams() 

    console.log(itemId)

    // const url = new URL(request.url);

  return (
    <div className="ItemPage">
    <p>ItemPage</p>
    {/* <p>{url}</p> */}
    {/* <p>Type: {queryParameters.get("type")}</p>
    <p>Type: {queryParameters.get("name")}</p> */}
    </div>
  )
}
