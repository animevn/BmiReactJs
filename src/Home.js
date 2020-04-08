import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Bmi, BmiCategory} from "./Calculate";

function Home() {
  const initialBmi = {bmi:"Your BMI", bmiCategory:"Your BMI Category"};
  const initialState = {weight: "", height: ""};
  const [state, setState] = useState(initialState);
  const [bmi, setBmi] = useState(initialBmi);
  const width = {xs:10, sm:7, md:5, lg:4, xl:3};

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
    });
    setState(initialState);
  }

  return (

    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item {...width}>
        <Box mt={5} boxShadow={3} bgcolor="seashell" borderRadius={5}>
          <Box display="flex" flexDirection="row" justifyContent="center" color="green" p={2}>
            <Typography variant="h3">BMI Calculator</Typography>
          </Box>

          <Box display="flex" flexDirection="column" justifyContent="center">

            <Box display="flex" flexDirection="row" justifyContent="center">
              <TextField label="Weight (kg)" variant="outlined" type="number" name="weight"
                         onChange={handleChange} value={state.weight} />
            </Box>

            <Box display="flex" flexDirection="row" justifyContent="center" mt={2}>
              <TextField label="Height (cm)" variant="outlined" type="number" name="height"
                         onChange={handleChange} value={state.height}/>
            </Box>

            <Box display="flex" flexDirection="row" justifyContent="center" mt={3}>
              {bmi.bmi}
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="center" mt={2}>
              {bmi.bmiCategory}
            </Box>
            <Box my={3} display="flex" flexDirection="row" justifyContent="center">
              <Button variant="contained" color="primary" onClick={calculate}>
                Calculate
              </Button>
            </Box>
          </Box>

        </Box>
      </Grid>
    </Grid>
  )
}

export default Home;