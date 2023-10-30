import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const StarRating = ({ stars }: { stars: number }): React.ReactElement => {
  const starArray = new Array(stars).fill(null)

  return (
    <div>
      {
        starArray.map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className='text-yellow-400' />
        ))
      }
    </div>
  )
}
export default StarRating
