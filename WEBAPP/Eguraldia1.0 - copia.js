

tiempo = [
    {dia:"Miércoles", cielo:"lluvia", temperatura:12},
    {dia:"Jueves", cielo:"Nublado", temperatura:20},
    {dia:"Viernes", cielo:"lluvia", temperatura:23},
    {dia:"Sábado", cielo:"sol", temperatura:10},
    {dia:"Domingo", cielo:"sol", temperatura:5},
    {dia:"lunes", cielo:"Nublado", temperatura:0},
]


var i;
for (i = 0; i < tiempo.length; i++) { 
    if (tiempo[i].cielo == "lluvia"){
    console.log(tiempo[i].dia)}
}

