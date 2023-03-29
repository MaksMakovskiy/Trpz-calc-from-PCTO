var svuotaButton = document.getElementById("svuota");
var areaButton = document.getElementById("area");
var tipoButton = document.getElementById("tipo");
var perimetroButton = document.getElementById("perimetro");

var minInput = document.getElementById("min");
var maxInput = document.getElementById("max");
var heightInput = document.getElementById("height");



svuotaButton.addEventListener('click', function () {
    var form = document.getElementById("form1");
    form.reset();
    widget.style.visibility = "hidden";
    widget.innerHTML = "";
});

areaButton.addEventListener("click", function () {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var height = parseInt(document.getElementById("height").value);
    var area = (max + min) * height * 0.5;
    widget.style.display = "block";
    widget.style.visibility = "visible";
    if (isNaN(area)) {
        area = "Non poso calcolare";
    }

    widget.innerHTML = "Area: " + area;
});

tipoButton.addEventListener("click", function () {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var height = parseInt(document.getElementById("height").value);
    var type = "";
    if (isNaN(max) || isNaN(min) || isNaN(height)) {
        type = "Non poso calcolare";
    } else {
        if (min == max && max == height) {
            type = "square";
        } else if (min == height || max == height) {
            type = "rettangolo";

        } else {
            type = "Trapezio";
        }
    }
    widget.style.display = "block";
    widget.style.visibility = "visible";

    widget.innerHTML = "Tipo: " + type;
});

perimetroButton.addEventListener("click", function () {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var height = parseInt(document.getElementById("height").value);
    var perimetro = min + max + 2 * Math.sqrt(height * height + (max - min) * (max - min));
    widget.style.display = "block";
    widget.style.visibility = "visible";
    if (isNaN(perimetro)) {
        perimetro = "Non poso calcolare";
    }

    widget.innerHTML = "Perimetro: " + perimetro;
});

minInput.oninput = function () {
    if (this.value < 0) {
        this.value = 0;
    }
}

maxInput.oninput = function () {
    if (this.value < 0) {
        this.value = 0;
    }
}

heightInput.oninput = function () {
    if (this.value < 0) {
        this.value = 0;
    }
}