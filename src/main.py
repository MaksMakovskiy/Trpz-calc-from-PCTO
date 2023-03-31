from flask import Flask, render_template, request, jsonify

app = Flask(__name__, static_folder="static")


@app.route("/", methods=["GET", "POST"])
def main_post():
    if request.method.lower() == "get":
        if "Trans" in request.headers.keys():
            tp = request.headers["Trans"]
            min_s = int(request.args.get("min"))
            max_s = int(request.args.get("max"))
            height_s = int(request.args.get("height"))
        else:
            return render_template("base.html.jinja")
    elif request.method.lower() == "post":
        tp = request.headers["trans"]
        min_s = request.json["min"]
        max_s = request.json["max"]
        height_s = request.json["height"]
    if min_s == -1 or max_s == -1 or height_s == -1:
        return jsonify(
            type="Non poso calcolare",
            perimetro="Non poso calcolare",
            area="Non poso calcolare",
        )

    if tp == "area":
        return jsonify(
            area=((min_s + max_s) * height_s * 0.5),
        )
    elif tp == "type":
        if min_s == 0 or max_s == 0 or height_s == 0:
            type = "Non poso calcolare"
        else:
            type = (
                "Square" if min_s == max_s and min_s == height_s else "Trapezio"  # noqa
            )
            type = (
                "Rettangolo"
                if type != "Square" and (min_s == height_s or max_s == height_s)  # noqa
                else type
            )
        return jsonify(type=type)
    elif tp == "perimetro":
        return jsonify(
            perimetro=(
                min_s
                + max_s
                + 2 * ((height_s**2 + ((min_s - max_s) / 2) ** 2) ** 0.5)
            )
        )
    return None


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
