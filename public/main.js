ask_for=document.getElementById('ask-for');
ask_for.addEventListener('click', askFor);

shuffle_in = document.getElementById('shuffle-in');
shuffle_in.addEventListener('click', shufflerIn);

shuffle_out = document.getElementById('shuffle-out');
shuffle_out.addEventListener('click', shufflerOut);

shuffle_out = document.getElementById('nodePush');
shuffle_out.addEventListener('click', nodePush);


// Ranuras maquina

var slot;
var slot_machine={};
var number_slots=[];


function nodePush(){
  var number_of_node= document.getElementById('nodos').value;
  for(var i=0; i<number_of_node; i++){
      slot_machine['node_'+(i+1)]=[];
      number_slots.push(i+1);
  }
}

// Método barajador de ranuras - Cambia posicion de numeros en un array.

function shuffleSlot(array) {
	for(var z=0; z<(array.length-1); z++){
    	var j, x, i = array.length;
    	j = parseInt(Math.random() * i);
    	x = array[--i];
    	array[i] = array[j];
    	array[j] = x;
    }
    return array;
};
// Métodos para barajar las cartas de entrada.

function shufflerIn(){
  var cards_pushed = 0;
  while(cards_pushed<deck.length) {
    var slot = shuffleSlot(number_slots);
    for (var a = 0; a < number_slots.length ; a++){
      var slot_picked=Math.floor(Math.random() * 3);
      var node=number_slots[slot_picked];
      slot_machine['node_'+node].push(deck[cards_pushed]);
      cards_pushed++;
      if(cards_pushed==deck.length){
        break
      }
    }
  }
}

// Método para elegir slot y sacar cartas

var output_deck=[]
var inner_deck=[]
var counting_cards=0;

function shufflerOut(){
  for(var i = 0; i<13; i++){
    var slot_picked=Math.floor(Math.random() * number_slots.length)+1;
    if(slot_machine['node_'+slot_picked].length!=0){
      var card_picked=Math.floor(Math.random() * slot_machine['node_'+slot_picked].length);
      output_deck.push(slot_machine['node_'+slot_picked][card_picked]);
      slot_machine['node_'+slot_picked].splice(card_picked, 1);
    }
    else {
      i--;
      console.log('Empy slot detected.');
    }
  }
}

// Método para salida y entrada de cartas subsecuentes.

function askFor(){
  drawCard(output_deck[0].color, output_deck[0].letra, output_deck[0].palo);
  inner_deck.push(output_deck[0]);
  output_deck.splice(0, 1);
  counting_cards++;
  if(counting_cards>=13){
    counting_cards=0;
    shufflerOut();
    deck=inner_deck;
    inner_deck=[];
    shufflerIn(deck);
  }
}

// Juego
