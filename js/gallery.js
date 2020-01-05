let penda = document.getElementById("kanvas").getContext("2d");
let butoniDjathtas = document.getElementById("butoniDjathtas");
let butoniMajtas = document.getElementById("butoniMajtas");
let butoniLarte = document.getElementById("butoniLarte");
let butoniPoshte = document.getElementById("butoniPoshte");


const Lojtari = function (emri, ngjyra, penda) {
    this.emri = emri;
    this.ngjyra = ngjyra;
    this.xPos = 0;
    this.yPos = 230;
    this.m = 25;
    this.penda = penda;

}

Lojtari.prototype.vizato = function () {
    let penda = this.penda;
    const vParaprake = penda.fillStyle;
    penda.fillStyle = this.ngjyra;
    penda.fillRect(this.xPos, this.yPos, this.m, this.m);
    penda.fillStyle = vParaprake;
}

Lojtari.prototype.levize = function (drejtimi) {

    if (drejtimi == "djathtas" && this.xPos + this.m + 10 < 256)
        this.xPos += 10;
    else {
        if (drejtimi == "majtas" && this.xPos - 10 > -10)
            this.xPos -= 10;
        else {
            if (drejtimi == "larte" && this.yPos - 10 > -10)
                this.yPos -= 10;
            else
                if (drejtimi == "poshte" && this.yPos + this.m + 10 < 256)
                    this.yPos += 10;
        }
    }

}

const Kubat = function (madhesia, x, y) {
    this.m = madhesia;
    this.x = x;
    this.y = y;
}
Kubat.prototype.vizato = function (penda) {
    penda.fillStyle = "yellow";
    penda.fillRect(this.x, this.y, this.m, this.m);
}
Kubat.prototype.kaGoditje = function (xPos, yPos) {
    let ans = false;

    if (Math.abs(xPos - this.x) < this.m)
        if (Math.abs(yPos - this.y) < this.m)
            ans = true;

    return ans;
}

Kubat.prototype.levize = function (drejtimi) {
    if (drejtimi == "djathtas")
        this.x += 10;
    else {
        if (drejtimi == "majtas") { this.x -= 10; }
        else {
            if (drejtimi == "larte")
                this.y -= 10;
            else
                if (drejtimi == "poshte")
                    this.y += 10;
        }
    }

    this.vizato(penda);
}


const Kontrolleri = function (gjeresia, gjatesia) {
    this.gjeresia = gjeresia;
    this.gjatesia = gjatesia;
    this.lojtari = new Lojtari("filon", "red", penda);
    let mund = [0, 230];
    const k1 = new Kubat(25, Math.random() * 230, Math.random() * 230);
    const k2 = new Kubat(25, Math.random() * 230, Math.random() * 230);
    const k3 = new Kubat(25, Math.random() * 230, Math.random() * 230);
    const k4 = new Kubat(25, Math.random() * 230, Math.random() * 230);
    const k5 = new Kubat(25, Math.random() * 230, Math.random() * 230);
    const k6 = new Kubat(25, Math.random() * 230, Math.random() * 230);
    const k7 = new Kubat(25, Math.random() * 230, Math.random() * 230);
    const k8 = new Kubat(25, Math.random() * 230, Math.random() * 230);
    const k9 = new Kubat(25, Math.random() * 230, Math.random() * 230);
    const k10 = new Kubat(25, Math.random() * 230, Math.random() * 230);

    this.vargu = [k1, k2, k3, k4, k5, k6, k7, k8, k9, k10];

}

Kontrolleri.prototype.fillo = function () {


    this.vizatoFushen();
    this.lojtari.vizato();

    for (let i = 0; i < this.vargu.length; i++) {
        this.vargu[i].vizato(penda);
    }
}


var img = new Image();
img.src = "./images/redflag.jpg";
img.onload = function () {
    penda.drawImage(img, 228, 2);
}
Kontrolleri.prototype.vizatoFushen = function () {
    var img = new Image();
    img.src = "./images/redflag.jpg";
    penda.fillStyle = "white";
    penda.fillRect(0, 0, this.gjeresia, this.gjatesia);
    penda.drawImage(img, 228, 2);
    penda.strokeStyle = "green";
    penda.strokeRect(0, 0, this.gjeresia, this.gjatesia);

}
Kontrolleri.prototype.perditeso = function (drejtimi) {

    this.vizatoFushen();

    for (let i = 0; i < this.vargu.length; i++) {
        this.vargu[i].vizato(penda);
    }
    this.lojtari.levize(drejtimi);

    let ans = false;
    for (let i = 0; i < this.vargu.length; i++) {
        if (this.vargu[i].kaGoditje(this.lojtari.xPos, this.lojtari.yPos))
            ans = true;
    }
    if (ans) {
        if (drejtimi == "majtas")
            drejtimi = "djathtas";
        else {
            if (drejtimi == "djathtas")
                drejtimi = "majtas";
            else {
                if (drejtimi == "larte")
                    drejtimi = "poshte";
                else
                    if (drejtimi == "poshte")
                        drejtimi == "larte";
            }
        }
        this.lojtari.levize(drejtimi);
        this.lojtari.vizato();
    }
    else {
        this.lojtari.levize(drejtimi);
        this.lojtari.vizato();
    }

    if (this.kontrolloFitoren()) {
        l = new Kontrolleri(255, 255);
        l.fillo();
    }


}





Kontrolleri.prototype.kontrolloFitoren = function () {

    if (this.lojtari.xPos >= 230 && this.lojtari.yPos <= 0) {
        alert("Fitove");
        return true;
    }
}


let l = new Kontrolleri(255, 255);

l.fillo();

butoniDjathtas.onclick = function () {
    l.perditeso("djathtas");
}
butoniMajtas.onclick = function () {
    l.perditeso("majtas");
}
butoniLarte.onclick = function () {
    l.perditeso("larte");
}
butoniPoshte.onclick = function () {
    l.perditeso("poshte");
}

window.addEventListener("keydown", event => {

    switch (event.keyCode) {
        case 37: l.perditeso("majtas"); break;
        case 38: l.perditeso("larte"); break;
        case 39: l.perditeso("djathtas"); break;
        case 40: l.perditeso("poshte"); break;
    }

})