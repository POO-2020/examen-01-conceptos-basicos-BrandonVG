export default class Reservacion{
    /**
     * 
     * @param {number} numeroHabitacion 
     * @param {Date} fechaLlegada 
     * @param {number} noches 
     */
    constructor(numeroHabitacion,fechaLlegada,noches){
        this.numeroHabitacion= numeroHabitacion;
        this.fechaLlegada= new Date(año, mes - 1, dia);
        this.noches=noches;
        this.huespedes=[];
    }
    getFechaFormatoCorto(){
        return (`${this.fechaLlegada.dia}/${this.fechaLlegada.mes}/${this.fechaLlegada.año}`);
    }
    addHuesped(huesped){
        this.huespedes.push(huesped);
    }
    getNumHuesped(){
        return (this.huespedes.length);
    }
    print(){
        return `Habitacion: ${this.numeroHabitacion}\n Fecha de llegada: ${this.fechaLlegada.getFechaFormatoCorto()}`
    }
}