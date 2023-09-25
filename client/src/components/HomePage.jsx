import MainHeader from "./MainHeader";

import ItemCardContainer from "./ItemCardContainer";
import CategoryCircle from "./CategoryCircle";

import "../styles/HomePage.css"

//get data
import { useState, useEffect } from "react";
import { getItems } from "../apiServics";

export default function HomePage() {
//get data
    const [items, setItem] = useState([]);

    useEffect(()=>{
        getItems().then((data) => {
            setItem(data)
        })
    }, [])


  return (
    <div className="HomePage">
      <MainHeader heading="ShareASmile"></MainHeader>
      <input className="searchBar" label="Search" />

      {/* make the container simple first, fix later */}
      <div className="CategoriesCon">
        <div className="CatCon">
      <h1>📚</h1> 
      <h6>Books</h6> 
      </div>
      <div className="CatCon">
      <h1>🧸</h1> 
      <h6>Toys</h6> 
      </div>
      <div className="CatCon">
      <h1>📱</h1> 
      <h6>Elec.</h6> 
      </div>
      <div className="CatCon">
      <h1>👔</h1> 
      <h6>Fashion</h6> 
      </div>
      <div className="CatCon">
      <h1>🛋️</h1> 
      <h6>Home</h6> 
      </div>
      </div>




      {/* this will be used in the future */}
      {/* <div className="CategoryCircleCon">
        <CategoryCircle
          //size={100}
          dummyName={"Books"}
          item={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />
        <CategoryCircle
          //size={100}
          dummyName={"Toys"}
          item={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />

        <CategoryCircle
          //size={100}
          dummyName={"Electronics"}
          item={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />

        <CategoryCircle
          //size={100}
          dummyName={"Home & Funiture"}
          item={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />
        <CategoryCircle
          //size={100}
          dummyName={"Woman's Fashion"}
          item={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />
      </div> */}

      <ItemCardContainer items={items} setItem={setItem}></ItemCardContainer>
    </div>
  );
}
