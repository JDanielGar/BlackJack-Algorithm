var canvas = document.getElementById('canvas-card');
var card = canvas.getContext('2d');



function drawBackground(){
  var canvas = document.getElementById('canvas-card');
  var card = canvas.getContext('2d');
  card.fillStyle = 'rgb(255, 555, 255)';
  card.fillRect(5, 5, 60, 85);
}

function drawCard(color, letter, suit){
  var canvas = document.getElementById('canvas-card');
  var card = canvas.getContext('2d');
  drawBackground();
  cardColor(color);
  letterCard(color, letter);
  suitCard(color, suit);
}

function cardColor(color){
  var canvas = document.getElementById('canvas-card');
  var card = canvas.getContext('2d');

  if(color=='ROJO'){
    card.strokeStyle='rgb(255, 0, 0)';
  } else {
    card.strokeStyle='rgb(0, 0, 0)';
  }

  card.beginPath();
    card.lineWidth=2;
    card.moveTo(5, 90);
    card.lineTo(5, 5);
    card.lineTo(65, 5);
    card.lineTo(65, 90);
    card.lineTo(5, 90);
    card.stroke();
  card.closePath();
}

function letterCard(color, letter){
  var canvas = document.getElementById('canvas-card');
  var card = canvas.getContext('2d');

  card.font = '15px serif';
  if (color=='ROJO') {
    card.fillStyle = 'rgb(255, 0, 0)';
  } else {
    card.fillStyle = 'rgb(0, 0, 0)';
  }

  card.fillText(letter, 10, 20);

}

function suitCard(color, suit){
  var canvas = document.getElementById('canvas-card').getContext('2d')
  card.font = '50px serif';
  if(suit=='PICA'){
    if(color=='ROJO'){
      canvas.fillStyle = 'rgb(255, 0, 0)';
      canvas.fillText('♠', 22.5, 62.5);
    } else {
      canvas.fillStyle = 'rgb(0, 0, 0)';
      canvas.fillText('♠', 22.5, 62.5);
    }
  } else if (suit=='TREVOL') {
    if(color=='ROJO'){
      canvas.fillStyle = 'rgb(255, 0, 0)';
      canvas.fillText('♣', 19, 62.5);
    } else {
      canvas.fillStyle = 'rgb(0, 0, 0)';
      canvas.fillText('♣', 19, 62.5);
    }
  } else if (suit=='CORAZON') {
    if(color=='ROJO'){
      canvas.fillStyle = 'rgb(255, 0, 0)';
      canvas.fillText('♥', 19, 62.5);
    } else {
      canvas.fillStyle = 'rgb(0, 0, 0)';
      canvas.fillText('♥', 19, 62.5);
    }
  } else {
    if(color=='ROJO'){
      canvas.fillStyle = 'rgb(255, 0, 0)';
      canvas.fillText('♦', 22.5, 62.5);
    } else {
      canvas.fillStyle = 'rgb(0, 0, 0)';
      canvas.fillText('♦', 22.5, 62.5);
    }
  }
}
