import Huesped from "./huesped.js";
import Reservacion from "./reservacion.js";
class Main{

}
var persona1= new Huesped("Elmo Torizta Diaz","Masculino");
var persona2 = new Huesped("Elza Pato","Femenino");
var reservacion1= new Reservacion(27,new Date(2020,1,25),3);
reservacion1.addHuesped(persona1);
reservacion1.addHuesped(persona2);
console.log(reservacion1.getNumHuesped());
reservacion1.print();
console.log(reservacion1.getFechaFormatoCorto());