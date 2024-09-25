from flask_wtf import FlaskForm
from wtforms import StringField, EmailField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, length, Email


class ContactForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired(), length(min=3, max=20)])
    email = EmailField("Email", validators=[DataRequired(), Email()])
    subject = StringField("Subject", validators=[DataRequired(), length(min=3, max=20)])
    message = TextAreaField("Message", validators=[DataRequired(), length(min=3, max=1000)])
    submit = SubmitField("Submit")
