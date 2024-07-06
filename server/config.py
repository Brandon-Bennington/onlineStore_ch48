import pymongo
import certifi

con_str="mongodb+srv://brandonb:Kobe24@personalprojects.sp6bgin.mongodb.net/?retryWrites=true&w=majority&appName=personalprojects"
client = pymongo.MongoClient(con_str, tlsCAFile=certifi.where())
db = client.get_database("project1")