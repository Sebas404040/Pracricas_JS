const invitados = [
  "Ana", "Luis", "Marta", "Luis", "Carlos", "Ana", "Sofía", "Carlos", "Luis"
];

const invitadosUnicos = new Set(invitados);
const invitadosOrdenados = Array.from(invitadosUnicos).sort();
console.log('Lista de invitados ordenada:');
invitadosOrdenados.map((invitado, index) => {
  console.log(`${index + 1}. ${invitado}`);
});




