const stock = []
const uno = {name:"tornillos", description:"uno", stock:"350", cost:"5", minStock:"200"};
const dos = {name:"clavos", description:"dos", stock:"600", cost:"4", minStock:"60"};
const tres = {name:"ladrillos", description:"tres", stock:"160", cost:"30", minStock:"100"};
const cuatro = {name:"tablas", description:"cuatro", stock:"26", cost:"20", minStock:"30"};
const cinco = {name:"tornillos2", description:"cinco", stock:"250", cost:"5", minStock:"140"};
const seis = {name:"clavos2", description:"seis", stock:"500", cost:"4", minStock:"75"};
const siete = {name:"ladrillos2", description:"siete", stock:"80", cost:"30", minStock:"100"};
const ocho = {name:"tablas2", description:"nueve", stock:"1700", cost:"25", minStock:"30"};
const nueve = {name:"tablas3", description:"ocho", stock:"14", cost:"25", minStock:"30"};
const diez = {name:"tablas4", description:"diez", stock:"85", cost:"25", minStock:"30"};

function add(){
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

add()