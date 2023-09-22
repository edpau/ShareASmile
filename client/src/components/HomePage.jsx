import MainHeader from "./MainHeader";

import ItemCardContainer from "./ItemCardContainer";
import CategoryCircle from "./CategoryCircle";

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

    console.log(items)


  return (
    <div className="HomePage">
      <MainHeader heading="ShareASmile"></MainHeader>
      <input className="searchBar" label="Search" />
      <div className="CategoryCircleCon">
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
      </div>

      <ItemCardContainer items={items} setItem={setItem}></ItemCardContainer>
    </div>
  );
}
