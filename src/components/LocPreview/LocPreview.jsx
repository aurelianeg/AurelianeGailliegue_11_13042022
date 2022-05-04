import './LocPreview.css'

function LocPreview(props) {
   return (
      <div className="locpreview_container">
         <a className="locpreview_link" href={'/location=' + props.id}>
            <img
               className="locpreview_img"
               src={props.cover}
               alt="Aperçu de la location"
            />
            <p className="locpreview_title">{props.title}</p>
         </a>
      </div>
   )
}

export default LocPreview
