import './Banner.css'

function Banner(props) {
   return (
      <div className="banner">
         {props.mobilewide === true ? (
            <section className="banner_container banner-container--mobilewide">
               <img
                  className="banner_img banner_img--mobilewide"
                  src={props.img}
                  alt="Bannière"
               />
               <p className="banner_text">{props.text}</p>
            </section>
         ) : (
            <section className="banner_container banner_container--mobilesmall">
               <img
                  className="banner_img banner_img--mobilesmall"
                  src={props.img}
                  alt="Bannière"
               />
               <p className="banner_text">{props.text}</p>
            </section>
         )}
      </div>
   )
}

export default Banner
