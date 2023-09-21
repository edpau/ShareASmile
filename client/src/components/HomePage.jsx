import MainHeader from './MainHeader'

import ItemCardContainer from './ItemCardContainer'
import CategoryCircle from './CategoryCircle'

export default function HomePage() {
  return (
    <div className="HomePage">
        <MainHeader heading = 'ShareASmile'></MainHeader>
        <input className="searchBar" label="Search"/>
        <CategoryCircle></CategoryCircle>
        <ItemCardContainer></ItemCardContainer>
    </div>
  )
}
