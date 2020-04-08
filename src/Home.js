import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Bmi, BmiCategory} from "./Calculate";

function Home() {
  const initialBmi = {bmi:"Your BMI", bmiCategory:"Your BMI Category"};
  const initialState = {weight: "", height: ""};
  const [state, setState] = useState(initialState);
  const [bmi, setBmi] = useState(initialBmi);
  const width = {xs:10, sm:8, md:6, lg:5, xl:4};

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
    <Grid container direction="column" justify="center" alignContent="center">
      <Grid item {...width}>
        <Box mt={5}>
          <Card>
            <CardHeader title="BMI Calculator"/>


            <CardContent className="card-body">
              <Box display="flex" flexDirection="column">
                <Box>
                  <TextField label="Weight (kg)" variant="outlined" type="number" name="weight"
                             onChange={handleChange} value={state.weight}/>
                </Box>

                <Box mt={2}>
                  <TextField label="Height (cm)" variant="outlined" type="number" name="height"
                             onChange={handleChange} value={state.height}/>
                </Box>

              </Box>

              <Box mt={2}>
                {bmi.bmi}
              </Box>
              <Box mt={2}>
                {bmi.bmiCategory}
              </Box>
              <Box mt={2} display="flex" flexDirection="row" justifyContent="center">
                <Button variant="contained" color="secondary" onClick={calculate}>
                  Calculate
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Home;