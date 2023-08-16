
// //------------- PRIMER BOTÓN --------------------------
// var btnAbrirPopup = document.getElementById("btn-abrir-popup"),
//     overlay = document.getElementById("overlay"),
//     popup = document.getElementById("popup"),
//     btnCerrarPopup = document.getElementById("btn-cerrar-popup");
//     var form = document.getElementById("suscripcion-form"); 

// btnAbrirPopup.addEventListener("click", function(){
//     overlay.classList.add("active"); 
//     popup.classList.add("active");
// });


// btnCerrarPopup.addEventListener("click", function(){
//     overlay.classList.remove("active"); 
//     popup.classList.remove("active");
// });



//------------- SEGUNDO BOTÓN --------------------------
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








    document.addEventListener("DOMContentLoaded", function() {
        var btnAbrirPopup = document.getElementById("btn-abrir-popup"),
          overlay = document.getElementById("overlay"),
          popup = document.getElementById("popup"),
          btnCerrarPopup = document.getElementById("btn-cerrar-popup"),
          form = document.getElementById("suscripcion-form");
      
        btnAbrirPopup.addEventListener("click", function() {
          overlay.classList.add("active");
          popup.classList.add("active");
        });
      
        btnCerrarPopup.addEventListener("click", function() {
          overlay.classList.remove("active");
          popup.classList.remove("active");
          form.reset(); // Borra los campos del formulario al cerrar
        });
      
        form.addEventListener("submit", function(event) {
          event.preventDefault();
      
          var nombre = form.querySelector('[name="nombre"]').value;
          var correo = form.querySelector('[name="correo"]').value;
      
          // Lógica para enviar los datos a SendinBlue
          var apiKey = "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";
          var listId = 18;
      
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "https://api.sendinblue.com/v3/contacts", true);
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.setRequestHeader("api-key", apiKey);
      
          var data = JSON.stringify({
            email: correo,
            attributes: {
              NOMBRE: nombre
            },
            listIds: [listId]
          });
      
          xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
              if (xhr.status === 201) {
                console.log("Datos enviados correctamente a SendinBlue");
                overlay.classList.remove("active"); // Cierra el popup
                popup.classList.remove("active");
                form.reset(); // Limpia los campos del formulario
              } else {
                console.error("Error al enviar datos a SendinBlue");
              }
            }
          };
      
          xhr.send(data);
        });
      });
      







      document.addEventListener("DOMContentLoaded", function() {
        var btnAbrirPopup2 = document.getElementById("btn-abrir-popup2"),
            overlay2 = document.getElementById("overlay2"),
            popup2 = document.getElementById("popup2"),
            btnCerrarPopup2 = document.getElementById("btn-cerrar-popup2"),
            form2 = document.getElementById("suscripcion-form2");
        
        btnAbrirPopup2.addEventListener("click", function() {
            overlay2.classList.add("active");
            popup2.classList.add("active");
        });
        
        btnCerrarPopup2.addEventListener("click", function() {
            overlay2.classList.remove("active");
            popup2.classList.remove("active");
            form2.reset(); // Borra los campos del formulario al cerrar
        });
        
        form2.addEventListener("submit", function(event) {
            event.preventDefault();
        
            var nombre2 = form2.querySelector('#nombre2').value;
            var correo2 = form2.querySelector('#correo2').value;
        
            // Lógica para enviar los datos a SendinBlue
            var apiKey = "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";
            var listId = 18;
        
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://api.sendinblue.com/v3/contacts", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("api-key", apiKey);
        
            var data = JSON.stringify({
                email: correo2,
                attributes: {
                    NOMBRE: nombre2
                },
                listIds: [listId]
            });
        
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 201) {
                        console.log("Datos enviados correctamente a SendinBlue");
                        overlay2.classList.remove("active"); // Cierra el popup
                        popup2.classList.remove("active");
                        form2.reset(); // Limpia los campos del formulario
                    } else {
                        console.error("Error al enviar datos a SendinBlue");
                    }
                }
            };
        
            xhr.send(data);
        });
    });
        