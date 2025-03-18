let amigos = [];

/**
 * Creando Array que almacenara los nombres de los amigos
 */
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;
// Validamos que el campo no este vacio
  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre");
  } 
 //Validamos que el nombre no este duplicado y limpiamos campo
 if(amigos.includes(nombreAmigo)){
  alert("El nombre  ya esta en la lista");
  document.querySelector("#amigo").value = "";
  return;
} 
  // validamos que el nombre no contenga numeros ni carcateres extraños
  else if (!/^[A-Za-záéíóúÁÉÍÓÚüÜ\s]+$/.test(nombreAmigo.trim())) {
    alert("El nombre solo puede contener letras.");
    document.querySelector("#amigo").value = "";
  }
  else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

/**
 * funcion que mostrara la lista de amigos
 */
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  // limpia el contenido actual de la lista
  listaAmigos.innerHTML = "";
 // recorremos el array usando for
  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

/**
 * funcion para seleccionar al amigo secreto
 */
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("no hay amigos en la lista, ingrese un nombre");
  } 
   // generamos un indice aleatorio  
    else {
    let indiceAleatorio = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAleatorio];
  }
}
