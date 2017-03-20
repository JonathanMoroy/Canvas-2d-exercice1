// Fonction ready
$(function() {
  // déclaration de ma variable pour travailler sur mon canvas
  var house = document.getElementById('house').getContext('2d');

  // Corps de la maison
  house.beginPath();
  house.moveTo(100,150);
  house.lineTo(100,260);
  house.lineTo(200,260);
  house.lineTo(200,150);
  house.lineTo(100,150);
  house.closePath();
  house.fillStyle = 'lightblue';
  house.fill();

  // Toit de la maison
  house.beginPath();
  house.moveTo(100,150);
  house.lineTo(150,100);
  house.lineTo(200,150);
  house.lineTo(100,150);
  house.closePath();
  house.fillStyle = 'peru';
  house.fill();

  // Fenêtre et prote de la maison
  house.beginPath();
  // première fenêtre
  house.moveTo(110,165);
  house.lineTo(130,165);
  house.lineTo(130,185);
  house.lineTo(110,185);
  house.lineTo(110,165);
  // seconde fenêtre
  house.moveTo(190,165);
  house.lineTo(170,165);
  house.lineTo(170,185);
  house.lineTo(190,185);
  house.lineTo(190,165);
  // porte
  house.moveTo(135,260);
  house.lineTo(135,210);
  house.lineTo(165,210);
  house.lineTo(165,260);
  house.lineTo(135,260);
  house.closePath();
  house.fillStyle = 'pink';
  house.fill();
});
