
document.addEventListener("DOMContentLoaded", function (e) {

    let inputs = document.getElementsByClassName("form__container__input");
    let form = document.getElementById("form");
    let form_container = document.getElementById("form__container");
    let alert = document.getElementById("alert");


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

    form.addEventListener("submit", function (e) { //Evento para el formulario

        e.preventDefault();
        if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "" || inputs[3].value == "" || inputs[4].value == "" || inputs[5].value == "") { //Si faltan datos que muestre una alerta
            alert.innerHTML += `<div class="alert alert-danger" style="position:relative; top:80px; left:20px; width:760px;" role="alert">
            <strong>Por favor llene todos los campos para continuar.</strong> `
            form_container.style.height = "690px"
            setTimeout(() => {
                form_container.style.height = "630px"
                alert.innerHTML = "";
            }, 3000);
        }
        else if (compararID(inputs[5].value)) {
            alert.innerHTML += `<div class="alert alert-danger" style="position:relative; top:80px; left:20px; width:760px;" role="alert">
            <strong>Este ID ya ha sido utilizado. Por favor ingrese otro.</strong> `
            form_container.style.height = "690px"
            setTimeout(() => {
                form_container.style.height = "630px"
                alert.innerHTML = "";
            }, 3000);
        }
        else {//crea un objeto
            let valores = {
                name: inputs[0].value,
                description: inputs[1].value,
                stock: inputs[2].value,
                minStock: inputs[3].value,
                unitCost: inputs[4].value,
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
});

