// Variables de diferentes tipos
let nombreSitio = "Arte Oniric Dream";
let totalObras = 20;
let disponible = true;

// Operadores
let precioBase = 2000;
let precioMax = 7000;
let ejemploAritmetico = precioMax - precioBase;
let condicion = (disponible && totalObras > 0) ? "Disponible" : "No disponible";

// Funciones
function generarPrecio() {
    return Math.floor(Math.random() * (7000 - 2000 + 1)) + 2000;
}

function cargarGaleria() {
    let galeria = document.getElementById("galeria");
    if (!galeria) return;
    for (let i = 1; i <= totalObras; i++) {
        let precio = generarPrecio();
        let div = document.createElement("div");
        div.innerHTML = `
            <img src="img/Oleo${i}.jpg" alt="Óleo ${i}" width="200" onclick="mostrarDetalle('Oleo${i}.jpg', ${precio})"><br>
            <strong>$${precio} MXN</strong>
        `;
        galeria.appendChild(div);
    }
}

// Modal con detalle de la obra
function mostrarDetalle(imagen, precio) {
    let modal = document.getElementById("modalDetalle");
    modal.innerHTML = `
        <div class="modal-content">
            <span onclick="cerrarModal()" class="cerrar">&times;</span>
            <img src="img/${imagen}" width="300"><br>
            <p><strong>Precio: $${precio} MXN</strong></p>
            <button onclick="mostrarFormularioCompra('${imagen}', ${precio})">Comprar</button>
        </div>
    `;
    modal.style.display = "flex";
}
function cerrarModal() {
    let modal = document.getElementById("modalDetalle");
    modal.style.display = "none";
    modal.innerHTML = "";
}

// Formulario de compra
function mostrarFormularioCompra(imagen, precio) {
    let modal = document.getElementById("modalDetalle");
    modal.innerHTML = `
        <div class="modal-content">
            <span onclick="cerrarModal()" class="cerrar">&times;</span>
            <h3>Formulario de Compra</h3>
            <p>Obra seleccionada: <strong>${imagen}</strong></p>
            <p>Precio: <strong>$${precio} MXN</strong></p>
            <form onsubmit="return confirmarCompraFinal()">
                <label>Nombre completo:</label><br>
                <input type="text" required><br>
                <label>Domicilio:</label><br>
                <input type="text" required><br>
                <label>Teléfono:</label><br>
                <input type="tel" required><br>
                <label>Email:</label><br>
                <input type="email" required><br>
                <label>Método de pago:</label><br>
                <select required>
                    <option value="">Seleccione...</option>
                    <option value="tarjeta">Tarjeta de crédito/débito</option>
                    <option value="transferencia">Transferencia bancaria</option>
                    <option value="paypal">PayPal</option>
                </select><br><br>
                <button type="submit">Confirmar Compra</button>
            </form>
        </div>
    `;
}
function confirmarCompraFinal() {
    alert("✅ ¡Gracias por tu compra! En breve recibirás un correo con los detalles de entrega.");
    cerrarModal();
    return false;
}

// Eventos de formulario en contacto.html
function validarFormulario() {
    alert("Formulario enviado con éxito");
    return true;
}
function formularioReseteado() {
    alert("Formulario reseteado");
}
function campoEnfocado() {
    console.log("Campo enfocado");
}
function correoCambiado() {
    alert("Correo actualizado");
}
function textoSeleccionado() {
    alert("Texto seleccionado");
}
function ventanaRedimensionada() {
    console.log("La ventana fue redimensionada");
}

// Bucles
for (let i = 0; i < 3; i++) {
    console.log("For loop:", i);
}
let j = 0;
while (j < 2) {
    console.log("While loop:", j);
    j++;
}
let k = 0;
do {
    console.log("Do While loop:", k);
    k++;
} while (k < 1);

// Métodos y objetos
let obra = {
    titulo: "Óleo Abstracto",
    precio: generarPrecio(),
    mostrarInfo: function() {
        return this.titulo + " cuesta $" + this.precio;
    }
};
console.log(obra.mostrarInfo());

// Funciones especiales
let expresion = "2 + 3 * 4";
console.log("Eval:", eval(expresion));
console.log("Escape:", escape("Texto con espacios"));

// Ejecutar al cargar
window.onload = cargarGaleria;
