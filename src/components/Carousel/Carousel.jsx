import { useState } from 'react'
import './Carousel.css'

function Carousel(props) {
   let [current, setCurrent] = useState(0)
   let [translate, setTranslate] = useState('0')
   const length = props.pictures.length

   const toggleClickPrevious = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
      setTranslate('-100%')
   }

   const toggleClickNext = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
      setTranslate('100%')
   }

   return (
      <div className="carousel_container">
         {length === 1 ? (
            <div className="carousel_img_container">
               <img
                  className="carousel_img"
                  src={props.pictures[0]}
                  alt={'Logement'}
               />
            </div>
         ) : (
            <div>
               <div
                  className="carousel_previous"
                  onClick={toggleClickPrevious}
               ></div>
               {props.pictures.map((picture, index) => {
                  return (
                     <div
                        className="carousel_img_container"
                        key={index}
                        style={{
                           transform:
                              index === current
                                 ? 'translateX(0)'
                                 : 'translateX(' + translate + ')',
                        }}
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
               <div
                  className="carousel_next"
                  onClick={toggleClickNext}
               ></div>{' '}
            </div>
         )}
      </div>
   )
}

export default Carousel
