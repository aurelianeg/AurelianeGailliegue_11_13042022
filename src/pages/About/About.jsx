import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import './About.css'

function About() {
   return (
      <div className="page_container">
         <Banner img="assets/about_image.jpg" text="" mobilewide={true} />

         <section className="collapses_container">
            <Collapse
               size="full"
               title="Fiabilité"
               description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            />

            <Collapse
               size="full"
               title="Respect"
               description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />

            <Collapse
               size="full"
               title="Service"
               description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            />

            <Collapse
               size="full"
               title="Sécurité"
               description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
         </section>
      </div>
   )
}

export default About
