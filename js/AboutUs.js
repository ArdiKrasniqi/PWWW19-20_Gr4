function fillimi(){
    var doc1 = document.getElementById("leftUpperDiv");
    var doc2 = document.getElementById("rightUpperDiv");
    var doc3 = document.getElementById("leftLowerDiv");
    var doc4 = document.getElementById("rightLowerDiv");

    var vargu = {doc1,doc2,doc3,doc4};

    for(var i = 0;i<vargu.length;i++)
        vargu[i].addEventListener(onmousedown,vargu[i], trubulloTekstin(vargu[i],vargu));

    window.addEventListener("load",sipasOres());    
    
        
}
function sipasOres(){
    var rez = "blue";
    var ora = new Date().getHours();
    if(ora<6||ora>22)
     rez="darkblue";
    else {
        if(ora>6&&ora<14)
         rez="skyblue";
        else
         rez="darkorange";
    }
    var trupi = document.getElementById("bdy");
    trupi.style.backgroundColor=rez;
}

function trubulloTekstin(a,vargu){
    for(var i = 0;i<vargu.length;i++)
        if(vargu[i]!=a)
            vargu[i].style.filter.blur="5px";
}

    window.addEventListener("load",fillimi);
        