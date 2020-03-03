export default class Huesped{
    /**
     * 
     * @param {string} nombre Nombre completo del huesped
     * @param {string} genero Genero del huesped
     */
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    getDescripcion(){
        return `Nombre: ${this.nombre} Genero: ${this.genero}`;
    }
}