import profilepicture from '../../assets/home_image.svg'
import Collapse from '../../components/Collapse/Collapse'
import './Location.css'

function Location() {
   return (
      <div className="location_container">
         <div className="gallery">
            <div className="gallery_previous"></div>
            <div className="gallery_img"></div>
            {/* <img
               className="gallery_img"
               src={picture}
               alt="Images du logement"
            /> */}
            <div className="gallery_next"></div>
         </div>
         <div className="general_info">
            <div className="loc_info">
               <h1 className="loc_info_title">
                  Cozy loft on the canal Saint-Martin
               </h1>
               <h2 className="loc_info_location">Paris, Île-de-France</h2>
               <ul className="loc_info_tags">
                  <li className="loc_info_tag">Cozy</li>
                  <li className="loc_info_tag">Canal</li>
                  <li className="loc_info_tag">Paris 10</li>
               </ul>
            </div>
            <div className="user_info_and_stars">
               <div className="user_info">
                  <p className="user_name">Alexandre Dumas</p>
                  <img
                     className="user_profilepicture"
                     src={profilepicture}
                     alt="Profil du locataire"
                  />
               </div>
               <div className="star_ratings"></div>
            </div>
         </div>
         <div className="description">
            <Collapse
               page="location"
               title="Description"
               description="Vous serez à 50m du canal Saint-Martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au coeur de Paris avec 5 lignes de métro et de nombreux bus. LOgement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1 station de la gare de l'Est (7 minutes à pied)."
            />
            <Collapse
               page="location"
               title="Équipements"
               description="Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres"
            />
         </div>
      </div>
   )
}

export default Location
