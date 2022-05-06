import starColor from '../../assets/star_color.svg'
import starGray from '../../assets/star_gray.svg'
import './Rating.css'

function Rating(props) {
   const ratedStars = props.stars
   const totalStars = 5 - props.stars

   let ratingStars = []
   for (let i = 0; i < ratedStars; i++) {
      ratingStars.push(
         <img
            className="star star_colored"
            src={starColor}
            alt="Colored star"
            key={'star_color_' + i}
         />
      )
   }
   for (let i = 0; i < totalStars; i++) {
      ratingStars.push(
         <img
            className="star star_gray"
            src={starGray}
            alt="Gray star"
            key={'star_gray_' + i}
         />
      )
   }

   return <div className="star_rating">{ratingStars}</div>
}

export default Rating
