$(document).ready(function(){
  var client = ZAFClient.init();

  client.on('app.registered', function() {
  client.invoke('resize', { width: '300px', height: '400px' });
  ViewData();
});

function ViewData(qwerty){
   $( "#ConsultaGuiSI" ).unbind( "click" ).click(function (){
    $("#ta").html('<table class="table">  <tr>    <td>Empresa</td>    <td id = "t0"></td>  </tr>  <tr>    <td>MftoAnio</td>    <td id = "t1"></td>  </tr>  <tr>  <td>MftoNro</td><td id = "t2"></td></tr>  <tr>    <td>Producto</td> <td id = "t3"></td> </tr>  <tr><td>Sucursal</td><td id = "t4"></td></tr>  <tr><td>Udn</td>    <td id = "t5"></td>  </tr>  <tr>    <td>gAnio</td>    <td id = "t6"></td>  </tr>  <tr>    <td>gGuia</td>    <td id = "t7"></td>  </tr>  <tr>    <td>gNro</td>    <td id = "t8"></td>  </tr> </table>');
      //$("#like").change(function(){
        //if (this.checked == true){
     //9272-10
     //602380800
      // if ($("#like")[1].checked==true){
        if ($("#like").is(":checked")==true){
        var checkBox = document.getElementById("ConsultaGuiSI");
             $.ajax({
              "url": 'http://200.37.50.60/Servicios/WS/b2bScharffZen/Consulta/GuiaSN',
              "dataType": 'json',
               "async": true,
              "method": 'POST',
              "data": {
                        "nroGuia" : $('#datos').val()
                      },
              success:function(result){
                    console.log(result)
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
              },
              error: function (XMLHttpRequest, textStatus, errorThrown) {
                //Process error actions
                ///alert('Error: ' + errorThrown);
                console.log('Consulta:' + XMLHttpRequest.status + ' ' +
                XMLHttpRequest.statusText);
                return false;
              }
          });     
     }else{
        
        var checkBox = document.getElementById("ConsultaGuiSI");
        console.log("entro al id likedasdasda");  
        $.ajax({
              "url": 'http://200.37.50.60/Servicios/WS/b2bScharffZen/Consulta/GuiaSI',
              "dataType": 'json',
               "async": true,
              "method": 'POST',
              "data": {
                        "nroGuia" : $('#datos').val()
                      },
              success:function(result){
                    console.log(result)
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
              },
              error: function (XMLHttpRequest, textStatus, errorThrown) {
                //Process error actions
                ///alert('Error: ' + errorThrown);
                console.log('Consulta:' + XMLHttpRequest.status + ' ' +
                XMLHttpRequest.statusText);
                return false;
              }
          });       
      } 
   });
}

 
          //}
});

