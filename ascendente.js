
function calcularAscendente() {
    const signo = document.getElementById('signo').value;
    const hora = document.getElementById('hora').value;
    let ascendente = '';

    if (hora >= "00:00" && hora < "02:00") ascendente = "Ascendente Aries";
    else if (hora >= "02:00" && hora < "04:00") ascendente = "Ascendente Tauro";
    else if (hora >= "04:00" && hora < "06:00") ascendente = "Ascendente Geminis";
    else if (hora >= "07:00" && hora < "09:00") ascendente = "Ascendente Cancer";
    else if (hora >= "09:00" && hora < "11:00") ascendente = "Ascendente Leo";
    else if (hora >= "11:00" && hora < "13:00") ascendente = "Ascendente Virgo";
    else if (hora >= "13:00" && hora < "15:00") ascendente = "Ascendente Libra";
    else if (hora >= "15:00" && hora < "17:00") ascendente = "Ascendente Escorpio";
    else if (hora >= "17:00" && hora < "19:00") ascendente = "Ascendente Sagitario";
    else if (hora >= "19:00" && hora < "21:00") ascendente = "Ascendente Capricornio";
    else if (hora >= "21:00" && hora < "23:00") ascendente = "Ascendente Acuario";
    else if (hora >= "23:00" && hora < "00:00") ascendente = "Ascendente Piscis";  
    document.getElementById('resultado').innerText = 
        `Tu ascendente es aproximadamente: ${ascendente}`;
}
