
let estadoSeleccionado;


const notasToDo=[
    
];

const notasInProgress=[

];

const notasComplete=[

];

// Grupos de las notas
let lista1= document.getElementById('1');
let lista2= document.getElementById('2');
let lista3= document.getElementById('3');

new Sortable(lista1, {
    group: 'notas', // set both lists to same group
    animation: 150,
    onMove: function(evt) {
        console.log(evt)
        // Sortable.utils.toggleClass(evt.to, 'highlight', true);
        console.log({from: evt.from.id, to: evt.to.id, nota: evt.dragged.id});
      }
});

new Sortable(lista2, {
    group: 'notas',
    animation: 150,
    onMove: function(evt) {
        console.log(evt)
        // Sortable.utils.toggleClass(evt.to, 'highlight', true);
        console.log({from: evt.from.id, to: evt.to.id, nota: evt.dragged.id});
      }
    
});

new Sortable(lista3, {
    group: 'notas',
    animation: 150,
    onMove: function(evt) {
        console.log(evt)
        // Sortable.utils.toggleClass(evt.to, 'highlight', true);
        console.log({from: evt.from.id, to: evt.to.id, nota: evt.dragged.id});
      }
});
// Fin grupos de las notas

//Agregar nota


const crearNotaHTML=(nota)=>{

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
}

// const agregarNota=()=> {

//     notas.push(new Nota());
//     cargarNotas();
// }

const cargarNotas=(estado)=>{

    let notasHTML='';
    if(estado=='1'){
        for(let nota of notasToDo){
            notasHTML+=crearNotaHTML(nota);
        }
        
    }else if(estado=='2'){
        for(let nota of notasInProgress){
            notasHTML+=crearNotaHTML(nota);
        }

    }else if(estado=='3'){
        for(let nota of notasComplete){
            notasHTML+=crearNotaHTML(nota);
        }
    }
    document.getElementById(`${estado}`).innerHTML=notasHTML;
}

const agregarNota=()=> {

    console.log(document.getElementById('titulo-de-la-nota'));
    let titulo = document.getElementById('titulo-de-la-nota').value;
    console.log(document.getElementById('titulo-de-la-nota').value);
    let contenido= document.getElementById('contenido-de-la-nota').value;
    let estado=estadoSeleccionado;

    if(estado=='1'){
        notasToDo.push( new Nota(titulo, contenido, estado));
        cargarNotas(estado);
    }

    else if(estado=='2'){
        notasInProgress.push(  new Nota(titulo, contenido, estado));
        cargarNotas(estado);

    }else if(estado=='3'){
        notasComplete.push( new Nota(titulo, contenido, estado));
        cargarNotas(estado);
    }
    
console.log(notasToDo);
console.log(notasInProgress);
console.log(notasComplete);

}
const tipoDeEstado=(elemento)=>{
    estadoSeleccionado=elemento.value;
}






