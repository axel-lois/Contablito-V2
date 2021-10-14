let tabla = document.getElementById("tabla");
let tbody = document.getElementById("tbody");
let editButton = document.getElementById("editar");
let deleteButton = document.getElementById("eliminar");
let row = document.getElementsByClassName("filas");



function mostrarProductos() { //Muestra los productos.
    let array = JSON.parse(localStorage.getItem("Datos"));
    for (let i = 0; i < array.length; i++) {
        tbody.innerHTML += `<tr class="filas">    
        <td>${array[i].name}</td>
        <td>${array[i].description}</td>
        <td>${array[i].stock}</td>
        <td class="text-right"> $${array[i].unitCost}</td>
        <td class="identificadores">${array[i].ID}</td>
        <td class="text-center"> <button type="button" class="btn btn-success" id="editar">Editar</button>
            <button type="button" class="btn btn-danger" id="eliminar">Eliminar</button>
        </td>
    </tr>`
    }
};
    // editButton.addEventListener("click",()=>{

    // });

    // deleteButton.addEventListener("click",()=>{

    // });


    function borrarProducto() {

    };

    function editarProducto() {

    };

    
    function ascByName() {

    };
    
    function descByName() {

    };



mostrarProductos();

