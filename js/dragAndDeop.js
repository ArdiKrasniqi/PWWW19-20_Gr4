document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
    event.target.style.opacity = "0.4";
});

document.addEventListener("dragend", function(event) {

    event.target.style.opacity = "1";
});

document.addEventListener("dragenter", function(event) {
    if (event.target.className == "droptarget") {
        event.target.style.border = "2px dashed blue";
    }
});

document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.addEventListener("dragleave", function(event) {
    if (event.target.className == "droptarget") {
        event.target.style.border = "";
    }
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    if (event.target.className == "droptarget") {
        event.target.style.border = "";
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    }
});