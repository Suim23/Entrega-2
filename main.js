// Crear un objeto con informacion de personas
var persona1 = { nombre: "Juan", edad: 25, ciudad: "Madrid" };
var persona2 = { nombre: "Ana", edad: 30, ciudad: "Barcelona" };
var persona3 = { nombre: "Luis", edad: 28, ciudad: "Sevilla" };

// Crear un array de personas
var personas = [persona1, persona2, persona3];

// Mostrar la informacion de todas las personas utilizando un bucle
var infoPersonas = "";
for (var i = 0; i < personas.length; i++) {
  var persona = personas[i];
  infoPersonas += "Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad + "\n";
}

// Mostrar la informacion de todas las personas mediante un alert
alert("Información de personas:\n" + infoPersonas);

// Buscar a una persona por nombre utilizando el metodo find
var nombreBuscado = prompt("Ingrese el nombre de la persona a buscar:");
var personaEncontrada = personas.find(function (persona) {
  return persona.nombre === nombreBuscado;
});

// Mostrar la informacion de la persona encontrada o un mensaje si no se encuentra
if (personaEncontrada) {
  alert("Persona encontrada:\nNombre: " + personaEncontrada.nombre + ", Edad: " + personaEncontrada.edad + ", Ciudad: " + personaEncontrada.ciudad);
} else {
  alert("Persona no encontrada");
}

// Filtrar personas mayores de 25 años utilizando el metodo filter
var personasMayores = personas.filter(function (persona) {
  return persona.edad > 25;
});

// Mostrar la informacion de las personas mayores de 25 años
var infoPersonasMayores = "";
for (var j = 0; j < personasMayores.length; j++) {
  var personaMayor = personasMayores[j];
  infoPersonasMayores += "Nombre: " + personaMayor.nombre + ", Edad: " + personaMayor.edad + ", Ciudad: " + personaMayor.ciudad + "\n";
}

// Mostrar la informacion de las personas mayores de 25 años mediante un alert
alert("Personas mayores de 25 años:\n" + infoPersonasMayores);
