const productos = new Map();

productos.set("camisa", "19.99");
productos.set("pantalon", "29.99");
productos.set("zapatos", "49.99");
productos.set("chaqueta", "89.99");
productos.set("bufanda", "15.99");
productos.set("fideos", "12.99");

productos.forEach((precio, producto) => {
    console.log(`producto: ${producto}, precio: ${precio}`);
})

const verificar = productos.has("arroz");
console.log(`¿Existe el producto "arroz"? ${verificar}`);

productos.delete("fideos");

productos.forEach((precio, producto) => {
    console.log(`producto: ${producto}, precio: ${precio}`);
})

console.log(`Tamaño del Map: ${productos.size}`);

for (const clave of productos.keys()) {
    console.log(`Producto: ${clave}`);
}

for(const valor of productos.values()) {
    console.log(`Precio: ${valor}`);
}







