import { Link } from "react-router-dom";

export default function BottomNavBar() {
  return (
    <div className="BottomNavBarCon">
      <div className="BottomNavBar">
        <Link to={"/"}>Home</Link>
        <Link to={"/AddItemPage"}>Add</Link>
        <Link to={"/UserPage/1"}>UserPage</Link>
      </div>
    </div>
  );
}
