import Huesped from "./huesped.js";
import Reservacion from "./reservacion.js";
import Hotel from "./hotel.js";

var hotel = new Hotel("Plaza Sesamo");
var persona1= new Huesped("Elmo Torizta Diaz","Masculino");
var persona2 = new Huesped("Elza Pato","Femenino");
var persona3=new Huesped("Elmer Homero","Masculino");
var persona4=new Huesped("Elza Sonador","Femenino");
var reservacion1= new Reservacion(27,new Date(2020,1,25),3);
var reservacion2 = new Reservacion(28,new Date(2020,1,23),8);
reservacion1.addHuesped(persona1);
reservacion1.addHuesped(persona2);
reservacion2.addHuesped(persona3);
reservacion2.addHuesped(persona4);
hotel.reservaciones.push(reservacion1);
hotel.reservaciones.push(reservacion2);

hotel.print();