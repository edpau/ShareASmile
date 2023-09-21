import MainHeader from './MainHeader'
import ItemCardContainer from './ItemCardContainer'


export default function HomePage() {
  return (
    <div className="HomePage">
        <MainHeader heading = 'ShareASmile'></MainHeader>
        <input className="searchBar" label="Search"/>
        <ItemCardContainer></ItemCardContainer>
    </div>
  )
}
