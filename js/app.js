class Pet {
  constructor(name,age, hunger = 100, sleep = 100, fun = 100) {
    this.name = name
    this.age = age
    this.hunger = hunger
    this.sleep = sleep
    this.fun = fun
  }
}

const pet = new Pet()

// alret for name 
const callingName = document.querySelector("#nameBtn")
callingName.addEventListener("click", inputName)
function inputName () {
  pet.name = prompt("Enter the name of your pet!")
  if(pet.name != null) {
    document.querySelector(".name").innerText = `NAME: ${pet.name}`
  }
}

// makes hunger bar to go down
const minusHunger = () => {
  if(pet.hunger === 0) {
    clearInterval(timer1)
    alert("Your per is starving!")
    
  } else {
    pet.hunger--;
    document.getElementById("hungerBar").style.width = pet.hunger + "px";
    document.getElementById("hungerBar").innerHTML = pet.hunger + "%"
  }
}


// makes sleep bar go down
const minusSleep = () => {
  if(pet.sleep === 0) {
    clearInterval(timer2)
    alert("Your pet is tired!")

  } else {
    pet.sleep--;
    document.getElementById("sleepBar").style.width = pet.sleep + "px"
    document.getElementById("sleepBar").innerHTML = pet.sleep + "%"
  }
}


// makes fun go down
const minusFun = () => {
  if(pet.fun === 0) {
    clearInterval(timer3)
    alert("Your per is very boooored!")

  } else {
    pet.fun--;
    document.getElementById("funBar").style.width = pet.fun + "px"
    document.getElementById("funBar").innerHTML = pet.fun + "%"
  }
}

let timer1 = setInterval(minusHunger, 400)
let timer2 = setInterval(minusSleep, 370)
let timer3 = setInterval(minusFun, 320)