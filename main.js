shuffler_button = document.getElementById('shuffle-button');
document.addEventListener('click', shufflerIn);


var card =
{
  'letra': '',
  'valor': 0,
  'palo': '',
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
      var node=number_slots[a];
      slot_machine['node_'+node].push(deck[cards_pushed]);
      cards_pushed++;
    }
  }
}

// Método para elegir slot y sacar cartas
