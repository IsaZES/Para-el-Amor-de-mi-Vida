const mensajes = [
    "Segura?",
    "Segura Segura?",
    "Segura de que estás segura?",
    "Porfaaa amorr",
    "Pensalaaa bienn",
    "Si seguís diciendo que no, voy a estar triste :(",
    "Muuuuuuuy triste",
    "Muy muy muy muy triste",
    "Bueno ya está, dejo de preguntar...",
    "No, en serio, decime que si porfaa ❤️"
];

let msjindices = 0;

function tocarno() {
    const botonno = document.querySelector('.no-boton');
    const botonsi = document.querySelector('.si-boton');
    botonno.textContent = mensajes[msjindices];
    msjindices = (msjindices + 1) % mensajes.length;
    const tamaño = parseFloat(window.getComputedStyle(botonsi).fontSize);
    botonsi.style.fontSize = `${tamaño * 1.4}px`;
}

function tocarsi() {
    window.location.href = "pagina_si.html"
}

