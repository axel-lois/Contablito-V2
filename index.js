let tabla = document.getElementById("tabla");
let tbody = document.getElementById("tbody");
let editButton = document.getElementsByClassName("editar");
let deleteButton = document.getElementsByClassName("eliminar");
let row = document.getElementsByClassName("filas");



function mostrarProductos() { //Muestra los productos.
    let array = JSON.parse(localStorage.getItem("Datos"));
    for (let i = 0; i < array.length; i++) {
        tbody.innerHTML += `<tr class="filas ${array[i].minStock > array[i].stock ? "table-danger":""}">    
        <td>${array[i].name}</td>
        <td>${array[i].description}</td>
        <td>${array[i].stock}</td>
        <td class="text-right"> $${array[i].unitCost}</td>
        <td class="identificadores">${array[i].ID}</td>
        <td class="text-center">
            <button type="button" class="btn btn-success editar" id="editar">Editar</button>
            <button type="button" class="btn btn-danger eliminar" value="${array[i].ID}" id="eliminar">Eliminar</button>
        </td>
    </tr>`
    };
};  

    editButton.for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
     

     console.log(editButton)

    // deleteButton.addEventListener("click",()=>{

    // });


    function borrarProducto() {

    };

    function editarProducto() {

    };
    
    function asc() {

    };
    
    function desc() {

    };

mostrarProductos();


