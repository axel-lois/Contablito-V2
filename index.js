let tabla = document.getElementById("tabla");
let tbody = document.getElementById("tbody");
let editButton = document.getElementsByClassName("editar");
let deleteButton = document.getElementsByClassName("eliminar");
let row = document.getElementsByClassName("filas");
let arreglo = JSON.parse(localStorage.getItem("Datos"));
let asc_filter = document.getElementsByClassName("asc__filter");
let desc_filter = document.getElementsByClassName("desc__filter")



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
            <button type="button" onclick="borrarProducto(${i})" class="btn btn-danger eliminar" id="eliminar">Eliminar</button>
        </td>
    </tr>`
        
        console.log("minstock: " + arreglo[i].minStock + " Stock: " + arreglo[i].stock + " Precio: " + arreglo[i].unitCost);
        if(parseInt(arreglo[i].minStock) >= parseInt(arreglo[i].stock)) {
            row[i].classList.add("table-danger");
        }
        
    };
};


function borrarProducto(index) { //Saca el producto del localStorage.
    let alerta =  document.getElementById("alert");
    arreglo.splice(index,1);
    localStorage.setItem("Datos",JSON.stringify(arreglo));
    mostrarProductos(); //Debo volver a mostrar todo pero sin ese elemento
    alerta.innerHTML = `<div class="alert alert-success" style="margin-top: 15px; text-align:center; margin-right: 30px; margin-left: 30px;  " role="alert">
    <strong> <i class="fas fa-check-circle"></i> Su producto ha sido eliminado satisfactoriamente. </strong>
  </div>`
  setTimeout(() => {
    alerta.innerHTML = "";
}, 2000);

};

function editarProducto(index) {
    let obj =  arreglo[index];
    obj = Object.defineProperty(obj, "index",{value: index, writable: true, enumerable:true});
    localStorage.setItem("modifiedObject",JSON.stringify(obj));
    location.href = "add_products.html";
};

function asc(criterio,i) {
    let arreglo = JSON.parse(localStorage.getItem("Datos"));
    arreglo = arreglo.sort(function(a,b){
        if (i != 0) {
            var aXD = parseInt(a[criterio]);
            var bXD = parseInt(b[criterio]);
        }
        else {
            var aXD = a[criterio];
            var bXD = b[criterio];
        }

        if(aXD > bXD) 
            return 1;
        else if (bXD > aXD)
            return -1;
        else
            return 0;
    })
    localStorage.setItem("Datos",JSON.stringify(arreglo));
    mostrarProductos();
    window.location.reload();
};




function desc(criterio,i) {
    let arreglo = JSON.parse(localStorage.getItem("Datos"));
    arreglo = arreglo.sort(function(a,b){
        if (i != 0) {
            var aXD = parseInt(a[criterio]);
            var bXD = parseInt(b[criterio])
        }
        else {
            var aXD = a[criterio];
            var bXD = b[criterio];
        }
        if (aXD > bXD) 
            return -1;
        else if (bXD > aXD)
            return 1;
        else
            return 0;
    })
    localStorage.setItem("Datos",JSON.stringify(arreglo));
    mostrarProductos();
    window.location.reload();
};







//filtros
for(let i = 0; i < asc_filter.length; i++) {
    asc_filter[i].addEventListener("click",function(){
        if (i === 0)
            asc("name",0);
        if (i === 1)
            asc("stock",1);
        if (i === 2)
            asc("unitCost",2);
    })
}

for(let i = 0; i < asc_filter.length; i++) {
    desc_filter[i].addEventListener("click",function() {
        if (i === 0)
            desc("name",0);
        if (i === 1)
            desc("stock",1);
        if(i === 2)
            desc("unitCost",2);
    }) 
}


document.addEventListener("DOMContentLoaded",function(){
    mostrarProductos();
})
