import React, {useState} from "react";
import {Bmi, BmiCategory} from "./Calculate";

function Content() {
  const initialBmi = {bmi:"Your BMI", bmiCategory:"Your BMI Category"};
  const [state, setState] = useState({weight: 0, height: 0});
  const [bmi, setBmi] = useState(initialBmi);

  function handleChange(event){
    event.preventDefault();
    const {name, value} = event.target;
    if (name === "weight"){
      setState({...state, weight: value});
    }
    if (name === "height"){
      setState({...state, height: value});
    }
  }

  function calculate(event) {
    event.preventDefault();
    setBmi({
      bmi: Bmi(state.weight, state.height),
      bmiCategory: BmiCategory(Bmi(state.weight, state.height))
    })
  }

  return (
    <div className="container  col-xl-6 col-lg-7 col-md-9 col-sm-10 col-11">
      <div className="card border-success shadow">
        <div className="card-header border-success text-center">
          BMI Calculator
        </div>

        <div className="card-body">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text border-success">Weight (kg)</span>
            </div>
            <input type="number" className="form-control border-success" onChange={handleChange}
                   name="weight" placeholder="Your weight" aria-label="weight"/>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend ">
              <span className="input-group-text border-success">Height (cm)</span>
            </div>
            <input type="number" className="form-control border-success" onChange={handleChange}
                   name="height" placeholder="Your weight" aria-label="height"/>
          </div>

          <div className="border rounded p-2 text-center font-weight-bold mb-3 border-success">
            {bmi.bmi}
          </div>
          <div className="border rounded p-2 text-center font-weight-bold mb-3 border-success">
            {bmi.bmiCategory}
          </div>
          <div className="d-flex">
            <button className="btn btn-outline-success mx-auto" onClick={calculate}>
              Calculate
            </button>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Content;