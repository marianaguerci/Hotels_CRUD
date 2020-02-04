var hotel = new Hotel;
var hoteles = [];

//El mètode crearHotel() haurà de demanar a l’usuari que introdueixi per pantalla les dades de nom,  nombre d’habitacions, nombre de plantes i superfície total de l’hotel. Un cop hagi demanat totes aquestes dades, s’ha d’instanciar l’objecte de la classe i afegir-lo a un array d’hotels.

function addHotel() {

    createHotel.classList.remove("d-none");
    createHotel.classList.add("d-block");
    var msg = document.getElementById("message");
    msg.innerHTML = "";
    resetInputs();
}

function crearHotel() { //se activa con el botón "Crear"
    var hotelName = document.getElementById("hotelName").value;
    var hotelRooms = document.getElementById("rooms").value;
    var floors = document.getElementById("floors").value;
    var hotelArea = document.getElementById("area").value;

    if ((hotelName == 0) || (hotelRooms == 0) || (floors == 0) || (hotelArea == 0)) {
        alert("completar todos los campos");

    } else {
        hotel = new Hotel(hotelName, hotelRooms, floors, hotelArea);
        hoteles.push(hotel);;
        console.log(hoteles);
        hotelCreated(hotel);
    }
}

function hotelCreated(h) {
    var createHotel = document.getElementById("createHotel");
    createHotel.classList.add("d-none");
    createHotel.classList.remove("d-block");

    let msg = document.getElementById("message");
    msg.innerHTML = "Un nuevo hotel ha sido creado. <br><b>Nombre: " + h.nombre + "</b><br>Habitaciones: " + h.habitaciones + "<br>Plantas: " + h.plantas + "<br>Superficie: " + h.superficie + "m2";

}

function resetInputs() {
    document.getElementById("hotelName").value = "";
    document.getElementById("rooms").value = "";
    document.getElementById("floors").value = "";
    document.getElementById("area").value = "";

}

//El mètode donarDeBaixaHotel() ha de demanar quin hotel es vol donar de baixa. L’usuari introduirà el nom de l’hotel i si l’hotel està dintre de l’array, l’eliminarem i mostrarem un missatge per pantalla informant l’usuari que hem eliminat l’hotel. Si no hem trobat l’hotel dintre de l’array, avisarem l’usuari dient que l’hotel no estava dintre de la nostra aplicació.

function darDeBajaHotel() {
    let msg = document.getElementById("message");
    let whichHotel = prompt("Ingrese el nombre del hotel que desea eliminar:").toLowerCase();

    for (var i = 0; i < hoteles.length; i++) {
        let currentHotel = hoteles[i];
        if (whichHotel == hoteles[i].nombre.toLowerCase()) {
            hoteles.splice(i, 1);
            msg.innerHTML = "El hotel " + currentHotel.nombre + " ha sido eliminado.";
        } else {
            msg.innerHTML = "Este hotel no ha sido encontrado.";
        }
    } //el for debería retornar True o false y el if ponerlo afuera para que no haga mensaje cada vez q no encuentra un hotel
    console.log(hoteles);
}

//El mètode veureHotel() ha de demanar a l’usuari el nom de l’hotel que vol que mostrem per pantalla, si l’hotel està a la nostra aplicació, li mostrarem l’hotel, si no hi és, informarem l’usuari dient que l’hotel que ens ha demanat no està dintre de la nostra aplicació. Quan mostrem l’hotel, a més, de mostrar el nombre d’habitacions, nombre de plantes i superfície total de l’hotel també es cridarà al mètode calcularManteniment().

function verHotel() {
    let msg = document.getElementById("message");
    let whichHotel = prompt("Ingrese el nombre del hotel que desea ver:").toLowerCase();

    for (var i = 0; i < hoteles.length; i++) {
        if (whichHotel == hoteles[i].nombre.toLowerCase()) {

            msg.innerHTML = "<b>Hotel " + hoteles[i].nombre + "</b><br>Habitaciones: " + hoteles[i].habitaciones + "<br>Plantas: " + hoteles[i].plantas + "<br>Superficie: " + hoteles[i].superficie + "m2.<br>" + hoteles[i].calcularMantenimiento();

        } else {
            msg.innerHTML = "El hotel " + whichHotel + " no existe dentro de la aplicación.";
        }
    }
}

//El mètode modificarHotel() ha de demanar a l’usuari quin hotel vol modificar. L’usuari introduirà el nom de l’hotel. Si el tenim a l’aplicació, li demanarem si vol modificar el nombre d’habitacions, el nombre de plantes o la superfície total de l’hotel. Farem la modificació pertinent i avisarem a l’usuari que la modificació s’ha realitzat.

function modificarHotel() {
    let msg = document.getElementById("message");
    let whichHotel = prompt("Ingrese el nombre del hotel que desea modificar:").toLowerCase();

    for (var i = 0; i < hoteles.length; i++) {

        if (whichHotel == hoteles[i].nombre.toLowerCase()) {
            let option = prompt("Seleccione qué desea modificar: (1) Número de habitaciones. (2) Número de plantas. (3) Superficie total.")
            let modification;

            switch (option) {
                case "1":
                    modification = prompt("Ingrese número de habitaciones:");
                    hoteles[i].habitaciones = modification;
                    break;
                case "2":
                    modification = prompt("Ingrese número de plantas:");
                    hoteles[i].plantas = modification;
                    break;
                case "3":
                    modification = prompt("Ingrese superficie:");
                    hoteles[i].superficie = modification;
                    break;
                default:
                    alert("Opción incorrecta.")
            }
            console.log(hotel[i]);

            msg.innerHTML = "<b>Hotel " + hoteles[i].nombre + "</b> ha sido modificado.<br>Habitaciones: " + hoteles[i].habitaciones + "<br>Plantas: " + hoteles[i].plantas + "<br>Superficie: " + hoteles[i].superficie + "m2."

        } else {
            msg.innerHTML = "El hotel " + whichHotel + " no existe dentro de la aplicación.";
        }
    }
}