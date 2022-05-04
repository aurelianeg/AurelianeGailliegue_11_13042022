import { useState } from 'react'
import './Collapse.css'

function Collapse(props) {
   let [isCollapseOpen, setCollapseOpen] = useState(false)
   const toggleClick = () => {
      setCollapseOpen(!isCollapseOpen)
   }
   return (
      <div className="collapse">
         {props.page === 'about' ? (
            <div className="collapse_container">
               <div
                  className={
                     isCollapseOpen
                        ? 'collapse_header collapse_header--open'
                        : 'collapse_header'
                  }
                  onClick={toggleClick}
               >
                  <h1 className="collapse_title collapse_title--about">
                     {props.title}
                  </h1>
                  <div
                     className={
                        isCollapseOpen
                           ? 'collapse_arrow collapse_arrow--open'
                           : 'collapse_arrow collapse_arrow--closed'
                     }
                  ></div>
               </div>
               <div className="collapse_description">
                  <p className="collapse_text collapse_text--about">
                     {props.description}
                  </p>
               </div>
            </div>
         ) : (
            <div className="collapse_container">
               <div
                  className={
                     isCollapseOpen
                        ? 'collapse_header collapse_header--open'
                        : 'collapse_header'
                  }
                  onClick={toggleClick}
               >
                  <h1 className="collapse_title collapse_title--location">
                     {props.title}
                  </h1>
                  <div
                     className={
                        isCollapseOpen
                           ? 'collapse_arrow collapse_arrow--open'
                           : 'collapse_arrow collapse_arrow--closed'
                     }
                  ></div>
               </div>
               <div className="collapse_description">
                  {props.title === 'Équipements' ? (
                     <ul className="collapse_list collapse_text collapse_text--location">
                        {props.description.map((equipment, index) => {
                           return (
                              <li key={'equipment_' + index}>{equipment}</li>
                           )
                        })}
                     </ul>
                  ) : (
                     <p className="collapse_text collapse_text--location">
                        {props.description}
                     </p>
                  )}
               </div>
            </div>
         )}
      </div>
   )
}

export default Collapse
