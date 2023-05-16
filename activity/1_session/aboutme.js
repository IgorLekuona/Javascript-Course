

function ejercicio1 () {
    //Definir variables
    const nombre = "Igor Lekuona";
    const profesion = "desarrollo Front End";
    const puesto = "Desarrollador Full Stack";

    //Definir frase
    const frase = `Hola, me llamo ${nombre} y me dedico al ${profesion}. Estoy cursando este Máster porque me gustaría trabajar de ${puesto}`;
    
    //Mostrar frase
    alert(frase);
}

function ejercicio4 () {
    let res = [];
    let ind = 7;
    while (ind <= 100) {
        res.push(ind);
        ind += 7;
    }
    console.log(res.toString());
}

const formatter = {
    prefix: "Hello",
    append: function(arg) {
        let concat = this.prefix + " " + arg;
        console.log(concat);
    },
    toLowerString: function(arg) {
        console.log(String(arg).toLowerCase());
    }
}
export { ejercicio1, ejercicio4, formatter };