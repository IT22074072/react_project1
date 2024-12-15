import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    console.log(currentIndex);
    setRating(currentIndex);
  }

  function handleMouseEnter(currentIndex) {
    console.log(currentIndex);
    setHover(currentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        //1,2,3,4,5
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            className={index <= (hover || rating) ? "active" : "inactive"} // Highlight stars based on hover or rating
            size={40}
          />
        );
      })}
    </div>
  );
}
