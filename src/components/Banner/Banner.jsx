import './Banner.css'

function Banner(props) {
   return (
      <section className="banner">
         {props.page === 'home' ? (
            <div className="banner_container banner_container--home">
               <img className="banner_img" src={props.img} alt="Bannière" />
               <div className="banner_shadow"></div>
               <p className="banner_text">{props.text}</p>
            </div>
         ) : (
            <div className="banner_container banner_container--about">
               <img className="banner_img" src={props.img} alt="Bannière" />
               <div className="banner_shadow"></div>
            </div>
         )}
      </section>
   )
}

export default Banner
