from flask import Flask, request
import json
from config import db 

#GlobalVariables 
items = []
#
app = Flask(__name__)

@app.get("/")
def home():
    return "Hello from Flask"

@app.get("/test")
def test():
    return "Hello from test page"

@app.get("/api/about")
def about():
    me = {"name":"Adrian RA"}
    return json.dumps(me)

products = []

def fix_id(obj):
    obj["_id"] = str(obj["_id"])
    return obj

@app.post("/api/products")
def saveProducts(): 
    newItem=request.get_json()
    print (newItem)
    db.products.insert_one(newItem)
    #mock the save 
    return json.dumps(fix_id(newItem))

@app.get("/api/products")
def getProduct():
    return json.dumps(items)

app.run(debug = True)



