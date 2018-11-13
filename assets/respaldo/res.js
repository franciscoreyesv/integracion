$(document).ready(function(){
  var client = ZAFClient.init();

  client.on('app.registered', function() {
  client.invoke('resize', { width: '300px', height: '400px' });
  ViewData(client);


client.invoke('instances.create', {
  location: 'modal',
  url: 'https://wsintegracion.holascharff.com/Servicios/b2bScharffZen/Consulta/incidencias'
}).then(function(modalContext) {
  // The modal is on screen now
  var modalClient = client.instance(modalContext['instances.create'][0].instanceGuid);
  modalClient.on('modal.close', function() {
  // The modal has been closed
  });
});

function ViewData(modalContext){
 $("#ConsultaIncidencias" ).unbind( "click" ).click(function (){   
      $("#inc").html('<table class="table"><tr> <td>Numero</td> <td id ="t0"></td> </tr> <tr> <td>RegOrden</td><td id = "t1"></td></tr>  <tr> <td>Fecha</td> <td id = "t2"></td> </tr>  <tr><td>Hora</td><td id = "t3"></td></tr>  <tr><td>CodigoOfi</td>    <td id = "t4"></td>  </tr>  <tr> <td>CodigoDes</td>    <td id = "t5"></td>  </tr>  <tr>    <td>Descripcion</td>    <td id = "t6"></td> </tr> <tr> <td>EmpGenAbr</td> <td id = "t7"></td>  </tr> <tr> <td>TipoOfi</td> <td id="t8"></td> </tr><tr> <td>TipoDes</td> <td id = "t9"></td> </tr> <tr> <td>Ambito</td> <td id ="t10"></td>  </tr><tr> <td>Motivo</td> <td id="t11"></td> </tr> </table>');
       var fetchItem = {
        url: 'https://wsintegracion.holascharff.com/Servicios/b2bScharffZen/Consulta/incidencias',
        cors: false,
        type: 'POST',
        contentType: 'application/json',
        data :  JSON.stringify({
                      					empr_cod: $('#empr_cod').val(),
              							    suc_cod: $('#suc_cod').val(),
              							    uni_neg_cod:$('#uni_neg_cod').val(),
              							    pro_cod:$('#pro_cod').val(),
              							    ord_ano: $('#ord_ano').val(),
              							    ord_nro: $('#ord_nro').val(),
              							    ord_det_nro: $('#ord_det_nro').val()
                              })
      };

      client.request(fetchItem).then(function(result) {
        console.dir(result);
        var array = [];
        for (var a in result){
          for (var i in result[a]){
            array.push(result[a][i]);
          }
          for(x = 0; x < 9; x++){
            var textnode = document.createTextNode(array[x]);
            document.getElementById("t"+x).appendChild(textnode);
          } 
        } 
       });
    
  }
}
});