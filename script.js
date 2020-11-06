window.onload = function() {
  updateVisit();
}
// Atualiza a quantidade de visitar no site, utilizando o LocalStorage
function updateVisit() {
  if (typeof (Storage) != "undefined") {
    if(localStorage.count !== undefined) {
      let count = parseInt(localStorage.count);
      count+=1;
      localStorage.count = count;
      document.getElementById("count").innerHTML = count;
    } else {
      localStorage.count = 1;
      document.getElementById("count").innerHTML = 1;
    }
  } else {
    document.write("Sem suporte para Web Storage");
  }  
}

let basePyramid;
let numberOfLines;
let controlLeft;
let controlRight;
let model;

// Passa por todos as linhas (div com class line) e preenche o triangulo
function fillTriangle(l) {
  while(document.getElementById("triangle").firstChild) {
    document.getElementById("triangle").removeChild(document.getElementById("triangle").lastChild);
  }
  basePyramid = (l * 2) - 1;
  numberOfLines = (basePyramid + 1) / 2; // 5
  controlLeft = numberOfLines; // 5
  controlRight = numberOfLines; // 5
  console.log(basePyramid);
  
  model = 0;
  if(l > 7) {
    model = 1;
  }
  
  let lines = [];

  for(let index = 0; index < l; index += 1) {
    let divIn = document.createElement('div');
    divIn.className = 'line';
    if(model === 1) {
      divIn.classList.add("line-thin");
    }
    document.getElementById("triangle").appendChild(divIn);
    lines.push(divIn);
    fillLine(lines[index]);
    controlRight += 1;
    controlLeft -= 1;
  }
}

// Cria uma caixa com base nas diferentes classes
function createBox(className) {
  let box = document.createElement("div");
  box.className = className;
  if(model === 1) {
    box.classList.add("box-thin");
  }
  return box;
}

// Preenche uma linha
function fillLine(divLine) {
  for (let lineColumn = 1; lineColumn <= basePyramid; lineColumn += 1) {
    if(lineColumn >= controlLeft && lineColumn <= controlRight) {
      let box = createBox("box");
      divLine.appendChild(box);
    } else {
      divLine.appendChild(createBox("box-empty"));
    }
  }
}
