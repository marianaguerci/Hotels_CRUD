
class Hotel { 
    constructor(nombre, habitaciones, plantas, superficie){
        this._nombre       = nombre;
        this._habitaciones = habitaciones;
        this._plantas      = plantas;
        this.superficie    = superficie;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){       
        this._nombre = nombre;
    }

    get habitaciones(){
        return this._habitaciones;
    }
    set habitaciones(habitaciones){
        this._habitaciones = habitaciones;
    } 
   
    get plantas(){
        return this._plantas;
    }
    set plantas(plantas){
        this._plantas = plantas;
    }
   
    get superficie(){
        return this._superficie;
    }
    set superficie(superficie){
        this._superficie = superficie;
    }

    //calcularManteniment(). Aquest mètode ha de tenir en compte que cada persona del servei pot atendre 20 habitacions i haurà de mostrar quantes persones són necessàries per atendre el servei d’habitacions de l’hotel i quin és el cost total destinat al servei sabent que aquestes persones cobren 1.500€ al mes
    
    calcularMantenimiento(){
        var personal = this.habitaciones / 20;
        var costo = personal * 1500;
        var mantenimiento = "Número de empleados necesarios: " + personal + "<br>El costo mensual de mantenimiento es de " + costo + "€."
        return mantenimiento;
    }

}
