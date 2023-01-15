import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTemp } from "./store/reducers/TempSlice";

const App = () => {
  const [country, setCountry] = useState();
  const dispatch = useDispatch();

  const findTemp = (e) => {
    e.preventDefault();
    dispatch(setTemp(country));
    setCountry('');
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
        <br/>
          <h1 className="heading">Weather app</h1>
          <br/>
          <input className="countryInput" type="text"
           placeholder="Enter country name"
            value={country}
            onChange={(e)=>setCountry(e.target.value)}
           />
           <button onClick={findTemp}>Find</button>
           <br/>
           <h3>You entered: {country}</h3>
        </div>
      </div>
    </>
  )
}

export default App;