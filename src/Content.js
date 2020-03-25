import React from "react";

function Content() {





  return (
    <div className="container  col-xl-6 col-lg-7 col-md-9 col-sm-10 col-11">
      <div className="card border-success shadow">
        <div className="card-header border-success">
          BMI Calculator
        </div>

        <div className="card-body">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text border-success">Weight (kg)</span>
            </div>
            <input type="number" className="form-control border-success"
                   placeholder="Your weight" aria-label="weight"/>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend ">
              <span className="input-group-text border-success">Height (cm)</span>
            </div>
            <input type="number" className="form-control border-success"
                   placeholder="Your weight" aria-label="height"/>
          </div>

          <div className="border rounded p-2 text-center font-weight-bold mb-3 border-success">
            Your BMI
          </div>
          <div className="border rounded p-2 text-center font-weight-bold mb-3 border-success">
            Your BMI Category
          </div>
          <div className="d-flex">
            <button className="btn btn-outline-success mx-auto">Calculate</button>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Content;