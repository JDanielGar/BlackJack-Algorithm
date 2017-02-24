shuffle_in = document.getElementById('shuffle-in');
shuffle_out = document.getElementById('shuffle-out');
shuffle_in.addEventListener('click', shufflerIn);
shuffle_out.addEventListener('click', shufflerOut);

var card =
{
  'letter': '',
  'value': 0,
  'suits': '',
  'color': ''
};

// Seleccion de numero de barajas

function numeroBarajas(){
  decknumber = prompt('Numero de barajas:');
  for(var i=0; i<=decknumber; i++){
    decks.push(deck);
  }
}
// Ranuras maquina

var slot;
var slot_machine = {
  'node_1' : [],
  'node_2' : [],
  'node_3' : [],
  'node_4' : []
};
// Método barajador de rauras - Cambia posicion de numeros en un array.

function shuffleSlot(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

// Método para barajar las cartas

var number_slots=[1, 2, 3, 4];

function shufflerIn(){
  var cards_pushed = 0;
  while(cards_pushed<52) {
    var slot = shuffleSlot(number_slots);
    for (var a = 0; a < number_slots.length ; a++){
      var slot_picked=Math.floor(Math.random() * 3);
      var node=number_slots[slot_picked];
      slot_machine['node_'+node].push(deck[cards_pushed]);
      cards_pushed++;
    }
  }
}

// Método para elegir slot y sacar cartas

var output_deck=[]

function shufflerOut(){
  for(var i = 0; i<13; i++){
    var slot_picked=Math.floor(Math.random() * 4)+1;
    var card_picked=Math.floor(Math.random() * slot_machine['node_'+slot_picked].length);
    output_deck.push(slot_machine['node_'+slot_picked][card_picked]);
    slot_machine['node_'+slot_picked].splice(card_picked, 1);
  }
}
