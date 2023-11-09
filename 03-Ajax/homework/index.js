// Primero Traemos la Lista de amigos //
// Primero nos pide que pasemos un evento Click del index.html para que nos haga la peticion a la ruta http://localhost:5000/amigos
// luego traemos la lista quie al hacer click se vera la lista dicha//
//data va a estar trayendo el arreglo de amigos//

//Asi hacemos funcionar nuestro boton ver lista de amigos y la reseteamos para que no se sumen en la pantalla
$("#boton").click(()=>{              //Selecciona el elemento HTML con el id "boton" y asigna una función de callback para el evento de clic.
    let listaAmigos = $("#lista");  //Selecciona el elemento HTML con el id "lista" y lo guarda en la variable listaAmigos.
        listaAmigos.empty();        // Vacía el contenido del elemento HTML representado por listaAmigos.
    $.get("http://localhost:5000/amigos", data => { //Realiza una solicitud GET a la URL "http://localhost:5000/amigos" y ejecuta una función de callback con los datos obtenidos.
        for(let i=0; i< data.length; i++) {         //Inicia un bucle que recorre los elementos en el array data.
            listaAmigos.append(`<li>${data[i].name}</li>`)  //Agrega un elemento de lista (<li>) al elemento representado por listaAmigos con el nombre de cada amigo en el array data.
        }
    })
}) 

// Busca de amigos por ID //
$('#search').click(() => {      // Selecciona el elemento HTML con el id "search" y asigna una función de callback para el evento de clic.
    var id = $('#input').val(); // Obtiene el valor del elemento HTML con el id "input" (probablemente un campo de entrada) y lo guarda en la variable id.
    $.get(`http://localhost:5000/amigos/${id}`, data =>{  //Realiza una solicitud GET a la URL construida con el id ingresado y ejecuta una función de callback con los datos obtenidos.
        $('#amigo').text(data.name);  // Establece el texto del elemento HTML con el id "amigo" con el nombre del amigo obtenido de la solicitud GET.
    })
})

// Hacer el DELETE de un ID //

$('#delete').click(() => {  //Selecciona el elemento HTML con el id "delete" y asigna una función de callback para 
    var id = $('#input').val(); // Obtiene nuevamente el valor del elemento con el id "input" y lo guarda en la variable id.
    $.ajax ({       //Inicia una solicitud AJAX más flexible que $.get o $.post.
        url: `http://localhost:5000/amigos/${id}`,  //Especifica la URL a la que se realizará la solicitud, con el id proporcionado.
        type: 'DELETE',     //Indica que la solicitud será de tipo DELETE.
        success: () => {       // Define una función de callback que se ejecutará si la solicitud es exitosa.
            $('#success').text("Ämigo eliminado por PETE!");
        }       // Establece el texto del elemento HTML con el id "success" indicando que el amigo ha sido eliminado.
   
    })
})