import { useState } from 'react';
import './App.css';

function App() {
  const [numStars, setNumStars] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.rating.value);
    setNumStars(e.target.rating.value);
  }
  const ShowStars = () => {  
    let stars = [];
    for (let i = 1; i <= numStars; i++) {
      
      for (let j = 1; j <= i; j++) {
        stars.push(<span key={i}>*</span>);
      }
      stars.push(<br/>);
      // stars.push(<span key={i}>&#9733;</span>);
    }
    return stars;
  }
  const ShowStars2 = () => {
    let stars = [];
    for (let i = numStars-1; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        stars.push(<span key={i}>*</span>);
      }
      stars.push(<br/>);
    }
    return stars;
  }

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <label htmlFor="rating">Input : </label>
          <input type="number" id="rating" name="rating" defaultValue={numStars}/>
          <button type="submit">Submit</button>
        </form>
      </div>
      <ShowStars />
      <ShowStars2 />
    </div>
  );
}

export default App;
