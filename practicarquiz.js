const estudiantes = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 19 },
  { nombre: "Marta", edad: 25 },
  { nombre: "Carlos", edad: 20 },
  { nombre: "Sofía", edad: 18 }
];

const estudiantes20Años = estudiantes.filter(estudiantes => estudiantes.edad >= 20);
console.log(estudiantes20Años);

const existeLuis = estudiantes.some(estudiante => estudiante.nombre === "Luis");
console.log(existeLuis); 


const estudianteMenor = estudiantes.find(estudiantes => estudiantes.edad < 20);
console.log(estudianteMenor);

const estudianteMayor = estudiantes.findIndex(estudiantes => estudiantes.edad >= 23);
console.log(estudianteMayor);

const estudiantesNombres = estudiantes.map(estudiantes => estudiantes.nombre);
console.log(estudiantesNombres);
