class Rectangulo
{
    constructor(alto, ancho)
    {
        this.alto=alto;
        this.ancho=ancho;
    }
    calculararea()
    {
        return this.ancho*this.alto;
    }
}


function saludar ()
{
    alert("Buenos Dias");
}

function area()
{
    var ancho =document.getElementById("ancho").value;
    var ancho =document.getElementById("alto").value;
    let rectangulo1 = new Rectangulo(alto,ancho); 
    alert(rectangulo1.calculararea());
}