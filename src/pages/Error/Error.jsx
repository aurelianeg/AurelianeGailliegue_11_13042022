import { Link } from 'react-router-dom'
import './Error.css'

function Error() {
   return (
      <div className="page_container">
         <section className="error_container">
            <h1 className="error_number">404</h1>
            <h2 className="error_description">
               Oups ! La page que vous demandez n'existe pas.
            </h2>
            <Link className="home_link" to="/">
               Retourner sur la page d'accueil
            </Link>
         </section>
      </div>
   )
}

export default Error
