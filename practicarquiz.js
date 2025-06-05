const estudiantes = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 19 },
  { nombre: "Marta", edad: 25 },
  { nombre: "Carlos", edad: 20 },
  { nombre: "Sofía", edad: 18 }
];

// 1. Edad de menor a mayor
const porEdadAsc = [...estudiantes].sort((a, b) => a.edad - b.edad);
console.log("📈 Edad de menor a mayor:");
porEdadAsc.forEach(e => console.log(`Nombre: ${e.nombre}, Edad: ${e.edad}`));

// 2. Edad de mayor a menor
const porEdadDesc = [...estudiantes].sort((a, b) => b.edad - a.edad);
console.log("\n📉 Edad de mayor a menor:");
porEdadDesc.forEach(e => console.log(`Nombre: ${e.nombre}, Edad: ${e.edad}`));

// 3. Nombre A → Z
const porNombreAZ = [...estudiantes].sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("\n🔤 Nombre A → Z:");
porNombreAZ.forEach(e => console.log(`Nombre: ${e.nombre}, Edad: ${e.edad}`));

// 4. Nombre Z → A
const porNombreZA = [...estudiantes].sort((a, b) => b.nombre.localeCompare(a.nombre));
console.log("\n🔡 Nombre Z → A:");
porNombreZA.forEach(e => console.log(`Nombre: ${e.nombre}, Edad: ${e.edad}`));

