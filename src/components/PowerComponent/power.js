import React from "react";

/*  a stateless component rendering only the graphics with no working elements */
const Power = (props) =>  {
    return(
        <div>
        <h1>Power OFF</h1>

        <div className="home-container">
          <div className="grid-container">
            <button className="grid-item">Q</button>
            <button className="grid-item">W</button>
            <button className="grid-item">E</button>
            <button className="grid-item">A</button>
            <button className="grid-item">S</button>
            <button className="grid-item">D</button>
            <button className="grid-item">Z</button>
            <button className="grid-item">X</button>
            <button className="grid-item">C</button>
          </div>

          <div className="right-container">
          <h5>Power</h5>
            <label className="switch">
                <input type="checkbox" onClick={props.power}/>
                <span className="slider" />
            </label>
            
            <div className="key-container">
                <h4>  </h4>
            </div>
            
          <h5>Bank</h5>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider" />
            </label>
          </div>

        </div>

        <p>coded by <a href="https://github.com/OLADIPO-K">OLADIPO-K</a></p>
      </div>
    );
}


export default Power