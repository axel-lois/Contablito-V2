


document.addEventListener("DOMContentLoaded", function (e) {

    let inputs = document.getElementsByClassName("form__container__input");
    let form = document.getElementById("form");
    let form_container = document.getElementById("form__container");
    let alert = document.getElementById("alert");
    if (localStorage.getItem("modifiedObject")) {
        document.getElementById("titulo").innerHTML = "Modificar producto";
        document.getElementById("submit").value = "Modificar producto";
        let arreglo = JSON.parse(localStorage.getItem("Datos"));
        let objeto = JSON.parse(localStorage.getItem("modifiedObject"));
        inputs[0].value = objeto.name;
        inputs[1].value = objeto.description;
        inputs[2].value = objeto.stock;
        inputs[3].value = objeto.minStock;
        inputs[4].value = objeto.unitCost;
        document.getElementById("modifyID").innerText = "ID (No intercambiable)"
        inputs[5].value = objeto.ID;
        inputs[5].style.fontWeight = "bold";
        inputs[5].setAttribute("disabled", "");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "" || inputs[3].value == "" || inputs[4].value == "" || inputs[5].value == "") { //Si faltan datos que muestre una alerta
                alert.innerHTML = `<div class="alert alert-danger" style=" margin-top: 15px; text-align:center" role="alert">
                <strong>Por favor llene todos los campos para continuar.</strong> `
                form_container.style.height = "643px";
                setTimeout(() => {
                    form_container.style.height = "600px"
                    alert.innerHTML = "";
                }, 3000);
            }
            else {
                let save = {
                    name: inputs[0].value,
                    description: inputs[1].value,
                    stock: inputs[2].value,
                    minStock: inputs[3].value,
                    unitCost: inputs[4].value,
                    ID: inputs[5].value
                }
                arreglo[objeto.index] = save;
                localStorage.setItem("Datos", JSON.stringify(arreglo));
                alert.innerHTML = `<div class="alert alert-success" style="margin-top: 15px; text-align:center" role="alert">
            <strong>Su producto ha sido editado satisfactoriamente. </strong>
          </div>`
                form_container.style.height = "643px"
                setTimeout(() => {
                    form_container.style.height = "600px"
                    alert.innerHTML = "";
                    location.href = "index.html";
                }, 3000);
            }
        })
        localStorage.removeItem("modifiedObject");
    }

    else {
        form.addEventListener("submit", function (e) { //Evento para el formulario

            e.preventDefault();
            
            if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "" || inputs[3].value == "" || inputs[4].value == "" || inputs[5].value == "") { //Si faltan datos que muestre una alerta
                alert.innerHTML = `<div class="alert alert-danger" style=" margin-top: 15px; text-align:center" role="alert">
                <strong>Por favor llene todos los campos para continuar.</strong> `
                form_container.style.height = "643px";
                setTimeout(() => {
                    form_container.style.height = "600px"
                    alert.innerHTML = "";
                }, 3000);
            }
            else if (compararID(inputs[5].value)) {
                alert.innerHTML = `<div class="alert alert-danger" style= "margin-top: 15px; text-align:center" role="alert">
                <strong>Este ID ya ha sido utilizado. Por favor ingrese otro.</strong> `
                form_container.style.height = "643px";
                setTimeout(() => {
                    form_container.style.height = "600px"
                    alert.innerHTML = "";
                }, 3000);
            }
            else {//crea un objeto
                let nombre = inputs[0].value;
                let descr = inputs[1].value;
                let valores = {
                    name: nombre.toLowerCase(),
                    description: descr.toLowerCase(),
                    stock: inputs[2].value,
                    minStock: inputs[3].value,
                    unitCost: inputs[4].value,
                    ID: inputs[5].value
                }
                addLS(valores); //Agrega el objeto al localStorage y muestra una alerta de success
                alert.innerHTML = `<div class="alert alert-success" style="margin-top: 15px; text-align:center" role="alert">
            <strong>Su producto ha sido agregado satisfactoriamente. </strong>
          </div>`
                form_container.style.height = "643px"
                setTimeout(() => {
                    form_container.style.height = "600px"
                    alert.innerHTML = "";
                }, 3000);
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = "";
                }
            }
        });
    }

    function compararID(ID) {
        if (!localStorage.getItem("Datos")) {
            return false;
        }
        else {
            let arreglo = JSON.parse(localStorage.getItem("Datos"));
            for (let i = 0; i < arreglo.length; i++) {
                if (ID == arreglo[i].ID) {
                    return true;
                    break;
                }
            }
        }
    }

    function addLS(valores) { //Agregar datos al localStorage
        let arreglo = [];
        if (localStorage.getItem("Datos")) {
            arreglo = JSON.parse(localStorage.getItem("Datos"));
        }
        arreglo.push(valores);
        localStorage.setItem("Datos", JSON.stringify(arreglo));
    }
});


