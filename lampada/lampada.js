let lampadaImg = document.getElementById("lampada");
let bateriaImg = document.getElementById("bateria");
let interruptorImg = document.getElementById("interruptor");

let bateria = false;
let interruptor = false;

function conectar() {
  bateria = !bateria;

  if (bateria) {
    bateriaImg.setAttribute("src", "com-bateria.png");

    if (interruptor) {
      interruptorImg.setAttribute("src", "on.png");
      lampadaImg.setAttribute("src", "lampada-acesa.png");
      document.body.style.background = "rgb(126, 196, 218)";
      document.getElementById('titulo').style.color = "rgb(255, 255, 255)";
    }
  } else {
    bateriaImg.setAttribute("src", "sem-bateria.png");
    lampadaImg.setAttribute("src", "lampada-apagada.png");
    document.body.style.background = 'rgb(99, 146, 160)';
    document.getElementById('titulo').style.color = rgb(198, 204, 204);
  }
}

function ligar() {
  interruptor = !interruptor;

  if (interruptor) {
    interruptorImg.setAttribute("src", "on.png");
    if (bateria) {
      lampadaImg.setAttribute("src", "lampada-acesa.png");
      document.body.style.background = "rgb(126, 196, 218)";
      document.getElementById('titulo').style.color = "rgb(255, 255, 255)";
      
    }
  } else {
    interruptorImg.setAttribute("src", "off.png");
    lampadaImg.setAttribute("src", "lampada-apagada.png");
    document.body.style.background = 'rgb(99, 146, 160)';
    document.getElementById('titulo').style.color = 'rgb(198, 204, 204)';
  }
}
