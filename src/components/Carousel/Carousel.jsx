import { useState } from 'react'
import './Carousel.css'

function Carousel(props) {
   let [current, setCurrent] = useState(0)
   const length = props.pictures.length

   const toggleClickPrevious = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
   }

   const toggleClickNext = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
   }

   return (
      <div className="carousel_container">
         <div className="carousel_previous" onClick={toggleClickPrevious}></div>
         {props.pictures.map((picture, index) => {
            return (
               <div
                  className="carousel_img_container"
                  key={index}
                  style={{ width: index === current ? '100%' : '0%' }}
               >
                  {index === current && (
                     <img
                        className="carousel_img"
                        src={picture}
                        alt={'Image n°' + (current + 1) + ' du logement'}
                     />
                  )}
               </div>
            )
         })}
         <p className="carousel_count">{current + 1 + '/' + length}</p>
         <div className="carousel_next" onClick={toggleClickNext}></div>
      </div>
   )
}

export default Carousel
