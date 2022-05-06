import './Banner.css'

function Banner(props) {
   return (
      <section className="banner">
         <div className="banner_container banner_container--home">
            <img className="banner_img" src={props.img} alt="Bannière" />
            <p className="banner_text">{props.text}</p>
         </div>
      </section>
   )
}

export default Banner
