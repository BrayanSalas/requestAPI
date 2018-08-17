/**
 * @author Brayan Salas
 * @description Consume un servicio post de persona
 * posteriormente manda un mensaje usando swal2 (Sweet Alert 2)
 * @param { Object } persona
 * @param { String } API_URL
 * @returns {}
 */

function createDepartamento (API_URL, departamento) {
   
    //Enviar los datos al servidor
    return new Promise ((resolve,reject) => {
        $.post(API_URL + 'departamentos', departamento, function(data) {
            resolve(data)
        })
        .fail(function() {
              reject('Un error ha ocurrido')
          })
    })  
}