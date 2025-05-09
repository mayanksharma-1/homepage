import { useState } from 'react';
import './stylesheets/MainBody.css';
import data from './Data';

function MainBody() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      setIsFading(false);
    }, 300); // Match the animation duration
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
      setIsFading(false);
    }, 300); // Match the animation duration
  };

  const { image, title, text } = data[currentIndex];

  return (
    <main>
      <article className={isFading ? 'fade-out' : 'fade-in'}>
        <img src={image} alt="Placeholder" />
      </article>
      <article className={isFading ? 'fade-out' : 'fade-in'}>
        <p className="description">{text}</p>
      </article>
      <article className={isFading ? 'fade-out' : 'fade-in'}><h2>{title}</h2></article>
      <section className="controls">
        <button onClick={handlePrev}>{'<'}</button>
        <button onClick={handleNext}>{'>'}</button>
      </section>
    </main>
  );
}

export default MainBody;