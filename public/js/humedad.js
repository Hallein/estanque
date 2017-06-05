/*Sockets*/
//var socket = io('//localhost:3000');
var socket = io();
    socket.on('humedad', function (data) {
        actualizaHumedad(data);
        //console.log(data);
    });

function actualizaHumedad(data){
    var elemento = $('#sensor' + data.id);
    var imagen = '';
    var hoja = 'hoja-';
    var grafico = 'humedad humedad-grafico-';

    if(data.humedad >= 75){
        imagen = 'img/hoja1.png';
        hoja += '1';
        grafico += '1';
    }else if(data.humedad >= 50 && data.humedad < 75){
        imagen = 'img/hoja2.png';
        hoja += '2';
        grafico += '2';
    }else if(data.humedad >= 25 && data.humedad < 50){
        imagen = 'img/hoja3.png';
        hoja += '3';
        grafico += '3';
    }else if(data.humedad >= 0 && data.humedad < 25){
        imagen = 'img/hoja4.png';
        hoja += '4';
        grafico += '4';
    }

    elemento.find('.porcentaje-hoja').text(data.humedad + '%').attr('class', 'porcentaje-hoja').addClass(hoja);
    elemento.find('img').attr("src", imagen);
    elemento.find('.humedad-grafico').attr('class', 'humedad-grafico').addClass(grafico);


    /*Insertamos el nuevo valor de humedad que vienen desde el servidor*/
    lista_graficos[data.id].data.datasets[0].data.push(parseInt(data.humedad));

    /*La cantidad de puntos que se muestran en el gráfico antes de que se empiezen a borrar los últimos*/
    if(lista_graficos[data.id].data.datasets[0].data.length >= 50){
        lista_graficos[data.id].data.datasets[0].data.shift();
    }
    
    /*Actualizamos la instancia del gráfico data.id*/
    lista_graficos[data.id].update(500, false);
}




/*para el update: .splice(indice, cantidad, nuevo elemento)*/

// duration is the time for the animation of the redraw in milliseconds
// lazy is a boolean. if true, the animation can be interrupted by other animations
//grafico1.data.datasets[0].data[2] = 50; // Would update the first dataset's value of 'March' to be 50
//grafico1.update(); // Calling update now animates the position of March from 90 to 50.

/*grafico1.data.datasets[0].data = [78, 82, 96, 70, 72, 49, 35, 57, 60, 55, 67, 77];
grafico1.update(1000, true);

setTimeout(function(){
    grafico1.data.datasets[0].data = [12, 21, 12, 21, 12, 21,12, 21, 12, 21, 12, 21];
    grafico1.update(1000, true);

}, 1000);*/


