class Pet {
  constructor(name,age = 0, hunger = 100, sleep = 100, fun = 100) {
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


const addToAge = () => {
  if(pet.hunger > 0 && pet.sleep > 0 && pet.fun > 0) {
  pet.age++
  document.getElementById("ageBar").innerHTML = pet.age;
} 
} 
let timerAge = setInterval(addToAge, 3500)

const morphPet = () => {
  if(pet.age > 0) {
    document.getElementById("puppy").src="morphedPup.png"
  }

}
morphPet()

console.log(ageBar)
// makes hunger bar to go down
const minusHunger = () => {
  if(pet.hunger === 0) {
    clearInterval(timer1)
    alert("Your per is starving!")
    gameover()
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
    gameover()
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
    gameover()
  } else {
    pet.fun--;
    document.getElementById("funBar").style.width = pet.fun + "px"
    document.getElementById("funBar").innerHTML = pet.fun + "%"
  }
}

let timer1 = setInterval(minusHunger, 400) // decrements speed of hunger bar
let timer2 = setInterval(minusSleep, 370)// decrements speed of sleep bar
let timer3 = setInterval(minusFun, 320)// decrements speed of fun bar

// incrementing bar % with buttons
 const addToHunger = () => {
  if(pet.hunger < 100 && pet.hunger != 0) {
    pet.hunger += 2;
  }
 }

 const addToSleep = () => {
  if(pet.sleep < 100 && pet.sleep != 0) {
    pet.sleep += 2
  }
 }

 const addToFun = () => {
  if(pet.fun < 100 && pet.fun != 0) {
    pet.fun += 2
  }
 }

 // incrementing bars
document.getElementById("btnFeed").onclick = addToHunger;
document.getElementById("btnSleep").onclick = addToSleep;
document.getElementById("btnPlay").onclick = addToFun;

const gameover =() => {
  if(pet.hunger === 0 && pet.sleep === 0 && pet.fun === 0) {
    alert("Game Over") 
    document.getElementById("puppy").src="dead.png"
  } else if (pet.hunger === 0) {
    document.getElementById("puppy").src="hungry pup.png"
  } else if(pet.sleep === 0) {
    document.getElementById("puppy").src="tiredPup.png"
  } else if (pet.fun === 0) {
    document.getElementById("puppy").src="bored pup.png"
  }
}

gameover()