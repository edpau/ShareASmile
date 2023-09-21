import {Link} from "react-router-dom"

export default function BottomNavBar() {
  return (
    <div className="BottomNavBar">
      <p>BottomNavBar</p>
      <Link to={'/'}>Home</Link>
      <Link to={'/client/src/components/AddItemPage'}>Add</Link>
      <Link to={'/client/src/components/UserPage/1'}>UserPage</Link>
      
    </div>
  )
}
