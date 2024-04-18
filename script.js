'use strict'

async function print(datos, id) {
    let html = await datos.text();
    //  $('#' + donde).html(html);
    document.getElementById(id).innerHTML = html;
  }


function loadHTML(){

    fetch ('./html/header.html')
    .then(function (response) {
        print(response, "header");
      })
      .catch(function (error) {
        console.error("Error al cargar el header:", error);
      });

      fetch ('./html/footer.html')
      .then(function (response) {
          print(response, "footer");
        })
        .catch(function (error) {
          console.error("Error al cargar el footer", error);
        });
}

loadHTML()