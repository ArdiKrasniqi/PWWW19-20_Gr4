var doc1 = document.getElementById("leftUpperDiv");
var doc2 = document.getElementById("rightUpperDiv");
var doc3 = document.getElementById("leftLowerDiv");
var doc4 = document.getElementById("rightLowerDiv");

var vargu = new Array(doc1, doc2, doc3, doc4);

function fillimi() {

    trubulloTekstin();

    levizPlanetin();

    //window.addEventListener("load",sipasOres());   
    // window.addEventListener("load",sipasOres2()); 
    sipasOres2();


}

function trubulloTekstin() {

    doc1.onmouseover = function () {
        doc2.setAttribute("style", "filter:blur(5px)");
        doc3.setAttribute("style", "filter:blur(5px)");
        doc4.setAttribute("style", "filter:blur(5px)");
    }

    doc2.onmouseover = function () {
        doc1.setAttribute("style", "filter:blur(5px)");
        doc3.setAttribute("style", "filter:blur(5px)");
        doc4.setAttribute("style", "filter:blur(5px)");
    }

    doc3.onmouseover = function () {
        doc1.setAttribute("style", "filter:blur(5px)");
        doc2.setAttribute("style", "filter:blur(5px)");
        doc4.setAttribute("style", "filter:blur(5px)");
    }

    doc4.onmouseover = function () {
        doc1.setAttribute("style", "filter:blur(5px)");
        doc2.setAttribute("style", "filter:blur(5px)");
        doc3.setAttribute("style", "filter:blur(5px)");
    }

    doc1.onmouseleave = function () {
        doc2.setAttribute("style", "filter:none");
        doc3.setAttribute("style", "filter:none");
        doc4.setAttribute("style", "filter:none");
    }

    doc2.onmouseleave = function () {
        doc1.setAttribute("style", "filter:none");
        doc3.setAttribute("style", "filter:none");
        doc4.setAttribute("style", "filter:none");
    }

    doc3.onmouseleave = function () {
        doc1.setAttribute("style", "filter:none");
        doc2.setAttribute("style", "filter:none");
        doc4.setAttribute("style", "filter:none");
    }

    doc4.onmouseleave = function () {
        doc1.setAttribute("style", "filter:none");
        doc2.setAttribute("style", "filter:none");
        doc3.setAttribute("style", "filter:none");
    }

}
var ora = new Date().getHours();

function levizPlanetin() {
    var planeti = document.getElementById("planet");
    if (ora > 18 || ora < 6)
        planeti.setAttribute("src", "images/moon.png");
    else
        planeti.setAttribute("src", "images/sun.png");
    var deg = Math.pow(-60, Math.abs((Math.floor(ora / 6) - 1) % 2)) - (ora % 6) / 6 * 60;
    planeti.style.transform = "rotate(" + deg + "deg)";

}
function sipasOres() {
    var rez = "blue";
    if (ora < 6 || ora > 22)
        rez = "darkblue";
    else {
        if (ora > 6 && ora < 14)
            rez = "skyblue";
        else
            rez = "darkorange";
    }
    var trupi = document.getElementById("bdy");
    trupi.style.backgroundColor = rez;
}

function sipasOres2() {
    var trupi = document.getElementById("bdy");
    var x = (-Math.abs(ora - 12) + 12) / 12;
    var difR = 40 + 90 * x;
    var difG = 50 + 130 * x;
    var difB = 60 + 140 * x;
    var rez = "rgb(" + difR + "," + difG + "," + difB + ")";
    //alert(rez);
    trupi.style.backgroundColor = rez;

}

// function trubulloTekstin(a,vargu){
//     for(var i = 0;i<4;i++)
//         if(a.id!=vargu[i].id)   
//             vargu[i].setAttribute("style","filter:blur(5px)");
// }
// function kthjelloTekstin(a,vargu){
//     for(var i = 0;i<vargu.length;i++)
//          if(a.id!=vargu[i].id)   
//             vargu[i].setAttribute("style","filter:none");
// }

window.addEventListener("load", fillimi);
