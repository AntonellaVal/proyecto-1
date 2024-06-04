const productosContainer = document.getElementById('zapatillas');
const carritoContainer = document.getElementById('carrito');

let carrito = [];

function agregarAlCarrito(zapatillas) {
    carrito.push(zapatillas);
    mostrarCarrito();
}

function mostrarCarrito() {
    carritoContainer.innerHTML = '';
    carrito.forEach(zapatillas => {
        const zapatillasElement = document.createElement('a');
        zapatillasElement.classList.add('list-group-item', 'list-group-item-action');
        zapatillasElement.innerHTML = `
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${zapatillas.nombre}</h5>
                <small>$${zapatillas.precio}</small>
            </div>
            <p class="mb-1">${zapatillas.marca}</p>
        `;
        carritoContainer.appendChild(zapatillasElement);
    });
}

fetch('/api/zapatillas')
    .then(response => response.json())
    .then(zapatillas => {
        zapatillas.forEach(zapatillas => {
            const zapatillasElement = document.createElement('div');
            zapatillasElement.classList.add('col-md-4', 'product-card');
            zapatillasElement.innerHTML = `
                <div class="card">
                    <img src="${zapatillas.imagen}" class="card-img-top" alt="${zapatillas.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${zapatillas.nombre}</h5>
                        <p class="card-text">Marca: ${zapatillas.marca}</p>
                        <p class="card-text">Tipo: ${zapatillas.tipo}</p>
                        <p class="card-text">Precio: $${zapatillas.precio}</p>
                        <button class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify(zapatillas)})'>Agregar al Carrito</button>
                    </div>
                </div>
            `;
            zapatillasContainer.appendChild(zapatillasSElement);
        });
    })
    .catch(error => console.error('Error:', error));