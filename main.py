from flask import Flask, render_template
from flask_bootstrap import Bootstrap
# from flask import redirect, url_for
# from flask_wtf import FlaskForm
# from wtforms import StringField, SubmitField, SelectField
# from wtforms.validators import DataRequired, URL
# import csv

# Deploy with the command: git push heroku master


app = Flask(__name__)
app.config['SECRET_KEY'] = "8BYkEfBA6O6donzWlSihBXox7C0sKR6b"
Bootstrap(app)


# all Flask routes below
@app.route("/")
def home():
    return render_template("index.html")


@app.route('/projects')
def projects():
    return render_template('projects.html')


@app.route('/medical-system')
def medical_system():
    return render_template('medical_system.html')


@app.route('/ct-simulation')
def ct_simulation():
    return render_template('ct_simulation.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/secret')
def secret():
    return render_template('secret.html')


if __name__ == '__main__':
    app.run(debug=True)
