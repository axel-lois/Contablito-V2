

let tabla = document.getElementById("tabla");
let tbody = document.getElementById("tbody");
let editButton = document.getElementsByClassName("editar");
let deleteButton = document.getElementsByClassName("eliminar");
let row = document.getElementsByClassName("filas");
let arreglo = JSON.parse(localStorage.getItem("Datos"));


function mostrarProductos() { //Muestra los productos.
    tbody.innerHTML = ""; //Limpio la tabla por si debo volver a usar la funcion
    for (let i = 0; i < arreglo.length; i++) {
        tbody.innerHTML += `<tr class="filas">    
        <td>${arreglo[i].name}</td>
        <td>${arreglo[i].description}</td>
        <td>${arreglo[i].stock}</td>
        <td class="text-right"> $${arreglo[i].unitCost}</td>
        <td class="identificadores">${arreglo[i].ID}</td>
        <td class="text-center">
            <button type="button" onclick="editarProducto(${i})" class="btn btn-success editar" id="editar">Editar</button>
            <button type="button" onclick="borrarProducto(${arreglo[i].ID},${i})" class="btn btn-danger eliminar" id="eliminar">Eliminar</button>
        </td>
    </tr>`
        
        // console.log("minstock: " + array[i].minStock + " Stock: " + array[i].stock);
        // if(array[i].minStock >= array[i].stock) {
        //     row[i].classList.add("table-danger");
        // }
    };
};


function borrarProducto(ID,index) { //Saca el producto del localStorage.w
    arreglo.splice(index,1);
    localStorage.setItem("Datos",JSON.stringify(arreglo));
    mostrarProductos(); //Debo volver a mostrar todo pero sin ese elemento
};

function editarProducto(index) {
    



};

function asc() {

};

function desc() {

};

mostrarProductos();