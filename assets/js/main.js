$(document).ready(function(){
  var client = ZAFClient.init();

  client.on('app.registered', function() {
  client.invoke('resize', { width: '800px', height: '1000px' });
  ViewData(client);
});

 var topBarClientPromise = client.get('instances').then(function(instancesData) {
 var instances = instancesData.instances;
 for (var instanceGuid in instances) {
   if (instances[instanceGuid].location === 'top_bar') {
    return client.instance(instanceGuid);
   }
 }
});

function ViewData(client){
   $( "#ConsultaGuiSI" ).unbind( "click" ).click(function (){
    $("#ta").html('<table class="table">  <tr>    <td>Empresa</td>    <td id = "t0"></td>  </tr>  <tr>    <td>MftoAnio</td>    <td id = "t1"></td>  </tr>  <tr>  <td>MftoNro</td><td id = "t2"></td></tr>  <tr>    <td>Producto</td> <td id = "t3"></td> </tr>  <tr><td>Sucursal</td><td id = "t4"></td></tr>  <tr><td>Udn</td>    <td id = "t5"></td>  </tr>  <tr>    <td>gAnio</td>    <td id = "t6"></td>  </tr>  <tr>    <td>gGuia</td>    <td id = "t7"></td>  </tr>  <tr>    <td>gNro</td>    <td id = "t8"></td>  </tr> </table>');
      //$("#like").change(function(){
        //if (this.checked == true){
     //9272-10    (1)
     //602380800
    // if ($("#like")[1].checked==true){
    if ($("#like").is(":checked")==true){
      var checkBox = document.getElementById("ConsultaGuiSI");
      var fetchItem = {
        url: 'https://wsintegracion.holascharff.com/Servicios/b2bScharffZen/Consulta/GuiaSN',
        cors: false,
        type: 'POST',
        contentType: 'application/json',
        data :  JSON.stringify({nroGuia : $('#datos').val()})
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
    } else if ($("#no").is(":checked")==true){
      var checkBox = document.getElementById("ConsultaGuiSI");
      var fetchItem = {
        url: 'https://wsintegracion.holascharff.com/Servicios/b2bScharffZen/Consulta/GuiaSI',
        cors: false,
        type: 'POST',
        contentType: 'application/json',
        data :  JSON.stringify({nroGuia : $('#datos').val()})
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

    } else if ($("#inci").is(":checked")==true){

     //window.open("Incidencias.html", "miVentana", "width=380,height=500, top=85,left=50", true);

     showModal();
     /*function redireccionar(){
        window.locationf="#Incidencias";
          }*/ 
    }
  });

     function showModal(){
        topBarClientPromise.then(function(topBarClient) {
   topBarClient.invoke('resize', {width: 1200,height: 500});
  });
      //console.log("asdassdasdadas");
        client.context().then(create_modal);
      };

      function create_modal(context){

        var pagina      = 'assets/modal.html';
        var parent_guid = context.instanceGuid;
        var options = {
          location: "modal",
          url: pagina+"#parent_guid=" + parent_guid
        }
        client.invoke('instances.create', options)
      };
      
        function ViewData(client){
         $("#ConsultaIncidencias" ).unbind( "click" ).click(function (){   
         $("#inc").html('<table class="table"> <tr> <td>GuiaDetalleNro</td><td id="t0"> </td> </tr> <tr> <td>Numero</td> <td id =t1"></td> </tr> <tr> <td>RegOrden</td><td id = "t2"></td></tr>  <tr>    <td>Fecha</td> <td id = "t3"></td> </tr>  <tr><td>Hora</td><td id = "t4"></td></tr>  <tr><td>CodigoOfi</td>    <td id = "t5"></td>  </tr>  <tr> <td>CodigoDes</td>    <td id = "t6"></td>  </tr>  <tr>    <td>Descripcion</td>    <td id = "t7"></td> </tr> <tr> <td>EmpGenAbr</td> <td id = "t8"></td>  </tr> <tr> <td>TipoOfi</td> <td id="t9"></td> </tr><tr> <td>TipoDes</td> <td id = "t10"></td> </tr> <tr> <td>Ambito</td> <td id ="t11"></td>  </tr><tr> <td>Motivo</td> <td id="t12"></td> </tr> </table>');
               var fetchItem = {
                url: 'https://wsintegracion.holascharff.com/Servicios/b2bScharffZen/Consulta/incidencias',
                cors: false,
                type: 'POST',
                contentType: 'application/json',
                data :  JSON.stringify({
                                        //empr_cod: $('#empr_cod').val(),
                                        //suc_cod: $('#suc_cod').val(),
                                        //uni_neg_cod:$('#uni_neg_cod').val(),
                                        //pro_cod:$('#pro_cod').val(),
                                        //ord_ano: $('#ord_ano').val(),
                                        ord_nro: $('#ord_nro').val()
                                        //ord_det_nro: $('#ord_det_nro').val()
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
            })
          }
        //});

  //el fin del function(client)
 }        //}
});


