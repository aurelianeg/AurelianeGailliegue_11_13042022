import { useFetch } from '../../utils/hooks/useFetch'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import Carousel from '../../components/Carousel/Carousel'
import Collapse from '../../components/Collapse/Collapse'
import Error from '../Error/Error'
import './Location.css'

function Location() {
   const { data, isDataLoaded } = useFetch('data/data.json')
   const { id } = useParams('/location=')
   const foundLocation = data.find((loc) => loc.id === id)

   return (
      <div className="page_container">
         {isDataLoaded ? (
            <Loader />
         ) : (
            <div className="data_container">
               {foundLocation ? (
                  <div className="location_container">
                     <Carousel pictures={foundLocation.pictures} />
                     <div className="general_info">
                        <div className="loc_info">
                           <h1 className="loc_info_title">
                              {foundLocation.title}
                           </h1>
                           <h2 className="loc_info_location">
                              {foundLocation.location}
                           </h2>
                           <ul className="loc_info_tags">
                              {foundLocation.tags.map((tag, index) => {
                                 return (
                                    <li
                                       className="loc_info_tag"
                                       key={'tag_' + index}
                                    >
                                       {tag}
                                    </li>
                                 )
                              })}
                           </ul>
                        </div>
                        <div className="user_info_and_stars">
                           <div className="user_info">
                              <p className="user_name">
                                 {foundLocation.host.name}
                              </p>
                              <img
                                 className="user_profilepicture"
                                 src={foundLocation.host.picture}
                                 alt={'Photo de' + foundLocation.host.name}
                              />
                           </div>
                           <div className="star_ratings"></div>
                        </div>
                     </div>
                     <div className="description">
                        <Collapse
                           page="location"
                           title="Description"
                           description={foundLocation.description}
                        />
                        <Collapse
                           page="location"
                           title="Équipements"
                           description={foundLocation.equipments}
                        />
                     </div>
                  </div>
               ) : (
                  <Error />
               )}
            </div>
         )}
      </div>
   )
}

export default Location
