import React from 'react'
import './Section.css'

const card = (props) => {
  return (
    <section>
        <div className="card">
            <img src={props.name} alt={props.name} />
            <h2>Manish Kushwaha</h2>
            <p>Hii, Introducing my self Manish Kushwaha from global center point country INDIA. And currently persuing my degree from the college of REWA.</p>
        </div>
    </section>
  )
}

export default card