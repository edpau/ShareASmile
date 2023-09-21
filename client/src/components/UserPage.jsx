import MainHeader from './MainHeader'
import ImageUtils from "./ImageUtils"
import CategoryCircle from './CategoryCircle'
import ItemCardContainer from './ItemCardContainer'

export default function UserPage() {
  return (
    <div className="UserPage">
      <MainHeader heading = 'User'></MainHeader>
      <CategoryCircle
          //size={100}
          dummyName={"edpau"}
          item={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />
      <div className='UserDetailCon'>
      <p>London, England, United Kingdom</p> 
      <p>6 listing</p> 
      </div>
      <ItemCardContainer />


    </div>
  )
}
