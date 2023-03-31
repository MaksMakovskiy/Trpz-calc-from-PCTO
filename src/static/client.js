var svuotaButton = document.getElementById("svuota");
var areaButton = document.getElementById("area");
var tipoButton = document.getElementById("tipo");
var perimetroButton = document.getElementById("perimetro");
var tipo_getButton = document.getElementById("tipo_get");

var minInput = document.getElementById("min");
var maxInput = document.getElementById("max");
var heightInput = document.getElementById("height");

var video = document.getElementById("background-video")
const videoSource = document.getElementById("video-source");


svuotaButton.addEventListener('click', function () {
    var form = document.getElementById("form1");
    form.reset();
    videoSource.src = "static/video.mp4";
    video.load();
    video.play();
    widget.style.visibility = "hidden";
    widget.innerHTML = "";
});



function ChangeVideo(type) {
    if (type == "Non poso calcolare") {
        videoSource.src = "static/error-video.mp4";
        video.load();
        video.play();
    }
}



tipo_getButton.addEventListener("click", async function () {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var height = parseInt(document.getElementById("height").value);
    if (isNaN(min)) { min = -1; }
    if (isNaN(max)) { max = -1; }
    if (isNaN(height)) { height = -1; }
    const response = await fetch(("/?min=" + min + "&max=" + max + "&height=" + height), {
        method: "GET",
        headers: {
            'trans': "type",
            'Content-Type': 'application/json'
        },
    });


    if (response.ok == true) {
        const json = await response.json();
        ChangeVideo(json.type);
        widget.style.visibility = "visible";
        widget.innerHTML = "Tipo: " + json.type;
    }

});

areaButton.addEventListener("click", async function () {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var height = parseInt(document.getElementById("height").value);
    if (isNaN(min)) { min = -1; }
    if (isNaN(max)) { max = -1; }
    if (isNaN(height)) { height = -1; }
    const response = await fetch('/', {
        method: 'POST',
        headers: {
            'trans': "area",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ min: min, max: max, height: height })
    });

    if (response.ok == true) {
        const json = await response.json();
        ChangeVideo(json.area);
        widget.style.visibility = "visible";
        widget.innerHTML = "Area: " + json.area;
    }

});

tipoButton.addEventListener("click", async function () {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var height = parseInt(document.getElementById("height").value);
    if (isNaN(min)) { min = -1; }
    if (isNaN(max)) { max = -1; }
    if (isNaN(height)) { height = -1; }
    const response = await fetch('/', {
        method: 'POST',
        headers: {
            'trans': "type",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ min: min, max: max, height: height })
    });

    if (response.ok == true) {
        const json = await response.json();
        ChangeVideo(json.type);
        widget.style.visibility = "visible";
        widget.innerHTML = "Tipo: " + json.type;
    }

});

perimetroButton.addEventListener("click", async function () {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var height = parseInt(document.getElementById("height").value);
    if (isNaN(min)) { min = -1; }
    if (isNaN(max)) { max = -1; }
    if (isNaN(height)) { height = -1; }
    const response = await fetch('/', {
        method: 'POST',
        headers: {
            'trans': "perimetro",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ min: min, max: max, height: height })
    });

    if (response.ok == true) {
        const json = await response.json();
        ChangeVideo(json.perimetro);
        widget.style.visibility = "visible";
        widget.innerHTML = "Perimetro: " + json.perimetro;
    }


});

minInput.oninput = function () {
    if (this.value < 1) {
        this.value = 1;
    }
}

maxInput.oninput = function () {
    if (this.value < 1) {
        this.value = 1;
    }
}

heightInput.oninput = function () {
    if (this.value < 1) {
        this.value = 1;
    }
}