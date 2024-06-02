import React from 'react'
import './ourfratures.css';
import items from './items';
const Our_Features = () => {
  return (
  <>
    <fieldset>
    <div class="first ">
            <h2 id="features">
                Our Features<br/>you can get
            </h2>
        </div>
        <div class="first ">
            <p id="content">
                We offer a variety of interesting features that you can<br/>
                help increase your productivity at work and manage
                your project easily
            </p>
        </div>
        <div class="first">
            <button>Get Started </button>
        </div>
        <br/>

        <fieldset className="first d-flex m-5 ">
      {items.map((item, index) => (
        <div className='ms-5'key={index}>
          <img src={item.src} alt={`Item ${index}`} />
          <h3>{item.title}</h3>
          <p className="text">{item.description}</p>
        </div>
      ))}
    </fieldset>
        </fieldset>
  </>
  )
}

export default Our_Features