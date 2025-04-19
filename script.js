function calPower(airDensity,area,velocity,height){

  let k =  1.001382658 * area * (height/100)

  let ro = airDensity / 100

  return 0.5*ro*area*(Math.pow(velocity,3))*k
}

function calWindMill(bladeWidth,windSpeed){
  let Area = Math.pow((bladeWidth)/100 ,2) * Math.PI

  if ((Number.isInteger(bladeWidth) && bladeWidth < 0 ) || (Number.isInteger(windSpeed) && windSpeed < 0) || (Number.isInteger(millHeight) && millHeight < 0)){
    return "NaN"
  }
  let ro = 1.225
  let velocity = windSpeed /*kmph*/

  return [ro , Area , velocity]
}

document.getElementById("submitBtn").addEventListener('click', (e) => {

  let windSpeed = document.getElementById("windSpeed").value;
  let bladeSize = document.getElementById("bladeSize").value;
  let millHeight = document.getElementById("millHeight").value;


  let [ro,area,velocity] = calWindMill(bladeSize,windSpeed)


  windPower = calPower(ro,area,velocity,millHeight).toFixed(2)




  if ((windPower === "NaN")){
    document.getElementById("powerOutput")["innerText"] = `Please Enter the Values Properly.`
  }
  else if (bladeSize >= millHeight){
    document.getElementById("powerOutput")["innerText"] = `Check the Height and Blade Size of the Wind Mill.`
  }
  else {
  document.getElementById("powerOutput")["innerText"] = `The Wind Power Generated is ${windPower} MWh`
  }
} )


document.getElementById("clearBtn").addEventListener('click', (e) => {

  document.getElementById("windSpeed").value = ""
  document.getElementById("bladeSize").value = ""
  document.getElementById("millHeight").value = ""

} )




