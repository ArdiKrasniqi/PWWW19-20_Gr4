if (getSession('token') || getCookie('token')) {
    document.getElementById("login").href = 'logout.html'
    document.getElementById("login").innerHTML = 'LOGOUT'
}
var index = 0;
var indexText = 0;
slider();
sliderText();
function slider() {
    var img = ["images/chevron-left-b.png", "images/960x450.png", "images/chevron-right-b.png"];
    var sliderTitle = ["Aliquatjusto quisque one",
        "Aliquatjusto quisque two",
        "Aliquatjusto quisque three"
    ];
    var sliderText = ["Left ipsum dolor sit amet, consectetur adipisicing elit.Distinctio quidem pariatur architecto inventore sint consequuntur earum beatae voluptate unde left.",
        "Center ipsum dolor sit amet, consectetur adipisicing elit.Distinctio quidem pariatur architecto inventore sint consequuntur earum beatae voluptate unde center.",
        "Right ipsum dolor sit amet, consectetur adipisicing elit.Distinctio quidem pariatur architecto inventore sint consequuntur earum beatae voluptate unde right."
    ];
    document.getElementById("rightSide").innerHTML = '<img class="rightImg" src="' + img[index] + '"alt="" />'
    document.getElementById("sliderTitle").innerHTML = sliderTitle[index];
    document.getElementById("sliderText").innerHTML = sliderText[index];
}

function sliderText() {
    var centerText = ["Left ipsum dolor sit amet, consectetur adipisicing elit.Distinctio quidem pariatur architecto inventore sint consequuntur earum beatae voluptate unde left.",
        "Center ipsum dolor sit amet, consectetur adipisicing elit.Distinctio quidem pariatur architecto inventore sint consequuntur earum beatae voluptate unde center.",
        "Right ipsum dolor sit amet, consectetur adipisicing elit.Distinctio quidem pariatur architecto inventore sint consequuntur earum beatae voluptate unde right."
    ];
    document.getElementById("centerText").innerHTML = '<q>' + centerText[indexText] + '</q>'
}

function next() {
    event.preventDefault();
    index = (index + 1) % 3;
    slider();
}

function previous() {
    event.preventDefault();
    index = (index - 1) % 3;
    if (index < 0) {
        index += 3
    }
    slider();
}

function nextText() {
    indexText = (indexText + 1) % 3;
    sliderText();
}

function previousText() {
    indexText = (indexText - 1) % 3;
    if (indexText < 0) {
        indexText += 3
    }
    sliderText();
}
