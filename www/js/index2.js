//true disponivel
//false indisponivel

window.onload = function (){
    //alert("o");
     carregarPoltronas();
     //carregarPoltronasSpan();
    
    document.getElementsByTagName("img")[0].onclick = function() { verificarStatus(0); }
    
    var imagens = document.getElementsByTagName("img");
    for(var i=0; i<imagens.length; i++){
        imagens[i].onclick =  verificarStatus(i);
    }
}


var poltronas =  [false, true, false, true , true , true , false, true , false ];


function verificarStatus(poltronas){
    return function(){
        var src = document.getElementsByTagName("img")[poltronas].src
        var msg = "";
        if(src.indexOf("laranja") > 0){
            msg = "Poltrona Disponivel";   
        }else if(src.indexOf("vermelho") > 0){
             msg = "Poltrona Indisponivel"; 
        }else{
             msg = "está poltrona é Sua "; 
        }
        alert(msg);     
    }
      
}

function carregarPoltronas() {
                                  
  var imagens = document.getElementsByTagName("img");
  for(var i=0; i<imagens.length; i++){
    if(poltronas[i]){
        imagens[i].src = "img/laranja.png";
    } else{
        imagens[i].src = "img/vermelho.png";
    }
               
  }
}

function selecionarPoltronas(){
    var imagens = document.getElementsByTagName("img");
    for(var i=0; i<poltronas.length; i++){
        if(poltronas[i]){
               imagens[i].src = "img/verde.png";
                var quer = confirm("Você quer esta Poltrona?");
                if(quer){
                   break; 
                }else {
                    imagens[i].src = "img/laranja.png";   
                }
            
        }
    }
}


function selecionarCasais(){
    var imagens = document.getElementsByTagName("img");
    for(var i=0; i<poltronas.length; i++){
        if(poltronas[i] && poltronas[i+1]){
               imagens[i].src = "img/verde.png";
               imagens[i+1].src = "img/verde.png";
                var quer = confirm("Você quer estas Poltrona?");
                if(quer){
                   break; 
                }else {
                    imagens[i].src = "img/laranja.png"; 
                    imagens[i+1].src = "img/laranja.png";
                }
            
        }
    }
}


         
