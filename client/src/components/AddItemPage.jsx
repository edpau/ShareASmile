import MainHeader from "./MainHeader";
import { addItem } from "../apiServics";

export default function AddItemPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.itemName.value);
    const inputItemName = event.target.itemName.value;
    // const inputDescription = event.target.description.value;
    // const inputShareMethod = event.target.shareMethod.value;
    // const inputCategory = event.target.category.value;
    //make an object pass to the server
    //TODO test ItemName first
    const inputObj = { itemName: inputItemName };
    //const inputObj = { title: inputTitle, venue: inputVenue, date: inputDate };

    //TODO addEvent work in router??
    addItem(inputObj)
      .then((data) => console.log(data, "data"))
      .catch((e) => console.log(e));
    // addEvent(inputObj).then((data) => {
    //   setEvent((previous) => {
    //     return sortFilterEvent([...previous, data]);
    //   });
    // });

    //clear the box after input
    // item.target.itemName.value = "";
  };

  return (
    <div className="AddItemPage">
      <MainHeader heading="Add Item"></MainHeader>
      <div className="AddItemInputCon">
        <form onSubmit={handleSubmit}>
          <h2>Title Name</h2>
          <input
            type="text"
            name="itemName"
            className="inputField"
            placeholder="What do you want to share?"
            required
          ></input>

          {/* <div className="shareButCon"> */}
          <button className="shareBut" type="submit">
            Share
          </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
}
