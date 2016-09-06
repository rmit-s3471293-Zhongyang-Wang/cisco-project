from flask import Flask,url_for, render_template

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/login')
def login():pass

@app.route('/user/<username>')
def profile():pass

with app.test_request_context():
	print url_for('index')
	print url_for('login')
	print url_for('login', next='/')
	print url_for('profile', username='John Doe')