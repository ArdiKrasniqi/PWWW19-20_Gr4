var i = 0;

function evenCount() {
    i = i + 1;
    if (i % 2 == 0)
        postMessage(i);
    setTimeout("evenCount()", 500);
}

evenCount();