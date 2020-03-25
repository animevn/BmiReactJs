export const Bmi = (weight, height)=>{
  if (weight > 0 && height > 0){
    return (weight * 10000 / (height * height)).toFixed(1);
  }else {
    return "?"
  }
};

export const BmiCategory = (bmi)=>{
  if (bmi > 0){
    if (bmi < 15){
      return"too low";
    }else if (bmi < 18){
      return"low";
    }else if (bmi < 25){
      return"good";
    }else if (bmi < 30){
      return"overweight";
    }else if (bmi < 35){
      return"fat";
    }else {
      return"too fat";
    }
  }else {
    return "Weight and height must larger than zero"
  }
};