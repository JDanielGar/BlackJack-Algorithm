var canvas = document.getElementById('canvas-card');
var card = canvas.getContext('2d');



function drawBackground(){
  var canvas = document.getElementById('canvas-card');
  var card = canvas.getContext('2d');
  card.fillStyle = 'rgb(255, 555, 255)';
  card.fillRect(5, 5, 60, 85);
}

function drawCard(){
  var color = prompt('Color:');
  var letter = prompt('Letra:');
  var suit = prompt('Palo:');

  // Canvas

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
  var img= new Image();
  if(suit=='PICA'){
    if(color=='ROJO'){
      img.onload = function(){
        canvas.drawImage(img, 20, 25);
      };
      img.src = 'assets/pica-r.gif';
    } else {
      img.onload = function(){
        canvas.drawImage(img, 20, 25);
      };
      img.src = 'assets/pica-n.gif';
    }
  } else if (suit=='TREVOL') {
    if(color=='ROJO'){
      img.onload = function(){
        canvas.drawImage(img, 20, 25);
      };
      img.src = 'assets/trevol-r.gif';
    } else {
      img.onload = function(){
        canvas.drawImage(img, 20, 25);
      };
      img.src = 'assets/trevol-n.gif';
    }
  } else if (suit=='CORAZON') {
    if(color=='ROJO'){
      img.onload = function(){
        canvas.drawImage(img, 20, 25);
      };
      img.src = 'assets/corazon-r.gif';
    } else {
      img.onload = function(){
        canvas.drawImage(img, 20, 25);
      };
      img.src = 'assets/corazon-n.gif';
    }
  } else {
    if(color=='ROJO'){
      img.onload = function(){
        canvas.drawImage(img, 20, 25);
      };
      img.src = 'assets/rombo-r.gif';
    } else {
      img.onload = function(){
        canvas.drawImage(img, 20, 25);
      };
      img.src = 'assets/rombo-n.gif';
    }
  }
}
drawCard();
