from flask import Flask, render_template, request, jsonify

app = Flask(__name__, static_folder="static")


@app.get("/")
def main():
    return render_template("base.html.jinja")


@app.post("/")
def main_post():
    if request.headers["trans"] == "area":
        return jsonify(
            area=(
                (request.json["min"] + request.json["max"])
                * request.json["height"]
                * 0.5
            ),
        )
    elif request.headers["trans"] == "type":
        if (
            request.json["min"] == 0
            or request.json["max"] == 0
            or request.json["height"] == 0
        ):
            type = "Non poso calcolare"
        else:
            type = (
                "Square"
                if request.json["min"] == request.json["max"]
                and request.json["min"] == request.json["height"]
                else "Trapezio"
            )
            type = (
                "Rettangolo"
                if type != "Square"
                and (
                    request.json["min"] == request.json["height"]
                    or request.json["max"] == request.json["height"]
                )
                else type
            )
        return jsonify(type=type)
    elif request.headers["trans"] == "perimetro":
        return jsonify(
            perimetro=(
                request.json["min"]
                + request.json["max"]
                + 2
                * (
                    (
                        request.json["height"] * request.json["height"]
                        + (request.json["max"] - request.json["min"])
                        * (request.json["max"] - request.json["min"])
                    )
                    * 0.5
                )
            )
        )


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
