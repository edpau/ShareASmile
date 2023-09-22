import ItemCard from "./ItemCard";

export default function ItemCardContainer({ items, setItem }) {

  return (
    <div className="ItemCardContainer">

      {/* //TODO delete it, it is use for dummy data */}
      {/* <ItemCard
        dummyName={"Lego Marvel 71039"}
        item={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      /> */}

      {items.map((item)=>(
        <ItemCard key={item._id} item={item} setItem={setItem}/>
      ))

      }

    </div>
  );
}
