$(function() {
    
    //Escuchar el click al formulario
    let $form = $('#form')
    let $nombre = $('#js-dept') //Nombre del departamento
    let $descripcion = $('#js-description') //Descripcion del departamento
    
    //API de la que nos basaremos para el post
    //const API_URL = 'http://192.168.1.131:4401/api/v1/persona'
    const configApp = getAPI_URL()

    //Funcion del formulario para enviar los datos, previniendo la funcionalidad normal
    $form.on('submit', function (ev) {
        ev.preventDefault()

        //Obtener los datos del formulario
        let nombre = $nombre.val()
        let descripcion = $descripcion.val()
            
        //Pasar los datos del formulario a formato JSON
        let departamento = {
            nombre: nombre,
            descripcion: descripcion
        }

        //sweetAlert de carga para el usuario
        swal({
            title: 'Cargando',
            text: 'Espere porfavor',
            type: 'info',
            showConfirmButton: false
        }) 
        
        createDepartamento(configApp.EMPRESA_API_URL, departamento)
            .then(success)
            .catch(handlerError)

        function success (data) {
            if(data.message == 'OK')
            swal({
                title: 'Excelente',
                text: 'Se guardo el usuario correctamente',
                type: 'success'
            })
        }

        function handlerError (err) {
            console.log(`${err}`)
            swal({
                title: 'Un error ha ocurrido',
                text: 'Intente denuevo',
                type: 'error',
                confirmButtonColor: '#FF0000',
                confirmButtonText: 'Okey :('
            })
        }
    })
});