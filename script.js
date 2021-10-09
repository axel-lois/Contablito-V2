
document.addEventListener("DOMContentLoaded", function (e) {

    const stock = []
    const uno = { name: "tornillos", description: "uno", stock: "350", unitCost: "$ 5", minStock: "200", ID: "27" };
    const dos = { name: "clavos", description: "dos", stock: "600", unitCost: "$ 4", minStock: "60", ID: "47" };
    const tres = { name: "ladrillos", description: "tres", stock: "160", unitCost: "$ 30", minStock: "100", ID: "82" };
    const cuatro = { name: "tablas", description: "cuatro", stock: "26", unitCost: "$ 20", minStock: "30", ID: "24" };
    const cinco = { name: "tornillos2", description: "cinco", stock: "250", unitCost: "$ 5", minStock: "140", ID: "36" };
    const seis = { name: "clavos2", description: "seis", stock: "500", unitCost: "$ 4", minStock: "75", ID: "41" };
    const siete = { name: "ladrillos2", description: "siete", stock: "80", unitCost: "$ 30", minStock: "100", ID: "55" };
    const ocho = { name: "tablas2", description: "nueve", stock: "1700", unitCost: "$ 25", minStock: "30", ID: "79" };
    const nueve = { name: "tablas3", description: "ocho", stock: "14", unitCost: "$ 25", minStock: "30", ID: "65" };
    const diez = { name: "tablas4", description: "diez", stock: "85", unitCost: "$ 25", minStock: "30", ID: "12" };
    function add() {
        stock.push(uno)
        stock.push(dos)
        stock.push(tres)
        stock.push(cuatro)
        stock.push(cinco)
        stock.push(seis)
        stock.push(siete)
        stock.push(ocho)
        stock.push(nueve)
        stock.push(diez)
    }
    add();


    let arreglo = [];
    let submit = document.getElementById("submit");
    let inputs = document.getElementsByClassName("form__container__input");
    let tabla = document.getElementById("tabla");
    let form = document.getElementById("form");
    let editar = document.getElementById("editar");
    let eliminar = document.getElementById("eliminar");
    let form_container = document.getElementById("form__container");
    let alert = document.getElementById("alert");
    let fila = document.getElementsByClassName("filas");

    function addLS(valores) { //Agregar datos al localStorage
        arreglo.push(valores);
        localStorage.setItem("Datos", JSON.stringify(arreglo));
    }
    
    function mostrarProductos() { //Muestra los productos.
        let array = JSON.parse(localStorage.getItem("Datos"));
        for (let i = 0; i < array.length; i++) {
            tabla.innerHTML += `<tr class="filas">    
            <td>${array[i].name}</td>
            <td>${array[i].description}</td>
            <td>${array[i].stock}</td>
            <td class="text-right"> $${array[i].unitCost}</td>
            <td class="identificadores">${array[i].ID}</td>
            <td class="text-center"> <button type="button" class="btn btn-success">Editar</button>
                <button type="button" class="btn btn-danger">Eliminar</button>
            </td>
        </tr>`
        }
    }
    
    form.addEventListener("submit", function(e) { //Evento para el formulario
        e.preventDefault();
        if (inputs[0].value == "" || inputs[1] == "" || inputs[2].value == "" || inputs[3].value == "" || inputs[4].value == "" || inputs[5].value == "") 
        { //Si faltan datos que muestre una alerta
            alert.innerHTML += `<div class="alert alert-danger" style="position:relative; top:80px; left:20px; width:760px;" role="alert">
            <strong>Por favor llene todos los campos para continuar.</strong> `
            form_container.style.height = "690px"
            setTimeout(() => {
                form_container.style.height = "630px"
                alert.innerHTML = "";
            }, 3000);
        }
        else 
        {//crea un objeto
            let valores = {
                name: inputs[0].value,
                description: inputs[1].value,
                stock: inputs[2].value,
                unitCost: inputs[4].value,
                minStock: inputs[3].value,
                ID: inputs[5].value
            }
            addLS(valores); //Agrega el objeto al localStorage y muestra una alerta de success
            alert.innerHTML += `<div class="alert alert-success" style="position:relative; top:80px; left:20px; width:760px;" role="alert">
        <strong>Su producto ha sido agregado satisfactoriamente. </strong>
      </div>`
            form_container.style.height = "690px"
            setTimeout(() => {
                form_container.style.height = "630px"
                alert.innerHTML = "";
            }, 3000);
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
            }
        }
    });
    mostrarProductos(); //Pintar todos los productos que hay en nuestra tabla
});