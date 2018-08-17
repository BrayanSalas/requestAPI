$(function() {
    //Escuchar el click al formulario
    let $form = $('#form')
    let $name = $('#js-name')
    let $apellido = $('#js-lastname')
    let $edad = $('#js-age')
    let $email = $('#js-email')
    let $genero = $('#js-genero')
    
    const API_URL = getAPI_URL()

    $form.on('submit', function (ev) {
        ev.preventDefault()

        //Obtener los datos del formulario
        let name = $name.val()
        let apellido = $apellido.val()
        let edad = $edad.val()
        let email = $email.val()
        let genero = $genero.val()
        
        //Pasar los datos del formulario a formato JSON
        let persona = {
            name: name,  //O tambien puedo hacer: persona.name = name
            apellido : apellido,
            edad : edad,
            email : email,
            genero, genero
        }

        //sweetAlert de carga para el usuario
        swal({
            title: 'Cargando',
            text: 'Espere porfavor',
            type: 'info',
            showConfirmButton: false
        })
        
        //Enviar los datos al servidor
        createPersona(API_URL.EMPRESA_API_URL, persona)
        .then(function (response) {
            swal({
                title: 'Excelente',
                text: 'Se guardo el usuario correctamente',
                type: 'success'
            })
            console.log(response.message)
        })
        .catch(handlerError)

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