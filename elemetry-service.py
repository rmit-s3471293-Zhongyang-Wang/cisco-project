from flask import Flask, jsonify,render_template,request
import json

app = Flask(__name__)

@app.route('/policy-groups')
def getPolicyGroup():
	groups = [
	{"name":"POL1","collector":"COL1","policy":"policy1"},
	{"name":"POL2","collector":"COL2","policy":"policy2"},
	{"name":"POL3","collector":"COL3","policy":"policy3"},
	{"name":"POL4","collector":"COL4","policy":"policy4"},
	];
	return json.dumps(groups)