

console.log('HOLA')

$("#boton").click(function(){
    let valorMatricula = $("#matricula").val()
    $.ajax({
        url: "http://localhost:3000/students/"+valorMatricula,
        type: "GET",
        dataType: "json",
        success: function(data){
            $("#datos").text(data.id)
            $("#datos2").text(data.fullname)
        },
        error: function(error){
            console.log(error)
        }
    })
})