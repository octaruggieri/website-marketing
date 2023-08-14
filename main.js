

var btnAbrirPopup = document.getElementById("btn-abrir-popup"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    btnCerrarPopup = document.getElementById("btn-cerrar-popup");

btnAbrirPopup.addEventListener("click", function(){
    overlay.classList.add("active"); 
    popup.classList.add("active");
});


btnCerrarPopup.addEventListener("click", function(){
    overlay.classList.remove("active"); 
    popup.classList.remove("active");
});






var btnAbrirPopup2 = document.getElementById("btn-abrir-popup2"),
    overlay2 = document.getElementById("overlay2"),
    popup2 = document.getElementById("popup2"),
    btnCerrarPopup2 = document.getElementById("btn-cerrar-popup2");

btnAbrirPopup2.addEventListener("click", function(){
    overlay2.classList.add("active"); 
    popup2.classList.add("active");
});


btnCerrarPopup2.addEventListener("click", function(){
    overlay2.classList.remove("active"); 
    popup2.classList.remove("active");
});




    // const countdownDate = new Date("2023-08-25T00:00:00").getTime();

    // const countdown = setInterval(() => {
    //     const now = new Date().getTime();
    //     const distance = countdownDate - now;

    //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    //     document.getElementById("days").innerText = `${days} Dias `;
    //     document.getElementById("hours").innerText = `${hours} Horas `;
    //     document.getElementById("minutes").innerText = `${minutes} Minutos `;

    //     if (distance < 0) {
    //         clearInterval(countdown);
    //         document.getElementById("countdown").innerText = "¡Ya es el 25 de agosto!";
    //     }
    // }, 1000);

// let horas = 7;
// let minutos = 0;
// let segundos = 0;
// cargarSegundo();

// // DEFINIMOS Y EJECUTAMOS LOS SEGUNDOS
// function cargarSegundo(){
//     let txtSegundos;

//     if(segundos < 0){
//         segundos = 59;
//     }

//     // Mostrar Segundos en Pantalla
//     if(segundos < 10){
//         txtSegundos =  '0${segundos}' ;
//     }else{
//         txtSegundos = segundos;
//     }
//     document.getElementById('segundos').innerHTML = txtSegundos;
//     segundos --;
// }

// function cargarMinutos(segundos){
//     let txtMinutos;

//     if(segundos == -1 && minutos !== 0){
//         setTimeout(() => {
//            minutos--;
//         },500)
//     }else if(segundos == -1 && minutos !== 0){
//         setTimeout(() => {
//             minutos = 59;
//          },500)
//     }
// }

// setInterval(cargarSegundo, 1000);


    const countdownDate = new Date("2023-09-01T00:00:00").getTime();

    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("dias").innerText = days < 10 ? "0" + days : days;
        document.getElementById("horas").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutos").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("segundos").innerText = seconds < 10 ? "0" + seconds : seconds;

        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("cont-temporizador").innerHTML = "<p>¡Ya es el 25 de agosto!</p>";
        }
    }, 1000);

