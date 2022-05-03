import './LocPreview.css'

function LocPreview(props) {
   return (
      <div className="locpreview_container">
         <a className="locpreview_link" href={props.id}>
            {/* <img
               className="locpreview_img"
               src={props.cover}
               alt="Aperçu de la location"
            /> */}
            <div className="locpreview_img"></div>
            <div className="locpreview_shadow"></div>
            <p className="locpreview_title">{props.title}</p>
         </a>
      </div>
   )
}

export default LocPreview
