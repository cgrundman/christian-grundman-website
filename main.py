# import os
# from flask import Flask, render_template, send_from_directory
import pandas as pd
from flask_bootstrap import Bootstrap
from datetime import datetime
from flask import Flask, render_template, request
from forms import ContactForm
# from wtforms.validators import DataRequired, URL
# import csv

# Deploy with the command: git push heroku master


app = Flask(__name__)
app.config['SECRET_KEY'] = "8BYkEfBA6O6donzWlSihBXox7C0sKR6b"
Bootstrap(app)

# Current year for Footer
current_year = datetime.now().year


# all Flask routes below
@app.route("/")
def home():
    return render_template("index.html", current_year=current_year)


@app.route('/projects')
def projects():
    return render_template('projects.html')


@app.route('/medical-system')
def medical_system():
    return render_template('medical_system.html')


@app.route('/ct-simulation')
def ct_simulation():
    return render_template('ct_simulation.html')


@app.route('/morse-code')
def morse_code():
    return render_template('morse_code.html')


@app.route('/computer-vision')
def computer_vision():
    return render_template('computer_vision.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/contact-me', methods=["GET", "POST"])
def contact_me():
    form = ContactForm()
    # here, if the request type is a POST we get the data on contact
    # forms and save them else we return the contact forms html page
    if request.method == 'POST':
        name = request.form["name"]
        email = request.form["email"]
        subject = request.form["subject"]
        message = request.form["message"]
        res = pd.DataFrame({'name': name, 'email': email, 'subject': subject, 'message': message}, index=[0])
        res.to_csv('./contactusMessage.csv')
        print("The data are saved !")
    else:
        return render_template('contact_me.html', form=form)


@app.route('/secret')
def secret():
    return render_template('secret.html')


if __name__ == '__main__':
    app.run(debug=True)
