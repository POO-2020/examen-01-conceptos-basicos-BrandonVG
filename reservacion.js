export default class Reservacion{
    /**
     * 
     * @param {number} numeroHabitacion Numero de habitacion
     * @param {Date} fechaLlegada Fecha de llegada
     * @param {number} noches Numero de noches
     */
    constructor(numeroHabitacion,fechaLlegada,noches){
        this.numeroHabitacion= numeroHabitacion;
        this.fechaLlegada= fechaLlegada;
        this.noches=noches;
        this.huespedes=[];
    }
    getFechaFormatoCorto(){
        return `${this.fechaLlegada.getDate()}/${this.fechaLlegada.getMonth()}/${this.fechaLlegada.getFullYear()}`;
    }
    addHuesped(huesped){
        this.huespedes.push(huesped);
    }
    getNumHuesped(){
        return (this.huespedes.length);
    }
    print(){
        var listaHuesped= "";
        this.huespedes.forEach(huesped=>{
            return listaHuesped +="\n"+huesped.getDescripcion();
        })
        console.log(`Habitacion: ${this.numeroHabitacion}\n${this.noches} noches reservadas\nFecha de llegada: ${this.getFechaFormatoCorto()}${listaHuesped}`);
    }
}
