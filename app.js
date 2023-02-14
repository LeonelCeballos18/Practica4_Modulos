let greet = require('./greet');
greet();

//

let persona = {
    nombre: "Carlos",
    apellido: "Ulibarri",
    getName: function(){
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp},${this.domicilio.municipio}`
    },
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        municipio : "Colima"
    }
}

console.log(persona.getName());
//console.log(persona.domicilio);