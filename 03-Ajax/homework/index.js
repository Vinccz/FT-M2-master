// Primero Traemos la Lista de amigos //
// Primero nos pide que pasemos un evento Click del index.html para que nos haga la peticion a la ruta http://localhost:5000/amigos
// luego traemos la lista quie al hacer click se vera la lista dicha//
//data va a estar trayendo el arreglo de amigos//

//Asi hacemos funcionar nuestro boton ver lista de amigos y la reseteamos para que no se sumen en la pantalla
$("#boton").click(()=>{ 
    let listaAmigos = $("#lista");
        listaAmigos.empty();
    $.get("http://localhost:5000/amigos", data => {
        for(let i=0; i< data.length; i++) {
            listaAmigos.append(`<li>${data[i].name}</li>`)
        }
    })
}) 

// Busca de amigos por ID //
$('#search').click(() => {
    var id = $('#input').val();     // Nos Fijamos la etiqueta del HTML para el id.
    $.get(`http://localhost:5000/amigos/${id}`, data =>{  
        $('#amigo').text(data.name);  // Traes el objeto
    })
})

// Hacer el DELETE de un ID //

$('#delete').click(() => {
    var id = $('#input').val(); //
    $.ajax ({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success: () => {
            $('#success').text("Ämigo eliminado por PETE!");
        }
   
    })
})