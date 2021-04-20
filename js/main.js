let estadoSeleccionado;

let notasToDo = [];

let notasInProgress = [];

let notasComplete = [];


function guardar_localStorage(){
  localStorage.setItem("notasToDo", JSON.stringify(notasToDo));
  localStorage.setItem("notasInProgress", JSON.stringify(notasInProgress));
  localStorage.setItem("notasComplete",JSON.stringify(notasComplete)); 
}

// Grupos de las notas
let lista1 = document.getElementById("1");
let lista2 = document.getElementById("2");
let lista3 = document.getElementById("3");

function onMove (evt){
    let idEliminar = parseInt(evt.clone.id.split("-")[1]);
    let indiceEliminar;
    let listaOrigen;
    let listaDestino;

    switch (Number(evt.from.id)) {
      case 1:
        listaOrigen = notasToDo;
        break;
      case 2:
        listaOrigen = notasInProgress;
        break;
      case 3:
        listaOrigen = notasComplete;
    }
    switch (Number(evt.to.id)) {
      case 1:
        listaDestino = notasToDo;
        break;
      case 2:
        listaDestino = notasInProgress;
        break;
      case 3:
        listaDestino = notasComplete;
    }

    indiceEliminar = listaOrigen.findIndex((el) => el.id == idEliminar);

    if(indiceEliminar <0 || indiceEliminar>=listaOrigen.length){
        return;
    }

    listaDestino.push(listaOrigen[indiceEliminar]);
    listaOrigen.splice(indiceEliminar,1);

    notasToDo.forEach(e=>e.estado='1');
    notasInProgress.forEach(e=>e.estado='2');
    notasComplete.forEach(e=>e.estado='3');
    guardar_localStorage();


    // console.log(notasToDo);
    // console.log(notasInProgress);
    // console.log(notasComplete);
  }

new Sortable(lista1, {
  group: "notas", // set both lists to same group
  animation: 150,
  onEnd: (evt) =>onMove(evt),
});

new Sortable(lista2, {
  group: "notas",
  animation: 150,
  onEnd: (evt) =>onMove(evt),
});


new Sortable(lista3, {
  group: "notas",
  animation: 150,
  onEnd: (evt) =>onMove(evt) ,
});
// Fin grupos de las notas

//Agregar nota

const crearNotaHTML = (nota) => {
  nota = `
    <div id="nota-${nota.id}" class="nota">
    <div class='titulo-nota'>
    <h6>${nota.titulo}</h6>
    <ion-icon name="attach-outline"></ion-icon>
    </div>
    <div class='contenido-nota'>
        <p>${nota.contenido}</p>
    </div>
    </div>`;

  return nota;
};

// const agregarNota=()=> {

//     notas.push(new Nota());
//     cargarNotas();
// }

const cargarNotas = (estado) => {
  let notasHTML = "";
  if (estado == "1") {
    for (let nota of notasToDo) {
      notasHTML += crearNotaHTML(nota);
    }
  } else if (estado == "2") {
    for (let nota of notasInProgress) {
      notasHTML += crearNotaHTML(nota);
    }
  } else if (estado == "3") {
    for (let nota of notasComplete) {
      notasHTML += crearNotaHTML(nota);
    }
  }
  document.getElementById(`${estado}`).innerHTML = notasHTML;
};

const agregarNota = () => {
  let titulo = document.getElementById("titulo-de-la-nota").value;
  let contenido = document.getElementById("contenido-de-la-nota").value;
  let estado = estadoSeleccionado;

  let nota;

  if (estado == "1") {
    notasToDo.push(nota = new Nota(titulo, contenido, estado));
    cargarNotas(estado);
  } else if (estado == "2") {
    notasInProgress.push(nota = new Nota(titulo, contenido, estado));
    cargarNotas(estado);
  } else if (estado == "3") {
    notasComplete.push(nota = new Nota(titulo, contenido, estado));
    cargarNotas(estado);
  }
  guardar_localStorage();
  limpiarInput();
};
const tipoDeEstado = (elemento) => {
  estadoSeleccionado = elemento.value;
};


//Local Storage
notasToDo=JSON.parse(localStorage.getItem("notasToDo"));
console.log(notasToDo);
console.log('nota');
notasInProgress=JSON.parse(localStorage.getItem("notasInProgress"));
console.log(notasInProgress);
console.log('nota 2');
notasComplete=JSON.parse(localStorage.getItem("notasComplete"));
console.log(notasComplete);
console.log('nota 3');

if(!notasToDo){
  notasToDo=[];
} else {
  let listT = [];
  notasToDo.forEach((e) => {
    const n = new Nota(e._titulo,e._contenido,e._estado);
    console.log(n);
    listT.push(n);
  })
  notasToDo = listT;
}

if(!notasInProgress){
  notasInProgress=[];
}else{
  let lisM=[]
  notasInProgress.forEach((e)=>{
  const m = new Nota(e._titulo, e._contenido, e._estado);
  lisM.push(m);
  })
  notasInProgress=lisM;
}

if(!notasComplete){
  notasComplete=[];
}else{
  let lisL=[]
  notasComplete.forEach((e)=>{
    const l = new Nota(e._titulo, e._contenido, e._estado);
    lisL.push(l);
  })
  notasComplete=lisL;
}

cargarNotas("1");
cargarNotas("2");
cargarNotas("3");




////////////////////////////////////////////////////////////////

//Limpiar inputs
function limpiarInput(){
  document.getElementById('contenido-de-la-nota').value='';
  document.getElementById('titulo-de-la-nota').value='';
}

