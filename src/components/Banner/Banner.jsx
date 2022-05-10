import './Banner.css'

function Banner(props) {
   return (
      <section className="banner_container">
         <img className="banner_img" src={props.img} alt="Bannière" />
         <p className="banner_text">{props.text}</p>
      </section>
   )
}

export default Banner
