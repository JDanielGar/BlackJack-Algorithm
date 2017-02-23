shuffler_button = document.getElementById('shuffle-button');
document.addEventListener('click', shufflerIn);


var card =
{
  'letra': '',
  'valor': 0,
  'palo': '',
  'color': ''
};

deck = [{"letra":"A","valor":"1","palo":"PICA","color":"NEGRO"},{"letra":"2","valor":"2","palo":"PICA","color":"NEGRO"},{"letra":"3","valor":"3","palo":"PICA","color":"NEGRO"},{"letra":"4","valor":"4","palo":"PICA","color":"NEGRO"},{"letra":"5","valor":"5","palo":"PICA","color":"NEGRO"},{"letra":"6","valor":"6","palo":"PICA","color":"NEGRO"},{"letra":"7","valor":"7","palo":"PICA","color":"NEGRO"},{"letra":"8","valor":"8","palo":"PICA","color":"NEGRO"},{"letra":"9","valor":"9","palo":"PICA","color":"NEGRO"},{"letra":"10","valor":"10","palo":"PICA","color":"NEGRO"},{"letra":"J","valor":"10","palo":"PICA","color":"NEGRO"},{"letra":"Q","valor":"10","palo":"PICA","color":"NEGRO"},{"letra":"K","valor":"10","palo":"PICA","color":"NEGRO"}, {"letra":"A","valor":"1","palo":"CORAZON","color":"ROJO"},{"letra":"2","valor":"2","palo":"CORAZON","color":"ROJO"},{"letra":"3","valor":"3","palo":"CORAZON","color":"ROJO"},{"letra":"4","valor":"4","palo":"CORAZON","color":"ROJO"},{"letra":"5","valor":"5","palo":"CORAZON","color":"ROJO"},{"letra":"6","valor":"6","palo":"CORAZON","color":"ROJO"},{"letra":"7","valor":"7","palo":"CORAZON","color":"ROJO"},{"letra":"8","valor":"8","palo":"CORAZON","color":"ROJO"},{"letra":"9","valor":"9","palo":"CORAZON","color":"ROJO"},{"letra":"10","valor":"10","palo":"CORAZON","color":"ROJO"},{"letra":"J","valor":"10","palo":"CORAZON","color":"ROJO"},{"letra":"Q","valor":"10","palo":"CORAZON","color":"ROJO"},{"letra":"K","valor":"10","palo":"CORAZON","color":"ROJO"}, {"letra":"A","valor":"1","palo":"TREVOL","color":"NEGRO"},{"letra":"2","valor":"2","palo":"TREVOL","color":"NEGRO"},{"letra":"3","valor":"3","palo":"TREVOL","color":"NEGRO"},{"letra":"4","valor":"4","palo":"TREVOL","color":"NEGRO"},{"letra":"5","valor":"5","palo":"TREVOL","color":"NEGRO"},{"letra":"6","valor":"6","palo":"TREVOL","color":"NEGRO"},{"letra":"7","valor":"7","palo":"TREVOL","color":"NEGRO"},{"letra":"8","valor":"8","palo":"TREVOL","color":"NEGRO"},{"letra":"9","valor":"9","palo":"TREVOL","color":"NEGRO"},{"letra":"10","valor":"10","palo":"TREVOL","color":"NEGRO"},{"letra":"J","valor":"10","palo":"TREVOL","color":"NEGRO"},{"letra":"Q","valor":"10","palo":"TREVOL","color":"NEGRO"},{"letra":"K","valor":"10","palo":"TREVOL","color":"NEGRO"}, {"letra":"A","valor":"1","palo":"ROMBO","color":"ROJO"},{"letra":"2","valor":"2","palo":"ROMBO","color":"ROJO"},{"letra":"3","valor":"3","palo":"ROMBO","color":"ROJO"},{"letra":"4","valor":"4","palo":"ROMBO","color":"ROJO"},{"letra":"5","valor":"5","palo":"ROMBO","color":"ROJO"},{"letra":"6","valor":"6","palo":"ROMBO","color":"ROJO"},{"letra":"7","valor":"7","palo":"ROMBO","color":"ROJO"},{"letra":"8","valor":"8","palo":"ROMBO","color":"ROJO"},{"letra":"9","valor":"9","palo":"ROMBO","color":"ROJO"},{"letra":"10","valor":"10","palo":"ROMBO","color":"ROJO"},{"letra":"J","valor":"10","palo":"ROMBO","color":"ROJO"},{"letra":"Q","valor":"10","palo":"ROMBO","color":"ROJO"},{"letra":"K","valor":"10","palo":"ROMBO","color":"ROJO"}];

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
// Metodo excluidor de numero en Random
excluded = [];
function randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    for (var i = 0; i < excluded.length; i++) {
      if(n >= excluded[i]) n++;
    }
    return n;
}



// Metodo para barajar las cartas

function shufflerIn(){
  for(var i=0; i<52; i++){
    var number_slots=[1, 2, 3, 4];
    var slot = Math.floor(Math.random() * number_slots.length);
    if(slot==1){
      if(slot_machine.node_1.length<13){
        slot_machine.node_1.push(deck[i]);
      }
      else {
        i--;
      }
    } else if (slot==2) {
      if(slot_machine.node_2.length<13){
        slot_machine.node_2.push(deck[i]);
      }
      else {
        i--;
      }
    } else if (slot==3) {
      if(slot_machine.node_3.length<13){
        slot_machine.node_3.push(deck[i]);
      }
      else{
        i--;
      }
    } else {
      if(slot_machine.node_4.length<13){
        slot_machine.node_4.push(deck[i]);
      }
      else{
        i--;
      }
    }
  }
}
