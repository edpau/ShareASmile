import MainHeader from "./MainHeader";
import { addItem } from "../apiServics";

import "../styles/AddItemPage.css"

//TODO move it to other folder
//add Photo to Cloudinary
import Axios from "axios";
import React, { useState } from "react";
import { Image } from "cloudinary-react";

export default function AddItemPage() {
  const [imageSelected, setImageSelected] = useState("");

  //TODO move it to other folder move to new api service just for imageCloud
  //add Photo to Cloudinary
  const uploadImage = async () => {
    // return new Promise((resolve) => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "uploadP");

    const axiosRes = await Axios.post(
      "https://api.cloudinary.com/v1_1/dtssx2anj/image/upload",
      formData
    );
    console.log(axiosRes.data.secure_url);

    return axiosRes.data.secure_url;

    // .then((response) => {
    //   imageId = response.data.secure_url
    //   //console.log(response.data.url, "URL")
    //   console.log(imageId, "imageId")
    //   console.log(response, "response")
    //   console.log(response.data, "response.data")
    //   console.log(response.data.secure_url, "response.data.secure_url")

    // });
    // resolve();
    // }) //promise
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const imageId = await uploadImage();

    const inputItemName = event.target.itemName.value;
    const inputUserID = event.target.userID.value;
    // const inputDescription = event.target.description.value;
    // const inputShareMethod = event.target.shareMethod.value;
    // const inputCategory = event.target.category.value;
    //make an object pass to the server
    //TODO test ItemName first
    //! hard code user id in here to test, later need to take away for log in
    const inputObj = {
      itemName: inputItemName,
      lister: inputUserID,
      imageId: imageId,
    };

    //TODO addEvent work in router??
    await addItem(inputObj);
    // .then((data) => console.log(data, "data frontend"))
    // .catch((e) => console.log(e));
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
      <MainHeader heading="Share"></MainHeader>
      <Image
        style={{ width: 200 }}
        cloudName="dtssx2anj"
        publicId="https://res.cloudinary.com/dtssx2anj/image/upload/v1695719249/jpm3nw0e9bxmdyqczuks.png"
      />

      <div className="AddItemInputCon">
        <form onSubmit={handleSubmit}>
          <h2>Sharing Title</h2>
          <input
            type="text"
            name="itemName"
            className="inputField"
            placeholder="Dear, what do you want to share?"
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

          <h2>Category</h2>
          <select name = "category" className="inputField" required>
            <option value="books">Books</option>
            <option value="toys">Toys</option>
            <option value="elec.">Elec.</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
          </select>

          <div className="custom-radio">
          <h2>Share Method</h2>
         
         <input type="radio" id="meetup" name="shareMethod" value="meetup" required></input>
         <label for="meetup">Meet Up</label>
         <input type="radio" id="mailing" name="shareMethod" value="mailing" required></input>
         <label for="meetup">Meet Up</label>

          </div>


          <h2>Description</h2>
          <textarea
          name="description"
          className="inputField"
          placeholder="Enter a description"
          rows="6"

          ></textarea>


          <div className="AddImage">
            <h2>Add a photo</h2>
            <input
              type="file"
              onChange={(event) => {
                setImageSelected(event.target.files[0]);
              }}
            />
            {/* need this for future testing
        <button onClick={uploadImage}>
          Upload Image
         </button> */}
          </div>

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
