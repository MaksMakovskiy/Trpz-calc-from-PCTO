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

areaButton.addEventListener("click", async function () {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var height = parseInt(document.getElementById("height").value);
    if (isNaN(min)) { min = 0; }
    if (isNaN(max)) { max = 0; }
    if (isNaN(height)) { height = 0; }
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
        widget.style.visibility = "visible";
        widget.innerHTML = "Area: " + json.area;
    }

});

tipoButton.addEventListener("click", async function () {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var height = parseInt(document.getElementById("height").value);
    if (isNaN(min)) { min = 0; }
    if (isNaN(max)) { max = 0; }
    if (isNaN(height)) { height = 0; }
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
        widget.style.visibility = "visible";
        widget.innerHTML = "Tipo: " + json.type;
    }

});

perimetroButton.addEventListener("click", async function () {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var height = parseInt(document.getElementById("height").value);
    if (isNaN(min)) { min = 0; }
    if (isNaN(max)) { max = 0; }
    if (isNaN(height)) { height = 0; }
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
        widget.style.visibility = "visible";
        widget.innerHTML = "Perimetro: " + json.perimetro;
    }


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