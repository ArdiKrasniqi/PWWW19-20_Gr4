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
    window.addEventListener("load",sipasOres());