export const getFolio = () => {
    // Crear un nuevo objeto Date
    var dateNow = new Date();

    // Obtener los componentes de la fecha y hora
    var day = dateNow.getDate().toString().padStart(2, '0');
    var month = (dateNow.getMonth() + 1).toString().padStart(2, '0'); // Los meses comienzan desde 0, por lo que se suma 1
    var year = dateNow.getFullYear().toString();
    var hour = dateNow.getHours().toString().padStart(2, '0');
    var min = dateNow.getMinutes().toString().padStart(2, '0');
    var seg = dateNow.getSeconds().toString().padStart(2, '0');

    // Formatear la fecha y hora como numérico (DDMMYYYYHHMMSS)
    var dateInNumbers = year + month + day + hour + min + seg;

    console.log("Fecha y hora actual numérica:", dateInNumbers);
}