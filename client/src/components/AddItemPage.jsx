import MainHeader from "./MainHeader";
import { addItem } from "../apiServics";

//TODO move it to other folder
//add Photo to Cloudinary
import Axios from "axios"
import React, { useState } from "react";
import {Image} from "cloudinary-react"

export default function AddItemPage() {

  let imageId = "";

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputItemName = event.target.itemName.value;
    const inputUserID = event.target.userID.value;
    // const inputDescription = event.target.description.value;
    // const inputShareMethod = event.target.shareMethod.value;
    // const inputCategory = event.target.category.value;
    //make an object pass to the server
    //TODO test ItemName first
    //! hard code user id in here to test, later need to take away for log in 
    const inputObj = { itemName: inputItemName, lister: inputUserID, imageId: imageId};
  
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

    //TODO move it to other folder
    //add Photo to Cloudinary

    const [imageSelected, setImageSelected] = useState("")

    const uploadImage = () => {
      const formData = new FormData();
      formData.append("file", imageSelected);
      formData.append("upload_preset", "uploadP")
      
      Axios.post(
        "https://api.cloudinary.com/v1_1/dtssx2anj/image/upload",
        formData
        ).then((response) => {
          imageId = response.data.secure_url
          console.log(response.data.url, "URL")
          console.log(imageId, "imageId")
          console.log(response, "response")
          console.log(response.data, "response.data")
          console.log(response.data.secure_url, "response.data.secure_url")
          
        });
      };




  return (
    <div className="AddItemPage">

      <div className="AddImage">
        <input
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
        />
        <button onClick={uploadImage}>
          Upload Image
         </button>
        <Image 
        style = {{width: 200}}
        cloudName="dtssx2anj" publicId ="https://res.cloudinary.com/dtssx2anj/image/upload/v1695473857/chyflojfdyasi1fauvdi.png"/>

      </div>

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
          <h2>User ID (testing)</h2>
          <input
            type="text"
            name="userID"
            className="inputField"
            placeholder="userID testing only"
            required
          ></input>

          <div className="shareButCon">
          <button className="shareBut" type="submit">
            Share
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
