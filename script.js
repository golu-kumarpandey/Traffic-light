let main_heading = document.getElementById("traphic")
let stop_button = document.getElementById("stop1")
let red_traficlight = document.getElementById("red1")
let yello_traficlight = document.getElementById("yellow1")
let ready_button = document.getElementById("ready1")
let go_button = document.getElementById("go1")
let green_traficlight = document.getElementById("green1")
let my_name = document.getElementById("golu")


function stop(){
  main_heading.style.color = "red"
  stop_button.style.backgroundColor = "red"
  red_traficlight.style.backgroundColor = "red"
  ready_button.style.backgroundColor = "black"
  yello_traficlight.style.backgroundColor = "#fff"
  go_button.style.backgroundColor = "black"
  green_traficlight.style.backgroundColor = "#fff"
  my_name.style.color = "red"
  

}
function ready(){
  main_heading.style.color = "yellow"
  ready_button.style.backgroundColor = "yellow"
  yello_traficlight.style.backgroundColor = "yellow"
  stop_button.style.backgroundColor = "black"
  red_traficlight.style.backgroundColor = "#fff"
  go_button.style.backgroundColor = "black"
  green_traficlight.style.backgroundColor = "#fff"
  my_name.style.color = "yellow"
  
  
}
function go(){
  stop_button.style.backgroundColor = "black"
  red_traficlight.style.backgroundColor = "#fff"
  ready_button.style.backgroundColor = "black"
  yello_traficlight.style.backgroundColor = "#fff"
  go_button.style.backgroundColor = "green"
  main_heading.style.color = "green"
  green_traficlight.style.backgroundColor = "green"
  my_name.style.color = "green"

  
}