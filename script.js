const fechaInicio = new Date("2025-09-28 02:21:00").getTime();

setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("contador").innerHTML =
        `Mi amor por ti comenzó hace: ${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}, 1000);
