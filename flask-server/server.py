from flask import Flask
import json

# JSON Content
with open('content.json', 'r') as file:
    data = json.load(file)

app = Flask(__name__)

# Members API route
@app.route("/members")
def members():
    return data


if __name__ == "__main__":
    app.run(debug=True)
