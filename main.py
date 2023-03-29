from flask import Flask, render_template

app = Flask(__name__, static_folder="static")


@app.get("/")
def main():
    return render_template("base.html.jinja")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
