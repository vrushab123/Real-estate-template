import React from 'react';
import './Hero.css';
import Typed from 'typed.js';

export default function Hero() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Find Your <span className='dream'>Dream </span>Home</h1>
        <p className="hero-subtitle"><span ref={el} /></p>
        <div className="hero-actions">
          <a href="/properties" className="btn btn-primary">Browse Properties</a>
          <a href="/contact" className="btn btn-secondary">Contact Us</a>
        </div>
      </div>

      <div className='second-content'>
        <img src={require('./section.png')} alt="Beautiful Home"/>
      </div>
    </section>
  );
}
