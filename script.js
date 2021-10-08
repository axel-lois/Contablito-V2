const stock = []
const uno = {name:"tornillos", description:"uno", stock:"350", unitCost:"$ 5", minStock:"200", ID:"27"};
const dos = {name:"clavos", description:"dos", stock:"600", unitCost:"$ 4", minStock:"60", ID:"47"};
const tres = {name:"ladrillos", description:"tres", stock:"160", unitCost:"$ 30", minStock:"100", ID:"82"};
const cuatro = {name:"tablas", description:"cuatro", stock:"26", unitCost:"$ 20", minStock:"30", ID:"24"};
const cinco = {name:"tornillos2", description:"cinco", stock:"250", unitCost:"$ 5", minStock:"140", ID:"36"};
const seis = {name:"clavos2", description:"seis", stock:"500", unitCost:"$ 4", minStock:"75", ID:"41"};
const siete = {name:"ladrillos2", description:"siete", stock:"80", unitCost:"$ 30", minStock:"100", ID:"55"};
const ocho = {name:"tablas2", description:"nueve", stock:"1700", unitCost:"$ 25", minStock:"30", ID:"79"};
const nueve = {name:"tablas3", description:"ocho", stock:"14", unitCost:"$ 25", minStock:"30", ID:"65"};
const diez = {name:"tablas4", description:"diez", stock:"85", unitCost:"$ 25", minStock:"30", ID:"12"};

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