class Tamagotchi {
  constructor(name) {
    this.name = name
    this.hunger = 100
    this.sleep = 100
    this.fun = 100
  }
}


function Loop(time = 2){

  let total = this.hunger + this.sleep + this.fun;

  /*
	 Se algum dos atributos chegar a 0 nosso pet morre!
	 logo a baixo controlamos o nível de satisfação do pet
  */
  if(this.hunger <= 0 || this.sleep <= 0 || this.fun <= 0 ){
     document.getElementById("pet").src="img/preto.jpg";
     document.getElementById('mensagem').innerHTML = 'Você deixou seu pet morrer, atualize a página';
  }
  

  this.hunger = hunger - parseInt(time);
  this.sleep = sleep - parseInt(time);
  this.fun = fun - parseInt(time);
 

  /*
	 Nessa parte nós controlamos a barra de status do pet
  */
  document.getElementById('hunger').style.width = hunger + 'px';
  document.getElementById('sleep').style.width = sleep + 'px';
  document.getElementById('fun').style.width = fun + 'px';
  

  /*
	 Nessa parte nós controlamos a porcentagem do status do pet
  */
   document.getElementById('hunger').innerHTML = hunger + '%';
   document.getElementById('sleep').innerHTML = sleep + '%';
   document.getElementById('fun').innerHTML = fun + '%';
 
}

/*
	Essa função é responsável por começar e chamar o temporizador da função LOOP
*/
function Start(){
  var temporizador = setInterval(Loop, 1000);
}

/*
	Essa função é para recuperar a fome
*/
function Feed(){
  hunger = 100;
  document.getElementById('hunger').innerHTML = hunger + '%';
  document.getElementById('hunger').style.width = hunger + 'px';
}

/*
	Essa função é para recuperar a higiene
*/
function Sleep(){
  sleep = 100;
  document.getElementById('sleep').innerHTML = sleep + '%';
  document.getElementById('sleep').style.width = sleep + 'px';
}

/*
	Essa função é para recuperar o sono
*/
function Fun(){
  fun = 100;
  document.getElementById('fun').innerHTML = fun + '%';
  document.getElementById('fun').style.width = fun + 'px';
  
}



/*
  Executamos o temporizador
*/
Start();