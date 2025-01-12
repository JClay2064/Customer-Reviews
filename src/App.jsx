import people from './data';
import { useState } from 'react';
import {FaChevronCircleLeft, FaChevronCircleRight, FaQuoteRight } from 'react-icons/fa';



const App = () => {
  //
  const [index , setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  
  return <main>
    <article className='review'>  
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
        <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
    </article>
  </main>;
};
export default App;
