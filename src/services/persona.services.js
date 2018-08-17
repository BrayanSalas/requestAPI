/**
 * @author Brayan Salas
 * @description Consume un servicio post de persona
 * posteriormente manda un mensaje usando swal2 (Sweet Alert 2)
 * @param { Object } persona
 * @param { String } API_URL
 * @returns {}
 */

function createPersona (API_URL, persona) {
   
    //Enviar los datos al servidor
    return new Promise ((resolve,reject) => {
        $.post(API_URL + 'personas', persona, function(data) {
            resolve(data)
        })
        .fail(function() {
              reject('Un error ha ocurrido')
          })
    })  
}