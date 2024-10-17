from flask import Flask
import json


# JSON Content
with open('content.json', 'r') as file:
    data = json.load(file)

print(data)


app = Flask(__name__)

# Members API route
@app.route("/projects")
def projects():
    return data


if __name__ == "__main__":
    app.run(debug=True)
